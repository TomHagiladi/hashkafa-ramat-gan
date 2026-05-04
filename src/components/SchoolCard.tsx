import Link from "next/link";
import Image from "next/image";
import type { School } from "@/data/schools";

const PLACEHOLDER_LOGO = "/partners/hashkafa.png";

function getLevelBadgeClass(level: string) {
  if (level === "יסודי") return "badge-elementary";
  if (level === "על יסודי") return "badge-secondary";
  return "badge-special";
}

function getAccentBorder(level: string) {
  if (level === "יסודי") return "border-t-emerald-500/60";
  if (level === "על יסודי") return "border-t-navy/40";
  return "border-t-gold/60";
}

export default function SchoolCard({ school, index }: { school: School; index: number }) {
  const delay = Math.min(index * 0.05, 1);
  const logoSrc = school.logoUrl || PLACEHOLDER_LOGO;

  return (
    <Link
      href={`/school/${school.slug}`}
      className={`group block card-warm bg-white border border-gray-100 ${getAccentBorder(school.level)} border-t-2 rounded-2xl overflow-hidden animate-fade-in-up focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2`}
      style={{ animationDelay: `${delay}s` }}
      aria-label={`עמוד פרטי על בית ספר ${school.schoolName} — ${school.topic}`}
    >
      <div className="p-5 md:p-6">
        {/* Logo + Level badge row */}
        <div className="flex items-start justify-between mb-4 gap-2">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-cream/70 border border-gray-100 flex items-center justify-center p-2 shrink-0">
            <Image
              src={logoSrc}
              alt={school.logoUrl ? `לוגו בית ספר ${school.schoolName}` : "לוגו מהלך השקפה"}
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
          <span
            className={`${getLevelBadgeClass(school.level)} text-white text-[11px] font-semibold px-3 py-1 rounded-full`}
          >
            {school.level}
          </span>
        </div>

        {/* School name */}
        <h3 className="text-lg font-bold text-navy mb-1.5 group-hover:text-coral transition-colors duration-200">
          {school.schoolName}
        </h3>

        {/* Topic */}
        <p className="text-coral text-sm font-medium mb-3">
          {school.topic}
        </p>

        {/* Description preview */}
        <p className="text-charcoal-light text-sm leading-relaxed line-clamp-2 mb-4">
          {school.hasContent ? school.description : "בקרוב — הסיפור של " + school.schoolName}
        </p>

        {/* Read more hint */}
        <div className="flex items-center gap-1.5 text-navy/60 group-hover:text-coral text-sm font-medium transition-colors duration-200">
          <span>{school.hasContent ? "לסיפור המלא" : "בקרוב"}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:-translate-x-1 rtl:rotate-180">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
