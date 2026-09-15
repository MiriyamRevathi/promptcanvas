import React from 'react';
import { Suggestion } from '../types/prompt';
import { Plus, Check } from 'lucide-react';

interface SuggestionCardProps {
  suggestion: Suggestion;
  isApplied: boolean;
  onApply: (suggestion: Suggestion) => void;
}

export const SuggestionCard: React.FC<SuggestionCardProps> = ({
  suggestion,
  isApplied,
  onApply,
}) => {
  return (
    <div
      className={`p-3.5 rounded-xl border transition-all duration-150 flex items-start justify-between gap-3 ${
        isApplied
          ? 'bg-[#FDF1F5]/60 border-[#EDE3E7] opacity-80'
          : 'bg-white border-[#EDE3E7] hover:border-[#D94F83]/40 shadow-2xs'
      }`}
    >
      <div className="space-y-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="text-xs font-semibold text-[#29232A]">
            {suggestion.title}
          </h4>
          <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-[#FBF7F2] text-[#756B72] border border-[#EDE3E7]">
            Section: {suggestion.targetSection}
          </span>
        </div>
        <p className="text-xs text-[#756B72] leading-relaxed">
          {suggestion.description}
        </p>
      </div>

      <button
        type="button"
        disabled={isApplied}
        onClick={() => onApply(suggestion)}
        className={`shrink-0 inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg transition-colors ${
          isApplied
            ? 'bg-[#EBF7F0] text-[#4F9D78] border border-[#D1EBDD] cursor-default'
            : 'bg-[#FDF1F5] hover:bg-[#F8DCE7] text-[#B83B6D] border border-[#F8DCE7] cursor-pointer'
        }`}
      >
        {isApplied ? (
          <>
            <Check className="w-3 h-3 text-[#4F9D78]" />
            <span>Added</span>
          </>
        ) : (
          <>
            <Plus className="w-3 h-3 text-[#D94F83]" />
            <span>Add</span>
          </>
        )}
      </button>
    </div>
  );
};
