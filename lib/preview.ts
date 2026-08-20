import { draftMode } from 'next/headers';

/**
 * Preview Mode — the owner's private view of the site.
 *
 * When the signed Draft Mode cookie is set (via /preview + the correct
 * password), hidden and not-yet-published items become visible to that one
 * browser. For everyone else this returns false, so hidden items are filtered
 * out server-side and never reach the public.
 *
 * Reading draftMode() opts the calling page into dynamic rendering, which is
 * required — a statically cached page can't show different content per viewer.
 * The try/catch keeps it safe if called outside a request scope.
 */
export function isPreview(): boolean {
  try {
    return draftMode().isEnabled;
  } catch {
    return false;
  }
}
