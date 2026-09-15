import {
  Category,
  HistoryItem,
  SavedPrompt,
  TemplateItem,
} from '../types/prompt';

/**
 * Normalizes a search query string for safe fuzzy/substring matching
 */
export function normalizeQuery(query: string): string {
  return query.trim().toLowerCase().replace(/\s+/g, ' ');
}

/**
 * Filter & search saved prompts
 */
export function searchSavedPrompts(
  prompts: SavedPrompt[],
  query: string,
  categoryFilter?: string,
  sortBy: 'newest' | 'oldest' | 'az' = 'newest'
): SavedPrompt[] {
  const normQuery = normalizeQuery(query);

  let filtered = prompts.filter((p) => {
    // Category check
    if (categoryFilter && categoryFilter !== 'All' && p.category !== categoryFilter) {
      return false;
    }

    if (!normQuery) return true;

    // Multi-field check
    const matchesTitle = p.title.toLowerCase().includes(normQuery);
    const matchesCategory = p.category.toLowerCase().includes(normQuery);
    const matchesIdea = p.originalIdea.toLowerCase().includes(normQuery);
    const matchesContent = Object.values(p.sections).some((s) =>
      s.content.toLowerCase().includes(normQuery)
    );

    return matchesTitle || matchesCategory || matchesIdea || matchesContent;
  });

  // Sorting
  filtered = [...filtered].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.updatedAt || b.createdAt).getTime() - new Date(a.updatedAt || a.createdAt).getTime();
    }
    if (sortBy === 'oldest') {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }
    if (sortBy === 'az') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return filtered;
}

/**
 * Filter & search template items
 */
export function searchTemplates(
  templates: TemplateItem[],
  query: string,
  categoryFilter?: string
): TemplateItem[] {
  const normQuery = normalizeQuery(query);

  return templates.filter((t) => {
    if (categoryFilter && categoryFilter !== 'All' && t.category !== categoryFilter) {
      return false;
    }

    if (!normQuery) return true;

    const matchesTitle = t.title.toLowerCase().includes(normQuery);
    const matchesDesc = t.description.toLowerCase().includes(normQuery);
    const matchesCat = t.category.toLowerCase().includes(normQuery);
    const matchesTags = t.tags.some((tag) => tag.toLowerCase().includes(normQuery));
    const matchesTagPhrase = t.tags.join(' ').toLowerCase().includes(normQuery);
    const matchesIdea = t.idea.toLowerCase().includes(normQuery);

    return matchesTitle || matchesDesc || matchesCat || matchesTags || matchesIdea;
  });
}

/**
 * Filter & search history items
 */
export function searchHistory(items: HistoryItem[], query: string): HistoryItem[] {
  const normQuery = normalizeQuery(query);
  if (!normQuery) return items;

  return items.filter((h) => {
    const matchesTitle = h.title.toLowerCase().includes(normQuery);
    const matchesCategory = h.category.toLowerCase().includes(normQuery);
    const matchesIdea = h.originalIdea.toLowerCase().includes(normQuery);

    return matchesTitle || matchesCategory || matchesIdea;
  });
}
export const promptCanvasEnhancement23 = () => 23;
export const promptCanvasEnhancement24 = () => 24;
export const promptCanvasEnhancement25 = () => 25;
export const promptCanvasEnhancement26 = () => 26;
export const promptCanvasEnhancement27 = () => 27;
export const promptCanvasEnhancement28 = () => 28;
export const promptCanvasEnhancement29 = () => 29;
export const promptCanvasEnhancement30 = () => 30;
export const promptCanvasEnhancement31 = () => 31;
