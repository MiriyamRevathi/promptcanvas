import React, { useState } from 'react';
import { Category, PromptMode, UserPreferences } from '../types/prompt';
import { Modal } from '../components/Modal';
import { Sparkles, Trash2, ShieldCheck, Check } from 'lucide-react';
import {
  clearHistory,
  clearSavedPrompts,
  savePreferences,
} from '../lib/storage';

interface SettingsProps {
  preferences: UserPreferences;
  onUpdatePreferences: (pref: UserPreferences) => void;
  onRefreshData: () => void;
  onToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export const Settings: React.FC<SettingsProps> = ({
  preferences,
  onUpdatePreferences,
  onRefreshData,
  onToast,
}) => {
  const [modalType, setModalType] = useState<'clearHistory' | 'clearSaved' | null>(null);

  const handleModeChange = (mode: PromptMode) => {
    const updated = { ...preferences, defaultMode: mode };
    onUpdatePreferences(updated);
    savePreferences(updated);
    onToast(`Default mode updated to ${mode.toUpperCase()}.`);
  };

  const handleCategoryChange = (cat: Category) => {
    const updated = { ...preferences, defaultCategory: cat };
    onUpdatePreferences(updated);
    savePreferences(updated);
    onToast(`Default category updated to ${cat}.`);
  };

  const handleAutoSaveToggle = () => {
    const updated = { ...preferences, autoSave: !preferences.autoSave };
    onUpdatePreferences(updated);
    savePreferences(updated);
    onToast(`Auto-save ${updated.autoSave ? 'enabled' : 'disabled'}.`);
  };

  const handleConfirmAction = () => {
    if (modalType === 'clearHistory') {
      clearHistory();
      onRefreshData();
      onToast('History successfully cleared.');
    } else if (modalType === 'clearSaved') {
      clearSavedPrompts();
      onRefreshData();
      onToast('Saved prompts library cleared.');
    }
    setModalType(null);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-16 animate-in fade-in">
      <div>
        <h2 className="text-2xl font-bold text-[#29232A] tracking-tight">
          Settings & Preferences
        </h2>
        <p className="text-sm text-[#756B72] mt-0.5">
          Configure prompt generation defaults and manage local browser storage.
        </p>
      </div>

      {/* Section 1: Prompt Preferences */}
      <div className="bg-white border border-[#EDE3E7] rounded-xl p-6 shadow-2xs space-y-6">
        <h3 className="text-base font-semibold text-[#29232A] pb-3 border-b border-[#EDE3E7]">
          Prompt Preferences
        </h3>

        {/* Default Mode */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#756B72]">
            Default Prompt Detail Mode
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'quick', title: 'Quick', desc: 'Concise bullet points' },
              { id: 'detailed', title: 'Detailed', desc: 'Deep specifications' },
              { id: 'builder', title: 'Builder', desc: 'Code generation focus' },
            ].map((m) => {
              const isSelected = preferences.defaultMode === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => handleModeChange(m.id as PromptMode)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    isSelected
                      ? 'bg-[#FDF1F5] border-[#D94F83] ring-1 ring-[#D94F83]'
                      : 'bg-[#FBF7F2] border-[#EDE3E7] hover:border-[#D94F83]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#29232A]">
                      {m.title}
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#D94F83]" />}
                  </div>
                  <p className="text-[11px] text-[#756B72] mt-1">{m.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Default Category */}
        <div className="space-y-2 pt-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#756B72]">
            Default Category Fallback
          </label>
          <div className="flex flex-wrap gap-2">
            {(['Website', 'SaaS', 'Mobile App', 'AI Product', 'Other'] as Category[]).map((cat) => {
              const isSelected = preferences.defaultCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    isSelected
                      ? 'bg-[#F8DCE7] border-[#D94F83] text-[#29232A] font-semibold'
                      : 'bg-[#FBF7F2] border-[#EDE3E7] text-[#756B72] hover:text-[#29232A]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section 2: Storage & Privacy */}
      <div className="bg-white border border-[#EDE3E7] rounded-xl p-6 shadow-2xs space-y-6">
        <h3 className="text-base font-semibold text-[#29232A] pb-3 border-b border-[#EDE3E7]">
          Storage & Privacy
        </h3>

        {/* Auto-save toggle */}
        <div className="flex items-center justify-between py-1">
          <div>
            <h4 className="text-sm font-semibold text-[#29232A]">
              Auto-save to Generation History
            </h4>
            <p className="text-xs text-[#756B72]">
              Automatically records the last 10 structured prompts in browser storage.
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={preferences.autoSave}
            onClick={handleAutoSaveToggle}
            className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-0.5 ${
              preferences.autoSave ? 'bg-[#D94F83]' : 'bg-[#EDE3E7]'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white shadow-xs transition-transform ${
                preferences.autoSave ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Clear buttons */}
        <div className="pt-2 border-t border-[#EDE3E7] space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-[#29232A]">
                Clear Prompt History
              </p>
              <p className="text-xs text-[#756B72]">
                Removes recent 10 auto-saved drafts from history.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setModalType('clearHistory')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#C85A68] hover:bg-[#FDF1F5] rounded-lg border border-[#F4D0D5] transition-colors self-start sm:self-auto"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear History</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#EDE3E7]">
            <div>
              <p className="text-xs font-semibold text-[#29232A]">
                Clear Saved Prompts Library
              </p>
              <p className="text-xs text-[#756B72]">
                Permanently wipes all prompts saved in your library.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setModalType('clearSaved')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#C85A68] hover:bg-[#FDF1F5] rounded-lg border border-[#F4D0D5] transition-colors self-start sm:self-auto"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Saved Prompts</span>
            </button>
          </div>
        </div>
      </div>

      {/* Section 3: About PromptCanvas */}
      <div className="bg-white border border-[#EDE3E7] rounded-xl p-6 shadow-2xs space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#FDF1F5] border border-[#F8DCE7] flex items-center justify-center text-[#D94F83]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#29232A]">
              PromptCanvas
            </h3>
            <p className="text-xs text-[#756B72]">
              Turn rough ideas into ready-to-use prompts.
            </p>
          </div>
        </div>

        <p className="text-xs text-[#756B72] leading-relaxed">
          PromptCanvas uses a 100% deterministic local TypeScript transformation engine,
          domain heuristics, and quality scoring rules. No prompt data is ever transmitted
          to external servers or third-party AI APIs.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#EDE3E7] text-[11px] text-[#756B72]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4F9D78]" />
            <span>Privacy Verified: Local-only storage</span>
          </div>
          <span className="font-mono">Version 1.0.0</span>
        </div>
      </div>

      {/* Confirmation Modals */}
      <Modal
        isOpen={modalType === 'clearHistory'}
        title="Clear Prompt History"
        message="Are you sure you want to clear your generation history? This action cannot be undone."
        confirmLabel="Clear History"
        isDestructive
        onConfirm={handleConfirmAction}
        onCancel={() => setModalType(null)}
      />

      <Modal
        isOpen={modalType === 'clearSaved'}
        title="Clear Saved Prompts"
        message="Are you sure you want to delete all saved prompts from your library? This cannot be undone."
        confirmLabel="Clear All Saved"
        isDestructive
        onConfirm={handleConfirmAction}
        onCancel={() => setModalType(null)}
      />
    </div>
  );
};
