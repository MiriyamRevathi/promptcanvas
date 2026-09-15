/**
 * PromptCanvas Extension Module: Link extracted domain keywords to standard conceptual knowledge graphs
 * Description: Grounds project prompts in established domain taxonomies.
 */

export interface IextontologylinkerOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextontologylinkerDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_ontology_linker.";
  }
  return [Directive: ext_ontology_linker] ;
}
