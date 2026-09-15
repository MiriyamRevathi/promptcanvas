import { PromptSections } from '../types/prompt';

/**
 * Formats prompt into clean plain text for clipboard copying
 */
export function formatPromptAsText(title: string, sections: PromptSections): string {
  const parts: string[] = [];

  if (title) {
    parts.push(`TITLE: ${title.toUpperCase()}\n`);
  }

  const order: Array<keyof PromptSections> = [
    'goal',
    'audience',
    'design',
    'features',
    'content',
    'ux',
    'technical',
    'constraints',
  ];

  for (const key of order) {
    const sec = sections[key];
    if (sec && sec.content.trim()) {
      parts.push(`${sec.title.toUpperCase()}\n\n${sec.content.trim()}\n`);
    }
  }

  return parts.join('\n').trim();
}

/**
 * Formats prompt into clean Markdown for markdown-supporting destinations
 */
export function formatPromptAsMarkdown(title: string, sections: PromptSections): string {
  const parts: string[] = [];

  if (title) {
    parts.push(`# ${title}\n`);
  }

  const order: Array<keyof PromptSections> = [
    'goal',
    'audience',
    'design',
    'features',
    'content',
    'ux',
    'technical',
    'constraints',
  ];

  for (const key of order) {
    const sec = sections[key];
    if (sec && sec.content.trim()) {
      parts.push(`## ${sec.title}\n\n${sec.content.trim()}\n`);
    }
  }

  return parts.join('\n').trim();
}

/**
 * Generates a clean, descriptive title from the user's idea and category
 */
export function generatePromptTitle(idea: string, category: string): string {
  const trimmed = idea.trim();
  if (!trimmed) return `${category} Prompt`;

  // Remove common prefix verbs
  let title = trimmed.replace(
    /^(make|build|create|design|develop|generate|code|a|an|the)\s+/i,
    ''
  );

  // Capitalize words
  title = title
    .split(/\s+/)
    .slice(0, 5)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');

  // If title is too short or generic, append category
  if (title.length < 8 && !title.toLowerCase().includes(category.toLowerCase())) {
    title = `${title} ${category}`;
  }

  return title.slice(0, 45).trim();
}
