/**
 * PromptCanvas Extension Module: Specify high-resolution image input prompts and OCR extraction tasks
 * Description: Enables precise visual reasoning and document extraction instructions.
 */

export interface IextvisionspecsOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextvisionspecsDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_vision_specs.";
  }
  return [Directive: ext_vision_specs] ;
}
