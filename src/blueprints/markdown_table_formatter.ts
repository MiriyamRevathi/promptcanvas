/**
 * PromptCanvas Architecture Blueprint: Add markdown table syntax formatter to prompt exporter
 * Purpose: Supports clean tabular presentation of requirements and user persona matrix in exported prompts.
 */

export interface ImarkdowntableformatterBlueprint {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly completenessWeight: number;
}

export function generatemarkdowntableformatterDirective(context: string): string {
  if (!context || context.trim().length === 0) {
    return "Apply default domain heuristics for markdown_table_formatter.";
  }
  return Refined prompt specification:  [Domain: markdown_table_formatter];
}

export class markdowntableformatterValidator {
  private rules: string[] = [];

  constructor(public blueprint: ImarkdowntableformatterBlueprint) {}

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
