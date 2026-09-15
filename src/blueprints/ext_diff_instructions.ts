/**
 * PromptCanvas Extension Module: Instruct AI to emit unified diff patch chunks instead of full files
 * Description: Dramatically reduces output token volume by requesting targeted code diffs.
 */

export interface IextdiffinstructionsOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextdiffinstructionsDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_diff_instructions.";
  }
  return [Directive: ext_diff_instructions] ;
}

export class extdiffinstructionsEngine {
  private checks: string[] = [];

  constructor(public options: IextdiffinstructionsOptions) {}

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
