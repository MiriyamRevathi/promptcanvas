import { describe, it, expect } from 'vitest';
import {
  detectDomainAndCategory,
  extractSubject,
  generateStructuredPrompt,
  generateSuggestions,
} from '../src/lib/promptEngine';

describe('promptEngine', () => {
  describe('extractSubject', () => {
    it('extracts subject from imperative sentences', () => {
      expect(extractSubject('build a coffee shop website')).toBe('Coffee shop website');
      expect(extractSubject('create an interactive dashboard for crypto')).toBe('Interactive dashboard for crypto');
      expect(extractSubject('design a mobile app for fitness tracker')).toBe('Mobile app for fitness tracker');
    });

    it('handles empty or whitespace strings', () => {
      expect(extractSubject('')).toBe('custom digital product');
      expect(extractSubject('   ')).toBe('custom digital product');
    });
  });

  describe('detectDomainAndCategory', () => {
    it('identifies hospitality domain from keywords', () => {
      const result = detectDomainAndCategory('artisan coffee roastery café menu');
      expect(result.domainKey).toBe('hospitality');
      expect(result.detectedCategory).toBe('Website');
    });

    it('identifies saas domain from keywords', () => {
      const result = detectDomainAndCategory('B2B subscription workflow automation software');
      expect(result.domainKey).toBe('saas');
      expect(result.detectedCategory).toBe('SaaS');
    });

    it('identifies ecommerce domain from keywords', () => {
      const result = detectDomainAndCategory('online shopping cart store for streetwear');
      expect(result.domainKey).toBe('ecommerce');
      expect(result.detectedCategory).toBe('E-commerce');
    });

    it('respects category override when provided', () => {
      const result = detectDomainAndCategory('crypto market visualizer', 'Dashboard');
      expect(result.detectedCategory).toBe('Dashboard');
    });
  });

  describe('generateStructuredPrompt', () => {
    it('generates all 8 core prompt sections', () => {
      const result = generateStructuredPrompt('Personal budgeting finance app', 'builder');
      expect(result.sections).toBeDefined();
      expect(result.sections.goal).toBeDefined();
      expect(result.sections.audience).toBeDefined();
      expect(result.sections.features).toBeDefined();
      expect(result.sections.design).toBeDefined();
      expect(result.sections.technical).toBeDefined();
      expect(result.sections.content).toBeDefined();
      expect(result.sections.ux).toBeDefined();
      expect(result.sections.constraints).toBeDefined();

      expect(result.sections.goal.content.length).toBeGreaterThan(10);
      expect(result.sections.features.content.length).toBeGreaterThan(10);
      expect(result.sections.design.content.length).toBeGreaterThan(10);
      expect(result.sections.technical.content.length).toBeGreaterThan(10);
    });

    it('supports quick mode with concise formatting', () => {
      const result = generateStructuredPrompt('Developer documentation portal', 'quick');
      expect(result.sections.goal.content.toLowerCase()).toContain('direct value delivery');
    });

    it('supports detailed mode with comprehensive context', () => {
      const result = generateStructuredPrompt('Developer documentation portal', 'detailed');
      expect(result.sections.goal.content.toLowerCase()).toContain('primary business objective');
    });
  });

  describe('generateSuggestions', () => {
    it('provides actionable suggestions based on content', () => {
      const { sections, detectedCategory } = generateStructuredPrompt('Coffee shop website', 'builder');
      const suggestions = generateSuggestions('Coffee shop website', sections, detectedCategory);
      expect(Array.isArray(suggestions)).toBe(true);
      expect(suggestions.length).toBeGreaterThan(0);
      expect(suggestions[0]).toHaveProperty('id');
      expect(suggestions[0]).toHaveProperty('title');
      expect(suggestions[0]).toHaveProperty('additionText');
      expect(suggestions[0]).toHaveProperty('targetSection');
    });
  });
});
