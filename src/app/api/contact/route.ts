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

    // Web3Forms direct email delivery to parkadheananth1998@gmail.com
    const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY || "00ab4c69-7f4d-434b-9024-4fd9ac80fa04";

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
        subject: `New Lead from Portfolio Website: ${name}`,
        from_name: `${name} (Portfolio Contact Form)`,
        replyto: email,
      }),
    });

    const web3Data = await response.json();

    if (!response.ok || !web3Data.success) {
      console.error("Web3Forms response error:", web3Data);
      throw new Error(web3Data.message || "Failed to submit message to Web3Forms.");
    }

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully! Deepak will respond to your email." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { error: "Could not send message automatically. Please email parkadheananth1998@gmail.com directly." },
      { status: 500 }
    );
  }
}
