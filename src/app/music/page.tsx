import type { Metadata } from "next";
import AlbumCard from "@/components/music/AlbumCard";
import { albums } from "@/lib/data/albums";

export const metadata: Metadata = {
  title: "Music",
  description: "Stream and download Tahini Tuesday records.",
};

export default function MusicPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading text-5xl font-semibold mb-4">Music</h1>
      <p className="text-foreground/60 mb-12">
        All our records, in one place. Stream, download, or grab the vinyl.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
}
