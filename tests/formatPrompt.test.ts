import { describe, it, expect } from 'vitest';
import {
  formatPromptAsText,
  formatPromptAsMarkdown,
  generatePromptTitle,
} from '../src/lib/formatPrompt';
import { generateStructuredPrompt } from '../src/lib/promptEngine';

describe('formatPrompt', () => {
  const { sections } = generateStructuredPrompt('Crypto Portfolio Tracker', 'builder');

  it('formats prompt into plain text with section headers', () => {
    const text = formatPromptAsText('Crypto Portfolio Tracker', sections);
    expect(text).toContain('TITLE: CRYPTO PORTFOLIO TRACKER');
    expect(text).toContain('PROJECT GOAL');
    expect(text).toContain('TARGET AUDIENCE');
    expect(text).toContain('CORE FEATURES');
    expect(text).toContain('DESIGN DIRECTION');
    expect(text).toContain('TECHNICAL REQUIREMENTS');
  });

  it('formats prompt into valid Markdown with h1 and h2', () => {
    const md = formatPromptAsMarkdown('Crypto Portfolio Tracker', sections);
    expect(md.startsWith('# Crypto Portfolio Tracker')).toBe(true);
    expect(md).toContain('## Project Goal');
    expect(md).toContain('## Core Features');
    expect(md).toContain('## Design Direction');
  });

  it('generates concise, capitalized prompt titles', () => {
    expect(generatePromptTitle('build a fitness workout logger', 'Mobile App')).toContain('Fitness');
    expect(generatePromptTitle('', 'SaaS')).toBe('SaaS Prompt');
  });
});
