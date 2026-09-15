/**
 * PromptCanvas Extension Module: Encode compressed base64 URL hashes for instant prompt template sharing
 * Description: Enables one-click sharing of prompt templates via compact web URLs.
 */

export interface IextdeeplinkOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextdeeplinkDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_deep_link.";
  }
  return [Directive: ext_deep_link] ;
}
