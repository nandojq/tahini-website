"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shows", label: "Shows" },
  { href: "/music", label: "Music" },
  { href: "/gallery", label: "Gallery" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-40 bg-background/90 backdrop-blur-sm border-b border-accent-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center opacity-90 hover:opacity-100 transition-opacity">
            <Image
              src="/images/logo/Logo_tahinituesday_black.png"
              alt="Tahini Tuesday"
              height={36}
              width={180}
              className="object-contain h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm transition-colors hover:text-accent-terra ${
                    pathname === href
                      ? "text-accent-terra font-semibold"
                      : "text-foreground/70"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen((o) => !o)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-accent-terra transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-accent-warm bg-background/95 backdrop-blur-sm">
          <ul className="flex flex-col px-4 py-3 gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block py-2 text-base transition-colors hover:text-accent-terra ${
                    pathname === href
                      ? "text-accent-terra font-semibold"
                      : "text-foreground/70"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
