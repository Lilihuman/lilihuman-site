import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { getProductById, getProductFiles } from '@/data/products';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

function fileLabel(path: string): string {
  const base = path.split('/').pop() || 'Download';
  return base
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Emails the buyer their download links.
 *
 * Links rather than attachments: several programs are 30-45MB, well past what
 * inboxes accept. The files are served from public /downloads URLs, the same
 * ones the order-confirmation page uses.
 */
async function sendFulfillmentEmail(opts: {
  to: string;
  productName: string;
  files: string[];
  amountTotal: number;
  sessionId: string;
}) {
  const { to, productName, files, amountTotal, sessionId } = opts;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set — cannot send fulfillment email');
    return;
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.lilihuman.com';
  const resend = new Resend(apiKey);

  const buttons = files
    .map(
      (f) => `
        <a href="${baseUrl}${f}"
           style="display:inline-block; background:#8FA98E; color:#fff; text-decoration:none;
                  padding:12px 22px; border-radius:999px; font-size:14px; margin:0 0 10px 0;">
          ${files.length > 1 ? fileLabel(f) : 'Download your file'} &rarr;
        </a><br />`
    )
    .join('');

  await resend.emails.send({
    from: 'Lili Human <hello@lilihuman.com>',
    to,
    subject: `Your download: ${productName}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color:#5C4A3D;">
        <h2 style="color:#8B5E3C; margin-bottom:4px;">Thank you — here's your download!</h2>
        <p style="font-size:14px; line-height:1.6;">
          Your purchase of <strong>${productName}</strong> is ready.
          ${files.length > 1 ? `This bundle includes ${files.length} files:` : ''}
        </p>
        <div style="margin:24px 0;">${buttons}</div>
        <p style="font-size:13px; color:#8a7a6d; line-height:1.6;">
          Save the ${files.length > 1 ? 'files' : 'file'} somewhere safe — you can come back to this
          email any time to download ${files.length > 1 ? 'them' : 'it'} again.
        </p>
        <hr style="border:none; border-top:1px solid #eee; margin:24px 0;" />
        <p style="font-size:12px; color:#999;">
          Order ref: ${sessionId.slice(-12).toUpperCase()} &nbsp;·&nbsp;
          Total: $${(amountTotal / 100).toFixed(2)} CAD
        </p>
        <p style="font-size:12px; color:#999;">
          Trouble downloading? Just reply to this email and I'll help.
        </p>
      </div>
    `,
  });
}

/** Public intake form for the custom program (a Tally form). */
const INTAKE_FORM_URL = 'https://tally.so/r/gDNLBP';

/**
 * Emails the buyer of the custom program their next step: the intake form.
 * The program is built by hand from their answers and sent within 48–72 hours.
 */
async function sendIntakeEmail(opts: {
  to: string;
  productName: string;
  amountTotal: number;
  sessionId: string;
}) {
  const { to, productName, amountTotal, sessionId } = opts;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set — cannot send intake email');
    return;
  }
  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: 'Lili Human <hello@lilihuman.com>',
    to,
    subject: `Next step: your ${productName} intake form`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color:#5C4A3D;">
        <h2 style="color:#8B5E3C; margin-bottom:4px;">Thank you — let's build your program!</h2>
        <p style="font-size:14px; line-height:1.6;">
          Your purchase of <strong>${productName}</strong> is confirmed. One quick step and I'll
          get to work: fill out the short intake form below so I know exactly what you need —
          your goals, your schedule, any injuries or preferences.
        </p>
        <div style="margin:24px 0;">
          <a href="${INTAKE_FORM_URL}"
             style="display:inline-block; background:#8FA98E; color:#fff; text-decoration:none;
                    padding:12px 22px; border-radius:999px; font-size:14px;">
            Fill out your intake form &rarr;
          </a>
        </div>
        <p style="font-size:13px; color:#8a7a6d; line-height:1.6;">
          Once I have your answers, I'll build your fully personalised fitness and nutrition
          program and email it to you within <strong>48–72 hours</strong>.
        </p>
        <hr style="border:none; border-top:1px solid #eee; margin:24px 0;" />
        <p style="font-size:12px; color:#999;">
          Order ref: ${sessionId.slice(-12).toUpperCase()} &nbsp;·&nbsp;
          Total: $${(amountTotal / 100).toFixed(2)} CAD
        </p>
        <p style="font-size:12px; color:#999;">
          Questions? Just reply to this email.
        </p>
      </div>
    `,
  });
}

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
    const customerEmail = session.customer_details?.email;
    const product = productId ? getProductById(productId) : undefined;
    const files = product ? getProductFiles(product) : [];

    console.log('Order completed:', {
      sessionId: session.id,
      productId,
      productType,
      customerEmail,
      fileCount: files.length,
      amountTotal: session.amount_total,
    });

    // Products with files get their download links. The custom program has no
    // file — it's built by hand — so instead we email the buyer the intake form
    // to fill out, then the program follows within 48-72 hours.
    if (productType === 'digital' && files.length && customerEmail) {
      try {
        await sendFulfillmentEmail({
          to: customerEmail,
          productName: product?.name || 'Your purchase',
          files,
          amountTotal: session.amount_total || 0,
          sessionId: session.id,
        });
        console.log('Fulfillment email sent to', customerEmail);
      } catch (err) {
        // Never fail the webhook over email: Stripe would retry and the buyer
        // could get duplicates. They still have the order-confirmation page.
        console.error('Failed to send fulfillment email:', err);
      }
    } else if (productId === 'custom-program' && customerEmail) {
      try {
        await sendIntakeEmail({
          to: customerEmail,
          productName: product?.name || 'Custom Program',
          amountTotal: session.amount_total || 0,
          sessionId: session.id,
        });
        console.log('Intake email sent to', customerEmail);
      } catch (err) {
        console.error('Failed to send intake email:', err);
      }
    }
  }

  return NextResponse.json({ received: true });
}
