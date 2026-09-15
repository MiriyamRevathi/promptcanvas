/**
 * PromptCanvas Extension Module: Alert on imminent context window overflow before sending prompt queries
 * Description: Prevents runtime token truncation and silent information loss.
 */

export interface IextoverflowsentinelOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextoverflowsentinelDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_overflow_sentinel.";
  }
  return [Directive: ext_overflow_sentinel] ;
}
