"use client";

import { useState } from "react";
import Image from "next/image";
import LightboxDialog from "./LightboxDialog";
import { galleryImages } from "@/lib/data/gallery";
import type { GalleryImage } from "@/types";

export default function GalleryGrid() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {galleryImages.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelected(image)}
            className="group aspect-[4/3] rounded-lg bg-accent-warm/40 overflow-hidden border border-accent-warm hover:border-accent-terra transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-terra relative"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      <LightboxDialog image={selected} onClose={() => setSelected(null)} />
    </>
  );
}
