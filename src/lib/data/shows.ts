import type { Show } from "@/types";

const byDate = (a: Show, b: Show) => a.date.localeCompare(b.date);

export const upcomingShows: Show[] = ([
  {
    id: "show-2",
    date: "2026-08-29",
    venue: "Colora Festival",
    city: "De Bruul Park, Leuven, BE",
  },
] as Show[]).sort(byDate);

export const pastShows: Show[] = ([
  {
    id: "past-1",
    date: "2025-03-15",
    venue: "BAZART Festival",
    city: "Leuven, BE",
  },
    {
    id: "show-1",
    date: "2025-04-30",
    venue: "Brasserie de la Mule",
    city: "Brussels, BE",
  },
  {
    id: "show-2",
    date: "2025-05-01",
    venue: "Rösslstube",
    city: "Dresden, DE",
  },
  {
    id: "show-3",
    date: "2025-05-03",
    venue: "Alte Fabrikhalle",
    city: "Dresden, DE",
  },
  {
    id: "show-4",
    date: "2025-08-10",
    venue: "JOSPOP Festival",
    city: "Aarschot, BE",
  },
  {
    id: "show-5",
    date: "2025-09-06",
    venue: "Zomeerfeest KSA",
    city: "Aalter, BE",
  },
    {
    id: "show-6",
    date: "2026-04-06",
    venue: "Free Podium JH Kroenkel",
    city: "Nijlen, BE",
  },
  {
    id: "show-7",
    date: "2026-05-16",
    venue: "Brasserie de la Senne",
    city: "Brussels, BE",
  },
] as Show[]).sort((a, b) => b.date.localeCompare(a.date));
