import React from 'react';
import { TemplateItem } from '../types/prompt';
import { StatusBadge } from './StatusBadge';
import { ArrowRight, Sparkles } from 'lucide-react';

interface TemplateCardProps {
  template: TemplateItem;
  onUseTemplate: (template: TemplateItem) => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  onUseTemplate,
}) => {
  return (
    <div className="bg-white border border-[#EDE3E7] hover:border-[#D94F83]/40 rounded-xl p-5 shadow-2xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between group">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <StatusBadge label={template.category} variant="category" />
          <div className="w-6 h-6 rounded-md bg-[#FDF1F5] flex items-center justify-center text-[#D94F83] opacity-80 group-hover:opacity-100 transition-opacity">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[#29232A] group-hover:text-[#D94F83] transition-colors leading-snug">
            {template.title}
          </h3>
          <p className="text-xs text-[#756B72] mt-1.5 leading-relaxed">
            {template.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-1">
          {template.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-md bg-[#FBF7F2] text-[#756B72] border border-[#EDE3E7]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-5 mt-4 border-t border-[#EDE3E7]">
        <button
          type="button"
          onClick={() => onUseTemplate(template)}
          className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold rounded-lg bg-[#FDF1F5] hover:bg-[#D94F83] text-[#B83B6D] hover:text-white border border-[#F8DCE7] hover:border-transparent transition-all cursor-pointer shadow-2xs"
        >
          <span>Use Template</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
