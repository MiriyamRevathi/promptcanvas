/**
 * PromptCanvas Extension Module: Generate OpenAI compatible function calling JSON schemas from prompts
 * Description: Translates prompt capability descriptions into structured API tool manifests.
 */

export interface IexttoolschemaOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateexttoolschemaDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_tool_schema.";
  }
  return [Directive: ext_tool_schema] ;
}
