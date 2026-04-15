import type { Show } from "@/types";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarDays, MapPin } from "lucide-react";

interface ShowCardProps {
  show: Show;
}

export default function ShowCard({ show }: ShowCardProps) {
  const displayDate = new Date(show.date + "T00:00:00").toLocaleDateString(
    "en-US",
    { weekday: "short", month: "long", day: "numeric", year: "numeric" }
  );

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-accent-warm rounded-lg p-5 hover:border-accent-terra transition-colors">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-sm text-accent-terra font-semibold">
          <CalendarDays size={14} />
          {displayDate}
        </div>
        <p className="font-heading text-xl font-semibold">{show.venue}</p>
        <div className="flex items-center gap-1 text-sm text-foreground/60">
          <MapPin size={13} />
          {show.city}
        </div>
      </div>
      {show.ticketUrl && (
        <a
          href={show.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: "sm" }),
            "w-fit bg-accent-terra hover:bg-accent-terra/80 text-background flex-shrink-0"
          )}
        >
          Get Tickets
        </a>
      )}
    </div>
  );
}
