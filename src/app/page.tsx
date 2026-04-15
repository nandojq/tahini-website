import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { upcomingShows } from "@/lib/data/shows";
import { albums } from "@/lib/data/albums";
import { CalendarDays, MapPin } from "lucide-react";

export default function HomePage() {
  const featuredShows = upcomingShows.slice(0, 3);
  const latestAlbum = albums[0];

  return (
    <>
      <HeroSection />

      {/* Upcoming Shows teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-heading text-3xl font-semibold">Upcoming Shows</h2>
          <Link
            href="/shows"
            className="text-sm text-accent-terra hover:underline underline-offset-4"
          >
            All shows →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredShows.map((show) => (
            <div
              key={show.id}
              className="border border-accent-warm rounded-lg p-5 flex flex-col gap-3 bg-background hover:border-accent-terra transition-colors"
            >
              <div className="flex items-center gap-2 text-accent-terra text-sm font-semibold">
                <CalendarDays size={15} />
                {new Date(show.date + "T00:00:00").toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <p className="font-heading text-lg font-semibold leading-tight">
                {show.venue}
              </p>
              <div className="flex items-center gap-1 text-sm text-foreground/60">
                <MapPin size={13} />
                {show.city}
              </div>
              {show.ticketUrl && (
                <a
                  href={show.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "mt-auto w-fit border-accent-warm hover:border-accent-terra"
                  )}
                >
                  Tickets
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Latest Release teaser */}
      <section className="border-t border-accent-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col sm:flex-row items-center gap-8">
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-lg flex-shrink-0 overflow-hidden relative border border-accent-warm">
            <Image
              src={latestAlbum.coverSrc}
              alt={`${latestAlbum.title} cover`}
              fill
              className="object-cover"
              sizes="192px"
            />
          </div>
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-accent-terra font-semibold">
              Latest {latestAlbum.type ?? "Release"}
            </span>
            <h2 className="font-heading text-3xl font-semibold">
              {latestAlbum.title}
            </h2>
            <p className="text-foreground/60">{latestAlbum.year}</p>
            <Link
              href="/music"
              className={cn(
                buttonVariants({ size: "sm" }),
                "w-fit mx-auto sm:mx-0 bg-accent-terra hover:bg-accent-terra/80 text-background"
              )}
            >
              Stream &amp; Download
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
