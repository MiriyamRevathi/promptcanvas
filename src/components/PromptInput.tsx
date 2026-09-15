import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Sparkles, X, AlertCircle } from 'lucide-react';

interface PromptInputProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  isStructuring?: boolean;
  error?: string | null;
}

export const PromptInput: React.FC<PromptInputProps> = ({
  value,
  onChange,
  onSubmit,
  onClear,
  isStructuring = false,
  error = null,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  // Auto-resize textarea height as content expands
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.max(
        110,
        textareaRef.current.scrollHeight
      )}px`;
    }
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  };

  const charCount = value.length;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label
          htmlFor="raw-idea-input"
          className="text-sm font-semibold text-[#29232A]"
        >
          What do you want to create?
        </label>
        <span className="text-xs text-[#756B72]">
          {charCount > 0 ? `${charCount} characters` : 'e.g. "make a website for a coffee shop"'}
        </span>
      </div>

      <div
        className={`relative bg-white border rounded-xl transition-all duration-200 shadow-2xs ${
          error
            ? 'border-[#C85A68] ring-2 ring-[#C85A68]/15'
            : isFocused
            ? 'border-[#D94F83] ring-2 ring-[#D94F83]/15'
            : 'border-[#EDE3E7] hover:border-[#D94F83]/40'
        }`}
      >
        <textarea
          ref={textareaRef}
          id="raw-idea-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder="Describe your idea in your own words... (e.g., make a website for a coffee shop with online menu, seasonal specials, and operating hours)"
          className="w-full p-4 pb-14 text-[#29232A] placeholder:text-[#756B72]/60 bg-transparent resize-none focus:outline-hidden text-base leading-relaxed rounded-xl"
          rows={3}
        />

        {/* Bottom toolbar inside input card */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between pointer-events-none pt-2 border-t border-[#EDE3E7]/60">
          <div className="pointer-events-auto flex items-center gap-2">
            {value.trim() && (
              <button
                type="button"
                onClick={onClear}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#756B72] hover:text-[#29232A] hover:bg-[#FDF1F5] rounded-md transition-colors"
                title="Clear input"
              >
                <X className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            )}
            <span className="text-[11px] text-[#756B72]/70 hidden sm:inline">
              Tip: Press ⌘ + Enter to structure
            </span>
          </div>

          <div className="pointer-events-auto">
            <button
              id="btn-structure-prompt"
              type="button"
              onClick={onSubmit}
              disabled={isStructuring || !value.trim()}
              className={`inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-lg transition-all shadow-xs ${
                value.trim() && !isStructuring
                  ? 'bg-[#D94F83] hover:bg-[#B83B6D] text-white hover:shadow-sm cursor-pointer'
                  : 'bg-[#EDE3E7] text-[#756B72] cursor-not-allowed opacity-80'
              }`}
            >
              {isStructuring ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  <span>Structuring...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Structure Prompt</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-xs font-medium text-[#C85A68] pt-1">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
