"use client";

import { useEffect, useMemo, useRef } from "react";

/**
 * NeuralMesh — decorative animated background.
 * Each node drifts independently in a slow Lissajous-style figure (sin on x,
 * cos on y at slightly different frequencies and unique phases). The connecting
 * lines re-attach to the moving nodes every frame and fade based on length, so
 * the "synaptic web" feels alive without anything jumping.
 *
 * Uses direct DOM ref writes — no React re-renders during animation. With ~32
 * nodes and ~80 lines this stays well under 1ms per frame on consumer laptops.
 *
 * Honors `prefers-reduced-motion`: positions stay frozen at t=0, lines static.
 */

type Props = {
  density?: number;
  linkDistance?: number;
  className?: string;
};

type Node = {
  x: number; // base x in viewBox units
  y: number; // base y
  r: number;
  ax: number; // drift amplitude x
  ay: number; // drift amplitude y
  fx: number; // drift frequency x (Hz)
  fy: number; // drift frequency y (Hz)
  px: number; // phase x (radians)
  py: number; // phase y (radians)
  pulseDelay: number;
};

type Edge = { i: number; j: number };

// Seeded mulberry32 PRNG — server and client agree on initial layout.
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
const MAX_AMPL = 65; // peak drift in viewBox units — visible but not chaotic

function generateNodes(count: number): Node[] {
  const rand = makeRng(42);
  return Array.from({ length: count }, () => ({
    x: rand() * W,
    y: rand() * H,
    r: 1.5 + rand() * 2.5,
    ax: MIN_AMPL + rand() * (MAX_AMPL - MIN_AMPL),
    ay: MIN_AMPL + rand() * (MAX_AMPL - MIN_AMPL),
    // 0.08–0.18 Hz → one drift cycle every ~5.5–12.5 seconds (perceivable)
    fx: 0.08 + rand() * 0.10,
    fy: 0.08 + rand() * 0.10,
    px: rand() * Math.PI * 2,
    py: rand() * Math.PI * 2,
    pulseDelay: rand() * 4,
  }));
}

// Build the edge list once at base positions, expanded slightly so edges
// that may become valid during drift are pre-allocated in the DOM.
function generateEdges(nodes: Node[], threshold: number): Edge[] {
  const expanded = threshold + 2 * MAX_AMPL;
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
}: Props) {
  // Keep nodes/edges stable across renders.
  const nodes = useMemo(() => generateNodes(density), [density]);
  const edges = useMemo(() => generateEdges(nodes, linkDistance), [nodes, linkDistance]);

  const haloRefs = useRef<(SVGCircleElement | null)[]>([]);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = (now - start) / 1000;

      // Compute current positions
      const xs = new Float32Array(nodes.length);
      const ys = new Float32Array(nodes.length);
      for (let k = 0; k < nodes.length; k++) {
        const n = nodes[k];
        xs[k] = n.x + n.ax * Math.sin(2 * Math.PI * n.fx * t + n.px);
        ys[k] = n.y + n.ay * Math.cos(2 * Math.PI * n.fy * t + n.py);
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

      // Update line endpoints + opacity based on current distance
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
        // Fade lines that stretch beyond the link threshold; keep close lines opaque
        const op = d < linkDistance ? 0.5 * (1 - d / linkDistance) : 0;
        line.setAttribute("opacity", op.toFixed(3));
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [nodes, edges, linkDistance]);

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

      {/* Connection lines — opacity computed per-frame */}
      <g stroke="url(#wireGrad)" strokeWidth="0.7" fill="none">
        {edges.map((e, idx) => {
          const a = nodes[e.i];
          const b = nodes[e.j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          const initialOp =
            d < linkDistance ? 0.5 * (1 - d / linkDistance) : 0;
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

      {/* Glowing halos behind nodes */}
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

      {/* Crisp node dots */}
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
