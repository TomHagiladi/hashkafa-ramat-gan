import Image from "next/image";

const PARTNERS = [
  { src: "/partners/ramat-gan.svg", alt: "עיריית רמת גן", name: "עיריית רמת גן" },
  { src: "/partners/pisga.jpg", alt: "פסג\"ה רמת גן", name: "פסג\"ה רמת גן" },
  { src: "/partners/hashkafa.png", alt: "מהלך השקפה - מורות מובילות", name: "מהלך השקפה" },
  { src: "/partners/ta-district.png", alt: "מורים מובילים מחוז תל אביב", name: "מחוז תל אביב" },
];

export default function PartnerLogos({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const bgClass = variant === "dark" ? "bg-white/95" : "bg-cream";
  return (
    <div className="w-full overflow-x-auto scrollbar-hide" role="region" aria-label="לוגואים של גופי השותפות">
      <ul className="flex items-center justify-center gap-3 md:gap-5 list-none p-0 m-0 mx-auto w-fit">
        {PARTNERS.map((p) => (
          <li
            key={p.src}
            className={`${bgClass} rounded-lg shadow-md flex items-center justify-center w-16 h-16 md:w-20 md:h-20 p-2 shrink-0`}
            title={p.name}
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
