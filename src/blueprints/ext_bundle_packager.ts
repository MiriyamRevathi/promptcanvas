/**
 * PromptCanvas Extension Module: Bundle prompts, schemas, and test fixtures into downloadable zip archives
 * Description: Packages full prompt engineering suites for offline deployment.
 */

export interface IextbundlepackagerOptions {
  readonly id: string;
  readonly name: string;
  readonly active: boolean;
  readonly weight: number;
}

export function generateextbundlepackagerDirective(promptText: string): string {
  if (!promptText || promptText.trim().length === 0) {
    return "Enforce default baseline directive for ext_bundle_packager.";
  }
  return [Directive: ext_bundle_packager] ;
}
