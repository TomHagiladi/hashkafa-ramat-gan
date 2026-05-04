import Image from "next/image";

type CubeBase = {
  title: string;
  bg: string;
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
      bg: "bg-gold/8 border-gold/15",
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
      bg: "bg-coral/8 border-coral/15",
      lines: [
        { name: "עדנה שמר", role: "מנהלת פסג\"ה רמת גן" },
        { name: "אורית פינטו", role: "סגנית פסג\"ה רמת גן" },
        { name: "רחל בראון שגב", role: "רפרנטית מהלך השקפה — מורות מובילות, פסג\"ה רמת גן" },
        { name: "ד\"ר קרן אמסילי", role: "הערכה ומדידה" },
      ],
      footer: "מנחות פדגוגיות: נויה פוקר-חזן, מור הרשקוביץ, מיה חכם, סיון צור, רונית בלום קופרברג, נועה שועלי, אורלי אבינועם",
    },
    {
      title: "משרד החינוך",
      logoSrc: "/partners/ta-district.png",
      logoAlt: "לוגו מחוז תל אביב, משרד החינוך",
      bg: "bg-emerald-700/8 border-emerald-700/15",
      lines: [
        { name: "ד\"ר שירלי עצמון", role: "מפקחת פיתוח מקצועי, מחוז תל אביב" },
        { name: "דקלה שגיא", role: "מפקחת כוללת בתי הספר היסודיים, רמת גן" },
        { name: "אביבית קליין", role: "מפקחת חינוך על יסודי, העיר רמת גן" },
        { name: "דלילה כהן", role: "מפקחת חינוך ממלכתי דתי, יסודי ועל יסודי, רמת גן" },
        { name: "רינת שטינמץ-וולטר", role: "מפקחת חינוך מיוחד, רמת גן" },
      ],
      footer: "ליווי ופיקוח לתהליך הפדגוגי במחוז תל אביב וברמת גן.",
    },
    {
      title: "מורות מובילות בבתי הספר",
      logoSrc: "/partners/hashkafa.png",
      logoAlt: "לוגו מהלך השקפה",
      bg: "bg-navy/8 border-navy/15",
      lines: [],
      footer: "מורות מובילות הן מורות מצוות בית הספר, המובילות קהילות למידה ופועלות לקידום תהליכי הוראה ולמידה באמצעות חקר הפרקטיקה. הן מקבלות הכשרה וליווי מתמשכים ומשמשות כסוכנות שינוי בתרבות הבית ספרית, תוך הובלת מנהיגות פדגוגית הצומחת מתוך הקהילה אל הכיתה.",
    },
  ];

  return (
    <section className="relative bg-white py-12 md:py-24" aria-labelledby="model-heading">
      {/* Subtle background texture */}
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <p className="text-coral font-semibold text-sm tracking-widest uppercase mb-4 animate-fade-in-up">
          המודל
        </p>
        <h2
          id="model-heading"
          className="text-2xl md:text-4xl font-bold text-navy mb-4 leading-snug animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          מעטפת של ליווי מקצועי
        </h2>
        <p
          className="text-charcoal-light text-base md:text-lg mb-10 md:mb-14 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          המורות המובילות פועלות בתוך מעטפת מקצועית רחבה המשלבת ליווי פדגוגי והכוונה טכנולוגית. מנחות השקפה מלוות את התהליך הקהילתי והפדגוגי, מסייעות בזיהוי סוגיה, בהעמקת חקר הפרקטיקה, בהובלת שיח מקצועי ובבניית תהליכי למידה משמעותיים. לצד זאת, מנחי ומנחות הבינה המלאכותית תומכים בהיכרות ובהטמעה של כלים מתקדמים, בהתנסות מעשית ובהרחבת אפשרויות ההוראה, הלמידה וההערכה. החיבור בין הליווי הפדגוגי לליווי הטכנולוגי יוצר מרחב בטוח ללמידה, התנסות, דיוק תהליכים, שאילת שאלות וצמיחה אישית ומקצועית.
        </p>

        {/* Four cubes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {cubes.map((cube, i) => (
            <article
              key={cube.title}
              className={`${cube.bg} border rounded-2xl p-6 md:p-7 animate-fade-in-up flex flex-col`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-white shadow-sm border border-gray-100 p-2 mb-4 flex items-center justify-center">
                <Image
                  src={cube.logoSrc}
                  alt={cube.logoAlt}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-navy mb-4">
                {cube.title}
              </h3>
              {cube.lines.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {cube.lines.map((line) => (
                    <li key={line.name} className="text-charcoal-light text-sm leading-relaxed">
                      <strong className="text-navy">{line.name}</strong>
                      {" — "}
                      {line.role}
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-charcoal-light text-sm leading-relaxed mt-auto">
                {cube.footer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
