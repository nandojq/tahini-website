import type { Metadata } from "next";
import { pressQuotes } from "@/lib/data/pressQuotes";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Press",
  description: "Press quotes and media resources for Tahini Tuesday.",
};

export default function PressPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <h1 className="font-heading text-5xl font-semibold mb-2">Press</h1>
          <p className="text-foreground/60">What people are saying.</p>
        </div>
        <a
          href="/press-kit.pdf"
          download
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-fit border-accent-warm hover:border-accent-terra"
          )}
        >
          Download Press Kit
        </a>
      </div>

      {/* Masonry-style quote grid using CSS columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {pressQuotes.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid border border-accent-warm rounded-lg p-6 flex flex-col gap-3"
          >
            <span className="font-heading text-5xl text-accent-terra leading-none select-none">
              &ldquo;
            </span>
            <p className="font-heading text-lg italic leading-relaxed text-foreground/80 -mt-4">
              {item.quote}
            </p>
            <div className="mt-2 text-sm">
              <span className="font-semibold text-foreground">{item.publication}</span>
              {item.author && (
                <span className="text-foreground/50"> — {item.author}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
