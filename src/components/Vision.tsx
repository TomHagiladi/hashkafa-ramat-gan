export default function Vision() {
  return (
    <section className="relative max-w-4xl mx-auto px-6 py-16 md:py-24">
      {/* Decorative blob */}
      <div className="absolute top-0 right-[-100px] w-64 h-64 bg-coral/5 blob blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <p className="text-coral font-semibold text-sm tracking-widest uppercase mb-4 animate-fade-in-up">
          החזון
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 leading-snug animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          לא רק טכנולוגיה — שינוי תרבותי בחינוך
        </h2>

        <div className="space-y-5 text-charcoal-light text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p>
            בשנת תשפ&quot;ו (2025-2026), יצאה עיריית רמת גן לפרויקט חלוצי: הקמת קהילות למידה מקצועיות בכל בתי הספר בעיר, עם מיקוד אחד — הטמעה מושכלת ואנושית של בינה מלאכותית בהוראה.
          </p>
          <p>
            הפרויקט לא התחיל מהטכנולוגיה, אלא מהשאלות: מה המורים צריכים? איך שומרים על הלב האנושי של ההוראה? כיצד בינה מלאכותית יכולה לשחרר זמן למה שבאמת חשוב — הקשר עם התלמיד?
          </p>
          <p>
            כל בית ספר בחר נושא פדגוגי ייחודי — מלמידה דיפרנציאלית ועד חשיבה ביקורתית, מהערכה חלופית ועד כתיבה יוצרת. ובכל אחד מהם, צוות מקצועי יצא לדרך של חקר, ניסוי, ולמידה משותפת.
          </p>
        </div>

        {/* Pull quote */}
        <div className="mt-12 border-r-4 border-coral pr-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-xl md:text-2xl font-medium text-navy italic leading-relaxed">
            &ldquo;הפרויקט הזה לא עוסק בבינה מלאכותית. הוא עוסק במורים שמעזים לשאול שאלות חדשות — ומוצאים תשובות שמשנות את הכיתה.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
