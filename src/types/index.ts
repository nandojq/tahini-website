export interface Show {
  id: string;
  date: string; // ISO 8601 e.g. "2025-06-14"
  venue: string;
  city: string;
  ticketUrl?: string;
}

export interface Album {
  id: string;
  title: string;
  type?: "Album" | "EP" | "Single";
  year: number;
  coverSrc: string;
  spotifyEmbedUrl?: string;
  streaming?: {
    spotify?: string;
    tidal?: string;
    appleMusic?: string;
  };
}

export interface PressQuote {
  id: string;
  quote: string;
  publication: string;
  author?: string;
  url?: string;
}

export type GalleryCategory = "Live" | "Press";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: GalleryCategory;
}

export interface Member {
  id: string;
  name: string;
  instrument: string;
  bio: string;
  photoSrc: string;
}
