import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

/** Exit Preview Mode — clears the Draft Mode cookie. */
export async function GET() {
  draftMode().disable();
  redirect('/preview?exited=1');
}
