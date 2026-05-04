import Link from "next/link";
import Image from "next/image";
import type { School } from "@/data/schools";

const PLACEHOLDER_LOGO = "/partners/hashkafa.png";

function getLevelBadgeClass(level: string) {
  if (level === "יסודי") return "badge-elementary";
  if (level === "על יסודי") return "badge-secondary";
  return "badge-special";
}

function getLevelAccent(level: string) {
  if (level === "יסודי") return "from-synapse to-synapse/40";
  if (level === "על יסודי") return "from-circuit to-circuit/40";
  return "from-neuron to-neuron/40";
}

export default function SchoolCard({ school, index }: { school: School; index: number }) {
  const delay = Math.min(index * 0.04, 0.8);
  const logoSrc = school.logoUrl || PLACEHOLDER_LOGO;

  return (
    <Link
      href={`/school/${school.slug}`}
      className="group relative block bg-void-soft/80 border border-wire rounded-2xl overflow-hidden card-circuit animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
      aria-label={`עמוד פרטי על בית ספר ${school.schoolName} — ${school.topic}`}
    >
      {/* Top accent bar — colored by level */}
      <div
        className={`h-0.5 bg-gradient-to-l ${getLevelAccent(school.level)}`}
        aria-hidden="true"
      />

      <div className="p-5 md:p-6">
        {/* Logo + Level badge row */}
        <div className="flex items-start justify-between mb-4 gap-2">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-ink p-2 shrink-0 flex items-center justify-center shadow-md shadow-circuit/15">
            <Image
              src={logoSrc}
              alt={school.logoUrl ? `לוגו בית ספר ${school.schoolName}` : "לוגו מהלך השקפה"}
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
          <span
            className={`${getLevelBadgeClass(school.level)} text-[11px] font-semibold px-3 py-1 rounded-full`}
          >
            {school.level}
          </span>
        </div>

        {/* School name */}
        <h3 className="text-lg font-bold text-ink mb-1.5 group-hover:text-circuit-bright transition-colors duration-300">
          {school.schoolName}
        </h3>

        {/* Topic */}
        <p className="text-circuit text-sm font-medium mb-3 font-mono">
          {school.topic}
        </p>

        {/* Description preview */}
        <p className="text-ink-muted text-sm leading-relaxed line-clamp-2 mb-4">
          {school.hasContent ? school.description : "בקרוב — הסיפור של " + school.schoolName}
        </p>

        {/* Read more hint */}
        <div className="flex items-center gap-1.5 text-ink-muted group-hover:text-circuit-bright text-sm font-medium transition-colors duration-300">
          <span>{school.hasContent ? "לסיפור המלא" : "בקרוב"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:-translate-x-1 rtl:rotate-180"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
