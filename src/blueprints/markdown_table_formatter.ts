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
