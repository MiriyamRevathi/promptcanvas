/**
 * PromptCanvas Extension Module: Detect semantic drift between successive system prompt revisions
 * Description: Identifies subtle shifts in assistant behavior across prompt updates.
 */

export interface IextdriftdetectorOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextdriftdetectorDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_drift_detector.";
  }
  return [Directive: ext_drift_detector] ;
}
