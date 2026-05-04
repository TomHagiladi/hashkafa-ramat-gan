"use client";

import { allTopics, allLevels } from "@/data/schools";

interface FilterBarProps {
  search: string;
  onSearchChange: (val: string) => void;
  selectedTopic: string;
  onTopicChange: (val: string) => void;
  selectedLevel: string;
  onLevelChange: (val: string) => void;
  sortBy: "default" | "level" | "alpha";
  onSortChange: (val: "default" | "level" | "alpha") => void;
  totalResults: number;
}

export default function FilterBar({
  search,
  onSearchChange,
  selectedTopic,
  onTopicChange,
  selectedLevel,
  onLevelChange,
  sortBy,
  onSortChange,
  totalResults,
}: FilterBarProps) {
  return (
    <div className="sticky top-0 z-40 glass-warm border-b border-gray-200/50 shadow-sm" role="search" aria-label="חיפוש וסינון בתי ספר">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          {/* Search */}
          <div className="relative flex-1 w-full group">
            <label htmlFor="school-search" className="sr-only">חיפוש לפי שם בית ספר</label>
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-colors group-focus-within:text-coral" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              id="school-search"
              type="text"
              placeholder="חיפוש לפי שם בית ספר..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pr-10 pl-4 py-2.5 rounded-xl border border-gray-300 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-coral text-sm transition-all placeholder:text-gray-500 text-charcoal"
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-3">
            {/* Topic filter */}
            <div className="relative w-full md:w-56">
              <label htmlFor="topic-filter" className="sr-only">סינון לפי נושא</label>
              <select
                id="topic-filter"
                value={selectedTopic}
                onChange={(e) => onTopicChange(e.target.value)}
                className="w-full py-2.5 px-4 pr-4 rounded-xl border border-gray-300 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold text-sm appearance-none cursor-pointer transition-all text-charcoal"
              >
                <option value="">כל הנושאים</option>
                {allTopics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {/* Level filter */}
            <div className="relative w-full md:w-40">
              <label htmlFor="level-filter" className="sr-only">סינון לפי שלב חינוך</label>
              <select
                id="level-filter"
                value={selectedLevel}
                onChange={(e) => onLevelChange(e.target.value)}
                className="w-full py-2.5 px-4 pr-4 rounded-xl border border-gray-300 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy text-sm appearance-none cursor-pointer transition-all text-charcoal"
              >
                {allLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {/* Sort */}
            <div className="relative w-full md:w-44">
              <label htmlFor="sort-by" className="sr-only">בחירת סדר מיון</label>
              <select
                id="sort-by"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value as "default" | "level" | "alpha")}
                className="w-full py-2.5 px-4 pr-4 rounded-xl border border-gray-300 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-coral text-sm appearance-none cursor-pointer transition-all text-charcoal"
              >
                <option value="default">מיון: ברירת מחדל</option>
                <option value="level">מיון: לפי שלב</option>
                <option value="alpha">מיון: א-ב</option>
              </select>
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* Results count */}
          <div
            className="bg-navy text-white text-xs font-bold px-5 py-2.5 rounded-full whitespace-nowrap shadow-sm self-center md:self-auto"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {totalResults} בתי ספר
          </div>
        </div>
      </div>
    </div>
  );
}
