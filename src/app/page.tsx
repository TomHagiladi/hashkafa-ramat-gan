"use client";

import { useState, useMemo } from "react";
import { schools } from "@/data/schools";
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
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("הכל");
  const [sortBy, setSortBy] = useState<"default" | "level" | "alpha">("default");

  const filtered = useMemo(() => {
    const list = schools.filter((s) => {
      const matchesSearch =
        !search || s.schoolName.includes(search);
      const matchesTopic = !selectedTopic || s.topic === selectedTopic;
      const matchesLevel =
        selectedLevel === "הכל" || s.level === selectedLevel;
      return matchesSearch && matchesTopic && matchesLevel;
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
  }, [search, selectedTopic, selectedLevel, sortBy]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">דילוג לתוכן הראשי</a>
      <main id="main-content" className="min-h-screen">
      <Hero />

      {/* Warm divider */}
      <div className="divider-warm max-w-xs mx-auto my-0" aria-hidden="true" />

      <Vision />

      <ProjectModel />

      {/* Schools section */}
      <section id="schools" className="relative bg-cream-dark/50 py-12 md:py-20 scroll-mt-4" aria-labelledby="schools-heading">
        <div className="max-w-5xl mx-auto px-4 md:px-6 mb-8 md:mb-10">
          <p className="text-coral font-semibold text-sm tracking-widest uppercase mb-4">
            בתי הספר
          </p>
          <h2 id="schools-heading" className="text-2xl md:text-4xl font-bold text-navy mb-4 leading-snug">
            27 סיפורים של שינוי
          </h2>
          <p className="text-charcoal-light text-base md:text-lg max-w-3xl leading-relaxed">
            כל בית ספר בחר נושא, הרכיב צוות, ויצא לדרך. לחצו על כל כרטיס כדי לקרוא את הסיפור המלא.
          </p>
        </div>

        <FilterBar
          search={search}
          onSearchChange={setSearch}
          selectedTopic={selectedTopic}
          onTopicChange={setSelectedTopic}
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalResults={filtered.length}
        />

        {/* Cards Grid */}
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-10">
          {filtered.length === 0 ? (
            <div className="text-center py-20 animate-scale-in">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-gray-300">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-400 mb-2">
                לא נמצאו תוצאות
              </h3>
              <p className="text-gray-400 text-sm">
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
      </section>

      {/* Footer */}
      <footer className="relative bg-navy-dark text-white py-12">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
          <h3 className="text-lg font-bold mb-3">השקפה AI</h3>
          <p className="text-white/70 text-sm mb-1">
            עיריית רמת גן &middot; פסג&quot;ה רמת גן &middot; מהלך השקפה &middot; מחוז תל אביב
          </p>
          <nav aria-label="קישורים נוספים" className="mt-4">
            <Link
              href="/accessibility"
              className="text-white/80 hover:text-white text-sm underline focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-navy-dark rounded"
            >
              הצהרת נגישות
            </Link>
          </nav>
          <p className="text-white/50 text-xs mt-4">
            &copy; תשפ&quot;ו 2025-2026 &middot; כל הזכויות שמורות
          </p>
        </div>
      </footer>
      </main>
    </>
  );
}
