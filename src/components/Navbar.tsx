"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#websites", label: "Websites" },
  { href: "#stores", label: "Stores" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-heading text-lg font-bold tracking-tight text-white"
        >
          Abed<span className="text-cyan-400">.</span>
        </a>

        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-2 md:flex ${
            scrolled ? "glass" : ""
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.cvUrl}
          download
          className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-105 md:inline-block"
        >
          Download CV
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="glass flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-5 bg-white transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="glass mx-6 mt-3 flex flex-col rounded-2xl p-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-gray-200 hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.cvUrl}
            download
            className="mt-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-3 text-center text-sm font-semibold text-black"
          >
            Download CV
          </a>
        </nav>
      )}
    </header>
  );
}
