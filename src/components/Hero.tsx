import Image from "next/image";
import PartnerLogos from "./PartnerLogos";
import NeuralMesh from "./NeuralMesh";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-abyss">
      {/* Layer 1 — animated aurora gradient mesh (deep violet → cyan → magenta) */}
      <div className="absolute inset-0 aurora-mesh" />

      {/* Layer 2 — circuit grid blueprint backdrop */}
      <div className="absolute inset-0 circuit-grid opacity-40" />

      {/* Layer 3 — neural network mesh with pulsing nodes */}
      <NeuralMesh density={32} linkDistance={240} />

      {/* Layer 4 — film grain texture */}
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 pt-8 pb-72 md:pt-14 md:pb-96">
        {/* Partner logos bar — glassed up */}
        <div className="mb-12 md:mb-16 animate-fade-in">
          <div className="glass-circuit rounded-2xl px-5 py-4 md:px-7 md:py-5">
            <PartnerLogos />
            <p className="text-ink-muted text-[11px] md:text-xs font-light tracking-wide text-center mt-3 font-mono">
              עיריית רמת גן · פסג&quot;ה רמת גן · מהלך השקפה · מחוז תל אביב
            </p>
          </div>
        </div>

        {/* Eyebrow */}
        <p
          className="eyebrow-he justify-center mb-5 md:mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.05s" }}
        >
          <span>תשפ&quot;ו · 2025—2026 · 29 בתי ספר</span>
        </p>

        {/* Main headline — display weight 900, glow gradient on second line */}
        <h1
          className="display text-center text-4xl md:text-6xl lg:text-7xl text-ink mb-7 md:mb-9 animate-fade-in-up"
          style={{ animationDelay: "0.15s", lineHeight: "1.1" }}
        >
          <span className="block">כשבינה מלאכותית</span>
          <span className="block glow-text">פוגשת את הלב של החינוך</span>
        </h1>

        {/* Body copy — paragraphs */}
        <div
          className="text-ink-soft text-center text-base md:text-lg max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed font-light animate-fade-in-up space-y-4"
          style={{ animationDelay: "0.3s" }}
        >
          <p>
            &quot;מהלך השקפה – מורות מובילות&quot; בשילוב כלי בינה מלאכותית הוא יוזמה עירונית חדשנית וראשונה מסוגה בישראל בהובלת פסג&quot;ה רמת גן ועיריית רמת גן. במסגרת המהלך, 29 בתי ספר יסודיים, על־יסודיים וחינוך מיוחד יוצרים יחד מרחב משותף של קהילה לומדת, חוקרת ומתפתחת מקצועית.
          </p>
          <p>
            בתי הספר יצאו למסע פדגוגי משותף, שבו כל קהילה פועלת מתוך זהותה הייחודית, בוחרת סוגיה משמעותית וחוקרת את הפרקטיקה שלה לעומק. בתוך תהליך זה נבנה חיבור בין פדגוגיה לבינה מלאכותית באופן שמעשיר תהליכי הוראה, למידה והערכה.
          </p>
        </div>

        {/* Featured authentic quote — neon-styled card */}
        <div
          className="max-w-2xl mx-auto text-center animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <div className="relative glass-circuit rounded-2xl px-6 md:px-9 py-6 md:py-7 glow-neuron">
            <span className="quote-mark absolute top-3 right-5 text-5xl">&ldquo;</span>
            <p className="text-ink text-sm md:text-base lg:text-lg italic leading-relaxed pr-4">
              &ldquo;דווקא תלמידים שמתקשים בדרך כלל, הצליחו להבין וללמוד מושגים מורכבים באופן עצמאי לחלוטין באמצעות השיח עם ה-AI… ה-AI הפך למרחב בטוח לטעות ללא שיפוטיות.&rdquo;
            </p>
            <p className="text-ink-muted text-xs md:text-sm mt-4 font-mono tracking-wide">
              — אהוד מלכה · מורה מוביל · בית ספר עליות
            </p>
          </div>
        </div>
      </div>

      {/* Layer 5 — line-art collaboration illustration anchors the hero bottom (the human element) */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        {/* Soft glow gradient to lift the artwork from the mesh */}
        <div className="absolute bottom-0 left-0 right-0 h-72 md:h-80 bg-gradient-to-t from-abyss via-abyss/85 to-transparent" />
        <div className="relative flex justify-center pb-3 md:pb-4">
          <Image
            src="/line-art-collaboration.png"
            alt="ציור קווי של קבוצת מורים ומורות לומדים יחד מול מחשב נייד — מבטא את רוח הקהילה הלומדת של מהלך השקפה"
            width={840}
            height={460}
            priority
            className="w-[88%] sm:w-[68%] md:w-[52%] lg:w-[44%] max-w-[640px] h-auto opacity-90"
          />
        </div>
      </div>
    </header>
  );
}
