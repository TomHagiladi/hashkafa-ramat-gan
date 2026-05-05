import { schools } from "@/data/schools";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PartnerLogos from "@/components/PartnerLogos";
import ProductLinkCard from "@/components/ProductLinkCard";
import NeuralMesh from "@/components/NeuralMesh";

const PLACEHOLDER_LOGO = "/partners/hashkafa.png";

export function generateStaticParams() {
  return schools.map((s) => ({ slug: s.slug }));
}

function getLevelBadgeClass(level: string) {
  if (level === "יסודי") return "badge-elementary";
  if (level === "על יסודי") return "badge-secondary";
  return "badge-special";
}

export default async function SchoolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const school = schools.find((s) => s.slug === slug);
  if (!school) notFound();

  const logoSrc = school.logoUrl || PLACEHOLDER_LOGO;
  const teachersLabel =
    school.leadingTeachersLabel ||
    (school.leadingTeachers.length > 1 ? "מורות מובילות" : "מורה מובילה");
  const hashkafaLabel = school.hashkafaFacilitatorLabel || "מנחת השקפה";
  const aiLabel = school.aiFacilitatorLabel || "מנחה AI";
  const principalLabel = school.principalLabel || "מנהלת בית הספר";

  return (
    <main className="min-h-screen bg-void" dir="rtl">
      {/* Hero */}
      <div className="relative overflow-hidden bg-abyss">
        {/* Aurora mesh */}
        <div className="absolute inset-0 aurora-mesh" />
        {/* Circuit grid */}
        <div className="absolute inset-0 circuit-grid opacity-30" />
        {/* Neural mesh — denser to feel more "energetic" on the school page */}
        <NeuralMesh density={22} linkDistance={220} />
        {/* Grain */}
        <div className="absolute inset-0 grain pointer-events-none" />

        {/* Top bar */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 pt-5 md:pt-6 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/#schools"
              className="flex items-center gap-2 text-ink-soft hover:text-circuit-bright transition-colors text-xs md:text-sm font-medium glass-circuit px-3 md:px-4 py-2 rounded-full"
            >
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
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span className="hidden sm:inline">חזרה לכל בתי הספר</span>
              <span className="sm:hidden">חזרה</span>
            </Link>
          </div>
          <div className="pb-2 glass-circuit rounded-2xl px-4 py-3 md:px-6 md:py-4">
            <PartnerLogos />
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-14 pb-16 md:pb-20 text-center">
          <div
            className="mx-auto w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-ink p-3 md:p-4 mb-6 shadow-2xl shadow-circuit/30 glow-circuit animate-fade-in-up flex items-center justify-center"
            style={{ animationDelay: "0.1s" }}
          >
            <Image
              src={logoSrc}
              alt={`לוגו ${school.schoolName}`}
              width={120}
              height={120}
              className="w-full h-full object-contain"
            />
          </div>
          <h1
            className="display text-3xl md:text-6xl text-ink mb-5 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-ink-muted text-2xl md:text-3xl font-normal">בית ספר</span>{" "}
            <span className="glow-text">{school.schoolName}</span>
          </h1>
          <div
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span
              className={`${getLevelBadgeClass(school.level)} text-xs md:text-sm font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full`}
            >
              {school.level}
            </span>
            <span className="text-ink-faint hidden sm:inline">|</span>
            <span className="text-circuit text-xs md:text-sm font-mono">
              {school.topic}
            </span>
          </div>
        </div>
      </div>

      {/* Page body */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16 space-y-10 md:space-y-14">
        {school.hasContent ? (
          <>
            {/* Goal + Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <section
                className="bg-void-soft rounded-2xl p-6 md:p-7 border border-wire section-reveal"
                style={{ animationDelay: "0.1s" }}
              >
                <p className="eyebrow-he mb-4">
                  <span>מטרת היציאה לדרך</span>
                </p>
                <p className="text-ink-soft text-sm md:text-base leading-relaxed">
                  {school.goal}
                </p>
              </section>

              <section
                className="bg-void-soft rounded-2xl p-6 md:p-7 border border-wire section-reveal"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="eyebrow-he mb-4">
                  <span>מה הצלחנו להשיג</span>
                </p>
                <p className="text-ink-soft text-sm md:text-base leading-relaxed">
                  {school.achievements}
                </p>
              </section>
            </div>

            <div className="divider-circuit" />

            {/* Community story */}
            <section
              className="section-reveal"
              style={{ animationDelay: "0.3s" }}
            >
              <p className="eyebrow-he mb-5">
                <span>סיפור הקהילה</span>
              </p>
              <p className="text-ink text-base md:text-lg leading-relaxed whitespace-pre-line">
                {school.communityStory}
              </p>
            </section>

            {/* Community products */}
            <section
              className="section-reveal"
              style={{ animationDelay: "0.35s" }}
              aria-labelledby={`products-heading-${school.slug}`}
            >
              <p
                id={`products-heading-${school.slug}`}
                className="eyebrow-he mb-5"
              >
                <span>תוצרי הקהילה</span>
              </p>
              {school.productLinks && school.productLinks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {school.productLinks.map((link) => (
                    <ProductLinkCard key={link.url} link={link} />
                  ))}
                </div>
              ) : (
                <div className="bg-void-soft/60 border border-dashed border-circuit/30 rounded-2xl p-6 text-center text-ink-muted text-sm">
                  תוצרי הקהילה יתפרסמו כאן בקרוב.
                </div>
              )}
            </section>
          </>
        ) : (
          /* Empty state */
          <section
            className="section-reveal text-center py-12"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="bg-void-soft rounded-2xl p-10 border border-wire max-w-lg mx-auto">
              <div className="mx-auto w-20 h-20 rounded-xl bg-ink p-3 mb-5 opacity-90 flex items-center justify-center">
                <Image
                  src={logoSrc}
                  alt={`לוגו ${school.schoolName}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="eyebrow-he justify-center mb-3"><span>התוכן בהכנה</span></p>
              <p className="text-ink-soft text-sm leading-relaxed">
                בקרוב תוכלו לקרוא כאן על המסע הייחודי של בית הספר {school.schoolName} במהלך &quot;השקפה — מורות מובילות&quot;.
              </p>
            </div>
          </section>
        )}

        {/* Team — only render if at least one role has data */}
        {(school.principalName ||
          school.leadingTeachers.length > 0 ||
          school.hashkafaFacilitator ||
          school.aiFacilitator) && (
        <section
          className="bg-void-soft rounded-2xl p-6 md:p-7 border border-wire section-reveal"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="eyebrow-he mb-6"><span>הצוות המוביל</span></p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {school.principalName && (
              <div>
                <p className="text-xs text-ink-muted font-semibold uppercase tracking-wider mb-3 font-mono">
                  {principalLabel}
                </p>
                <div className="flex items-center gap-3 bg-circuit/8 rounded-xl px-4 py-3 border border-circuit/15">
                  <span className="w-7 h-7 bg-circuit/20 rounded-full flex items-center justify-center text-xs text-circuit">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-ink">
                    {school.principalName}
                  </span>
                </div>
              </div>
            )}

            {school.hasContent && school.leadingTeachers.length > 0 && (
              <div>
                <p className="text-xs text-ink-muted font-semibold uppercase tracking-wider mb-3 font-mono">
                  {teachersLabel}
                </p>
                <div className="space-y-2">
                  {school.leadingTeachers.map((name) => (
                    <div
                      key={name}
                      className="flex items-center gap-3 bg-neuron/8 rounded-xl px-4 py-3 border border-neuron/15"
                    >
                      <span className="w-7 h-7 bg-neuron/20 rounded-full flex items-center justify-center text-neuron">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </span>
                      <span className="text-sm font-medium text-ink">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {school.hashkafaFacilitator && (
              <div>
                <p className="text-xs text-ink-muted font-semibold uppercase tracking-wider mb-3 font-mono">
                  {hashkafaLabel}
                </p>
                <div className="flex items-center gap-3 bg-pulse/8 rounded-xl px-4 py-3 border border-pulse/15">
                  <span className="w-7 h-7 bg-pulse/20 rounded-full flex items-center justify-center text-pulse">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-ink">
                    {school.hashkafaFacilitator}
                  </span>
                </div>
              </div>
            )}

            {school.aiFacilitator && (
              <div>
                <p className="text-xs text-ink-muted font-semibold uppercase tracking-wider mb-3 font-mono">
                  {aiLabel}
                </p>
                <div className="flex items-center gap-3 bg-synapse/10 rounded-xl px-4 py-3 border border-synapse/20">
                  <span className="w-7 h-7 bg-synapse/20 rounded-full flex items-center justify-center text-synapse">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="11" width="18" height="10" rx="2" />
                      <circle cx="12" cy="5" r="2" />
                      <path d="M12 7v4M8 16h.01M16 16h.01" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-ink">
                    {school.aiFacilitator}
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>
        )}

        {/* CTA — back */}
        <div
          className="flex items-center justify-center pb-4 section-reveal"
          style={{ animationDelay: "0.6s" }}
        >
          <Link
            href="/#schools"
            className="text-center bg-void-soft text-ink font-semibold py-3 px-8 rounded-xl border border-wire hover:border-circuit hover:bg-void-rise transition-all duration-300 text-base"
          >
            <span className="inline-flex items-center gap-1.5">
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
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              חזרה לכל בתי הספר
            </span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-abyss border-t border-wire-soft py-10 mt-8">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <p className="text-ink-muted text-sm font-mono">
            השקפה AI · עיריית רמת גן · פסג&quot;ה רמת גן
          </p>
          <nav aria-label="קישורים נוספים" className="mt-3">
            <Link
              href="/accessibility"
              className="text-ink-soft hover:text-circuit-bright text-sm underline focus:outline-none focus:ring-2 focus:ring-circuit focus:ring-offset-2 focus:ring-offset-abyss rounded transition-colors"
            >
              הצהרת נגישות
            </Link>
          </nav>
          <p className="text-ink-faint text-xs mt-4 font-mono">
            &copy; תשפ&quot;ו 2025-2026
          </p>
        </div>
      </footer>
    </main>
  );
}
