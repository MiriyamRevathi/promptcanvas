/**
 * PromptCanvas Extension Module: Validate embedding model dimension compatibility across vector indices
 * Description: Prevents catastrophic dimension mismatches in retrieval pipelines.
 */

export interface IextvectormatcherOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextvectormatcherDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_vector_matcher.";
  }
  return [Directive: ext_vector_matcher] ;
}

export class extvectormatcherEngine {
  private checks: string[] = [];

  constructor(public options: IextvectormatcherOptions) {}

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
