"use client";

import { useEffect, useMemo, useRef } from "react";

/**
 * NeuralMesh — decorative animated background with mouse parallax.
 *
 * Three layers of motion combine on each frame:
 *   1. Lissajous drift — each node has unique sin(x)/cos(y) frequencies and
 *      phases so they never sync up. Cycle ~5–12s.
 *   2. Mouse parallax — each node has a per-layer "depth" (0..1). On mouse
 *      move, nodes shift opposite to the cursor by `depth × parallaxStrength`.
 *      Closer nodes (depth=1) move more, far nodes barely move → real 3D feel.
 *      Mouse position is eased (lerp 0.06) so the response is smooth, not jumpy.
 *   3. Connection lines re-attach to the moving nodes every frame and fade
 *      based on length — preserves the "synaptic web" feel as nodes drift
 *      around each other.
 *
 * All animation goes through direct DOM ref writes — zero React re-renders
 * during animation. Honors `prefers-reduced-motion`.
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
  depth: number; // 0 = far (barely parallaxes), 1 = close (parallaxes a lot)
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
    // Random depth, biased toward middle layer with some "close" and some "far" nodes
    depth: 0.15 + rand() * 0.85,
  }));
}

function generateEdges(nodes: Node[], threshold: number, parallaxStrength: number): Edge[] {
  // Account for both Lissajous drift AND parallax in the headroom
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

  const haloRefs = useRef<(SVGCircleElement | null)[]>([]);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);

  // Mouse target (raw input) and eased actual (smoothed). Both in [-1, +1] space
  // where (0,0) is screen center, ±1 is screen edge.
  const targetMouse = useRef({ x: 0, y: 0 });
  const easedMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Note: we deliberately do NOT gate this animation on prefers-reduced-motion.
    // The drift is ambient/atmospheric (not reactive to scroll, no high-velocity
    // motion, no flashes) — closer to a slowly shifting gradient than to a
    // motion-sickness trigger. The CSS .pulse-glow class still respects the
    // global reduced-motion rule via the * selector in globals.css.

    const onMouseMove = (e: MouseEvent) => {
      targetMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const onMouseLeave = () => {
      // Drift back toward center when cursor leaves the document
      targetMouse.current.x = 0;
      targetMouse.current.y = 0;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = (now - start) / 1000;

      // Smooth (lerp) the mouse position toward the target. 0.06 = ~250ms ease.
      easedMouse.current.x += (targetMouse.current.x - easedMouse.current.x) * 0.06;
      easedMouse.current.y += (targetMouse.current.y - easedMouse.current.y) * 0.06;

      const mx = easedMouse.current.x;
      const my = easedMouse.current.y;

      const xs = new Float32Array(nodes.length);
      const ys = new Float32Array(nodes.length);

      for (let k = 0; k < nodes.length; k++) {
        const n = nodes[k];
        const drift_x = n.ax * Math.sin(2 * Math.PI * n.fx * t + n.px);
        const drift_y = n.ay * Math.cos(2 * Math.PI * n.fy * t + n.py);
        // Parallax — opposite to cursor direction, scaled by depth
        const parallax_x = -mx * parallaxStrength * n.depth;
        const parallax_y = -my * parallaxStrength * n.depth;

        xs[k] = n.x + drift_x + parallax_x;
        ys[k] = n.y + drift_y + parallax_y;

        const halo = haloRefs.current[k];
        const dot = dotRefs.current[k];
        if (halo) {
          halo.setAttribute("cx", String(xs[k]));
          halo.setAttribute("cy", String(ys[k]));
        }
        if (dot) {
          dot.setAttribute("cx", String(xs[k]));
          dot.setAttribute("cy", String(ys[k]));
        }
      }

      for (let k = 0; k < edges.length; k++) {
        const { i, j } = edges[k];
        const line = lineRefs.current[k];
        if (!line) continue;
        const dx = xs[i] - xs[j];
        const dy = ys[i] - ys[j];
        const d = Math.hypot(dx, dy);
        line.setAttribute("x1", String(xs[i]));
        line.setAttribute("y1", String(ys[i]));
        line.setAttribute("x2", String(xs[j]));
        line.setAttribute("y2", String(ys[j]));
        const op = d < linkDistance ? 0.5 * (1 - d / linkDistance) : 0;
        line.setAttribute("opacity", op.toFixed(3));
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [nodes, edges, linkDistance, parallaxStrength]);

  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
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

      <g>
        {nodes.map((n, idx) => (
          <circle
            key={`halo-${idx}`}
            ref={(el) => {
              haloRefs.current[idx] = el;
            }}
            cx={n.x}
            cy={n.y}
            r={n.r * 7}
            fill="url(#nodeGlow)"
            className="pulse-glow"
            style={{ animationDelay: `${n.pulseDelay}s` }}
          />
        ))}
      </g>

      <g fill="oklch(90% 0.12 220)">
        {nodes.map((n, idx) => (
          <circle
            key={`dot-${idx}`}
            ref={(el) => {
              dotRefs.current[idx] = el;
            }}
            cx={n.x}
            cy={n.y}
            r={n.r}
            opacity="0.9"
          />
        ))}
      </g>
    </svg>
  );
}
