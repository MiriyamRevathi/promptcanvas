import React from 'react';
import { PromptMode } from '../types/prompt';
import { Zap, FileText, Code2 } from 'lucide-react';

interface ModeSelectorProps {
  currentMode: PromptMode;
  onSelectMode: (mode: PromptMode) => void;
  size?: 'sm' | 'md';
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({
  currentMode,
  onSelectMode,
  size = 'md',
}) => {
  const modes: Array<{
    id: PromptMode;
    label: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  }> = [
    {
      id: 'quick',
      label: 'Quick',
      description: 'Concise bullet points for rapid ideation',
      icon: Zap,
    },
    {
      id: 'detailed',
      label: 'Detailed',
      description: 'Comprehensive specifications & rationale',
      icon: FileText,
    },
    {
      id: 'builder',
      label: 'Builder',
      description: 'Optimized for code generation & dev requirements',
      icon: Code2,
    },
  ];

  return (
    <div
      className="inline-flex p-1 bg-[#FDF1F5] border border-[#EDE3E7] rounded-xl"
      role="tablist"
      aria-label="Prompt detail level"
    >
      {modes.map((m) => {
        const Icon = m.icon;
        const isActive = currentMode === m.id;
        return (
          <button
            key={m.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectMode(m.id)}
            title={m.description}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              isActive
                ? 'bg-white text-[#29232A] font-semibold shadow-xs border border-[#EDE3E7]'
                : 'text-[#756B72] hover:text-[#29232A]'
            } ${size === 'sm' ? 'py-1 text-xs' : 'py-1.5'}`}
          >
            <Icon
              className={`w-3.5 h-3.5 ${
                isActive ? 'text-[#D94F83]' : 'text-[#756B72]'
              }`}
            />
            <span>{m.label}</span>
          </button>
        );
      })}
    </div>
  );
};
