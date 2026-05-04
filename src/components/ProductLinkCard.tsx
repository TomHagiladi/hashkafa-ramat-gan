import type { ProductLink } from "@/data/schools";

const PLATFORM_HINTS: { match: RegExp; label: string }[] = [
  { match: /padlet\.com/i, label: "Padlet" },
  { match: /(canva\.(com|link))|my\.canva\.site/i, label: "Canva" },
  { match: /docs\.google\.com\/(document|presentation|drawings)/i, label: "Google Docs" },
  { match: /drive\.google\.com/i, label: "Google Drive" },
  { match: /sites\.google\.com/i, label: "Google Sites" },
  { match: /gemini\.google\.com/i, label: "Gemini" },
  { match: /notebooklm\.google\.com/i, label: "NotebookLM" },
  { match: /ai\.studio/i, label: "Google AI Studio" },
  { match: /genially\.com/i, label: "Genially" },
  { match: /lovable\.app/i, label: "אפליקציה" },
  { match: /magicschool\.ai/i, label: "MagicSchool" },
  { match: /merchavim\.snunit/i, label: "מרחבים סנונית" },
  { match: /botlimudim\.co\.il/i, label: "בוט לימודים" },
  { match: /bit\.ly/i, label: "אתר חיצוני" },
];

function platformOf(url: string): string {
  for (const p of PLATFORM_HINTS) {
    if (p.match.test(url)) return p.label;
  }
  return "פתיחת קישור";
}

export default function ProductLinkCard({ link }: { link: ProductLink }) {
  const platform = platformOf(link.url);

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${link.label} — נפתח בכרטיסייה חדשה (${platform})`}
      className="group bg-void-soft/80 rounded-2xl p-4 md:p-5 border border-wire card-circuit flex items-start gap-3"
    >
      <div className="flex-1 min-w-0">
        <p className="text-ink font-semibold text-sm md:text-base leading-snug mb-1.5 group-hover:text-circuit-bright transition-colors">
          {link.label}
        </p>
        <p className="text-ink-muted text-[11px] md:text-xs uppercase tracking-wider font-mono">
          {platform}
        </p>
      </div>
      <span
        aria-hidden="true"
        className="shrink-0 w-9 h-9 rounded-full bg-circuit/15 group-hover:bg-circuit text-circuit group-hover:text-abyss flex items-center justify-center transition-all duration-300"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="17" y1="7" x2="7" y2="17" />
          <polyline points="17 17 17 7 7 7" />
        </svg>
      </span>
    </a>
  );
}
