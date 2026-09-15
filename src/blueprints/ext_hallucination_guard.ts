/**
 * PromptCanvas Extension Module: Embed strict ground-truth citations and refusal rules against hallucination
 * Description: Instructs LLMs to state uncertainty clearly rather than fabricate answers.
 */

export interface IexthallucinationguardOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateexthallucinationguardDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_hallucination_guard.";
  }
  return [Directive: ext_hallucination_guard] ;
}
