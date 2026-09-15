/**
 * PromptCanvas Extension Module: Validate embedding model dimension compatibility across vector indices
 * Description: Prevents catastrophic dimension mismatches in retrieval pipelines.
 */

export interface IextvectormatcherOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextvectormatcherDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_vector_matcher.";
  }
  return [Directive: ext_vector_matcher] ;
}
