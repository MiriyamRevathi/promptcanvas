import { describe, it, expect } from 'vitest';
import {
  normalizeQuery,
  searchSavedPrompts,
  searchTemplates,
  searchHistory,
} from '../src/lib/search';
import { generateStructuredPrompt } from '../src/lib/promptEngine';
import { SavedPrompt, TemplateItem, HistoryItem } from '../src/types/prompt';

describe('search utilities', () => {
  it('normalizes queries accurately', () => {
    expect(normalizeQuery('  Coffee ROASTER  ')).toBe('coffee roaster');
    expect(normalizeQuery('')).toBe('');
  });

  it('filters saved prompts by text and category', () => {
    const coffeePrompt = generateStructuredPrompt('Artisan Coffee Roaster', 'builder');
    const devopsPrompt = generateStructuredPrompt('Kubernetes monitoring dashboard', 'builder');

    const prompts: SavedPrompt[] = [
      {
        id: 'p1',
        title: 'Artisan Coffee Roaster',
        originalIdea: 'Build an espresso store',
        category: 'Website',
        mode: 'builder',
        sections: coffeePrompt.sections,
        quality: { overall: 90, goal: 90, audience: 90, features: 90, design: 90, technical: 90, constraints: 90, details: { wordCount: 300, clarityFactor: 95 } },
        createdAt: '2026-01-01T00:00:00Z',
        updatedAt: '2026-01-02T00:00:00Z',
      },
      {
        id: 'p2',
        title: 'DevOps Pipeline Monitor',
        originalIdea: 'Cluster infrastructure telemetry',
        category: 'Dashboard',
        mode: 'builder',
        sections: devopsPrompt.sections,
        quality: { overall: 85, goal: 85, audience: 85, features: 85, design: 85, technical: 85, constraints: 85, details: { wordCount: 280, clarityFactor: 90 } },
        createdAt: '2026-01-03T00:00:00Z',
        updatedAt: '2026-01-04T00:00:00Z',
      },
    ];

    const coffeeMatches = searchSavedPrompts(prompts, 'espresso');
    expect(coffeeMatches.length).toBe(1);
    expect(coffeeMatches[0].id).toBe('p1');

    const catMatches = searchSavedPrompts(prompts, '', 'Dashboard');
    expect(catMatches.length).toBe(1);
    expect(catMatches[0].id).toBe('p2');
  });

  it('filters template items by tag or idea', () => {
    const templates: TemplateItem[] = [
      {
        id: 't1',
        title: 'E-commerce Checkout Flow',
        description: 'Optimized cart and payment funnel',
        category: 'E-commerce',
        tags: ['checkout', 'stripe', 'cart'],
        idea: 'Build high-converting checkout',
      },
      {
        id: 't2',
        title: 'Mobile Fitness Tracker',
        description: 'Workout logger and heart rate charts',
        category: 'Mobile App',
        tags: ['health', 'bluetooth', 'workout'],
        idea: 'Build fitness tracker',
      },
    ];

    expect(searchTemplates(templates, 'stripe').length).toBe(1);
    expect(searchTemplates(templates, 'workout').length).toBe(1);
    expect(searchTemplates(templates, 'nonexistent').length).toBe(0);
  });

  it('filters history items by title and original idea', () => {
    const history: HistoryItem[] = [
      {
        id: 'h1',
        title: 'SaaS Customer Onboarding',
        originalIdea: 'Product tour wizard for B2B users',
        category: 'SaaS',
        mode: 'builder',
        sections: {} as any,
        quality: { overall: 80, goal: 80, audience: 80, features: 80, design: 80, technical: 80, constraints: 80, details: { wordCount: 200, clarityFactor: 85 } },
        generatedAt: '2026-01-01T00:00:00Z',
      },
    ];

    expect(searchHistory(history, 'onboarding').length).toBe(1);
    expect(searchHistory(history, 'wizard').length).toBe(1);
    expect(searchHistory(history, 'unmatched').length).toBe(0);
  });
});
