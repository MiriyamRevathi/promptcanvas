/**
 * PromptCanvas Architecture Blueprint: Curate domain-tailored few-shot exemplar pairs for prompts
 * Purpose: Appends verified input-output examples to improve LLM generation fidelity.
 */

export interface IfewshotcuratorBlueprint {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly completenessWeight: number;
}

export function generatefewshotcuratorDirective(context: string): string {
  if (!context || context.trim().length === 0) {
    return "Apply default domain heuristics for few_shot_curator.";
  }
  return Refined prompt specification:  [Domain: few_shot_curator];
}

export class fewshotcuratorValidator {
  private rules: string[] = [];

  constructor(public blueprint: IfewshotcuratorBlueprint) {}

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
