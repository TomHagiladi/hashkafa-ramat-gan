import Image from "next/image";

type CubeBase = {
  title: string;
  lines: { name: string; role: string }[];
  footer: string;
};

type CubeWithLogo = CubeBase & { logoSrc: string; logoAlt: string };

export default function ProjectModel() {
  const cubes: CubeWithLogo[] = [
    {
      title: "עיריית רמת גן",
      logoSrc: "/partners/ramat-gan.svg",
      logoAlt: "לוגו עיריית רמת גן",
      lines: [
        { name: "כרמל שאמה הכהן", role: "ראש העיר רמת גן" },
        { name: "לימור מרקנזון סגל", role: "מנהלת אגף החינוך בעיר רמת גן" },
        { name: "דפנה רייכמן", role: "סגנית מנהלת אגף החינוך ומנהלת מחלקת חדשנות ומו\"פ" },
        { name: "תום הגלעדי", role: "מוביל תחום הבינה המלאכותית" },
      ],
      footer: "מנחי ומנחות AI: ליאור איזנברג, ערן לבני, איתמר שחר, יעלה אגאי, נגה לי פיש, עדי דימרי, מיכל פוזין-גבאי, גלעד רביד, שי אשכנזי, יפעת משגב",
    },
    {
      title: "פסג\"ה רמת גן",
      logoSrc: "/partners/pisga.jpg",
      logoAlt: "לוגו פסג\"ה רמת גן",
      lines: [
        { name: "עדנה שמר", role: "מנהלת פסג\"ה רמת גן" },
        { name: "אורית פינטו", role: "סגנית פסג\"ה רמת גן" },
        { name: "רחל בראון שגב", role: "רפרנטית מהלך השקפה — מורות מובילות, פסג\"ה רמת גן" },
        { name: "ד\"ר קרן אמסילי", role: "הערכה ומדידה" },
      ],
      footer: "מנחות פדגוגיות: נויה פוקר-חזן, מור הרשקוביץ, מיה חכם, סיון צור, רונית בלום קופרברג, נועה שועלי",
    },
    {
      title: "משרד החינוך",
      logoSrc: "/partners/education-ministry.jpeg",
      logoAlt: "לוגו משרד החינוך — מחוז תל אביב",
      lines: [
        { name: "ד\"ר שירלי עצמון", role: "מפקחת פיתוח מקצועי, מחוז תל אביב" },
        { name: "דקלה שגיא", role: "מפקחת כוללת בתי הספר היסודיים, רמת גן" },
        { name: "אביבית קליין", role: "מפקחת חינוך על יסודי, העיר רמת גן" },
        { name: "דלילה כהן", role: "מפקחת חינוך ממלכתי דתי, יסודי ועל יסודי, רמת גן" },
        { name: "רינת שטינמץ-וולטר", role: "מפקחת חינוך מיוחד, רמת גן" },
        { name: "סיגל רז", role: "רכזת הדרכה מחוזית" },
      ],
      footer: "",
    },
    {
      title: "מורות מובילות בבתי הספר",
      logoSrc: "/partners/hashkafa.png",
      logoAlt: "לוגו מהלך השקפה",
      lines: [],
      footer: "מורות מובילות הן מורות מצוות בית הספר, המובילות קהילות למידה ופועלות לקידום תהליכי הוראה ולמידה באמצעות חקר הפרקטיקה. הן מקבלות הכשרה וליווי מתמשכים ומשמשות כסוכנות שינוי בתרבות הבית ספרית, תוך הובלת מנהיגות פדגוגית הצומחת מתוך הקהילה אל הכיתה.",
    },
  ];

  return (
    <section
      className="relative bg-void-soft py-16 md:py-28 overflow-hidden"
      aria-labelledby="model-heading"
    >
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 circuit-grid opacity-30" />
      {/* Glow blobs */}
      <div className="absolute top-20 left-[-120px] w-80 h-80 bg-circuit/8 blob blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-[-100px] w-72 h-72 bg-neuron/8 blob-2 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <p className="eyebrow-he mb-5 animate-fade-in-up">
          <span>המודל</span>
        </p>
        <h2
          id="model-heading"
          className="display text-3xl md:text-5xl text-ink mb-5 animate-fade-in-up"
          style={{ animationDelay: "0.08s" }}
        >
          מעטפת של <span className="glow-text">ליווי מקצועי</span>
        </h2>
        <p
          className="text-ink-soft text-base md:text-lg mb-12 md:mb-16 leading-relaxed max-w-4xl animate-fade-in-up"
          style={{ animationDelay: "0.16s" }}
        >
          המורות המובילות פועלות בתוך מעטפת מקצועית רחבה המשלבת ליווי פדגוגי והכוונה טכנולוגית. מנחות השקפה מלוות את התהליך הקהילתי והפדגוגי, מסייעות בזיהוי סוגיה, בהעמקת חקר הפרקטיקה, בהובלת שיח מקצועי ובבניית תהליכי למידה משמעותיים. לצד זאת, הליווי מדגיש גם את פיתוחה המקצועי של המובילה כמנהיגה פדגוגית: המנחות פועלות להעצמתה, לטיפוח תחושת המסוגלות שלה ולהרחבת כישורי ההובלה, תוך ליווי רפלקטיבי מתמשך והצמחה הדרגתית של יכולותיה להוביל תהליכים מורכבים ומשמעותיים. במקביל, מנחי ומנחות הבינה המלאכותית תומכים בהיכרות ובהטמעה של כלים מתקדמים, בהתנסות מעשית ובהרחבת אפשרויות ההוראה, הלמידה וההערכה. החיבור בין הליווי הפדגוגי לליווי הטכנולוגי יוצר מרחב בטוח ללמידה, התנסות, דיוק תהליכים, שאילת שאלות וצמיחה אישית ומקצועית.
        </p>

        {/* Four cubes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {cubes.map((cube, i) => (
            <article
              key={cube.title}
              className="group relative bg-void-rise/80 border border-wire rounded-2xl p-6 md:p-7 animate-fade-in-up flex flex-col card-circuit overflow-hidden"
              style={{ animationDelay: `${0.22 + i * 0.08}s` }}
            >
              {/* Top circuit accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: "linear-gradient(90deg, transparent, oklch(72% 0.22 305 / 0.6), oklch(75% 0.18 230 / 0.6), transparent)",
                }}
              />

              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-ink p-2 mb-5 flex items-center justify-center shadow-lg shadow-circuit/20">
                <Image
                  src={cube.logoSrc}
                  alt={cube.logoAlt}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-ink mb-4 leading-snug">
                {cube.title}
              </h3>
              {cube.lines.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {cube.lines.map((line) => (
                    <li
                      key={line.name}
                      className="text-ink-soft text-sm leading-relaxed"
                    >
                      <strong className="text-ink font-semibold">
                        {line.name}
                      </strong>
                      <span className="text-ink-muted"> — {line.role}</span>
                    </li>
                  ))}
                </ul>
              )}
              {cube.footer && (
                <p className="text-ink-muted text-sm leading-relaxed mt-auto">
                  {cube.footer}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
