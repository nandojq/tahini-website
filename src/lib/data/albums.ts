import type { Album } from "@/types";

export const albums: Album[] = [
  {
    id: "album-1",
    title: "Sundaze",
    type: "EP",
    year: 2025,
    coverSrc: "/images/albums/Sundaze_AlbumCover_3500x3500.jpg",
    streaming: {
      spotify: undefined,   // add link later
      tidal: undefined,     // add link later
      appleMusic: undefined, // add link later
    },
  },
  {
    id: "album-2",
    title: "Golden Hour Reflections",
    type: "Album",
    year: 2023,
    coverSrc: "/images/albums/AlbumCover.jpg",
    streaming: {
      spotify: undefined,   // add link later
      tidal: undefined,     // add link later
      appleMusic: undefined, // add link later
    },
  },
];
