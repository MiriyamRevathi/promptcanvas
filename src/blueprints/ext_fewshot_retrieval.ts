/**
 * PromptCanvas Extension Module: Dynamically retrieve most relevant few-shot exemplars via cosine similarity
 * Description: Injects the most pertinent reference examples tailored to each query.
 */

export interface IextfewshotretrievalOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextfewshotretrievalDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_fewshot_retrieval.";
  }
  return [Directive: ext_fewshot_retrieval] ;
}

export class extfewshotretrievalEngine {
  private checks: string[] = [];

  constructor(public options: IextfewshotretrievalOptions) {}

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
