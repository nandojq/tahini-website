"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const subjects = ["Booking", "Press", "General", "Other"] as const;

export default function ContactForm() {
  const [state, action, isPending] = useActionState<ContactFormState | null, FormData>(
    submitContactForm,
    null
  );

  if (state?.success) {
    return (
      <div className="rounded-lg border border-accent-warm bg-accent-warm/20 p-8 text-center">
        <p className="font-heading text-2xl font-semibold mb-2">Message sent!</p>
        <p className="text-foreground/60">
          Thanks for reaching out — we&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-5">
      {state?.error && (
        <p className="text-sm text-destructive bg-destructive/10 rounded-md px-4 py-2">
          {state.error}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="border-accent-warm focus-visible:ring-accent-terra"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="border-accent-warm focus-visible:ring-accent-terra"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="subject">Subject</Label>
        <Select name="subject" required>
          <SelectTrigger
            id="subject"
            className="border-accent-warm focus:ring-accent-terra"
          >
            <SelectValue placeholder="Select a subject" />
          </SelectTrigger>
          <SelectContent>
            {subjects.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="What's on your mind?"
          rows={6}
          required
          className="border-accent-warm focus-visible:ring-accent-terra resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-fit bg-accent-terra hover:bg-accent-terra/80 text-background disabled:opacity-50"
      >
        {isPending ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
