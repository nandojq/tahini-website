"use client";

interface SpotifyEmbedProps {
  embedUrl: string;
  title: string;
}

export default function SpotifyEmbed({ embedUrl, title }: SpotifyEmbedProps) {
  return (
    <iframe
      src={embedUrl}
      title={`Spotify embed — ${title}`}
      width="100%"
      height="152"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="rounded-xl border-0"
    />
  );
}
