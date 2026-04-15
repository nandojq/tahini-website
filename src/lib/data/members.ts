import type { Member } from "@/types";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const members: Member[] = [
  {
    id: "member-1",
    name: "Fer",
    instrument: "Guitar / Backing Vocals",
    bio: lorem,
    photoSrc: "/images/about/fer.webp",
  },
  {
    id: "member-2",
    name: "Ana",
    instrument: "Bass / Main Vocals",
    bio: lorem,
    photoSrc: "/images/about/ana.webp",
  },
  {
    id: "member-3",
    name: "Arne",
    instrument: "Keys",
    bio: lorem,
    photoSrc: "/images/about/arne.webp",
  },
  {
    id: "member-4",
    name: "Leo",
    instrument: "Saxophone",
    bio: lorem,
    photoSrc: "/images/about/leo.webp",
  },
  {
    id: "member-5",
    name: "George",
    instrument: "Drums / Backing Vocals",
    bio: lorem,
    photoSrc: "/images/about/georgios.webp",
  },
];
