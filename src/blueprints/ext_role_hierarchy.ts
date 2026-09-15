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
