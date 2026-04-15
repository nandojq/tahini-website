"use client";

import { useState } from "react";
import type { Album } from "@/types";
import Image from "next/image";
import { FaSpotify } from "react-icons/fa";
import { SiTidal, SiApplemusic } from "react-icons/si";

interface AlbumCardProps {
  album: Album;
}

const platforms = [
  {
    key: "spotify" as const,
    label: "Spotify",
    icon: FaSpotify,
    color: "#1DB954",
  },
  {
    key: "tidal" as const,
    label: "Tidal",
    icon: SiTidal,
    color: "#000000",
  },
  {
    key: "appleMusic" as const,
    label: "Apple Music",
    icon: SiApplemusic,
    color: "#FC3C44",
  },
];

export default function AlbumCard({ album }: AlbumCardProps) {
  const [open, setOpen] = useState(false);

  const hasLinks = album.streaming && Object.values(album.streaming).some(Boolean);

  return (
    <div className="flex flex-col gap-4">
      {/* Album art */}
      <div className="relative aspect-square rounded-xl overflow-hidden border border-accent-warm bg-accent-warm/20">
        <Image
          src={album.coverSrc}
          alt={`${album.title} cover`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Click overlay */}
        <button
          onClick={() => setOpen(true)}
          className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors flex items-center justify-center group"
          aria-label={`Listen to ${album.title}`}
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-semibold tracking-wide">
            Listen now
          </span>
        </button>

        {/* Streaming popup */}
        {open && (
          <>
            {/* Backdrop */}
            <button
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
              aria-label="Close"
            />

            {/* Popup */}
            <div className="absolute inset-x-4 bottom-4 z-50 rounded-xl bg-background border border-accent-warm shadow-xl p-4 flex flex-col gap-2">
              <p className="font-heading text-sm font-semibold text-foreground/70 mb-1">
                Listen on
              </p>
              {platforms.map(({ key, label, icon: Icon, color }) => {
                const href = album.streaming?.[key];
                return href ? (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent-warm/40 transition-colors"
                  >
                    <Icon size={18} style={{ color }} />
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                ) : (
                  <div
                    key={key}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg opacity-30 cursor-not-allowed"
                  >
                    <Icon size={18} style={{ color }} />
                    <span className="text-sm font-medium">{label}</span>
                    <span className="text-xs ml-auto text-foreground/50">soon</span>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Title & year */}
      <div>
        <h3 className="font-heading text-xl font-semibold">{album.title}</h3>
        <p className="text-sm text-foreground/50">
          {album.type ? `${album.type} · ` : ""}{album.year}
        </p>
      </div>
    </div>
  );
}
