const sessions = [
  {
    number: 1,
    date: "26/8",
    title: "הובלה אישית וקהילתית",
    description: "תפיסת זהות של מורה מובילה, מנהיגות, בניית קהילה, כלים להנחיית קבוצה",
    type: "face",
  },
  {
    number: 2,
    date: "16/9",
    title: "בניית תוכנית עבודה עם AI",
    description: "אנדרגוגיה, מחזור הלמידה, מפת דרכים, תהליכי הערכה, חקר פרקטיקות",
    type: "face",
  },
  {
    number: 3,
    date: "2/11",
    title: "ניהול התנגדויות ומוטיבציה",
    description: "סימולציות, למידת עמיתים, בניית מוטיבציה קהילתית בעזרת בינה מלאכותית",
    type: "online",
  },
  {
    number: 4,
    date: "7/12",
    title: "למידת עמיתים",
    description: "שיתוף בין קהילות, לפי בחירת הקבוצה",
    type: "online",
  },
  {
    number: 5,
    date: "11/1",
    title: "ניתוח ייצוגים וחלופות עם AI",
    description: "שמירה על מוטיבציה של קהילה להמשך תהליכי חקר",
    type: "face",
  },
  {
    number: 6,
    date: "8/2",
    title: "פומביות של תהליכים",
    description: "הצגת התהליכים והתוצרים של הקהילות ברמה ציבורית",
    type: "face",
  },
  {
    number: 7,
    date: "8/3",
    title: "למידת עמיתים",
    description: "שיתוף מעמיק בין קהילות, לפי בחירת הקבוצה",
    type: "online",
  },
  {
    number: 8,
    date: "10/5",
    title: "סיכום שנה",
    description: "רפלקציה, תובנות, הישגים, והמשך הדרך",
    type: "face",
  },
];

export default function TrainingJourney() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 py-16 md:py-24">
      {/* Decorative blob */}
      <div className="absolute bottom-0 left-[-100px] w-72 h-72 bg-gold/5 blob-2 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <p className="text-coral font-semibold text-sm tracking-widest uppercase mb-4 animate-fade-in-up">
          מסלול ההכשרה
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-snug animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          8 מפגשי הכשרה למורות המובילות
        </h2>
        <p
          className="text-charcoal-light text-lg mb-12 max-w-3xl leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          קורס בן 30 שעות שמלווה את המורות המובילות לאורך כל השנה — מהובלה אישית ובניית קהילה, דרך יישום כלי AI בכיתה, ועד לפומביות ושיתוף התוצרים.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute top-0 bottom-0 right-[28px] w-0.5 timeline-line opacity-30" />

          <div className="space-y-6">
            {sessions.map((session, i) => (
              <div
                key={session.number}
                className="relative flex gap-5 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + i * 0.07}s` }}
              >
                {/* Number circle */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg relative z-10">
                  {session.number}
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-bold text-navy text-base">
                      {session.title}
                    </h3>
                    <span className="text-xs text-charcoal-light bg-cream rounded-full px-3 py-1">
                      {session.date}
                    </span>
                    <span
                      className={`text-xs font-medium rounded-full px-3 py-1 ${
                        session.type === "face"
                          ? "bg-coral/10 text-coral"
                          : "bg-navy/10 text-navy"
                      }`}
                    >
                      {session.type === "face" ? "פנים אל פנים" : "סינכרוני"}
                    </span>
                  </div>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    {session.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
