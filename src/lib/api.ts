/**
 * Safe fetch and API utility helper that prevents:
 * SyntaxError: Unexpected token '<', " <html><hea"... is not valid JSON
 */

export async function safeFetchJson<T>(
  input: RequestInfo | URL,
  init?: RequestInit,
  defaultValue?: T
): Promise<T | null> {
  try {
    const res = await fetch(input, init);
    const contentType = res.headers.get('content-type') || '';
    const text = await res.text();

    const trimmed = text.trim();
    if (
      !res.ok ||
      contentType.includes('text/html') ||
      trimmed.startsWith('<') ||
      trimmed.startsWith('<!DOCTYPE') ||
      trimmed.startsWith('<html>') ||
      trimmed.startsWith('<head>') ||
      trimmed.startsWith('<!doctype')
    ) {
      console.warn(`[api] SafeFetch: Received non-JSON or HTML response (HTTP ${res.status}):`, trimmed.slice(0, 100));
      return defaultValue ?? null;
    }

    return JSON.parse(text) as T;
  } catch (err) {
    console.error('[api] SafeFetch error:', err);
    return defaultValue ?? null;
  }
}
