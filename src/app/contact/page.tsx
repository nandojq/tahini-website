import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Tahini Tuesday for bookings, press, or general enquiries.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading text-5xl font-semibold mb-4">Get in Touch</h1>
      <p className="text-foreground/60 mb-10">
        For bookings, press enquiries, or just to say hello — we read everything.
      </p>

      {/* Direct contact details */}
      <div className="mb-12 p-6 rounded-xl border border-accent-warm bg-accent-warm/20">
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-[0.2em] text-accent-terra font-semibold">Contact — Booking, info &amp; more</span>
          <a
            href="mailto:tahinituesday@gmail.com"
            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            tahinituesday@gmail.com
          </a>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
