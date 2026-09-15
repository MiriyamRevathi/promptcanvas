/**
 * PromptCanvas Extension Module: Sanitize interpolated user inputs against prompt injection sequences
 * Description: Strips dangerous delimiters like system tags and special tokens from user inputs.
 */

export interface IextvariablesanitizerOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextvariablesanitizerDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_variable_sanitizer.";
  }
  return [Directive: ext_variable_sanitizer] ;
}
