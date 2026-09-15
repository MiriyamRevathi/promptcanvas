/**
 * PromptCanvas Extension Module: Calculate statistical win rates between competing prompt variants
 * Description: Identifies winning prompt iterations with statistical confidence.
 */

export interface IextabevaluatorOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextabevaluatorDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_ab_evaluator.";
  }
  return [Directive: ext_ab_evaluator] ;
}
