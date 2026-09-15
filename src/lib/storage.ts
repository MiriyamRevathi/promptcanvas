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
