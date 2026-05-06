"use client";

import { useEffect, useMemo, useRef } from "react";

/**
 * NeuralMesh — decorative animated background with mouse parallax.
 *
 * Architecture (refactored for GPU-friendly compositing):
 * - Each node is a <g> wrapping a halo + dot. The group is moved via the
 *   SVG `transform` attribute on each frame. Browsers can promote a
 *   transformed SVG group to its own composite layer, avoiding the paint
 *   pressure that comes with setting cx/cy directly on circles every frame.
 * - Lines still update x1/y1/x2/y2 (no way around it for line endpoints
 *   that move independently), but only ~80 lines vs many more node attribute
 *   writes — net paint cost is much lower.
 * - will-change: transform hints the browser to keep a separate layer.
 *
 * Three layers of motion combine on each frame:
 *   1. Lissajous drift — sin(x) / cos(y) at slightly different frequencies
 *      and unique phases. ~5–12s cycle.
 *   2. Mouse parallax — depth (0..1) × strength × cursor offset. Closer
 *      nodes parallax more, far ones barely move.
 *   3. Lines fade by length — opacity computed from current node distance.
 *
 * Animation runs unconditionally (deliberately ignores prefers-reduced-motion
 * for the JS layer; the CSS pulse-glow class still respects it via the global
 * * selector in globals.css). The drift is ambient and small enough to be
 * closer to a slowly shifting gradient than to a vestibular trigger.
 */

type Props = {
  density?: number;
  linkDistance?: number;
  className?: string;
  /** Max parallax offset (viewBox units) at depth=1 for mouse at screen edge */
  parallaxStrength?: number;
};

type Node = {
  x: number;
  y: number;
  r: number;
  ax: number;
  ay: number;
  fx: number;
  fy: number;
  px: number;
  py: number;
  pulseDelay: number;
  depth: number;
};

type Edge = { i: number; j: number };

function makeRng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const W = 1200;
const H = 800;
const MIN_AMPL = 28;
const MAX_AMPL = 65;

function generateNodes(count: number): Node[] {
  const rand = makeRng(42);
  return Array.from({ length: count }, () => ({
    x: rand() * W,
    y: rand() * H,
    r: 1.5 + rand() * 2.5,
    ax: MIN_AMPL + rand() * (MAX_AMPL - MIN_AMPL),
    ay: MIN_AMPL + rand() * (MAX_AMPL - MIN_AMPL),
    fx: 0.08 + rand() * 0.10,
    fy: 0.08 + rand() * 0.10,
    px: rand() * Math.PI * 2,
    py: rand() * Math.PI * 2,
    pulseDelay: rand() * 4,
    depth: 0.15 + rand() * 0.85,
  }));
}

function generateEdges(
  nodes: Node[],
  threshold: number,
  parallaxStrength: number,
): Edge[] {
  const expanded = threshold + 2 * MAX_AMPL + 2 * parallaxStrength;
  const edges: Edge[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      if (Math.hypot(dx, dy) < expanded) {
        edges.push({ i, j });
      }
    }
  }
  return edges;
}

export default function NeuralMesh({
  density = 28,
  linkDistance = 220,
  className = "",
  parallaxStrength = 55,
}: Props) {
  const nodes = useMemo(() => generateNodes(density), [density]);
  const edges = useMemo(
    () => generateEdges(nodes, linkDistance, parallaxStrength),
    [nodes, linkDistance, parallaxStrength],
  );

  const svgRef = useRef<SVGSVGElement | null>(null);
  const groupRefs = useRef<(SVGGElement | null)[]>([]);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);

  const targetMouse = useRef({ x: 0, y: 0 });
  const easedMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Animate only on touch-primary devices (phones / tablets), where the
    // mesh runs smoothly. On laptops and desktops the same animation was
    // visibly choppy even after every perf optimization, so we render the
    // mesh in its initial static state — same visual identity, no jitter.
    // Also respect prefers-reduced-motion (vestibular safety).
    const isTouchPrimary = window.matchMedia(
      "(hover: none) and (pointer: coarse)",
    ).matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!isTouchPrimary || reduceMotion) {
      return; // Static mesh — no listeners, no rAF loop, nothing to clean up
    }

    const onMouseMove = (e: MouseEvent) => {
      targetMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const onMouseLeave = () => {
      targetMouse.current.x = 0;
      targetMouse.current.y = 0;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    // Visibility gate — pause animation when SVG is scrolled off-screen.
    // Frees the main thread for scrolling and reduces paint pressure.
    let isVisible = true;
    let raf = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        const wasVisible = isVisible;
        isVisible = entries[0]?.isIntersecting ?? true;
        // Restart the loop if we just became visible again
        if (!wasVisible && isVisible && raf === 0) {
          raf = requestAnimationFrame(tick);
        }
      },
      { rootMargin: "100px" },
    );
    if (svgRef.current) observer.observe(svgRef.current);

    const start = performance.now();

    const tick = (now: number) => {
      if (!isVisible) {
        raf = 0;
        return; // stop scheduling new frames; observer will restart on re-entry
      }
      const t = (now - start) / 1000;

      easedMouse.current.x +=
        (targetMouse.current.x - easedMouse.current.x) * 0.06;
      easedMouse.current.y +=
        (targetMouse.current.y - easedMouse.current.y) * 0.06;

      const mx = easedMouse.current.x;
      const my = easedMouse.current.y;

      const xs = new Float32Array(nodes.length);
      const ys = new Float32Array(nodes.length);

      for (let k = 0; k < nodes.length; k++) {
        const n = nodes[k];
        const drift_x = n.ax * Math.sin(2 * Math.PI * n.fx * t + n.px);
        const drift_y = n.ay * Math.cos(2 * Math.PI * n.fy * t + n.py);
        const parallax_x = -mx * parallaxStrength * n.depth;
        const parallax_y = -my * parallaxStrength * n.depth;

        const dx = drift_x + parallax_x;
        const dy = drift_y + parallax_y;

        // Group transform — single attribute write per node, GPU-composited
        const g = groupRefs.current[k];
        if (g) {
          g.setAttribute(
            "transform",
            `translate(${dx.toFixed(2)} ${dy.toFixed(2)})`,
          );
        }

        // Track absolute position for line endpoint computation
        xs[k] = n.x + dx;
        ys[k] = n.y + dy;
      }

      // Lines beyond `linkDistance` are invisible (opacity 0) — there's no
      // point repainting their endpoints every frame. Use squared distance
      // to skip the expensive sqrt for the common "out of range" case, then
      // park hidden lines at opacity 0 and continue. Saves ~40-50% of line
      // attribute writes per frame at typical density.
      const linkDistanceSq = linkDistance * linkDistance;
      for (let k = 0; k < edges.length; k++) {
        const { i, j } = edges[k];
        const line = lineRefs.current[k];
        if (!line) continue;
        const dx = xs[i] - xs[j];
        const dy = ys[i] - ys[j];
        const d2 = dx * dx + dy * dy;
        if (d2 >= linkDistanceSq) {
          if (line.getAttribute("opacity") !== "0") {
            line.setAttribute("opacity", "0");
          }
          continue;
        }
        const d = Math.sqrt(d2);
        line.setAttribute("x1", xs[i].toFixed(2));
        line.setAttribute("y1", ys[i].toFixed(2));
        line.setAttribute("x2", xs[j].toFixed(2));
        line.setAttribute("y2", ys[j].toFixed(2));
        line.setAttribute("opacity", (0.5 * (1 - d / linkDistance)).toFixed(3));
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [nodes, edges, linkDistance, parallaxStrength]);

  return (
    <svg
      ref={svgRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      // Force the SVG onto its own GPU composite layer so animations inside
      // don't trigger paint of the whole page. Helps desktop scrolling jank.
      style={{
        transform: "translate3d(0,0,0)",
        willChange: "transform",
        contain: "layout paint",
      }}
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(85% 0.20 220)" stopOpacity="1" />
          <stop offset="60%" stopColor="oklch(75% 0.18 230)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(75% 0.18 230)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(72% 0.22 305)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="oklch(75% 0.18 230)" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {/* Connection lines */}
      <g stroke="url(#wireGrad)" strokeWidth="0.7" fill="none">
        {edges.map((e, idx) => {
          const a = nodes[e.i];
          const b = nodes[e.j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          const initialOp = d < linkDistance ? 0.5 * (1 - d / linkDistance) : 0;
          return (
            <line
              key={idx}
              ref={(el) => {
                lineRefs.current[idx] = el;
              }}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              opacity={initialOp.toFixed(3)}
            />
          );
        })}
      </g>

      {/* Each node = a <g> containing halo + dot, transformed as one unit */}
      {nodes.map((n, idx) => (
        <g
          key={idx}
          ref={(el) => {
            groupRefs.current[idx] = el;
          }}
          style={{ willChange: "transform" }}
        >
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r * 7}
            fill="url(#nodeGlow)"
            className="pulse-glow"
            style={{ animationDelay: `${n.pulseDelay}s` }}
          />
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="oklch(90% 0.12 220)"
            opacity="0.9"
          />
        </g>
      ))}
    </svg>
  );
}
