/**
 * PromptCanvas Extension Module: Dynamically retrieve most relevant few-shot exemplars via cosine similarity
 * Description: Injects the most pertinent reference examples tailored to each query.
 */

export interface IextfewshotretrievalOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextfewshotretrievalDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_fewshot_retrieval.";
  }
  return [Directive: ext_fewshot_retrieval] ;
}
