/**
 * PromptCanvas Architecture Blueprint: Generate explicit negative constraints and anti-pattern warnings
 * Purpose: Instructs LLMs on forbidden libraries, outdated patterns, and unsafe practices.
 */

export interface InegativepromptrulesBlueprint {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly completenessWeight: number;
}

export function generatenegativepromptrulesDirective(context: string): string {
  if (!context || context.trim().length === 0) {
    return "Apply default domain heuristics for negative_prompt_rules.";
  }
  return Refined prompt specification:  [Domain: negative_prompt_rules];
}
