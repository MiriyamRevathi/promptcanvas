import { describe, it, expect } from 'vitest';
import { calculateQualityScore } from '../src/lib/qualityEngine';
import { generateStructuredPrompt } from '../src/lib/promptEngine';

describe('qualityEngine', () => {
  it('calculates quality score dimensions accurately', () => {
    const { sections } = generateStructuredPrompt('Real-time task board for agile squads', 'builder');
    const score = calculateQualityScore('Real-time task board for agile squads', sections);

    expect(score.overall).toBeGreaterThanOrEqual(0);
    expect(score.overall).toBeLessThanOrEqual(100);

    expect(score.goal).toBeGreaterThanOrEqual(0);
    expect(score.goal).toBeLessThanOrEqual(100);

    expect(score.audience).toBeGreaterThanOrEqual(0);
    expect(score.audience).toBeLessThanOrEqual(100);

    expect(score.features).toBeGreaterThanOrEqual(0);
    expect(score.features).toBeLessThanOrEqual(100);

    expect(score.design).toBeGreaterThanOrEqual(0);
    expect(score.design).toBeLessThanOrEqual(100);

    expect(score.technical).toBeGreaterThanOrEqual(0);
    expect(score.technical).toBeLessThanOrEqual(100);

    expect(score.constraints).toBeGreaterThanOrEqual(0);
    expect(score.constraints).toBeLessThanOrEqual(100);

    expect(score.details.wordCount).toBeGreaterThan(0);
    expect(score.details.clarityFactor).toBeGreaterThan(0);
  });

  it('rewards comprehensive input with higher quality scores', () => {
    const simple = generateStructuredPrompt('a', 'quick');
    const detailed = generateStructuredPrompt(
      'A multi-tenant healthcare scheduling software with HIPAA compliance and offline fallback',
      'detailed'
    );

    const scoreSimple = calculateQualityScore('a', simple.sections);
    const scoreDetailed = calculateQualityScore(
      'A multi-tenant healthcare scheduling software with HIPAA compliance and offline fallback',
      detailed.sections
    );

    expect(scoreDetailed.overall).toBeGreaterThan(scoreSimple.overall);
  });
});
