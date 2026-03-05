"use client";

import { allTopics, allLevels } from "@/data/schools";

interface FilterBarProps {
  search: string;
  onSearchChange: (val: string) => void;
  selectedTopic: string;
  onTopicChange: (val: string) => void;
  selectedLevel: string;
  onLevelChange: (val: string) => void;
  totalResults: number;
}

export default function FilterBar({
  search,
  onSearchChange,
  selectedTopic,
  onTopicChange,
  selectedLevel,
  onLevelChange,
  totalResults,
}: FilterBarProps) {
  return (
    <div className="sticky top-0 z-40 glass-warm border-b border-gray-200/50 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row gap-3 items-center">
          {/* Search */}
          <div className="relative flex-1 w-full group">
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm transition-colors group-focus-within:text-coral">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="חיפוש לפי שם בית ספר..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pr-10 pl-4 py-2.5 rounded-xl border border-gray-200 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-coral/20 focus:border-coral/40 text-sm transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Topic filter */}
          <div className="relative w-full md:w-56">
            <select
              value={selectedTopic}
              onChange={(e) => onTopicChange(e.target.value)}
              className="w-full py-2.5 px-4 pr-4 rounded-xl border border-gray-200 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold/40 text-sm appearance-none cursor-pointer transition-all"
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
          <div className="relative w-full md:w-44">
            <select
              value={selectedLevel}
              onChange={(e) => onLevelChange(e.target.value)}
              className="w-full py-2.5 px-4 pr-4 rounded-xl border border-gray-200 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy/15 focus:border-navy/30 text-sm appearance-none cursor-pointer transition-all"
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

          {/* Results count */}
          <div className="bg-navy text-white text-xs font-bold px-5 py-2.5 rounded-full whitespace-nowrap shadow-sm animate-scale-in">
            {totalResults} בתי ספר
          </div>
        </div>
      </div>
    </div>
  );
}
