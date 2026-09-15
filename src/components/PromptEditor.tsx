import React from 'react';
import {
  PromptSection as PromptSectionType,
  PromptSections,
  QualityScoreData,
  Suggestion,
} from '../types/prompt';
import { PromptSection } from './PromptSection';
import { QualityScore } from './QualityScore';
import { SuggestionCard } from './SuggestionCard';
import { Sparkles, FileText, CheckCircle2, Copy } from 'lucide-react';
import { formatPromptAsText } from '../lib/formatPrompt';

interface PromptEditorProps {
  title: string;
  sections: PromptSections;
  quality: QualityScoreData;
  suggestions: Suggestion[];
  appliedSuggestionIds: string[];
  onUpdateSection: (key: PromptSectionType['key'], content: string) => void;
  onApplySuggestion: (suggestion: Suggestion) => void;
  onToast: (msg: string) => void;
  viewMode: 'sections' | 'document';
}

export const PromptEditor: React.FC<PromptEditorProps> = ({
  title,
  sections,
  quality,
  suggestions,
  appliedSuggestionIds,
  onUpdateSection,
  onApplySuggestion,
  onToast,
  viewMode,
}) => {
  const sectionKeys: Array<keyof PromptSections> = [
    'goal',
    'audience',
    'design',
    'features',
    'content',
    'ux',
    'technical',
    'constraints',
  ];

  const handleCopyDocument = async () => {
    try {
      const text = formatPromptAsText(title, sections);
      await navigator.clipboard.writeText(text);
      onToast('Prompt copied to clipboard.');
    } catch {
      onToast('Failed to copy to clipboard.');
    }
  };

  return (
    <div className="space-y-6">
      {/* Quality Score & Improvement Suggestions Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Quality Score card */}
        <div className="lg:col-span-5">
          <QualityScore score={quality} />
        </div>

        {/* Make it stronger (Suggestions) */}
        <div className="lg:col-span-7 bg-white border border-[#EDE3E7] rounded-xl p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-[#FDF1F5] text-[#D94F83] flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#756B72]">
                Make it stronger
              </h3>
            </div>
            <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
              {suggestions.map((sug) => (
                <SuggestionCard
                  key={sug.id}
                  suggestion={sug}
                  isApplied={appliedSuggestionIds.includes(sug.id)}
                  onApply={onApplySuggestion}
                />
              ))}
            </div>
          </div>
          <div className="pt-3 mt-3 border-t border-[#EDE3E7] text-[11px] text-[#756B72] flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#4F9D78] shrink-0" />
            <span>Clicking "Add" automatically appends guidelines into that section.</span>
          </div>
        </div>
      </div>

      {/* Main Content Area: Either Section Cards OR Full Document Card */}
      {viewMode === 'sections' ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#756B72]">
              Structured Sections ({sectionKeys.length})
            </span>
            <span className="text-xs text-[#756B72]">
              Every section can be edited and saved independently
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sectionKeys.map((key) => (
              <PromptSection
                key={key}
                section={sections[key]}
                onUpdate={onUpdateSection}
                onToast={onToast}
              />
            ))}
          </div>
        </div>
      ) : (
        /* Full Document View (Clean document-style card) */
        <div className="bg-white border border-[#EDE3E7] rounded-2xl p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#EDE3E7]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FDF1F5] text-[#D94F83] flex items-center justify-center">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#29232A]">
                  {title}
                </h3>
                <p className="text-xs text-[#756B72]">
                  Complete plain text format ready to copy into any LLM or IDE
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleCopyDocument}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#D94F83] hover:bg-[#B83B6D] text-white transition-colors cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Full Prompt</span>
            </button>
          </div>

          <div className="bg-[#FBF7F2] border border-[#EDE3E7] rounded-xl p-6 font-mono text-xs sm:text-sm text-[#29232A] whitespace-pre-line leading-relaxed overflow-x-auto max-h-[600px] overflow-y-auto">
            {formatPromptAsText(title, sections)}
          </div>
        </div>
      )}
    </div>
  );
};
