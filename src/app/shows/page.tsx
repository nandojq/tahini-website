import type { Metadata } from "next";
import ShowsClient from "@/components/shows/ShowsClient";
import { upcomingShows, pastShows } from "@/lib/data/shows";

export const metadata: Metadata = {
  title: "Shows",
  description: "Upcoming and past Tahini Tuesday live dates.",
};

export default function ShowsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading text-5xl font-semibold mb-4">Shows</h1>
      <p className="text-foreground/60 mb-10">
        We play everywhere. Come find us.
      </p>
      <ShowsClient upcoming={upcomingShows} past={pastShows} />
    </div>
  );
}
