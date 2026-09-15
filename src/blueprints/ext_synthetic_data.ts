/**
 * PromptCanvas Extension Module: Scaffold synthetic training data generation schemas in prompt specs
 * Description: Guides LLMs to produce balanced, diverse training datasets.
 */

export interface IextsyntheticdataOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextsyntheticdataDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_synthetic_data.";
  }
  return [Directive: ext_synthetic_data] ;
}
