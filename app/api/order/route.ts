import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
});

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Payment not completed' }, { status: 402 });
    }

    return NextResponse.json({
      sessionId: session.id,
      customerEmail: session.customer_details?.email || '',
      productName: session.metadata?.productId || 'Your purchase',
      productType: session.metadata?.productType || 'digital',
      filePath: session.metadata?.filePath || '',
      amountTotal: session.amount_total || 0,
    });
  } catch (err) {
    console.error('Order verification error:', err);
    return NextResponse.json({ error: 'Could not verify order' }, { status: 500 });
  }
}
