import Link from "next/link";
import PartnerLogos from "@/components/PartnerLogos";

export const metadata = {
  title: "הצהרת נגישות | השקפה AI רמת גן",
  description:
    "הצהרת נגישות עבור אתר השקפה AI - מהלך \"השקפה — מורות מובילות\", עיריית רמת גן. רמת תאימות AA לפי תקן WCAG 2.1.",
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-cream" dir="rtl">
      {/* Hero */}
      <div className="relative overflow-hidden bg-navy-dark">
        <div className="absolute inset-0 bg-gradient-to-bl from-[#1a2744] via-[#2a3a5c] to-[#1e2d48]" />
        <div className="absolute inset-0 grain" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 pt-5 md:pt-6">
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-all text-xs md:text-sm font-medium bg-white/8 hover:bg-white/15 px-3 md:px-4 py-2 rounded-full border border-white/15 hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-navy-dark"
              aria-label="חזרה לעמוד הראשי"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              חזרה לעמוד הראשי
            </Link>
          </div>
          <div className="pb-2">
            <PartnerLogos />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-14 pb-16 md:pb-20 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">הצהרת נגישות</h1>
          <p className="text-coral-light text-sm md:text-base">
            אתר השקפה AI &middot; מהלך &quot;השקפה — מורות מובילות&quot; &middot; עיריית רמת גן
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cream to-transparent z-10" />
      </div>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-4 md:px-6 py-10 md:py-14 space-y-8 text-charcoal text-base md:text-lg leading-relaxed">
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-navy mb-3">המחויבות שלנו לנגישות</h2>
          <p>
            אתר זה הוקם כדי להציג את מהלך &quot;השקפה — מורות מובילות&quot; בעיריית רמת גן ולשמש כלי מידע לציבור הרחב, לצוותי החינוך ולמשתתפי הכנס &quot;במה לבינה&quot;. אנחנו רואים נגישות כערך מרכזי. האתר נבנה במטרה להיות נגיש לכלל המשתמשים, לרבות אנשים עם מוגבלויות ראייה, שמיעה, ניידות ולמידה, בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע&quot;ג-2013 (תקנה 35).
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-navy mb-3">רמת תאימות</h2>
          <p>
            האתר נבנה לפי הנחיות התוכן הנגיש <strong>WCAG 2.1 ברמה AA</strong>, ובהתאם לתקן הישראלי <strong>ת&quot;י 5568</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-navy mb-3">פעולות נגישות שיושמו באתר</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>תמיכה בקריאה על ידי קוראי מסך (screen readers) — תיוג סמנטי, כותרות מסודרות, ותיאורים חלופיים לתמונות (alt text).</li>
            <li>ניווט מלא במקלדת — כל הקישורים והטפסים נגישים באמצעות Tab/Shift+Tab.</li>
            <li>קישור &quot;דילוג לתוכן הראשי&quot; בראש כל עמוד.</li>
            <li>טקסט בעברית עם כיווניות RTL וכותרות מובנות.</li>
            <li>יחס ניגוד צבעים מיטבי בין טקסט לרקע.</li>
            <li>אפשרות שינוי גודל טקסט באמצעות הגדרות הדפדפן (Ctrl/Cmd + פלוס/מינוס) ללא איבוד תוכן.</li>
            <li>תאימות מלאה למגוון מכשירים, כולל מובייל וטאבלט.</li>
            <li>הימנעות מאוטו-נגינה של וידאו או אודיו ושימוש זהיר באנימציות.</li>
            <li>תוויות (labels) ברורות לכל שדות הקלט והפילטרים.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-navy mb-3">הסתייגויות</h2>
          <p>
            למרות מאמצינו, ייתכן שיימצאו רכיבים שעדיין לא הותאמו לחלוטין לכלל הצרכים. לוגואים של בתי ספר שטרם התקבלו מוצגים באמצעות &quot;לוגו השקפה&quot; כברירת מחדל. תוכן בית ספר שטרם נשלח על ידי בית הספר מוצג כ-&quot;בקרוב&quot;.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-navy mb-3">דרכי פנייה לבעיות נגישות</h2>
          <p>
            נתקלת בבעיית נגישות באתר? נשמח אם תיידעו אותנו ונעשה כל שביכולתנו לטפל ולתקן בהקדם.
          </p>
          <ul className="list-none pr-0 mt-3 space-y-1">
            <li>
              <strong>רכז נגישות:</strong> תום הגלעדי, מוביל תחום הבינה המלאכותית
            </li>
            <li>
              <strong>דוא&quot;ל:</strong>{" "}
              <a href="mailto:tomhagiladi@gmail.com" className="text-coral hover:text-coral-dark underline focus:outline-none focus:ring-2 focus:ring-coral rounded">
                tomhagiladi@gmail.com
              </a>
            </li>
            <li>
              <strong>אגף החינוך, עיריית רמת גן — חדשנות ומו&quot;פ:</strong>{" "}
              <a href="mailto:dafna-r@ramat-gan.muni.il" className="text-coral hover:text-coral-dark underline focus:outline-none focus:ring-2 focus:ring-coral rounded">
                dafna-r@ramat-gan.muni.il
              </a>
            </li>
          </ul>
          <p className="mt-3">אנו מתחייבים להגיב לפניות בנושא נגישות בתוך עד 14 ימי עסקים.</p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-navy mb-3">עדכון אחרון של ההצהרה</h2>
          <p>הצהרת נגישות זו עודכנה לאחרונה בתאריך 26 באפריל 2026.</p>
        </section>
      </article>

      {/* Footer */}
      <footer className="relative bg-navy-dark text-white py-10 mt-8">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <p className="text-white/60 text-sm font-medium">
            השקפה AI &middot; עיריית רמת גן &middot; פסג&quot;ה רמת גן
          </p>
          <p className="text-white/30 text-xs mt-2">&copy; תשפ&quot;ו 2025-2026</p>
        </div>
      </footer>
    </main>
  );
}
