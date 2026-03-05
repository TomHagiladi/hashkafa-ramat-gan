import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "השקפה AI - קהילות למידה מקצועיות | עיריית רמת גן",
  description:
    "חלון ראווה לפרויקט העירוני להטמעת בינה מלאכותית בבתי הספר ברמת גן. 30 בתי ספר, 17 נושאים ייחודיים, סיפור אחד של שינוי חינוכי.",
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
