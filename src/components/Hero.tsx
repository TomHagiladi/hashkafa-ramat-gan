import Image from "next/image";

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
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-10 pb-20 md:pt-16 md:pb-28">
        {/* Logos bar */}
        <div className="flex items-center justify-center gap-4 mb-14 animate-fade-in">
          <Image
            src="/ramat-gan-logo.svg"
            alt="Ramat Gan Municipality Logo"
            width={56}
            height={56}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/95 p-1 shadow-lg"
          />
          <div className="h-8 w-px bg-white/20" />
          <p className="text-white/70 text-sm font-light tracking-wide">
            עיריית רמת גן &middot; אגף חינוך &middot; מרכז פסג&quot;ה
          </p>
        </div>

        {/* Main headline */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white text-center mb-6 leading-tight animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          כשבינה מלאכותית
          <br />
          <span className="text-coral-light">פוגשת את הלב של החינוך</span>
        </h1>

        <p
          className="text-white/65 text-center text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light animate-fade-in-up"
          style={{ animationDelay: "0.25s" }}
        >
          פרויקט עירוני ראשון מסוגו בישראל — 30 בתי ספר ברמת גן יצאו למסע משותף של הטמעת בינה מלאכותית בחינוך, כל אחד בדרכו הייחודית.
        </p>

        {/* Featured quote */}
        <div
          className="max-w-2xl mx-auto text-center animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="relative bg-white/6 border border-white/10 rounded-2xl px-8 py-6 backdrop-blur-sm">
            <span className="quote-mark absolute top-2 right-4 text-5xl text-coral/30">&ldquo;</span>
            <p className="text-white/85 text-base md:text-lg italic leading-relaxed pr-4">
              הבינה המלאכותית לא החליפה אותנו — היא נתנה לנו את הזמן לראות כל ילד. לראות אותו ממש.
            </p>
            <p className="text-white/45 text-sm mt-3 font-medium">
              — מיכל לוי, מורה מובילה, בית ספר נבון
            </p>
          </div>
        </div>
      </div>

      {/* Soft bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent z-10" />
    </header>
  );
}
