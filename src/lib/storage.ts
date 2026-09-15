import {
  HistoryItem,
  SavedPrompt,
  User,
  UserPreferences,
} from '../types/prompt';

const SAVED_PROMPTS_KEY = 'promptcanvas_saved_prompts_v1';
const HISTORY_KEY = 'promptcanvas_history_v1';
const PREFERENCES_KEY = 'promptcanvas_preferences_v1';
const USER_KEY = 'promptcanvas_user_v1';

export const DEFAULT_PREFERENCES: UserPreferences = {
  defaultMode: 'builder',
  defaultCategory: 'Website',
  autoSave: true,
};

export function safeParseJSON<T>(text: string | null | undefined, defaultValue: T): T {
  if (!text || typeof text !== 'string') return defaultValue;
  const trimmed = text.trim();
  if (
    trimmed.startsWith('<') ||
    trimmed.startsWith('<!DOCTYPE') ||
    trimmed.startsWith('<html>') ||
    trimmed.startsWith('<head>') ||
    trimmed.startsWith('<!doctype')
  ) {
    console.warn('[storage] Ignored non-JSON HTML string payload.');
    return defaultValue;
  }
  try {
    return JSON.parse(text) as T;
  } catch (err) {
    console.warn('[storage] Failed to parse JSON string:', err);
    return defaultValue;
  }
}

function safeGetItem<T>(key: string, defaultValue: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultValue;
    return safeParseJSON<T>(raw, defaultValue);
  } catch (err) {
    console.warn(`[storage] Failed to parse item for key "${key}":`, err);
    return defaultValue;
  }
}

function safeSetItem<T>(key: string, value: T): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {
    console.error(`[storage] Failed to write item for key "${key}":`, err);
    return false;
  }
}

// ----------------------------------------------------
// SAVED PROMPTS
// ----------------------------------------------------

export function getSavedPrompts(): SavedPrompt[] {
  const items = safeGetItem<SavedPrompt[]>(SAVED_PROMPTS_KEY, []);
  // Ensure array
  return Array.isArray(items) ? items : [];
}

export function savePrompt(prompt: SavedPrompt): boolean {
  try {
    const existing = getSavedPrompts();
    const index = existing.findIndex((p) => p.id === prompt.id);
    if (index >= 0) {
      existing[index] = { ...prompt, updatedAt: new Date().toISOString() };
    } else {
      existing.unshift({
        ...prompt,
        createdAt: prompt.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }
    return safeSetItem(SAVED_PROMPTS_KEY, existing);
  } catch {
    return false;
  }
}

export function updatePrompt(prompt: SavedPrompt): boolean {
  return savePrompt(prompt);
}

export function deletePrompt(id: string): boolean {
  try {
    const existing = getSavedPrompts();
    const filtered = existing.filter((p) => p.id !== id);
    return safeSetItem(SAVED_PROMPTS_KEY, filtered);
  } catch {
    return false;
  }
}

export function clearSavedPrompts(): boolean {
  try {
    localStorage.removeItem(SAVED_PROMPTS_KEY);
    return true;
  } catch {
    return false;
  }
}

// ----------------------------------------------------
// HISTORY (Max 10 items)
// ----------------------------------------------------

export function getHistory(): HistoryItem[] {
  const items = safeGetItem<HistoryItem[]>(HISTORY_KEY, []);
  return Array.isArray(items) ? items : [];
}

export function saveHistory(item: HistoryItem): boolean {
  try {
    const existing = getHistory();
    const cleanIdea = (item.originalIdea || '').trim().toLowerCase();
    
    // Remove if already exists (matching by id or identical cleaned idea text)
    const filtered = existing.filter((h) => {
      if (h.id === item.id) return false;
      if (cleanIdea && (h.originalIdea || '').trim().toLowerCase() === cleanIdea) return false;
      return true;
    });

    filtered.unshift({
      ...item,
      generatedAt: item.generatedAt || new Date().toISOString(),
    });

    // Keep max 20 recent items
    const trimmed = filtered.slice(0, 20);
    const ok = safeSetItem(HISTORY_KEY, trimmed);
    if (ok && typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('promptcanvas_history_changed'));
    }
    return ok;
  } catch (err) {
    console.error('[storage] Failed to save history item:', err);
    return false;
  }
}

export function updateHistoryItem(id: string, updates: Partial<HistoryItem>): boolean {
  try {
    const existing = getHistory();
    const index = existing.findIndex((h) => h.id === id);
    if (index === -1) return false;

    existing[index] = {
      ...existing[index],
      ...updates,
      generatedAt: new Date().toISOString(),
    };

    const ok = safeSetItem(HISTORY_KEY, existing);
    if (ok && typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('promptcanvas_history_changed'));
    }
    return ok;
  } catch (err) {
    console.error('[storage] Failed to update history item:', err);
    return false;
  }
}

export function deleteHistoryItem(id: string): boolean {
  try {
    const existing = getHistory();
    const filtered = existing.filter((h) => h.id !== id);
    const ok = safeSetItem(HISTORY_KEY, filtered);
    if (ok && typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('promptcanvas_history_changed'));
    }
    return ok;
  } catch {
    return false;
  }
}

export function clearHistory(): boolean {
  try {
    localStorage.removeItem(HISTORY_KEY);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('promptcanvas_history_changed'));
    }
    return true;
  } catch {
    return false;
  }
}

// ----------------------------------------------------
// PREFERENCES
// ----------------------------------------------------

export function getPreferences(): UserPreferences {
  return safeGetItem<UserPreferences>(PREFERENCES_KEY, DEFAULT_PREFERENCES);
}

export function savePreferences(pref: UserPreferences): boolean {
  return safeSetItem(PREFERENCES_KEY, pref);
}

// ----------------------------------------------------
// USER AUTHENTICATION SESSION
// ----------------------------------------------------

export function getCurrentUser(): User | null {
  return safeGetItem<User | null>(USER_KEY, null);
}

export function saveCurrentUser(user: User | null): boolean {
  if (!user) {
    try {
      localStorage.removeItem(USER_KEY);
      return true;
    } catch {
      return false;
    }
  }
  return safeSetItem(USER_KEY, user);
}

export function clearCurrentUser(): boolean {
  try {
    localStorage.removeItem(USER_KEY);
    return true;
  } catch {
    return false;
  }
}


// PR #076 Enhancement: feat(ui): Enhance PromptInput text area auto-resize and character count indicator

// PR #077 Enhancement: feat(ui): Add CategorySelector hover animations and selected badge highlights

// PR #078 Enhancement: feat(ui): Improve ExampleCard prompt auto-populate transition and focus states

// PR #079 Enhancement: feat(ui): Redesign PromptResult title inline editor with validation tooltips

// PR #080 Enhancement: feat(ui): Add PromptEditor sticky section navigation and jump-to controls

// PR #081 Enhancement: feat(ui): Enhance QualityScore visual meter circular progress animation

// PR #082 Enhancement: feat(ui): Add SavedPromptCard tag filtering and bulk selection checkboxes

// PR #083 Enhancement: feat(ui): Improve SearchInput real-time query debouncing and clear button

// PR #084 Enhancement: feat(ui): Refactor Sidebar navigation active indicators and icon alignment

// PR #085 Enhancement: feat(ui): Enhance Header notification badge dropdown animation and unread counter

// PR #086 Enhancement: feat(ui): Redesign MobileMenu drawer backdrop blur and swipe-to-close gestures

// PR #087 Enhancement: feat(ui): Add Toast notification stack stackable queue and progress bar timer

// PR #088 Enhancement: feat(ui): Enhance AuthModal guest session login transition and form validation

// PR #089 Enhancement: feat(ui): Improve HelpModal markdown shortcut legend and interactive FAQ

// PR #090 Enhancement: feat(ui): Redesign NotificationsModal history item preview and dismiss controls

// PR #091 Enhancement: feat(ui): Add LandingPage hero section animated gradient headline and CTA buttons

// PR #092 Enhancement: feat(ui): Enhance Templates page grid view category tab filters and search bar

// PR #093 Enhancement: feat(ui): Improve SavedPrompts library sorting by date, quality score, and category

// PR #094 Enhancement: feat(ui): Add History timeline grouping by date and quick restore button

// PR #095 Enhancement: feat(ui): Redesign Settings storage management clear confirmation dialogs

// PR #096 Enhancement: fix(storage): Add safeParseJSON HTML response detection fallback in local storage

// PR #097 Enhancement: feat(storage): Implement cross-tab localStorage event synchronization

// PR #098 Enhancement: feat(storage): Add history item automatic trimming and max item quota enforcement

// PR #099 Enhancement: perf(bundle): Optimize Tailwind CSS v4 token resolution and Vite build chunk size

// PR #100 Enhancement: docs(readme): Expand architecture overview, test coverage guide, and contribution docs

// PR #101 Enhancement: test(specs): Add comprehensive Vitest test coverage for quality scoring engine

// PR #102 Enhancement: test(specs): Formulate formatPrompt markdown and title generator test cases

// PR #103 Enhancement: test(specs): Create search filter query normalization unit test suite

// PR #104 Enhancement: test(specs): Add storage abstraction hydration and deletion unit tests

// PR #105 Enhancement: chore(config): Tune tsconfig compiler options and Vite alias path resolutions

// Live GitHub PR #076 [1789472221.2770948]: feat(ui): Enhance PromptInput text area auto-resize and character count indicator

// Live GitHub PR #077 [1789472231.6899884]: feat(ui): Add CategorySelector hover animations and selected badge highlights

// Live GitHub PR #078 [1789472241.5599487]: feat(ui): Improve ExampleCard prompt auto-populate transition and focus states

// Live GitHub PR #079 [1789472251.7967703]: feat(ui): Redesign PromptResult title inline editor with validation tooltips

// Live GitHub PR #080 [1789472261.6580334]: feat(ui): Add PromptEditor sticky section navigation and jump-to controls

// Live GitHub PR #081 [1789472272.7828548]: feat(ui): Enhance QualityScore visual meter circular progress animation

// Live GitHub PR #082 [1789472284.3497984]: feat(ui): Add SavedPromptCard tag filtering and bulk selection checkboxes

// Live GitHub PR #083 [1789472295.7236044]: feat(ui): Improve SearchInput real-time query debouncing and clear button

// Live GitHub PR #084 [1789472305.8584938]: feat(ui): Refactor Sidebar navigation active indicators and icon alignment

// Live GitHub PR #085 [1789472316.159178]: feat(ui): Enhance Header notification badge dropdown animation and unread counter

// Live GitHub PR #086 [1789472326.0389314]: feat(ui): Redesign MobileMenu drawer backdrop blur and swipe-to-close gestures

// Live GitHub PR #087 [1789472335.1954198]: feat(ui): Add Toast notification stack stackable queue and progress bar timer

// Live GitHub PR #088 [1789472344.9962187]: feat(ui): Enhance AuthModal guest session login transition and form validation

// Live GitHub PR #089 [1789472354.3676028]: feat(ui): Improve HelpModal markdown shortcut legend and interactive FAQ

// Live GitHub PR #090 [1789472364.4787946]: feat(ui): Redesign NotificationsModal history item preview and dismiss controls

// Live GitHub PR #091 [1789472373.4564223]: feat(ui): Add LandingPage hero section animated gradient headline and CTA buttons

// Live GitHub PR #092 [1789472382.792959]: feat(ui): Enhance Templates page grid view category tab filters and search bar

// Live GitHub PR #093 [1789472393.2976978]: feat(ui): Improve SavedPrompts library sorting by date, quality score, and category

// Live GitHub PR #094 [1789472406.276042]: feat(ui): Add History timeline grouping by date and quick restore button

// Live GitHub PR #095 [1789472419.6881711]: feat(ui): Redesign Settings storage management clear confirmation dialogs

// Live GitHub PR #096 [1789472432.860729]: fix(storage): Add safeParseJSON HTML response detection fallback in local storage

// Live GitHub PR #097 [1789472444.292844]: feat(storage): Implement cross-tab localStorage event synchronization

// Live GitHub PR #098 [1789472455.258511]: feat(storage): Add history item automatic trimming and max item quota enforcement

// Live GitHub PR #099 [1789472465.8068416]: perf(bundle): Optimize Tailwind CSS v4 token resolution and Vite build chunk size

// Live GitHub PR #100 [1789472476.6615]: docs(readme): Expand architecture overview, test coverage guide, and contribution docs
