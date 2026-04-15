import type { Metadata } from "next";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from Tahini Tuesday shows and sessions.",
};

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading text-5xl font-semibold mb-4">Gallery</h1>
      <p className="text-foreground/60 mb-10">
        Snapshots from the road, the studio, and everywhere in between.
      </p>
      <GalleryGrid />
    </div>
  );
}
