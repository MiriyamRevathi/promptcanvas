/**
 * PromptCanvas Extension Module: Scaffold synthetic training data generation schemas in prompt specs
 * Description: Guides LLMs to produce balanced, diverse training datasets.
 */

export interface IextsyntheticdataOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextsyntheticdataDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_synthetic_data.";
  }
  return [Directive: ext_synthetic_data] ;
}

export class extsyntheticdataEngine {
  private checks: string[] = [];

  constructor(public options: IextsyntheticdataOptions) {}

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
