/**
 * PromptCanvas Extension Module: Format prompt directives using structured XML tags for model clarity
 * Description: Enhances instruction following by cleanly separating context, instructions, and examples.
 */

export interface IextxmlformatterOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextxmlformatterDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_xml_formatter.";
  }
  return [Directive: ext_xml_formatter] ;
}

export class extxmlformatterEngine {
  private checks: string[] = [];

  constructor(public options: IextxmlformatterOptions) {}

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
