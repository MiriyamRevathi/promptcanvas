import React from 'react';
import { SavedPrompt } from '../types/prompt';
import { StatusBadge } from './StatusBadge';
import { ExternalLink, Copy, Trash2, Calendar } from 'lucide-react';

interface SavedPromptCardProps {
  prompt: SavedPrompt;
  onOpen: (prompt: SavedPrompt) => void;
  onDuplicate: (prompt: SavedPrompt) => void;
  onRequestDelete: (prompt: SavedPrompt) => void;
}

export const SavedPromptCard: React.FC<SavedPromptCardProps> = ({
  prompt,
  onOpen,
  onDuplicate,
  onRequestDelete,
}) => {
  const formattedDate = new Date(prompt.updatedAt || prompt.createdAt).toLocaleDateString(
    'en-US',
    {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }
  );

  return (
    <div className="bg-white border border-[#EDE3E7] hover:border-[#D94F83]/40 rounded-xl p-5 shadow-2xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between group">
      <div className="space-y-3">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <StatusBadge label={prompt.category} variant="category" />
          <div className="flex items-center gap-1.5">
            <StatusBadge
              label={`Score ${prompt.quality.overall}%`}
              variant="score"
            />
            <span className="text-[11px] text-[#756B72] uppercase tracking-wider font-medium px-1.5 py-0.5 rounded bg-[#FBF7F2] border border-[#EDE3E7]">
              {prompt.mode}
            </span>
          </div>
        </div>

        {/* Title & Idea preview */}
        <div>
          <h3
            onClick={() => onOpen(prompt)}
            className="text-sm font-semibold text-[#29232A] group-hover:text-[#D94F83] transition-colors cursor-pointer line-clamp-1"
          >
            {prompt.title}
          </h3>
          <p className="text-xs text-[#756B72] mt-1 line-clamp-2 leading-relaxed">
            "{prompt.originalIdea}"
          </p>
        </div>

        {/* Date indicator */}
        <div className="flex items-center gap-1.5 text-[11px] text-[#756B72] pt-1">
          <Calendar className="w-3 h-3" />
          <span>Updated {formattedDate}</span>
        </div>
      </div>

      {/* Action buttons bar */}
      <div className="pt-4 mt-4 border-t border-[#EDE3E7] flex items-center justify-between">
        <button
          type="button"
          onClick={() => onOpen(prompt)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#FDF1F5] hover:bg-[#D94F83] text-[#B83B6D] hover:text-white transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Open</span>
        </button>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onDuplicate(prompt)}
            className="p-1.5 rounded-lg text-[#756B72] hover:text-[#29232A] hover:bg-[#FDF1F5] transition-colors"
            title="Duplicate prompt"
            aria-label="Duplicate prompt"
          >
            <Copy className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onRequestDelete(prompt)}
            className="p-1.5 rounded-lg text-[#756B72] hover:text-[#C85A68] hover:bg-[#FDF1F5] transition-colors"
            title="Delete prompt"
            aria-label="Delete prompt"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
