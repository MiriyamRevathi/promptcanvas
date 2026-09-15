/**
 * PromptCanvas Extension Module: Specify high-resolution image input prompts and OCR extraction tasks
 * Description: Enables precise visual reasoning and document extraction instructions.
 */

export interface IextvisionspecsOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextvisionspecsDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_vision_specs.";
  }
  return [Directive: ext_vision_specs] ;
}

export class extvisionspecsEngine {
  private checks: string[] = [];

  constructor(public options: IextvisionspecsOptions) {}

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
