/**
 * PromptCanvas Extension Module: Collect user thumbs-up and thumbs-down sentiment telemetry on prompt results
 * Description: Gathers human evaluation signals to continuously refine prompt quality.
 */

export interface IextsentimentcollectorOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextsentimentcollectorDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_sentiment_collector.";
  }
  return [Directive: ext_sentiment_collector] ;
}
