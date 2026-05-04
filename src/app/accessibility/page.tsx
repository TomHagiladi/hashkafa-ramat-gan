import Link from "next/link";
import PartnerLogos from "@/components/PartnerLogos";

export const metadata = {
  title: "הצהרת נגישות | השקפה AI רמת גן",
  description:
    "הצהרת נגישות עבור אתר השקפה AI - מהלך \"השקפה — מורות מובילות\", עיריית רמת גן. רמת תאימות AA לפי תקן WCAG 2.1.",
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-void" dir="rtl">
      {/* Hero */}
      <div className="relative overflow-hidden bg-abyss">
        <div className="absolute inset-0 mesh-quiet" />
        <div className="absolute inset-0 circuit-grid opacity-25" />
        <div className="absolute inset-0 grain pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 pt-5 md:pt-6">
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-ink-soft hover:text-circuit-bright transition-colors text-xs md:text-sm font-medium glass-circuit px-3 md:px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-circuit"
              aria-label="חזרה לעמוד הראשי"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              חזרה לעמוד הראשי
            </Link>
          </div>
          <div className="pb-2 glass-circuit rounded-2xl px-4 py-3 md:px-6 md:py-4">
            <PartnerLogos />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16 pb-20 md:pb-24 text-center">
          <p className="eyebrow-he justify-center mb-5"><span>נגישות</span></p>
          <h1 className="display text-3xl md:text-5xl text-ink mb-4">
            הצהרת <span className="glow-text">נגישות</span>
          </h1>
          <p className="text-ink-muted text-sm md:text-base font-mono">
            אתר השקפה AI · מהלך &quot;השקפה — מורות מובילות&quot; · עיריית רמת גן
          </p>
        </div>
      </div>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-4 md:px-6 py-14 md:py-20 space-y-10 text-ink-soft text-base md:text-lg leading-relaxed">
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-ink mb-4">
            המחויבות שלנו לנגישות
          </h2>
          <p>
            אתר זה הוקם כדי להציג את מהלך &quot;השקפה — מורות מובילות&quot; בעיריית רמת גן ולשמש כלי מידע לציבור הרחב, לצוותי החינוך ולמשתתפי הכנס &quot;במה לבינה&quot;. אנחנו רואים נגישות כערך מרכזי. האתר נבנה במטרה להיות נגיש לכלל המשתמשים, לרבות אנשים עם מוגבלויות ראייה, שמיעה, ניידות ולמידה, בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע&quot;ג-2013 (תקנה 35).
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-ink mb-4">רמת תאימות</h2>
          <p>
            האתר נבנה לפי הנחיות התוכן הנגיש <strong className="text-circuit-bright">WCAG 2.1 ברמה AA</strong>, ובהתאם לתקן הישראלי <strong className="text-circuit-bright">ת&quot;י 5568</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-ink mb-4">פעולות נגישות שיושמו באתר</h2>
          <ul className="list-disc pr-6 space-y-2 marker:text-circuit">
            <li>תמיכה בקריאה על ידי קוראי מסך (screen readers) — תיוג סמנטי, כותרות מסודרות, ותיאורים חלופיים לתמונות (alt text).</li>
            <li>ניווט מלא במקלדת — כל הקישורים והטפסים נגישים באמצעות Tab/Shift+Tab.</li>
            <li>קישור &quot;דילוג לתוכן הראשי&quot; בראש כל עמוד.</li>
            <li>טקסט בעברית עם כיווניות RTL וכותרות מובנות.</li>
            <li>יחס ניגוד צבעים מיטבי בין טקסט לרקע.</li>
            <li>אפשרות שינוי גודל טקסט באמצעות הגדרות הדפדפן (Ctrl/Cmd + פלוס/מינוס) ללא איבוד תוכן.</li>
            <li>תאימות מלאה למגוון מכשירים, כולל מובייל וטאבלט.</li>
            <li>הימנעות מאוטו-נגינה של וידאו או אודיו ושימוש זהיר באנימציות.</li>
            <li>תמיכה ב-prefers-reduced-motion לכיבוי אוטומטי של אנימציות למשתמשים שביקשו זאת בהגדרות המערכת.</li>
            <li>תוויות (labels) ברורות לכל שדות הקלט והפילטרים.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-ink mb-4">הסתייגויות</h2>
          <p>
            למרות מאמצינו, ייתכן שיימצאו רכיבים שעדיין לא הותאמו לחלוטין לכלל הצרכים. לוגואים של בתי ספר שטרם התקבלו מוצגים באמצעות &quot;לוגו השקפה&quot; כברירת מחדל. תוכן בית ספר שטרם נשלח על ידי בית הספר מוצג כ-&quot;בקרוב&quot;.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-ink mb-4">דרכי פנייה לבעיות נגישות</h2>
          <p>
            נתקלת בבעיית נגישות באתר? נשמח אם תיידעו אותנו ונעשה כל שביכולתנו לטפל ולתקן בהקדם.
          </p>
          <ul className="list-none pr-0 mt-4 space-y-2 bg-void-soft border border-wire rounded-2xl p-5">
            <li>
              <strong className="text-ink">רכז נגישות:</strong> תום הגלעדי, מוביל תחום הבינה המלאכותית
            </li>
            <li>
              <strong className="text-ink">דוא&quot;ל:</strong>{" "}
              <a href="mailto:tomhagiladi@gmail.com" className="text-circuit hover:text-circuit-bright underline focus:outline-none focus:ring-2 focus:ring-circuit rounded transition-colors">
                tomhagiladi@gmail.com
              </a>
            </li>
            <li>
              <strong className="text-ink">אגף החינוך, עיריית רמת גן — חדשנות ומו&quot;פ:</strong>{" "}
              <a href="mailto:dafna-r@ramat-gan.muni.il" className="text-circuit hover:text-circuit-bright underline focus:outline-none focus:ring-2 focus:ring-circuit rounded transition-colors">
                dafna-r@ramat-gan.muni.il
              </a>
            </li>
          </ul>
          <p className="mt-4">אנו מתחייבים להגיב לפניות בנושא נגישות בתוך עד 14 ימי עסקים.</p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-ink mb-4">עדכון אחרון של ההצהרה</h2>
          <p className="font-mono text-ink-muted">הצהרת נגישות זו עודכנה לאחרונה בתאריך 26 באפריל 2026.</p>
        </section>
      </article>

      {/* Footer */}
      <footer className="relative bg-abyss border-t border-wire-soft py-10 mt-8">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <p className="text-ink-muted text-sm font-mono">
            השקפה AI · עיריית רמת גן · פסג&quot;ה רמת גן
          </p>
          <p className="text-ink-faint text-xs mt-2 font-mono">© תשפ&quot;ו 2025—2026</p>
        </div>
      </footer>
    </main>
  );
}
