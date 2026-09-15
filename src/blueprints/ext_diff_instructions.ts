/**
 * PromptCanvas Extension Module: Instruct AI to emit unified diff patch chunks instead of full files
 * Description: Dramatically reduces output token volume by requesting targeted code diffs.
 */

export interface IextdiffinstructionsOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextdiffinstructionsDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_diff_instructions.";
  }
  return [Directive: ext_diff_instructions] ;
}
