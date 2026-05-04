/**
 * NeuralMesh — decorative animated background.
 * Renders a sparse network of dots connected by faint lines, with a slow
 * pulse on each node. Inspired by the circuit lines on the conference brain logo.
 *
 * Uses a deterministic seeded RNG so SSR and client agree on positions.
 * Pure SVG + CSS animation → no JS runtime cost, hot-pluggable into any section.
 */

type Props = {
  /** number of nodes (default 28) */
  density?: number;
  /** distance threshold for drawing a connecting line (in viewBox units) */
  linkDistance?: number;
  className?: string;
};

// Seeded mulberry32 PRNG — gives stable layout between server and client renders.
function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function NeuralMesh({
  density = 28,
  linkDistance = 220,
  className = "",
}: Props) {
  const W = 1200;
  const H = 800;
  const random = rng(42); // deterministic — seed is arbitrary but fixed

  // Generate node positions, biased away from the dead center to feel "ambient"
  const nodes = Array.from({ length: density }, (_, i) => ({
    id: i,
    x: random() * W,
    y: random() * H,
    r: 1.5 + random() * 2.5,
    delay: random() * 4,
  }));

  // Generate edges between near-by nodes
  const edges: { a: number; b: number; opacity: number }[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const d = Math.hypot(dx, dy);
      if (d < linkDistance) {
        edges.push({ a: i, b: j, opacity: 0.5 * (1 - d / linkDistance) });
      }
    }
  }

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

      {/* Connection lines */}
      <g stroke="url(#wireGrad)" strokeWidth="0.7" fill="none">
        {edges.map((e, idx) => (
          <line
            key={idx}
            x1={nodes[e.a].x}
            y1={nodes[e.a].y}
            x2={nodes[e.b].x}
            y2={nodes[e.b].y}
            opacity={e.opacity}
          />
        ))}
      </g>

      {/* Glowing halos behind nodes */}
      <g>
        {nodes.map((n) => (
          <circle
            key={`halo-${n.id}`}
            cx={n.x}
            cy={n.y}
            r={n.r * 7}
            fill="url(#nodeGlow)"
            className="pulse-glow"
            style={{ animationDelay: `${n.delay}s` }}
          />
        ))}
      </g>

      {/* Crisp node dots */}
      <g fill="oklch(90% 0.12 220)">
        {nodes.map((n) => (
          <circle
            key={`node-${n.id}`}
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
