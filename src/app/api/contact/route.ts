import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  services: string[];
  budget?: string;
  timeline?: string;
  message: string;
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, services, budget, timeline, message } = body;

  if (
    !name?.trim() ||
    !email?.trim() ||
    !message?.trim() ||
    !Array.isArray(services) ||
    services.length === 0
  ) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  const fields = [
    ["Name", name],
    ["Email", email],
    ["Company / Website", company || "—"],
    ["Interested In", services.join(", ")],
    ["Budget", budget || "—"],
    ["Timeline", timeline || "—"],
  ];

  const textBody = [
    ...fields.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    message,
  ].join("\n");

  const htmlBody = `
    <div style="font-family: sans-serif; font-size: 14px; color: #111;">
      <h2 style="margin: 0 0 16px;">New Project Inquiry</h2>
      <table style="border-collapse: collapse;">
        ${fields
          .map(
            ([label, value]) =>
              `<tr><td style="padding: 4px 12px 4px 0; color: #666; vertical-align: top;">${label}</td><td style="padding: 4px 0;">${value}</td></tr>`
          )
          .join("")}
      </table>
      <p style="margin: 16px 0 4px; color: #666;">Message:</p>
      <p style="white-space: pre-wrap; margin: 0;">${message}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "ScaleForge <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "scaleforgebusiessdev@gmail.com",
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: textBody,
      html: htmlBody,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error, null, 2));
      return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
