export default function Vision() {
  return (
    <section className="relative max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-28 overflow-hidden">
      {/* Soft glow blob — neuron-purple. Section has overflow-hidden so the
          negatively-positioned blobs don't bleed past the section bounds and
          create horizontal scroll on mobile. */}
      <div className="absolute top-0 right-[-120px] w-72 h-72 bg-neuron/10 blob blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[-100px] w-64 h-64 bg-circuit/10 blob-2 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <p className="eyebrow-he mb-5 animate-fade-in-up">
          <span>החזון</span>
        </p>
        <h2
          className="display text-3xl md:text-5xl text-ink mb-8 md:mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.08s" }}
        >
          מובילות שינוי, <span className="glow-text">יוצרות עתיד</span>
        </h2>

        <div
          className="space-y-5 text-ink-soft text-base md:text-lg leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.18s" }}
        >
          <p>
            קהילות מורות מובילות מחברות בין פדגוגיה עמוקה לבינה מלאכותית ומעצבות למידה רלוונטית לעולם המשתנה.
          </p>
          <p>
            בשנת תשפ&quot;ו (2025–2026) פסג&quot;ה רמת גן ועיריית רמת גן הובילו מהלך חדשני ופורץ דרך: &quot;מהלך השקפה – מורות מובילות בשילוב כלי בינה מלאכותית&quot;. 29 בתי ספר יסודיים, על־יסודיים וחינוך מיוחד הצטרפו למהלך.
          </p>
          <p>
            מהלך &quot;השקפה – מורות מובילות&quot; נועד להצמיח מורות מובילות קהילות לשיפור ההוראה, מתוך תפיסה כי שינוי פדגוגי עמוק מתחיל בכיתה ומתפתח דרך שיח מקצועי, חקר והתנסות משותפת. במסגרת הקהילה נבחרת סוגיה פדגוגית, נבחנת הפרקטיקה ובעקבות כך מובילות שינוי פדגוגי בכיתות המבוסס על מיומנויות דמות הבוגר.ת ובהתאמה ללומדים וללומדות.
          </p>
          <p>
            המהלך כולל תהליך מובנה של הכשרה וליווי למורות המובילות על ידי מנחות השקפה ומנחי ומנחות בינה מלאכותית, המחבר בין תהליכים פדגוגיים לחדשנות טכנולוגית.
          </p>
          <p>
            דרך העבודה המשותפת של הקהילה הלומדת, הכוללת חקר, התנסות ושיח מקצועי, מתפתחת הוראה מדויקת יותר המקדמת למידה עצמאית, חשיבה ביקורתית ושיתוף פעולה. כך מתפתחות המורות המובילות כסוכנות שינוי פדגוגי, הקהילה מתבססת כמרחב משמעותי לפיתוח מקצועי מתמשך, ובית הספר מתעצב כארגון לומד, מתפתח ומוביל.
          </p>
        </div>
      </div>
    </section>
  );
}
