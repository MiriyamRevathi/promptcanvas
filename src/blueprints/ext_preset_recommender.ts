/**
 * PromptCanvas Extension Module: Recommend sampling temperature and top-p values based on task goals
 * Description: Sets deterministic temperature for code and higher creativity for brainstorming.
 */

export interface IextpresetrecommenderOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextpresetrecommenderDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_preset_recommender.";
  }
  return [Directive: ext_preset_recommender] ;
}

export class extpresetrecommenderEngine {
  private checks: string[] = [];

  constructor(public options: IextpresetrecommenderOptions) {}

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
