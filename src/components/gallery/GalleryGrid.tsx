"use client";

import { useState } from "react";
import Image from "next/image";
import LightboxDialog from "./LightboxDialog";
import { galleryImages } from "@/lib/data/gallery";
import type { GalleryCategory, GalleryImage } from "@/types";

const CATEGORIES: GalleryCategory[] = ["Live", "Press"];

interface SectionProps {
  title: GalleryCategory;
  images: GalleryImage[];
  onSelect: (image: GalleryImage) => void;
}

function GallerySection({ title, images, onSelect }: SectionProps) {
  return (
    <section className="mb-14">
      <h2 className="font-heading text-2xl font-semibold mb-5 pb-3 border-b border-accent-warm">
        {title}
      </h2>
      {images.length === 0 ? (
        <p className="text-foreground/40 text-sm italic">No photos yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {images.map((image) => (
            <button
              key={image.id}
              onClick={() => onSelect(image)}
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
      )}
    </section>
  );
}

export default function GalleryGrid() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <>
      {CATEGORIES.map((category) => (
        <GallerySection
          key={category}
          title={category}
          images={galleryImages.filter((img) => img.category === category)}
          onSelect={setSelected}
        />
      ))}

      <LightboxDialog image={selected} onClose={() => setSelected(null)} />
    </>
  );
}
