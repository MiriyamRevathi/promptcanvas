/**
 * PromptCanvas Extension Module: Calculate optimal RAG chunk overlap and sliding window size
 * Description: Optimizes document chunking strategies to preserve context across boundary splits.
 */

export interface IextchunkoverlapOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextchunkoverlapDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_chunk_overlap.";
  }
  return [Directive: ext_chunk_overlap] ;
}
