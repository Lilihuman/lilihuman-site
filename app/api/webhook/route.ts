import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
});

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');

  if (!sig) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    const productId = session.metadata?.productId;
    const productType = session.metadata?.productType;
    const filePath = session.metadata?.filePath;
    const customerEmail = session.customer_details?.email;

    console.log('Order completed:', {
      sessionId: session.id,
      productId,
      productType,
      filePath,
      customerEmail,
      amountTotal: session.amount_total,
    });

    // TODO: Send fulfillment email via your email provider (Resend, SendGrid, etc.)
    // Example:
    // if (productType === 'digital' && filePath && customerEmail) {
    //   await sendDownloadEmail({ to: customerEmail, filePath, productId });
    // }
  }

  return NextResponse.json({ received: true });
}

// Required for raw body parsing with Stripe webhooks
export const config = {
  api: {
    bodyParser: false,
  },
};
