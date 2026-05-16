import type { Album } from "@/types";

export const albums: Album[] = [
  {
    id: "album-1",
    title: "Sundaze",
    type: "EP",
    year: 2025,
    coverSrc: "/images/albums/Sundaze_AlbumCover_3500x3500.jpg",
    streaming: {
      spotify: "https://open.spotify.com/album/1KtfjDuuRnjyPlEgBPArUj",
      tidal: "https://tidal.com/album/447515279/u",
      appleMusic: "https://music.apple.com/us/album/sundaze-ep/1826279331",
    },
  },
  {
    id: "album-2",
    title: "Golden Hour Reflections",
    type: "Album",
    year: 2023,
    coverSrc: "/images/albums/AlbumCover.jpg",
    streaming: {
      spotify: "https://open.spotify.com/album/10K8G1RUe23TWNZ86WMDJ4",
      tidal: "https://tidal.com/album/305477280/u",
      appleMusic: "https://music.apple.com/us/album/golden-hour-reflections/1698151739",
    },
  },
];
