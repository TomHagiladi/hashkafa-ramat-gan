/**
 * LineArtPeople — decorative line-art figures, inspired by the bottom edge of
 * the conference invitation poster. Custom-drawn SVG silhouettes anchor the hero
 * with a human presence and counterpoint to the abstract neural mesh.
 *
 * 7 distinct poses, drawn as single open paths so they read as "sketched"
 * rather than illustrated. Strokes inherit `currentColor` from parent.
 */

type Props = {
  className?: string;
  /** override stroke color via inline color; defaults to currentColor */
  color?: string;
};

export default function LineArtPeople({ className = "", color }: Props) {
  return (
    <svg
      viewBox="0 0 1400 220"
      className={className}
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
      focusable="false"
      style={color ? { color } : undefined}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      >
        {/* Person 1 — standing, hand at chin (thinking) */}
        <g transform="translate(80 30)">
          {/* head */}
          <circle cx="40" cy="22" r="14" />
          {/* hair detail */}
          <path d="M28 17 q12 -10 24 0" />
          {/* neck + body */}
          <path d="M40 36 v18 q-18 4 -22 30 v50 q0 18 8 28 l-4 30" />
          <path d="M40 54 q18 4 22 30 v50 q0 18 -8 28 l4 30" />
          {/* arm with hand at chin */}
          <path d="M22 70 q-14 -2 -16 -16 q4 -10 18 -8 q8 12 14 22" />
          {/* other arm */}
          <path d="M62 70 q14 14 12 32" />
        </g>

        {/* Person 2 — arm raised in greeting */}
        <g transform="translate(220 18)">
          <circle cx="40" cy="22" r="14" />
          <path d="M28 14 q14 -8 24 -1" />
          <path d="M40 36 v18 q-20 6 -22 32 v48 q-2 16 6 28 l-2 32" />
          <path d="M40 54 q20 6 22 32 v48 q2 16 -6 28 l2 32" />
          {/* raised arm */}
          <path d="M62 60 q22 -16 26 -36 q2 -8 -4 -10" />
          {/* hand */}
          <path d="M84 14 v-6 m-4 4 h8" />
          {/* other arm at side */}
          <path d="M22 64 q-10 16 -8 30 l-2 14" />
        </g>

        {/* Person 3 — walking pose, looking forward */}
        <g transform="translate(360 22)">
          <circle cx="40" cy="22" r="14" />
          <path d="M40 36 v18 q-22 6 -24 32 v48 q-2 14 4 28 l-4 32" />
          <path d="M40 54 q22 6 24 32 v48 q2 14 -4 28 l4 32" />
          {/* arms swinging */}
          <path d="M16 64 q-12 18 -10 36 q2 8 8 12" />
          <path d="M64 64 q14 -8 22 -16 l-6 22" />
        </g>

        {/* Person 4 — arms crossed, confident stance */}
        <g transform="translate(500 32)">
          <circle cx="40" cy="22" r="14" />
          <path d="M30 16 q10 -6 20 0" />
          <path d="M40 36 v16 q-22 4 -24 30 v50 q0 14 6 26 l-4 30" />
          <path d="M40 52 q22 4 24 30 v50 q0 14 -6 26 l4 30" />
          {/* crossed arms */}
          <path d="M18 60 q14 12 28 4 q14 8 28 -4" />
          <path d="M22 70 q12 14 24 4 q12 10 24 -4" />
        </g>

        {/* Person 5 — pointing forward */}
        <g transform="translate(640 26)">
          <circle cx="40" cy="22" r="14" />
          <path d="M28 16 q14 -10 24 -2 q4 4 0 8" />
          <path d="M40 36 v18 q-20 6 -22 32 v48 q0 16 6 28 l-4 30" />
          <path d="M40 54 q20 6 22 32 v48 q0 16 -6 28 l4 30" />
          {/* pointing arm */}
          <path d="M62 60 q22 4 38 -4" />
          <path d="M62 60 q14 18 14 34" />
          {/* finger detail */}
          <path d="M100 56 l8 0" />
        </g>

        {/* Person 6 — hands behind back */}
        <g transform="translate(800 30)">
          <circle cx="40" cy="22" r="14" />
          <path d="M30 14 q12 -8 22 0" />
          <path d="M40 36 v18 q-20 6 -22 32 v48 q0 16 6 28 l-4 30" />
          <path d="M40 54 q20 6 22 32 v48 q0 16 -6 28 l4 30" />
          {/* arms behind */}
          <path d="M18 70 q-6 14 4 28 l16 -2" />
          <path d="M62 70 q6 14 -4 28 l-16 -2" />
        </g>

        {/* Person 7 — slight wave, friendly */}
        <g transform="translate(940 22)">
          <circle cx="40" cy="22" r="14" />
          <path d="M40 36 v18 q-20 4 -22 30 v50 q0 14 6 28 l-4 32" />
          <path d="M40 54 q20 4 22 30 v50 q0 14 -6 28 l4 32" />
          {/* waving arm */}
          <path d="M62 58 q24 -8 26 -28 q-2 -8 -8 -8" />
          <path d="M76 22 v-6 m-3 3 h6" />
          <path d="M16 64 q-10 16 -8 30 l-2 14" />
        </g>

        {/* Person 8 — shorter figure (child or seated angle) */}
        <g transform="translate(1090 50)">
          <circle cx="36" cy="20" r="12" />
          <path d="M36 32 v14 q-16 4 -18 26 v40 q0 14 4 22 l-2 26" />
          <path d="M36 46 q16 4 18 26 v40 q0 14 -4 22 l2 26" />
          <path d="M18 56 q-12 14 -10 26" />
          <path d="M54 56 q12 14 10 26" />
        </g>

        {/* Person 9 — leaning slightly, expressive */}
        <g transform="translate(1220 30)">
          <circle cx="40" cy="22" r="14" />
          <path d="M28 16 q14 -8 24 0" />
          <path d="M40 36 v18 q-22 8 -22 32 v48 q-2 14 6 28 l-4 30" />
          <path d="M40 54 q20 6 22 30 v48 q2 14 -6 28 l4 30" />
          <path d="M18 64 q-14 12 -14 28 l4 18" />
          <path d="M62 64 q-2 14 -8 26" />
        </g>
      </g>
    </svg>
  );
}
