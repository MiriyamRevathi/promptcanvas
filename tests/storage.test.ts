import { describe, it, expect, beforeEach } from 'vitest';
import {
  getPreferences,
  savePreferences,
  getSavedPrompts,
  savePrompt,
  deletePrompt,
  getHistory,
  saveHistory,
  updateHistoryItem,
  deleteHistoryItem,
  clearHistory,
} from '../src/lib/storage';
import { generateStructuredPrompt } from '../src/lib/promptEngine';
import { SavedPrompt, HistoryItem } from '../src/types/prompt';

describe('storage utilities', () => {
  const store: Record<string, string> = {};

  beforeEach(() => {
    Object.keys(store).forEach((k) => delete store[k]);

    // Provide robust mock for localStorage
    globalThis.localStorage = {
      getItem: (key: string) => store[key] ?? null,
      setItem: (key: string, value: string) => {
        store[key] = String(value);
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        Object.keys(store).forEach((k) => delete store[k]);
      },
      key: (i: number) => Object.keys(store)[i] ?? null,
      length: Object.keys(store).length,
    };
  });

  it('saves and loads user preferences', () => {
    const prefs = getPreferences();
    expect(prefs.defaultMode).toBeDefined();

    savePreferences({ defaultMode: 'detailed', defaultCategory: 'Dashboard', autoSave: false });
    const updated = getPreferences();
    expect(updated.defaultMode).toBe('detailed');
    expect(updated.defaultCategory).toBe('Dashboard');
    expect(updated.autoSave).toBe(false);
  });

  it('saves, retrieves, and deletes prompts', () => {
    const { sections } = generateStructuredPrompt('Test prompt idea', 'builder');
    const prompt: SavedPrompt = {
      id: 'test-123',
      title: 'Test Prompt Title',
      originalIdea: 'Test prompt idea',
      category: 'Website',
      mode: 'builder',
      sections,
      quality: {
        overall: 88,
        goal: 88,
        audience: 88,
        features: 88,
        design: 88,
        technical: 88,
        constraints: 88,
        details: { wordCount: 200, clarityFactor: 90 },
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    expect(savePrompt(prompt)).toBe(true);
    const saved = getSavedPrompts();
    expect(saved.length).toBe(1);
    expect(saved[0].id).toBe('test-123');

    expect(deletePrompt('test-123')).toBe(true);
    expect(getSavedPrompts().length).toBe(0);
  });

  it('saves, updates, and clears generation history', () => {
    const { sections } = generateStructuredPrompt('History prompt idea', 'builder');
    const item: HistoryItem = {
      id: 'hist-1',
      title: 'History Item',
      originalIdea: 'History prompt idea',
      category: 'SaaS',
      mode: 'builder',
      sections,
      quality: {
        overall: 82,
        goal: 82,
        audience: 82,
        features: 82,
        design: 82,
        technical: 82,
        constraints: 82,
        details: { wordCount: 150, clarityFactor: 85 },
      },
      generatedAt: new Date().toISOString(),
    };

    expect(saveHistory(item)).toBe(true);
    expect(getHistory().length).toBe(1);

    expect(updateHistoryItem('hist-1', { title: 'Updated Title' })).toBe(true);
    expect(getHistory()[0].title).toBe('Updated Title');

    expect(deleteHistoryItem('hist-1')).toBe(true);
    expect(getHistory().length).toBe(0);

    saveHistory(item);
    expect(clearHistory()).toBe(true);
    expect(getHistory().length).toBe(0);
  });
});
