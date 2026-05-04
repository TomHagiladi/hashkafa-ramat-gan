import PartnerLogos from "./PartnerLogos";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-navy-dark">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#1a2744] via-[#2a3a5c] to-[#1e2d48]" />

      {/* Grain texture */}
      <div className="absolute inset-0 grain" />

      {/* Organic decorative blobs */}
      <div className="absolute top-[-120px] right-[-80px] w-[400px] h-[400px] bg-coral/8 blob blur-3xl" />
      <div className="absolute bottom-[-80px] left-[-60px] w-[350px] h-[350px] bg-gold/6 blob-2 blur-3xl" />
      <div className="absolute top-1/3 left-[20%] w-40 h-40 bg-coral/5 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 pt-8 pb-16 md:pt-16 md:pb-28">
        {/* Partner logos bar */}
        <div className="mb-10 md:mb-14 animate-fade-in">
          <PartnerLogos />
          <p className="text-white/55 text-xs md:text-sm font-light tracking-wide text-center mt-3">
            עיריית רמת גן &middot; פסג&quot;ה רמת גן &middot; מהלך השקפה &middot; מחוז תל אביב
          </p>
        </div>

        {/* Main headline */}
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-black text-white text-center mb-5 md:mb-6 leading-tight animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          כשבינה מלאכותית
          <br />
          <span className="text-coral-light">פוגשת את הלב של החינוך</span>
        </h1>

        <div
          className="text-white/75 text-center text-base md:text-lg max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed font-light animate-fade-in-up space-y-4"
          style={{ animationDelay: "0.25s" }}
        >
          <p>
            &quot;מהלך השקפה – מורות מובילות&quot; בשילוב כלי בינה מלאכותית הוא יוזמה עירונית חדשנית וראשונה מסוגה בישראל בהובלת פסג&quot;ה רמת גן ועיריית רמת גן. במסגרת המהלך, 29 בתי ספר יסודיים, על־יסודיים וחינוך מיוחד יוצרים יחד מרחב משותף של קהילה לומדת, חוקרת ומתפתחת מקצועית.
          </p>
          <p>
            בתי הספר יצאו למסע פדגוגי משותף, שבו כל קהילה פועלת מתוך זהותה הייחודית, בוחרת סוגיה משמעותית וחוקרת את הפרקטיקה שלה לעומק. בתוך תהליך זה נבנה חיבור בין פדגוגיה לבינה מלאכותית באופן שמעשיר תהליכי הוראה, למידה והערכה ומאפשר התאמה מדויקת יותר ללומדים וללומדות.
          </p>
          <p>
            המהלך מבוסס על קהילות לומדות, שיתוף פעולה והתנסות, ומאפשר למורות להוביל שינוי מתוך הכיתה — שינוי מקצועי, ערכי ורלוונטי לעולם המשתנה.
          </p>
        </div>

        {/* Featured authentic quote */}
        <div
          className="max-w-2xl mx-auto text-center animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="relative bg-white/6 border border-white/10 rounded-2xl px-6 md:px-8 py-5 md:py-6 backdrop-blur-sm">
            <span className="quote-mark absolute top-2 right-4 text-5xl text-coral/30">&ldquo;</span>
            <p className="text-white/90 text-sm md:text-base lg:text-lg italic leading-relaxed pr-4">
              &ldquo;דווקא תלמידים שמתקשים בדרך כלל, הצליחו להבין וללמוד מושגים מורכבים באופן עצמאי לחלוטין באמצעות השיח עם ה-AI… ה-AI הפך למרחב בטוח לטעות ללא שיפוטיות.&rdquo;
            </p>
            <p className="text-white/50 text-xs md:text-sm mt-3 font-medium">
              — אהוד מלכה, מורה מוביל, בית ספר עליות
            </p>
          </div>
        </div>
      </div>

      {/* Soft bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent z-10" />
    </header>
  );
}
