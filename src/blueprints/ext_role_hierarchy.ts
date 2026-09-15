/**
 * PromptCanvas Extension Module: Manage hierarchical priority between org-wide and project system prompts
 * Description: Enforces organizational governance rules while allowing team customization.
 */

export interface IextrolehierarchyOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextrolehierarchyDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_role_hierarchy.";
  }
  return [Directive: ext_role_hierarchy] ;
}

export class extrolehierarchyEngine {
  private checks: string[] = [];

  constructor(public options: IextrolehierarchyOptions) {}

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
