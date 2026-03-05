import { schools } from "@/data/schools";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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

        {/* Top bar */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-6 flex items-center justify-between animate-fade-in">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-all text-sm font-medium bg-white/8 hover:bg-white/15 px-4 py-2 rounded-full border border-white/15 hover:border-white/25"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            חזרה לכל בתי הספר
          </Link>
          <Image
            src="/ramat-gan-logo.svg"
            alt="Ramat Gan Municipality Logo"
            width={44}
            height={44}
            className="rounded-full bg-white/95 p-1 shadow-lg"
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-14 pb-20 text-center">
          <div
            className="text-6xl mb-5 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {school.icon}
          </div>
          <h1
            className="text-3xl md:text-5xl font-black text-white mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            בית ספר {school.schoolName}
          </h1>
          <div
            className="flex items-center justify-center gap-3 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span
              className={`${getLevelBadgeClass(school.level)} text-white text-sm font-semibold px-4 py-1.5 rounded-full`}
            >
              {school.level}
            </span>
            <span className="text-white/30">|</span>
            <span className="text-coral-light text-sm font-medium">
              {school.topic}
            </span>
          </div>
        </div>

        {/* Soft bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cream to-transparent z-10" />
      </div>

      {/* Page body */}
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
        {/* Community story */}
        <section
          className="section-reveal"
          style={{ animationDelay: "0.1s" }}
        >
          <p className="text-coral font-semibold text-sm tracking-widest uppercase mb-4">
            סיפור הקהילה
          </p>
          <p className="text-charcoal text-lg leading-relaxed">
            {school.communityStory}
          </p>
        </section>

        {/* Warm divider */}
        <div className="divider-warm" />

        {/* Goal + Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section
            className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm section-reveal"
            style={{ animationDelay: "0.2s" }}
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
            className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm section-reveal"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">✅</span>
              <h2 className="text-lg font-bold text-navy">
                מה הצליחו להשיג
              </h2>
            </div>
            <p className="text-charcoal-light text-sm leading-relaxed">
              {school.achievements}
            </p>
          </section>
        </div>

        {/* Team */}
        <section
          className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm section-reveal"
          style={{ animationDelay: "0.4s" }}
        >
          <h2 className="text-lg font-bold text-navy mb-5 flex items-center gap-2">
            <span className="text-xl">👥</span>
            הצוות המוביל
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Leading teachers */}
            <div>
              <p className="text-xs text-charcoal-light font-semibold uppercase tracking-wider mb-3">
                מורים מובילים
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

            {/* Hashkafa facilitator */}
            <div>
              <p className="text-xs text-charcoal-light font-semibold uppercase tracking-wider mb-3">
                מנחת השקפה
              </p>
              <div className="flex items-center gap-2 bg-gold/8 rounded-xl px-3.5 py-2.5 border border-gold/15">
                <span className="w-6 h-6 bg-gold/15 rounded-full flex items-center justify-center text-xs">🌟</span>
                <span className="text-sm font-medium text-charcoal">
                  {school.hashkafaFacilitator}
                </span>
              </div>
            </div>

            {/* AI facilitator */}
            <div>
              <p className="text-xs text-charcoal-light font-semibold uppercase tracking-wider mb-3">
                מנחה AI
              </p>
              <div className="flex items-center gap-2 bg-navy/6 rounded-xl px-3.5 py-2.5 border border-navy/10">
                <span className="w-6 h-6 bg-navy/10 rounded-full flex items-center justify-center text-xs">🤖</span>
                <span className="text-sm font-medium text-charcoal">
                  {school.aiFacilitator}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Reflective quote */}
        <section
          className="section-reveal"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="relative bg-navy-dark rounded-2xl p-8 md:p-10 overflow-hidden">
            <div className="absolute inset-0 grain pointer-events-none" />
            <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-coral/8 blob blur-2xl" />
            <span className="quote-mark absolute top-3 right-5 text-6xl text-coral/20 z-10">
              &ldquo;
            </span>
            <p className="relative z-10 text-white/90 text-lg md:text-xl font-light leading-relaxed italic pr-6">
              {school.reflectiveQuote}
            </p>
          </div>
        </section>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-4 section-reveal"
          style={{ animationDelay: "0.6s" }}
        >
          {school.productLink && school.productLink !== "#" && (
            <a
              href={school.productLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-coral hover:bg-coral-dark text-white font-bold py-3 px-8 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-base"
            >
              צפייה בתוצרים
            </a>
          )}
          <Link
            href="/"
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
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/50 text-sm font-medium">
            השקפה AI &middot; עיריית רמת גן &middot; אגף חינוך
          </p>
          <p className="text-white/25 text-xs mt-2">
            &copy; תשפ&quot;ו 2025-2026
          </p>
        </div>
      </footer>
    </main>
  );
}
