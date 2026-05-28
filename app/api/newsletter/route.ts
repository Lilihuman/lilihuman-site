import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, source } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('GOOGLE_SHEETS_WEBHOOK_URL is not set');
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, source: source || 'newsletter' }),
    });

    if (!response.ok) {
      throw new Error(`Sheets webhook responded with ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter signup error:', err);
    return NextResponse.json({ error: 'Failed to save email' }, { status: 500 });
  }
}
