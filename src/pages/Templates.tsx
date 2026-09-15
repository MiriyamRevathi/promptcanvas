import React, { useState } from 'react';
import { TEMPLATES } from '../data/templates';
import { TemplateCard } from '../components/TemplateCard';
import { SearchInput } from '../components/SearchInput';
import { searchTemplates } from '../lib/search';
import { TemplateItem } from '../types/prompt';
import { EmptyState } from '../components/EmptyState';
import { LayoutTemplate } from 'lucide-react';

interface TemplatesProps {
  onUseTemplate: (template: TemplateItem) => void;
}

const TEMPLATE_CATEGORIES = [
  'All',
  'SaaS',
  'Website',
  'Portfolio',
  'AI Product',
  'E-commerce',
  'Mobile App',
  'Developer Tool',
  'Dashboard',
];

export const Templates: React.FC<TemplatesProps> = ({ onUseTemplate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTemplates = searchTemplates(
    TEMPLATES,
    searchQuery,
    selectedCategory === 'All' ? undefined : selectedCategory
  );

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-16 animate-in fade-in">
      {/* Header text */}
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-[#29232A] tracking-tight">
          Template Blueprints
        </h2>
        <p className="text-sm text-[#756B72]">
          Pre-formulated blueprints to kickstart clean, comprehensive prompts across popular software categories.
        </p>
      </div>

      {/* Filter and Search controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-[#EDE3E7] shadow-2xs">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {TEMPLATE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  isSelected
                    ? 'bg-[#F8DCE7] text-[#29232A] font-semibold border border-[#D94F83]'
                    : 'text-[#756B72] hover:text-[#29232A] hover:bg-[#FDF1F5]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="w-full sm:w-72 shrink-0">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search templates, tags..."
          />
        </div>
      </div>

      {/* Template Grid or Empty State */}
      {filteredTemplates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTemplates.map((tpl) => (
            <TemplateCard
              key={tpl.id}
              template={tpl}
              onUseTemplate={onUseTemplate}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<LayoutTemplate className="w-5 h-5 text-[#D94F83]" />}
          title="No matching templates found"
          description={`We couldn't find any templates matching "${searchQuery}". Try a different keyword or reset filters.`}
          actionLabel="Clear Search"
          onAction={() => {
            setSearchQuery('');
            setSelectedCategory('All');
          }}
        />
      )}
    </div>
  );
};
