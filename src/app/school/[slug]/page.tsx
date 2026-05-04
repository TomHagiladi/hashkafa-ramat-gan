import { schools } from "@/data/schools";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PartnerLogos from "@/components/PartnerLogos";
import ProductLinkCard from "@/components/ProductLinkCard";

const PLACEHOLDER_LOGO = "/partners/hashkafa.png";

export function generateStaticParams() {
  return schools.map((s) => ({ slug: s.slug }));
}

function getLevelBadgeClass(level: string) {
  if (level === "יסודי") return "bg-emerald-600/90";
  if (level === "על יסודי") return "bg-navy/90";
  return "bg-gold-muted/90";
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
    <main className="min-h-screen bg-cream" dir="rtl">
      {/* Hero */}
      <div className="relative overflow-hidden bg-navy-dark">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#1a2744] via-[#2a3a5c] to-[#1e2d48]" />
        <div className="absolute inset-0 grain" />

        {/* Blobs */}
        <div className="absolute top-[-80px] right-[-60px] w-80 h-80 bg-coral/8 blob blur-3xl" />
        <div className="absolute bottom-[-60px] left-[-80px] w-72 h-72 bg-gold/6 blob-2 blur-3xl" />

        {/* Top bar with back button + partner logos */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 pt-5 md:pt-6 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/#schools"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-all text-xs md:text-sm font-medium bg-white/8 hover:bg-white/15 px-3 md:px-4 py-2 rounded-full border border-white/15 hover:border-white/25"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span className="hidden sm:inline">חזרה לכל בתי הספר</span>
              <span className="sm:hidden">חזרה</span>
            </Link>
          </div>
          <div className="pb-2">
            <PartnerLogos />
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12 pb-16 md:pb-20 text-center">
          <div
            className="mx-auto w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white/95 p-3 md:p-4 mb-5 shadow-lg animate-fade-in-up flex items-center justify-center"
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
            className="text-2xl md:text-5xl font-black text-white mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            בית ספר {school.schoolName}
          </h1>
          <div
            className="flex flex-wrap items-center justify-center gap-2 md:gap-3 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span
              className={`${getLevelBadgeClass(school.level)} text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-1 md:py-1.5 rounded-full`}
            >
              {school.level}
            </span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="text-coral-light text-xs md:text-sm font-medium">
              {school.topic}
            </span>
          </div>
        </div>

        {/* Soft bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cream to-transparent z-10" />
      </div>

      {/* Page body */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-10 space-y-8 md:space-y-10">
        {school.hasContent ? (
          <>
            {/* Goal + Achievements (now FIRST, immediately under title) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <section
                className="bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-sm section-reveal"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🎯</span>
                  <h2 className="text-lg font-bold text-navy">
                    מטרת היציאה לדרך
                  </h2>
                </div>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {school.goal}
                </p>
              </section>

              <section
                className="bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-sm section-reveal"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">✅</span>
                  <h2 className="text-lg font-bold text-navy">
                    מה הצלחנו להשיג
                  </h2>
                </div>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {school.achievements}
                </p>
              </section>
            </div>

            {/* Warm divider */}
            <div className="divider-warm" />

            {/* Community story (now AFTER goal/achievements) */}
            <section
              className="section-reveal"
              style={{ animationDelay: "0.3s" }}
            >
              <p className="text-coral font-semibold text-sm tracking-widest uppercase mb-4">
                סיפור הקהילה
              </p>
              <p className="text-charcoal text-base md:text-lg leading-relaxed whitespace-pre-line">
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
                className="text-coral font-semibold text-sm tracking-widest uppercase mb-4"
              >
                תוצרי הקהילה
              </p>
              {school.productLinks && school.productLinks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {school.productLinks.map((link) => (
                    <ProductLinkCard key={link.url} link={link} />
                  ))}
                </div>
              ) : (
                <div className="bg-cream-dark/40 border border-dashed border-coral/30 rounded-2xl p-6 text-center text-charcoal-light text-sm">
                  תוצרי הקהילה יתפרסמו כאן בקרוב.
                </div>
              )}
            </section>
          </>
        ) : (
          /* Empty state for schools without content */
          <section
            className="section-reveal text-center py-12"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm max-w-lg mx-auto">
              <div className="mx-auto w-20 h-20 rounded-xl bg-cream/70 p-3 mb-5 opacity-70 flex items-center justify-center">
                <Image
                  src={logoSrc}
                  alt={`לוגו ${school.schoolName}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-bold text-navy mb-3">
                התוכן בהכנה
              </h2>
              <p className="text-charcoal-light text-sm leading-relaxed">
                בקרוב תוכלו לקרוא כאן על המסע הייחודי של בית הספר {school.schoolName} במהלך &quot;השקפה — מורות מובילות&quot;.
              </p>
            </div>
          </section>
        )}

        {/* Team */}
        <section
          className="bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-sm section-reveal"
          style={{ animationDelay: "0.4s" }}
        >
          <h2 className="text-lg font-bold text-navy mb-5 flex items-center gap-2">
            <span className="text-xl">👥</span>
            הצוות המוביל
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {/* Principal */}
            {school.principalName && (
              <div>
                <p className="text-xs text-charcoal-light font-semibold uppercase tracking-wider mb-3">
                  {principalLabel}
                </p>
                <div className="flex items-center gap-2 bg-navy/8 rounded-xl px-3.5 py-2.5 border border-navy/15">
                  <span className="w-6 h-6 bg-navy/15 rounded-full flex items-center justify-center text-xs">🎓</span>
                  <span className="text-sm font-medium text-charcoal">
                    {school.principalName}
                  </span>
                </div>
              </div>
            )}

            {/* Leading teachers */}
            {school.hasContent && school.leadingTeachers.length > 0 && (
              <div>
                <p className="text-xs text-charcoal-light font-semibold uppercase tracking-wider mb-3">
                  {teachersLabel}
                </p>
                <div className="space-y-2">
                  {school.leadingTeachers.map((name) => (
                    <div
                      key={name}
                      className="flex items-center gap-2 bg-coral/6 rounded-xl px-3.5 py-2.5 border border-coral/10"
                    >
                      <span className="w-6 h-6 bg-coral/15 rounded-full flex items-center justify-center text-xs">👩‍🏫</span>
                      <span className="text-sm font-medium text-charcoal">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hashkafa facilitator */}
            {school.hashkafaFacilitator && (
              <div>
                <p className="text-xs text-charcoal-light font-semibold uppercase tracking-wider mb-3">
                  {hashkafaLabel}
                </p>
                <div className="flex items-center gap-2 bg-gold/8 rounded-xl px-3.5 py-2.5 border border-gold/15">
                  <span className="w-6 h-6 bg-gold/15 rounded-full flex items-center justify-center text-xs">🌟</span>
                  <span className="text-sm font-medium text-charcoal">
                    {school.hashkafaFacilitator}
                  </span>
                </div>
              </div>
            )}

            {/* AI facilitator */}
            {school.aiFacilitator && (
              <div>
                <p className="text-xs text-charcoal-light font-semibold uppercase tracking-wider mb-3">
                  {aiLabel}
                </p>
                <div className="flex items-center gap-2 bg-coral/6 rounded-xl px-3.5 py-2.5 border border-coral/10">
                  <span className="w-6 h-6 bg-coral/15 rounded-full flex items-center justify-center text-xs">🤖</span>
                  <span className="text-sm font-medium text-charcoal">
                    {school.aiFacilitator}
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA — back to all schools */}
        <div
          className="flex items-center justify-center pb-4 section-reveal"
          style={{ animationDelay: "0.6s" }}
        >
          <Link
            href="/#schools"
            className="w-full sm:w-auto text-center bg-white text-navy font-semibold py-3 px-8 rounded-xl shadow-sm border border-gray-200 hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-200 text-base"
          >
            <span className="inline-flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              חזרה לכל בתי הספר
            </span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-navy-dark text-white py-10 mt-8">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <p className="text-white/70 text-sm font-medium">
            השקפה AI &middot; עיריית רמת גן &middot; פסג&quot;ה רמת גן
          </p>
          <nav aria-label="קישורים נוספים" className="mt-3">
            <Link
              href="/accessibility"
              className="text-white/80 hover:text-white text-sm underline focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-navy-dark rounded"
            >
              הצהרת נגישות
            </Link>
          </nav>
          <p className="text-white/50 text-xs mt-3">
            &copy; תשפ&quot;ו 2025-2026
          </p>
        </div>
      </footer>
    </main>
  );
}
