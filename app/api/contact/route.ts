import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Send email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Lili Human <hello@lilihuman.com>',
      to: 'lili.motaghedi@gmail.com',
      replyTo: email,
      subject: subject ? `New message: ${subject}` : `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B5E3C;">New contact form message</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="white-space: pre-wrap;">${message}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #999; font-size: 12px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    // Also save email to Google Sheets
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'contact-form', name }),
      }).catch((err) => console.error('Failed to save contact email to Sheets:', err));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
