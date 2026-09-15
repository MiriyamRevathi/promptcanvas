/**
 * PromptCanvas Extension Module: Generate OpenAI compatible function calling JSON schemas from prompts
 * Description: Translates prompt capability descriptions into structured API tool manifests.
 */

export interface IexttoolschemaOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateexttoolschemaDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_tool_schema.";
  }
  return [Directive: ext_tool_schema] ;
}

export class exttoolschemaEngine {
  private checks: string[] = [];

  constructor(public options: IexttoolschemaOptions) {}

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
