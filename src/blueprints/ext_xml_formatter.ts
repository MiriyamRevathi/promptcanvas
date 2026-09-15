/**
 * PromptCanvas Extension Module: Format prompt directives using structured XML tags for model clarity
 * Description: Enhances instruction following by cleanly separating context, instructions, and examples.
 */

export interface IextxmlformatterOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextxmlformatterDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_xml_formatter.";
  }
  return [Directive: ext_xml_formatter] ;
}
