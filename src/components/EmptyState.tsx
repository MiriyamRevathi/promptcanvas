import React from 'react';
import { Sparkles } from 'lucide-react';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-white border border-[#EDE3E7] rounded-xl my-6">
      <div className="w-12 h-12 rounded-full bg-[#FDF1F5] border border-[#F8DCE7] flex items-center justify-center text-[#D94F83] mb-4">
        {icon || <Sparkles className="w-5 h-5" />}
      </div>
      <h3 className="text-lg font-semibold text-[#29232A] mb-2">{title}</h3>
      <p className="text-sm text-[#756B72] max-w-md leading-relaxed mb-6">
        {description}
      </p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          type="button"
          className="inline-flex items-center px-4 py-2 bg-[#D94F83] hover:bg-[#B83B6D] text-white text-sm font-medium rounded-lg transition-colors shadow-xs"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};
