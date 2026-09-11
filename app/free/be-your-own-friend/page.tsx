import { redirect } from 'next/navigation';

/**
 * UNLISTED subscriber-only freebie — "Be Your Own Friend" (Human Note #14).
 *
 * The newsletter links here (with UTM params). Human Note readers already gave
 * their email, so this must NOT land on any page or gate — it sends them
 * straight to the PDF. Standalone route on purpose: not in `data/freebies.ts`
 * (that machinery email-gates), no `hidden` flag (that 404s), not in nav/shop/
 * free-workouts/search.
 */
export default function BeYourOwnFriendRedirect() {
  redirect('/downloads/be-your-own-friend.pdf');
}
