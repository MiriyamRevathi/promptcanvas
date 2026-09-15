import React, { useEffect } from 'react';
import { X, Sparkles, Wand2, Sliders, CheckCircle2, Shield } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const steps = [
    {
      icon: Wand2,
      title: '1. Enter Any Rough Idea',
      description: 'Start messy: even a 5-word sentence like "website for a coffee shop" is enough to detect your domain.',
    },
    {
      icon: Sparkles,
      title: '2. Deterministic Structure Engine',
      description: 'PromptCanvas extracts goal, target audience, design tokens, core features, UX flows, technical stack, and constraints without calling external AI APIs.',
    },
    {
      icon: Sliders,
      title: '3. Quality Score & Suggestions',
      description: 'Review the 0-100 Structure Completeness metric and click "Add" on any recommendations to expand missing requirements.',
    },
    {
      icon: CheckCircle2,
      title: '4. Edit & Copy',
      description: 'Tweak sections directly in inline edit mode, then copy the clean text ready for Cursor, Claude, ChatGPT, or team tickets.',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#29232A]/35 backdrop-blur-xs animate-in fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-lg bg-white border border-[#EDE3E7] rounded-2xl shadow-xl p-6 relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150 space-y-5">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#756B72] hover:text-[#29232A] p-1 rounded-md"
          aria-label="Close help"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FDF1F5] border border-[#F8DCE7] flex items-center justify-center text-[#D94F83]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#29232A]">
              How PromptCanvas Works
            </h3>
            <p className="text-xs text-[#756B72]">
              Turn rough thoughts into structured, ready-to-use prompts.
            </p>
          </div>
        </div>

        <div className="space-y-3.5 pt-2">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-3 rounded-xl bg-[#FBF7F2] border border-[#EDE3E7]"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-[#EDE3E7] flex items-center justify-center text-[#D94F83] shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-semibold text-[#29232A]">
                    {s.title}
                  </h4>
                  <p className="text-xs text-[#756B72] leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-3 bg-[#FDF1F5] rounded-xl border border-[#F8DCE7] flex items-center gap-2.5 text-xs text-[#B83B6D]">
          <Shield className="w-4 h-4 text-[#D94F83] shrink-0" />
          <span>PromptCanvas is 100% client-side. Your ideas never leave your device.</span>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#D94F83] hover:bg-[#B83B6D] text-white transition-colors cursor-pointer"
          >
            Got it, let's build
          </button>
        </div>
      </div>
    </div>
  );
};
