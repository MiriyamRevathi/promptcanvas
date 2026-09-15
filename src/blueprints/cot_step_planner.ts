/**
 * PromptCanvas Architecture Blueprint: Add step-by-step reasoning scaffolds for complex requirements
 * Purpose: Structures complex architectural specifications into sequential implementation steps.
 */

export interface IcotstepplannerBlueprint {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly completenessWeight: number;
}

export function generatecotstepplannerDirective(context: string): string {
  if (!context || context.trim().length === 0) {
    return "Apply default domain heuristics for cot_step_planner.";
  }
  return Refined prompt specification:  [Domain: cot_step_planner];
}
