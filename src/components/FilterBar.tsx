"use client";

import { allCategories, allLevels } from "@/data/schools";

interface FilterBarProps {
  search: string;
  onSearchChange: (val: string) => void;
  selectedCategory: string;
  onCategoryChange: (val: string) => void;
  selectedLevel: string;
  onLevelChange: (val: string) => void;
  sortBy: "default" | "level" | "alpha";
  onSortChange: (val: "default" | "level" | "alpha") => void;
  totalResults: number;
}

const inputBase =
  "w-full py-2.5 px-4 pr-4 rounded-xl border border-wire bg-void-soft/80 focus:bg-void-rise focus:outline-none focus:ring-2 focus:ring-circuit text-sm transition-all text-ink placeholder:text-ink-faint";

const selectBase =
  "w-full py-2.5 px-4 pr-4 rounded-xl border border-wire bg-void-soft/80 focus:bg-void-rise focus:outline-none focus:ring-2 focus:ring-circuit text-sm appearance-none cursor-pointer transition-all text-ink";

export default function FilterBar({
  search,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedLevel,
  onLevelChange,
  sortBy,
  onSortChange,
  totalResults,
}: FilterBarProps) {
  return (
    <div
      className="sticky top-0 z-40 glass-circuit border-b border-wire-soft"
      role="search"
      aria-label="חיפוש וסינון בתי ספר"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          {/* Search */}
          <div className="relative flex-1 w-full group">
            <label htmlFor="school-search" className="sr-only">
              חיפוש לפי שם בית ספר
            </label>
            <span
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-faint transition-colors group-focus-within:text-circuit"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
              className={`${inputBase} pr-10 pl-4`}
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-3">
            {/* Pedagogical category filter */}
            <div className="relative w-full md:w-72">
              <label htmlFor="category-filter" className="sr-only">
                סינון לפי תחום פדגוגי
              </label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className={selectBase}
              >
                <option value="">כל התחומים</option>
                {allCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {/* Level filter */}
            <div className="relative w-full md:w-40">
              <label htmlFor="level-filter" className="sr-only">
                סינון לפי שלב חינוך
              </label>
              <select
                id="level-filter"
                value={selectedLevel}
                onChange={(e) => onLevelChange(e.target.value)}
                className={selectBase}
              >
                {allLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {/* Sort */}
            <div className="relative w-full md:w-44">
              <label htmlFor="sort-by" className="sr-only">
                בחירת סדר מיון
              </label>
              <select
                id="sort-by"
                value={sortBy}
                onChange={(e) =>
                  onSortChange(e.target.value as "default" | "level" | "alpha")
                }
                className={selectBase}
              >
                <option value="default">מיון: ברירת מחדל</option>
                <option value="level">מיון: לפי שלב</option>
                <option value="alpha">מיון: א-ב</option>
              </select>
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* Results count — neon pill */}
          <div
            className="bg-circuit/15 border border-circuit/30 text-circuit-bright text-xs font-mono font-bold px-5 py-2.5 rounded-full whitespace-nowrap self-center md:self-auto"
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
