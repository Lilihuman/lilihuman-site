import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, source } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const apiKey = process.env.BEEHIIV_API_KEY;
    const pubId = 'pub_7eca2ef6-4f42-442d-a345-3a906709d524';
    if (!apiKey) {
      console.error('BEEHIIV_API_KEY is not set');
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
    }

    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: false,
          utm_source: source || 'website',
          custom_fields: name ? [{ name: 'First Name', value: name }] : [],
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Beehiiv API responded with ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter signup error:', err);
    return NextResponse.json({ error: 'Failed to save email' }, { status: 500 });
  }
}
