import React from 'react';
import { ExampleIdea } from '../types/prompt';
import { ArrowUpRight } from 'lucide-react';

interface ExampleCardProps {
  example: ExampleIdea;
  onSelect: (idea: string, category?: string) => void;
}

export const ExampleCard: React.FC<ExampleCardProps> = ({ example, onSelect }) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(example.idea, example.category)}
      className="flex flex-col text-left p-3.5 bg-white hover:bg-[#FDF1F5]/50 border border-[#EDE3E7] hover:border-[#D94F83]/40 rounded-xl transition-all duration-150 group shadow-2xs relative"
    >
      <div className="flex items-center justify-between w-full mb-1">
        <span className="text-xs font-semibold text-[#29232A] group-hover:text-[#D94F83] transition-colors">
          {example.title}
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 text-[#756B72] group-hover:text-[#D94F83] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
      <p className="text-xs text-[#756B72] line-clamp-2 leading-relaxed">
        {example.description}
      </p>
    </button>
  );
};
