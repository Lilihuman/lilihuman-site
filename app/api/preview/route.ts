import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import type { NextRequest } from 'next/server';

/**
 * Enable Preview Mode. Checks the submitted password against PREVIEW_PASSWORD
 * (a Vercel env var) and, on match, sets the signed Draft Mode cookie. Fails
 * closed: if the env var is unset or the password is wrong, nothing is enabled.
 */
export async function POST(req: NextRequest) {
  const form = await req.formData();
  const password = form.get('password');
  const expected = process.env.PREVIEW_PASSWORD;

  if (!expected || typeof password !== 'string' || password !== expected) {
    redirect('/preview?error=1');
  }

  draftMode().enable();
  redirect('/preview?ok=1');
}
