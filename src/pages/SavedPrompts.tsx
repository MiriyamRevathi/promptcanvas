import React, { useState } from 'react';
import { SavedPrompt } from '../types/prompt';
import { SavedPromptCard } from '../components/SavedPromptCard';
import { SearchInput } from '../components/SearchInput';
import { searchSavedPrompts } from '../lib/search';
import { EmptyState } from '../components/EmptyState';
import { Modal } from '../components/Modal';
import { Bookmark, ArrowUpDown, Filter } from 'lucide-react';
import { deletePrompt, savePrompt } from '../lib/storage';

interface SavedPromptsProps {
  prompts: SavedPrompt[];
  onOpenPrompt: (prompt: SavedPrompt) => void;
  onRefresh: () => void;
  onCreateNew: () => void;
  onToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export const SavedPrompts: React.FC<SavedPromptsProps> = ({
  prompts,
  onOpenPrompt,
  onRefresh,
  onCreateNew,
  onToast,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'az'>('newest');
  const [deleteTarget, setDeleteTarget] = useState<SavedPrompt | null>(null);

  const categories = ['All', 'Website', 'Mobile App', 'SaaS', 'Dashboard', 'Portfolio', 'E-commerce', 'AI Product', 'Developer Tool'];

  const filteredPrompts = searchSavedPrompts(
    prompts,
    searchQuery,
    categoryFilter === 'All' ? undefined : categoryFilter,
    sortBy
  );

  const handleDuplicate = (prompt: SavedPrompt) => {
    const duplicated: SavedPrompt = {
      ...prompt,
      id: `prompt-${Date.now()}`,
      title: `${prompt.title} (Copy)`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const success = savePrompt(duplicated);
    if (success) {
      onRefresh();
      onToast('Duplicated prompt successfully.');
    } else {
      onToast('Failed to duplicate prompt.', 'error');
    }
  };

  const handleConfirmDelete = () => {
    if (!deleteTarget) return;
    const ok = deletePrompt(deleteTarget.id);
    if (ok) {
      onRefresh();
      onToast(`Deleted "${deleteTarget.title}".`);
    } else {
      onToast('Failed to delete prompt.', 'error');
    }
    setDeleteTarget(null);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-16 animate-in fade-in">
      {/* Page Title & Subtitle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#29232A] tracking-tight">
            Saved Prompts
          </h2>
          <p className="text-sm text-[#756B72] mt-0.5">
            Your structured ideas, ready whenever you need them.
          </p>
        </div>

        {prompts.length > 0 && (
          <button
            type="button"
            onClick={onCreateNew}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[#D94F83] hover:bg-[#B83B6D] text-white transition-colors self-start sm:self-auto shadow-xs"
          >
            <span>+ Create Prompt</span>
          </button>
        )}
      </div>

      {prompts.length === 0 ? (
        <EmptyState
          icon={<Bookmark className="w-5 h-5 text-[#D94F83]" />}
          title="Your prompt library is empty."
          description="Turn your next rough idea into a structured prompt and save it here."
          actionLabel="Create Prompt"
          onAction={onCreateNew}
        />
      ) : (
        <>
          {/* Controls Bar: Search, Category, Sort */}
          <div className="bg-white p-4 rounded-xl border border-[#EDE3E7] shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="w-full md:w-80">
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search by title, idea, content..."
              />
            </div>

            {/* Filter and Sort Dropdowns */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-[#756B72]" />
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="text-xs bg-[#FBF7F2] border border-[#EDE3E7] text-[#29232A] font-medium py-1.5 px-3 rounded-lg focus:outline-hidden focus:border-[#D94F83]"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c === 'All' ? 'All Categories' : c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort selector */}
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#756B72]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="text-xs bg-[#FBF7F2] border border-[#EDE3E7] text-[#29232A] font-medium py-1.5 px-3 rounded-lg focus:outline-hidden focus:border-[#D94F83]"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="az">A to Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          {filteredPrompts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPrompts.map((p) => (
                <SavedPromptCard
                  key={p.id}
                  prompt={p}
                  onOpen={onOpenPrompt}
                  onDuplicate={handleDuplicate}
                  onRequestDelete={(target) => setDeleteTarget(target)}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No prompts match your query"
              description={`No saved prompts matched "${searchQuery}". Try adjusting your filters.`}
              actionLabel="Clear Filters"
              onAction={() => {
                setSearchQuery('');
                setCategoryFilter('All');
              }}
            />
          )}
        </>
      )}

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={Boolean(deleteTarget)}
        title="Delete Prompt"
        message={`Are you sure you want to delete "${deleteTarget?.title}"? This cannot be undone.`}
        confirmLabel="Delete"
        isDestructive
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
};
