import Link from "next/link";
import { FaInstagram, FaSpotify, FaTiktok } from "react-icons/fa";
import { SiTidal, SiApplemusic } from "react-icons/si";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tahinituesday",
    icon: FaInstagram,
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/intl-de/artist/6eXFgjt94XSX6uP8vJODDI",
    icon: FaSpotify,
  },
  {
    label: "Tidal",
    href: "https://tidal.com/browse/artist/31684124?u",
    icon: SiTidal,
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com/de/artist/tahini-tuesday/1618984100",
    icon: SiApplemusic,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-accent-warm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-heading text-sm text-foreground/60">
          © {new Date().getFullYear()} Tahini Tuesday. All rights reserved.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-foreground/50 hover:text-accent-terra transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6 text-sm text-foreground/60">
          <Link href="/press" className="hover:text-accent-terra transition-colors">
            Press
          </Link>
          <Link href="/contact" className="hover:text-accent-terra transition-colors">
            Booking
          </Link>
        </div>
      </div>
    </footer>
  );
}
