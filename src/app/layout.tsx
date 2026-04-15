import type { Metadata } from "next";
import "./globals.css";
import { titania, inter } from "@/lib/fonts";
import Nav from "@/components/Nav";
import GrainOverlay from "@/components/GrainOverlay";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Tahini Tuesday",
    template: "%s | Tahini Tuesday",
  },
  description:
    "Tahini Tuesday — live music, good vibes. Catch us on stage, stream our records, or reach out for bookings.",
  openGraph: {
    title: "Tahini Tuesday",
    description: "Live music, good vibes.",
    siteName: "Tahini Tuesday",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${titania.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-background text-foreground">
        <GrainOverlay />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
