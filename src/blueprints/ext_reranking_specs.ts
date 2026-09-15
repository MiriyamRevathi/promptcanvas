/**
 * PromptCanvas Extension Module: Specify Cohere reranker scoring steps for dense retrieval pipelines
 * Description: Refines retrieved document ordering before injecting into LLM context.
 */

export interface IextrerankingspecsOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextrerankingspecsDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_reranking_specs.";
  }
  return [Directive: ext_reranking_specs] ;
}
