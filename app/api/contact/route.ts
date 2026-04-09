import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Please provide name, email, and message." }, { status: 400 });
    }

    const { RESEND_API_KEY, TO_EMAIL, FROM_EMAIL } = process.env;

    if (!RESEND_API_KEY || !TO_EMAIL || !FROM_EMAIL) {
      return NextResponse.json(
        { error: "Email service is not configured. Please set RESEND_API_KEY, FROM_EMAIL, and TO_EMAIL." },
        { status: 500 }
      );
    }

    const fromAddress = FROM_EMAIL;
    const subject = `New message from ${name} via portfolio`;
    const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const html = `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br />")}</p>`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: fromAddress,
        to: TO_EMAIL,
        subject,
        text,
        html,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API error:", response.status, errorText);
      return NextResponse.json({ error: "Unable to send message. Please try again later." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Unable to send message. Please try again later." }, { status: 500 });
  }
}
