/**
 * PromptCanvas Extension Module: Parse prompt markdown into abstract syntax tree nodes for inspection
 * Description: Deconstructs prompt layouts into navigable syntax trees for automated analysis.
 */

export interface IextmarkdownastOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextmarkdownastDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_markdown_ast.";
  }
  return [Directive: ext_markdown_ast] ;
}
