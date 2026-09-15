import React from 'react';
import { Category } from '../types/prompt';

const CATEGORIES: Category[] = [
  'Website',
  'Mobile App',
  'SaaS',
  'Dashboard',
  'Portfolio',
  'E-commerce',
  'AI Product',
  'Developer Tool',
  'Marketing',
  'Other',
];

interface CategorySelectorProps {
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold uppercase tracking-wider text-[#756B72]">
          Optional Category
        </label>
        {selectedCategory && (
          <button
            type="button"
            onClick={() => onSelectCategory(null)}
            className="text-xs text-[#D94F83] hover:text-[#B83B6D] transition-colors"
          >
            Auto-detect
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="Prompt Category">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelectCategory(isSelected ? null : cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-150 ${
                isSelected
                  ? 'bg-[#F8DCE7] border-[#D94F83] text-[#29232A] font-semibold shadow-2xs'
                  : 'bg-white border-[#EDE3E7] text-[#756B72] hover:text-[#29232A] hover:bg-[#FDF1F5]/70 hover:border-[#D94F83]/30'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};
