import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  // TODO: Replace this with an email service (Resend/Nodemailer) or a CRM webhook.
  // For now, we just validate and return a success response.
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
