import React, { useState } from 'react';
import {
  Category,
  PromptMode,
  PromptSections,
  QualityScoreData,
} from '../types/prompt';
import { StatusBadge } from './StatusBadge';
import { ModeSelector } from './ModeSelector';
import {
  Copy,
  CheckCircle2,
  Bookmark,
  FileText,
  RotateCcw,
  Edit2,
  Check,
} from 'lucide-react';
import { formatPromptAsText } from '../lib/formatPrompt';

interface PromptResultProps {
  originalIdea: string;
  category: Category;
  mode: PromptMode;
  quality: QualityScoreData;
  title: string;
  onUpdateTitle: (newTitle: string) => void;
  onModeChange: (newMode: PromptMode) => void;
  sections: PromptSections;
  isSaved: boolean;
  onSave: () => void;
  onNewPrompt: () => void;
  onToast: (msg: string) => void;
  viewMode: 'sections' | 'document';
  onToggleViewMode: (mode: 'sections' | 'document') => void;
}

export const PromptResult: React.FC<PromptResultProps> = ({
  originalIdea,
  category,
  mode,
  quality,
  title,
  onUpdateTitle,
  onModeChange,
  sections,
  isSaved,
  onSave,
  onNewPrompt,
  onToast,
  viewMode,
  onToggleViewMode,
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [draftTitle, setDraftTitle] = useState(title);
  const [hasCopied, setHasCopied] = useState(false);

  const handleTitleSubmit = () => {
    if (draftTitle.trim()) {
      onUpdateTitle(draftTitle.trim());
      setIsEditingTitle(false);
      onToast('Prompt title updated.');
    }
  };

  const handleCopy = async () => {
    try {
      const text = formatPromptAsText(title, sections);
      await navigator.clipboard.writeText(text);
      setHasCopied(true);
      onToast('Prompt copied to clipboard.');
      setTimeout(() => setHasCopied(false), 2500);
    } catch {
      onToast('Failed to copy. Please allow clipboard permissions.');
    }
  };

  return (
    <div className="bg-white border border-[#EDE3E7] rounded-2xl p-6 shadow-xs space-y-5">
      {/* Top row: Title and status tags */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EDE3E7]">
        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D94F83]">
              Structured Output
            </span>
            <span className="text-[#EDE3E7]">/</span>
            <StatusBadge label={category} variant="category" />
            <StatusBadge
              label={`Score ${quality.overall}%`}
              variant="score"
            />
          </div>

          {isEditingTitle ? (
            <div className="flex items-center gap-2 pt-1">
              <input
                type="text"
                value={draftTitle}
                onChange={(e) => setDraftTitle(e.target.value)}
                className="text-lg font-bold text-[#29232A] px-2.5 py-1 border border-[#D94F83] rounded-lg bg-[#FDF1F5]/50 focus:outline-hidden w-full max-w-md"
                autoFocus
                onKeyDown={(e) => e.key === 'Enter' && handleTitleSubmit()}
              />
              <button
                type="button"
                onClick={handleTitleSubmit}
                className="p-1.5 rounded-md bg-[#D94F83] text-white hover:bg-[#B83B6D]"
                title="Save title"
              >
                <Check className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 group">
              <h2 className="text-xl font-bold text-[#29232A] tracking-tight truncate">
                {title}
              </h2>
              <button
                type="button"
                onClick={() => {
                  setDraftTitle(title);
                  setIsEditingTitle(true);
                }}
                className="opacity-60 group-hover:opacity-100 p-1 text-[#756B72] hover:text-[#D94F83] transition-opacity"
                title="Edit title"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          <p className="text-xs text-[#756B72] italic line-clamp-1">
            Original idea: "{originalIdea}"
          </p>
        </div>

        {/* Mode selector */}
        <div className="shrink-0">
          <ModeSelector
            currentMode={mode}
            onSelectMode={onModeChange}
            size="sm"
          />
        </div>
      </div>

      {/* Action toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        {/* View toggle tabs */}
        <div className="inline-flex p-1 bg-[#FBF7F2] border border-[#EDE3E7] rounded-lg text-xs font-medium">
          <button
            type="button"
            onClick={() => onToggleViewMode('sections')}
            className={`px-3 py-1 rounded-md transition-all ${
              viewMode === 'sections'
                ? 'bg-white text-[#29232A] font-semibold shadow-2xs'
                : 'text-[#756B72] hover:text-[#29232A]'
            }`}
          >
            Structured Cards
          </button>
          <button
            type="button"
            onClick={() => onToggleViewMode('document')}
            className={`px-3 py-1 rounded-md transition-all ${
              viewMode === 'document'
                ? 'bg-white text-[#29232A] font-semibold shadow-2xs'
                : 'text-[#756B72] hover:text-[#29232A]'
            }`}
          >
            Full Document View
          </button>
        </div>

        {/* Primary Action buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onNewPrompt}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#756B72] hover:text-[#29232A] hover:bg-[#FDF1F5] rounded-lg transition-colors border border-[#EDE3E7]"
            title="Start fresh with a new idea"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>New Prompt</span>
          </button>

          <button
            type="button"
            onClick={onSave}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border transition-all ${
              isSaved
                ? 'bg-[#EBF7F0] border-[#D1EBDD] text-[#4F9D78]'
                : 'bg-white border-[#EDE3E7] hover:border-[#D94F83] text-[#29232A] hover:bg-[#FDF1F5]'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-[#D94F83] hover:bg-[#B83B6D] text-white transition-all shadow-xs cursor-pointer"
          >
            {hasCopied ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Prompt</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
