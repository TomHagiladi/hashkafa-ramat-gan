import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "השקפה AI - מהלך השקפה מורות מובילות | עיריית רמת גן",
  description:
    "חלון ראווה למהלך \"השקפה — מורות מובילות בשילוב כלי בינה מלאכותית\" של פסג\"ה רמת גן ועיריית רמת גן: 29 בתי ספר יסודיים, על־יסודיים וחינוך מיוחד יצאו למסע משותף של פיתוח פדגוגי והטמעת בינה מלאכותית בחינוך, כל אחד בדרכו הייחודית.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;500;600;700;800;900&family=Heebo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
