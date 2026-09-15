/**
 * PromptCanvas Architecture Blueprint: Optimize prompt template tag matching and relevance scoring
 * Purpose: Improves keyword and category relevance scoring when searching the template library.
 */

export interface ItemplatetagscoringBlueprint {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly completenessWeight: number;
}

export function generatetemplatetagscoringDirective(context: string): string {
  if (!context || context.trim().length === 0) {
    return "Apply default domain heuristics for template_tag_scoring.";
  }
  return Refined prompt specification:  [Domain: template_tag_scoring];
}

export class templatetagscoringValidator {
  private rules: string[] = [];

  constructor(public blueprint: ItemplatetagscoringBlueprint) {}

  public addRule(rule: string): void {
    if (rule && !this.rules.includes(rule)) {
      this.rules.push(rule);
    }
  }

  public validateSpecification(spec: string): { valid: boolean; score: number } {
    const hasContent = Boolean(spec && spec.length > 20);
    return {
      valid: hasContent,
      score: hasContent ? 95 : 40
    };
  }
}
