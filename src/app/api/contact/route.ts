import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Forward form data to Web3Forms free service targeting Deepak's email
    const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (web3formsAccessKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsAccessKey,
          name,
          email,
          message,
          subject: `Portfolio Contact: ${name} reached out`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message via Web3Forms.");
      }
    } else {
      // Fallback logging for local development when WEB3FORMS_ACCESS_KEY is not set yet
      console.log(`[Contact Form Received] From: ${name} (${email}) | Message: ${message}`);
    }

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully! Deepak will respond to your email." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { error: "Could not send message automatically. You can email parkadheananth1998@gmail.com directly." },
      { status: 500 }
    );
  }
}
