export default function ProjectModel() {
  const stats = [
    { number: "30", label: "בתי ספר", color: "text-navy" },
    { number: "12", label: "מנחי AI", color: "text-coral" },
    { number: "8", label: "מפגשי הכשרה", color: "text-gold-muted" },
    { number: "17", label: "נושאים ייחודיים", color: "text-navy-light" },
  ];

  const layers = [
    {
      title: "מורות מובילות",
      description: "בכל בית ספר, צוות של 3 מורים מובילים חוקר נושא פדגוגי ייחודי ומטמיע את התובנות בכיתה.",
      icon: "👩‍🏫",
      bg: "bg-coral/8 border-coral/15",
    },
    {
      title: "מנחות השקפה",
      description: "מנחים פדגוגיים מלווים את הקהילות בתהליכי חקר, שיח מקצועי, ובניית תרבות למידה משותפת.",
      icon: "🌟",
      bg: "bg-gold/8 border-gold/15",
    },
    {
      title: "מנחי בינה מלאכותית",
      description: "12 מנחי AI מומחים מלווים את בתי הספר בזיהוי הזדמנויות, בחירת כלים, ויישום מעשי בכיתה.",
      icon: "🤖",
      bg: "bg-navy/8 border-navy/15",
    },
  ];

  return (
    <section className="relative bg-white py-16 md:py-24">
      {/* Subtle background texture */}
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <p className="text-coral font-semibold text-sm tracking-widest uppercase mb-4 animate-fade-in-up">
          המודל
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-snug animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          שלוש שכבות של ליווי מקצועי
        </h2>
        <p
          className="text-charcoal-light text-lg mb-14 max-w-3xl leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          הפרויקט בנוי על מודל ליווי ייחודי — כל בית ספר מקבל שלוש שכבות של תמיכה מקצועית, מהכיתה ועד הרמה העירונית.
        </p>

        {/* Three layers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {layers.map((layer, i) => (
            <div
              key={layer.title}
              className={`${layer.bg} border rounded-2xl p-7 animate-fade-in-up`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <span className="text-3xl mb-4 block">{layer.icon}</span>
              <h3 className="text-lg font-bold text-navy mb-2">
                {layer.title}
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                {layer.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connecting text */}
        <p
          className="text-center text-charcoal-light text-base mb-12 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          הפרויקט מנוהל בשיתוף בין <strong className="text-navy">עיריית רמת גן</strong>, <strong className="text-navy">מרכז פסג&quot;ה רמת גן</strong> ו<strong className="text-navy">תום הגלעדי</strong> — מומחה לבינה מלאכותית בחינוך שמוביל את ההכשרה וההטמעה.
        </p>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-cream/80 rounded-2xl py-6 px-4"
            >
              <div className={`text-4xl md:text-5xl font-black ${stat.color} mb-1`}>
                {stat.number}
              </div>
              <div className="text-sm text-charcoal-light font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
