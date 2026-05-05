"use client";

import { useState, useMemo } from "react";
import { schools, schoolCategoryById } from "@/data/schools";
import Link from "next/link";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import ProjectModel from "@/components/ProjectModel";
import FilterBar from "@/components/FilterBar";
import SchoolCard from "@/components/SchoolCard";

const LEVEL_ORDER: Record<string, number> = {
  "יסודי": 1,
  "על יסודי": 2,
  'חנ"מ': 3,
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("הכל");
  const [sortBy, setSortBy] = useState<"default" | "level" | "alpha">("default");

  const filtered = useMemo(() => {
    const list = schools.filter((s) => {
      const matchesSearch =
        !search || s.schoolName.includes(search);
      const matchesCategory =
        !selectedCategory || schoolCategoryById[s.id] === selectedCategory;
      const matchesLevel =
        selectedLevel === "הכל" || s.level === selectedLevel;
      return matchesSearch && matchesCategory && matchesLevel;
    });
    if (sortBy === "alpha") {
      return [...list].sort((a, b) => a.schoolName.localeCompare(b.schoolName, "he"));
    }
    if (sortBy === "level") {
      return [...list].sort((a, b) => {
        const la = LEVEL_ORDER[a.level] ?? 99;
        const lb = LEVEL_ORDER[b.level] ?? 99;
        if (la !== lb) return la - lb;
        return a.schoolName.localeCompare(b.schoolName, "he");
      });
    }
    return list;
  }, [search, selectedCategory, selectedLevel, sortBy]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">דילוג לתוכן הראשי</a>
      <main id="main-content" className="min-h-screen bg-void">
        <Hero />

        <Vision />

        <ProjectModel />

        {/* Schools section */}
        <section
          id="schools"
          className="relative bg-abyss py-16 md:py-24 scroll-mt-4 overflow-hidden"
          aria-labelledby="schools-heading"
        >
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 circuit-grid opacity-25" />
          {/* Glow */}
          <div className="absolute top-40 right-[-150px] w-96 h-96 bg-neuron/8 blob blur-3xl pointer-events-none" />
          <div className="absolute bottom-40 left-[-120px] w-80 h-80 bg-circuit/8 blob-2 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="max-w-5xl mx-auto px-4 md:px-6 mb-10 md:mb-14">
              <p className="eyebrow-he mb-5 animate-fade-in-up">
                <span>בתי הספר</span>
              </p>
              <h2
                id="schools-heading"
                className="display text-3xl md:text-5xl text-ink mb-5 animate-fade-in-up"
                style={{ animationDelay: "0.08s" }}
              >
                29 סיפורים של <span className="glow-text">שינוי</span>
              </h2>
              <p
                className="text-ink-soft text-base md:text-lg max-w-3xl leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.16s" }}
              >
                כל בית ספר בחר נושא, הרכיב צוות, ויצא לדרך. לחצו על כל כרטיס כדי לקרוא את הסיפור המלא.
              </p>
            </div>

            <FilterBar
              search={search}
              onSearchChange={setSearch}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedLevel={selectedLevel}
              onLevelChange={setSelectedLevel}
              sortBy={sortBy}
              onSortChange={setSortBy}
              totalResults={filtered.length}
            />

            {/* Cards Grid */}
            <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
              {filtered.length === 0 ? (
                <div className="text-center py-20 animate-scale-in">
                  <div className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="56"
                      height="56"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto text-ink-faint"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-ink-muted mb-2">
                    לא נמצאו תוצאות
                  </h3>
                  <p className="text-ink-faint text-sm">
                    נסו לשנות את מילות החיפוש או לבחור סינון אחר
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                  {filtered.map((school, i) => (
                    <SchoolCard key={school.id} school={school} index={i} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-abyss border-t border-wire-soft py-12">
          <div className="absolute inset-0 grain pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
            <h3 className="display text-2xl md:text-3xl text-ink mb-3">
              השקפה <span className="glow-text">AI</span>
            </h3>
            <p className="text-ink-muted text-sm mb-1 font-mono">
              עיריית רמת גן · פסג&quot;ה רמת גן · מהלך השקפה · מחוז תל אביב
            </p>
            <nav aria-label="קישורים נוספים" className="mt-5">
              <Link
                href="/accessibility"
                className="text-ink-soft hover:text-circuit-bright text-sm underline focus:outline-none focus:ring-2 focus:ring-circuit focus:ring-offset-2 focus:ring-offset-abyss rounded transition-colors"
              >
                הצהרת נגישות
              </Link>
            </nav>
            <p className="text-ink-faint text-xs mt-5 font-mono">
              &copy; תשפ&quot;ו 2025-2026 &middot; כל הזכויות שמורות
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
