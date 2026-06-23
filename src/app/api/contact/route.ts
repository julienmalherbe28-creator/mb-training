import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const data = await request.json();

  if (!data.email || !data.message) {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
  }

  // Sans clé API : simule un succès (développement local)
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
    console.log("[Contact] Message reçu (mode dev — Resend non configuré) :", data);
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "MB Training <contact@mb-training.fr>",
    to: [process.env.CONTACT_EMAIL],
    replyTo: data.email,
    subject: `Nouveau message — ${data.firstName} ${data.lastName} (${data.goal || "objectif non précisé"})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #111827; border-bottom: 2px solid #F97316; padding-bottom: 8px;">
          Nouveau message depuis MB Training
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #6B7280; width: 140px;">Prénom</td>
            <td style="padding: 8px; color: #111827;">${data.firstName}</td>
          </tr>
          <tr style="background: #F9FAFB;">
            <td style="padding: 8px; font-weight: bold; color: #6B7280;">Nom</td>
            <td style="padding: 8px; color: #111827;">${data.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #6B7280;">Email</td>
            <td style="padding: 8px; color: #111827;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          <tr style="background: #F9FAFB;">
            <td style="padding: 8px; font-weight: bold; color: #6B7280;">Téléphone</td>
            <td style="padding: 8px; color: #111827;">${data.phone || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #6B7280;">Objectif</td>
            <td style="padding: 8px; color: #F97316; font-weight: bold;">${data.goal || "—"}</td>
          </tr>
        </table>
        <div style="background: #F9FAFB; border-left: 4px solid #F97316; padding: 16px; border-radius: 4px; margin: 16px 0;">
          <p style="font-weight: bold; color: #6B7280; margin: 0 0 8px;">Message</p>
          <p style="color: #111827; margin: 0; white-space: pre-wrap;">${data.message}</p>
        </div>
        <p style="color: #9CA3AF; font-size: 12px; margin-top: 24px;">
          Message envoyé depuis mb-training.fr · Répondez directement à cet email pour contacter ${data.firstName}.
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("[Contact] Erreur Resend :", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
