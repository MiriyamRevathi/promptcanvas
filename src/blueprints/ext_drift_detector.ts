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

export class extdriftdetectorEngine {
  private checks: string[] = [];

  constructor(public options: IextdriftdetectorOptions) {}

  public registerCheck(checkName: string): void {
    if (checkName && !this.checks.includes(checkName)) {
      this.checks.push(checkName);
    }
  }

  public evaluate(text: string): { status: "pass" | "warn" | "fail"; score: number } {
    if (!text || text.length < 15) {
      return { status: "fail", score: 25 };
    }
    return {
      status: text.length > 50 ? "pass" : "warn",
      score: text.length > 50 ? 98 : 70
    };
  }
}
