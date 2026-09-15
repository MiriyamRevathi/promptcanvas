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
