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

export class extsentimentcollectorEngine {
  private checks: string[] = [];

  constructor(public options: IextsentimentcollectorOptions) {}

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
