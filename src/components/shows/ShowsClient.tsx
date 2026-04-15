"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ShowCard from "./ShowCard";
import type { Show } from "@/types";

interface ShowsClientProps {
  upcoming: Show[];
  past: Show[];
}

export default function ShowsClient({ upcoming, past }: ShowsClientProps) {
  return (
    <Tabs defaultValue="upcoming">
      <TabsList className="mb-8 bg-accent-warm/30">
        <TabsTrigger value="upcoming">
          Upcoming ({upcoming.length})
        </TabsTrigger>
        <TabsTrigger value="past">
          Past ({past.length})
        </TabsTrigger>
      </TabsList>

      <TabsContent value="upcoming">
        {upcoming.length === 0 ? (
          <p className="text-foreground/50 py-8 text-center">
            No upcoming shows at the moment — check back soon.
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {upcoming.map((show) => (
              <ShowCard key={show.id} show={show} />
            ))}
          </div>
        )}
      </TabsContent>

      <TabsContent value="past">
        {past.length === 0 ? (
          <p className="text-foreground/50 py-8 text-center">No past shows found.</p>
        ) : (
          <div className="flex flex-col gap-3 opacity-75">
            {past.map((show) => (
              <ShowCard key={show.id} show={show} />
            ))}
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
}
