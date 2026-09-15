import { SavedPrompt } from '../types/prompt';
import { generateStructuredPrompt } from '../lib/promptEngine';
import { calculateQualityScore } from '../lib/qualityEngine';

export function getInitialSeedPrompts(): SavedPrompt[] {
  const seedIdea = 'Create a modern website for a local artisan coffee shop with seasonal brews and store hours';
  const { sections, detectedCategory } = generateStructuredPrompt(seedIdea, 'builder', 'Website');
  const quality = calculateQualityScore(seedIdea, sections);

  return [
    {
      id: 'saved-seed-coffee',
      title: 'Artisan Coffee Shop Website',
      originalIdea: seedIdea,
      category: detectedCategory,
      mode: 'builder',
      sections,
      quality,
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
      updatedAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    },
  ];
}
