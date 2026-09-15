import React from 'react';
import { Category } from '../types/prompt';

interface StatusBadgeProps {
  label: string;
  variant?: 'category' | 'mode' | 'score' | 'neutral' | 'success';
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  label,
  variant = 'category',
  className = '',
}) => {
  let colorStyles = 'bg-[#FDF1F5] text-[#B83B6D] border-[#EDE3E7]';

  if (variant === 'score') {
    colorStyles = 'bg-[#F8DCE7] text-[#B83B6D] font-semibold border-[#EDE3E7]';
  } else if (variant === 'mode') {
    colorStyles = 'bg-white text-[#29232A] border-[#EDE3E7] font-medium';
  } else if (variant === 'neutral') {
    colorStyles = 'bg-white text-[#756B72] border-[#EDE3E7]';
  } else if (variant === 'success') {
    colorStyles = 'bg-[#EBF7F0] text-[#4F9D78] border-[#D1EBDD] font-medium';
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs border tracking-wide whitespace-nowrap select-none ${colorStyles} ${className}`}
    >
      {label}
    </span>
  );
};
