"use client";

import { useState, useMemo } from "react";
import { schools } from "@/data/schools";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import ProjectModel from "@/components/ProjectModel";
import TrainingJourney from "@/components/TrainingJourney";
import FilterBar from "@/components/FilterBar";
import SchoolCard from "@/components/SchoolCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("הכל");

  const filtered = useMemo(() => {
    return schools.filter((s) => {
      const matchesSearch =
        !search || s.schoolName.includes(search);
      const matchesTopic = !selectedTopic || s.topic === selectedTopic;
      const matchesLevel =
        selectedLevel === "הכל" || s.level === selectedLevel;
      return matchesSearch && matchesTopic && matchesLevel;
    });
  }, [search, selectedTopic, selectedLevel]);

  return (
    <main className="min-h-screen">
      <Hero />

      {/* Warm divider */}
      <div className="divider-warm max-w-xs mx-auto my-0" />

      <Vision />

      <ProjectModel />

      <TrainingJourney />

      {/* Schools section */}
      <section className="relative bg-cream-dark/50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 mb-10">
          <p className="text-coral font-semibold text-sm tracking-widest uppercase mb-4">
            בתי הספר
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-snug">
            30 סיפורים של שינוי
          </h2>
          <p className="text-charcoal-light text-lg max-w-3xl leading-relaxed">
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
          totalResults={filtered.length}
        />

        {/* Cards Grid */}
        <div className="max-w-5xl mx-auto px-6 py-10">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-lg font-bold mb-3">השקפה AI</h3>
          <p className="text-white/50 text-sm mb-1">
            עיריית רמת גן &middot; אגף חינוך &middot; מרכז פסג&quot;ה רמת גן
          </p>
          <p className="text-white/30 text-xs mt-4">
            &copy; תשפ&quot;ו 2025-2026 &middot; כל הזכויות שמורות
          </p>
        </div>
      </footer>
    </main>
  );
}
