import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  if (!data.email || !data.message) {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
  }

  // Resend sera branché au Sprint 3
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ ok: true });
  }

  // TODO Sprint 3 : intégration Resend
  return NextResponse.json({ ok: true });
}
