/**
 * PromptCanvas Extension Module: Construct quantitative evaluation rubrics for grading AI output quality
 * Description: Supplies objective scoring guidelines for automated LLM evaluation.
 */

export interface IextrubricbuilderOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextrubricbuilderDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_rubric_builder.";
  }
  return [Directive: ext_rubric_builder] ;
}

export class extrubricbuilderEngine {
  private checks: string[] = [];

  constructor(public options: IextrubricbuilderOptions) {}

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
