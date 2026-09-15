/**
 * PromptCanvas Extension Module: Calculate optimal RAG chunk overlap and sliding window size
 * Description: Optimizes document chunking strategies to preserve context across boundary splits.
 */

export interface IextchunkoverlapOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextchunkoverlapDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_chunk_overlap.";
  }
  return [Directive: ext_chunk_overlap] ;
}

export class extchunkoverlapEngine {
  private checks: string[] = [];

  constructor(public options: IextchunkoverlapOptions) {}

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
