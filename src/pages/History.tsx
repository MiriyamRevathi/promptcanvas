import React, { useState } from 'react';
import { HistoryItem } from '../types/prompt';
import { StatusBadge } from '../components/StatusBadge';
import { EmptyState } from '../components/EmptyState';
import { Modal } from '../components/Modal';
import { SearchInput } from '../components/SearchInput';
import { searchHistory } from '../lib/search';
import { History as HistoryIcon, Trash2, ExternalLink, Clock } from 'lucide-react';
import { clearHistory, deleteHistoryItem } from '../lib/storage';

interface HistoryProps {
  historyItems: HistoryItem[];
  onOpenItem: (item: HistoryItem) => void;
  onRefresh: () => void;
  onToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
  onGoToBuilder: () => void;
}

export const History: React.FC<HistoryProps> = ({
  historyItems,
  onOpenItem,
  onRefresh,
  onToast,
  onGoToBuilder,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [itemToDelete, setItemToDelete] = useState<HistoryItem | null>(null);
  const [isConfirmingClearAll, setIsConfirmingClearAll] = useState(false);

  // Automatically refresh on mount and listen to storage events
  React.useEffect(() => {
    onRefresh();
    const handleHistoryChanged = () => {
      onRefresh();
    };
    window.addEventListener('promptcanvas_history_changed', handleHistoryChanged);
    window.addEventListener('storage', handleHistoryChanged);
    return () => {
      window.removeEventListener('promptcanvas_history_changed', handleHistoryChanged);
      window.removeEventListener('storage', handleHistoryChanged);
    };
  }, [onRefresh]);

  const filtered = searchHistory(historyItems, searchQuery);

  const handleDeleteOne = () => {
    if (!itemToDelete) return;
    deleteHistoryItem(itemToDelete.id);
    onRefresh();
    onToast('History item deleted.');
    setItemToDelete(null);
  };

  const handleClearAll = () => {
    clearHistory();
    onRefresh();
    onToast('All prompt history cleared.');
    setIsConfirmingClearAll(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16 animate-in fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#29232A] tracking-tight">
            Generation History
          </h2>
          <p className="text-sm text-[#756B72] mt-0.5">
            Auto-records your recent prompts right after structuring for instant retrieval.
          </p>
        </div>

        {historyItems.length > 0 && (
          <button
            type="button"
            onClick={() => setIsConfirmingClearAll(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#C85A68] hover:text-white hover:bg-[#C85A68] rounded-lg transition-colors border border-[#F4D0D5] self-start sm:self-auto cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear History</span>
          </button>
        )}
      </div>

      {historyItems.length === 0 ? (
        <EmptyState
          icon={<HistoryIcon className="w-5 h-5 text-[#D94F83]" />}
          title="No recent prompts yet."
          description="Your structured prompts will automatically appear here as you create them in the Builder."
          actionLabel="Go to Builder"
          onAction={onGoToBuilder}
        />
      ) : (
        <div className="space-y-4">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search recent history..."
            className="max-w-md"
          />

          <div className="bg-white border border-[#EDE3E7] rounded-xl divide-y divide-[#EDE3E7] shadow-2xs overflow-hidden">
            {filtered.length > 0 ? (
              filtered.map((item) => {
                const dateStr = new Date(item.generatedAt).toLocaleString(
                  'en-US',
                  {
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                  }
                );

                return (
                  <div
                    key={item.id}
                    className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FDF1F5]/40 transition-colors group"
                  >
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <StatusBadge label={item.category} variant="category" />
                        <span className="text-[11px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#FBF7F2] text-[#756B72] border border-[#EDE3E7]">
                          {item.mode}
                        </span>
                        {item.quality?.overall !== undefined && (
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#EBF7F0] text-[#4F9D78] border border-[#D1EBDD]">
                            {item.quality.overall}% Score
                          </span>
                        )}
                        <div className="flex items-center gap-1 text-[11px] text-[#756B72]">
                          <Clock className="w-3 h-3" />
                          <span>{dateStr}</span>
                        </div>
                      </div>

                      <h3
                        onClick={() => onOpenItem(item)}
                        className="text-sm font-semibold text-[#29232A] group-hover:text-[#D94F83] transition-colors cursor-pointer truncate"
                      >
                        {item.title}
                      </h3>

                      <p className="text-xs text-[#756B72] line-clamp-1">
                        "{item.originalIdea}"
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => onOpenItem(item)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#FDF1F5] hover:bg-[#D94F83] text-[#B83B6D] hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Open in Builder</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setItemToDelete(item)}
                        className="p-1.5 rounded-lg text-[#756B72] hover:text-[#C85A68] hover:bg-[#FDF1F5] transition-colors"
                        title="Delete from history"
                        aria-label="Delete history item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center text-xs text-[#756B72]">
                No history items match your search.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Single delete modal */}
      <Modal
        isOpen={Boolean(itemToDelete)}
        title="Delete History Entry"
        message={`Remove "${itemToDelete?.title}" from your recent history?`}
        confirmLabel="Remove"
        isDestructive
        onConfirm={handleDeleteOne}
        onCancel={() => setItemToDelete(null)}
      />

      {/* Clear All Modal */}
      <Modal
        isOpen={isConfirmingClearAll}
        title="Clear All Generation History"
        message="Are you sure you want to clear your generation history? This action cannot be undone."
        confirmLabel="Clear All"
        isDestructive
        onConfirm={handleClearAll}
        onCancel={() => setIsConfirmingClearAll(false)}
      />
    </div>
  );
};
