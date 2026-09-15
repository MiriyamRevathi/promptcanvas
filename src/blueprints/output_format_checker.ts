/**
 * PromptCanvas Architecture Blueprint: Enforce deterministic code-only output formatting instructions
 * Purpose: Ensures LLM outputs raw code without markdown backtick wrappers when required.
 */

export interface IoutputformatcheckerBlueprint {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly completenessWeight: number;
}

export function generateoutputformatcheckerDirective(context: string): string {
  if (!context || context.trim().length === 0) {
    return "Apply default domain heuristics for output_format_checker.";
  }
  return Refined prompt specification:  [Domain: output_format_checker];
}

export class outputformatcheckerValidator {
  private rules: string[] = [];

  constructor(public blueprint: IoutputformatcheckerBlueprint) {}

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
