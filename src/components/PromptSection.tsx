import React, { useState, useEffect } from 'react';
import { PromptSection as PromptSectionType } from '../types/prompt';
import { Edit3, Check, X, Copy, CheckCircle2 } from 'lucide-react';

interface PromptSectionProps {
  section: PromptSectionType;
  onUpdate: (key: PromptSectionType['key'], newContent: string) => void;
  onToast: (msg: string) => void;
}

export const PromptSection: React.FC<PromptSectionProps> = ({
  section,
  onUpdate,
  onToast,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draftContent, setDraftContent] = useState(section.content);
  const [hasCopied, setHasCopied] = useState(false);

  // Sync draft when section content updates externally (e.g. mode switch or suggestion applied)
  useEffect(() => {
    setDraftContent(section.content);
  }, [section.content]);

  const handleSave = () => {
    onUpdate(section.key, draftContent.trim());
    setIsEditing(false);
    onToast(`Updated ${section.title}.`);
  };

  const handleCancel = () => {
    setDraftContent(section.content);
    setIsEditing(false);
  };

  const handleCopySection = async () => {
    try {
      await navigator.clipboard.writeText(section.content);
      setHasCopied(true);
      onToast(`Copied ${section.title} section.`);
      setTimeout(() => setHasCopied(false), 2000);
    } catch {
      onToast('Failed to copy to clipboard.');
    }
  };

  return (
    <div
      id={`section-${section.key}`}
      className="bg-white border border-[#EDE3E7] rounded-xl p-5 shadow-2xs hover:border-[#D94F83]/30 transition-colors space-y-3"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-[#29232A]">
            {section.title}
          </h3>
          {section.isCustomized && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FDF1F5] text-[#B83B6D] font-medium border border-[#F8DCE7]">
              Edited
            </span>
          )}
        </div>

        {/* Section actions */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleCopySection}
            className="p-1.5 rounded-md text-[#756B72] hover:text-[#29232A] hover:bg-[#FDF1F5] transition-colors"
            title={`Copy ${section.title}`}
            aria-label={`Copy ${section.title}`}
          >
            {hasCopied ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4F9D78]" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>

          {!isEditing && (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#756B72] hover:text-[#29232A] hover:bg-[#FDF1F5] rounded-md transition-colors"
            >
              <Edit3 className="w-3 h-3 text-[#D94F83]" />
              <span>Edit</span>
            </button>
          )}
        </div>
      </div>

      {/* Content or Edit Textarea */}
      {isEditing ? (
        <div className="space-y-3 pt-1">
          <textarea
            value={draftContent}
            onChange={(e) => setDraftContent(e.target.value)}
            rows={Math.max(4, draftContent.split('\n').length + 1)}
            className="w-full p-3 text-sm text-[#29232A] bg-[#FBF7F2] border border-[#D94F83] rounded-lg focus:outline-hidden font-normal leading-relaxed resize-y"
            autoFocus
          />

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={handleCancel}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#756B72] hover:text-[#29232A] hover:bg-[#FDF1F5] rounded-md transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>Cancel</span>
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-medium text-white bg-[#D94F83] hover:bg-[#B83B6D] rounded-md transition-colors shadow-2xs"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="text-sm text-[#29232A] whitespace-pre-line leading-relaxed font-normal">
          {section.content}
        </div>
      )}
    </div>
  );
};
