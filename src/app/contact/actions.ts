"use server";

import { Resend } from "resend";

export interface ContactFormState {
  success: boolean;
  error?: string;
}

export async function submitContactForm(
  _prev: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string | null)?.trim();
  const email = (formData.get("email") as string | null)?.trim();
  const subject = (formData.get("subject") as string | null)?.trim();
  const message = (formData.get("message") as string | null)?.trim();

  if (!name || !email || !subject || !message) {
    return { success: false, error: "All fields are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey === "re_your_api_key_here") {
    console.warn("RESEND_API_KEY not set — email not sent.");
    return { success: false, error: "Email service is not configured yet." };
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Tahini Tuesday Website <onboarding@resend.dev>",
    to: "tahinituesday@gmail.com",
    replyTo: `${name} <${email}>`,
    subject: `[${subject}] New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr />
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Failed to send message. Please try again." };
  }

  return { success: true };
}
