/**
 * PromptCanvas Extension Module: Define multi-provider fallback cascading routes for degraded LLM APIs
 * Description: Reroutes requests automatically when primary model endpoints encounter downtime.
 */

export interface IextfallbackrulesOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextfallbackrulesDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_fallback_rules.";
  }
  return [Directive: ext_fallback_rules] ;
}
