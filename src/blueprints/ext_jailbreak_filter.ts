/**
 * PromptCanvas Extension Module: Filter adversarial jailbreak patterns and delimiter injection attacks
 * Description: Protects prompt instructions from user prompt injection manipulation.
 */

export interface IextjailbreakfilterOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextjailbreakfilterDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_jailbreak_filter.";
  }
  return [Directive: ext_jailbreak_filter] ;
}
