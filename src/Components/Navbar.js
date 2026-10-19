"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Current page ke link par orange underline
  function linkStyle(path) {
    return `border-b-2 py-3 text-sm transition-colors ${
      pathname === path
        ? "border-orange-500 text-orange-400"
        : "border-transparent text-zinc-300 hover:text-orange-500"
    }`;
  }

  // Mobile par bhi current page ki underline
  function mobileLinkStyle(path) {
    return `rounded-lg border-b-2 px-4 py-3 transition-colors ${
      pathname === path
        ? "border-orange-500 text-orange-400"
        : "border-transparent text-zinc-300 hover:bg-zinc-900 hover:text-orange-500"
    }`;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#090b0e]">
      <nav className="mx-auto max-w-6xl px-5">
        {/* Logo aur navigation */}
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-xl font-bold tracking-wide text-zinc-100"
          >
            BASHARAT<span className="text-orange-500">.DEV</span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="/" className={linkStyle("/")}>
              Home
            </a>

            <a href="/fullwork" className={linkStyle("/fullwork")}>
              Work
            </a>

            <a href="/fullstack" className={linkStyle("/fullstack")}>
              Stack
            </a>

            <a href="/fulljourney" className={linkStyle("/fulljourney")}>
              Journey
            </a>

            <a href="/fullabout" className={linkStyle("/fullabout")}>
              About
            </a>

            <a href="/fullcontact" className={linkStyle("/fullcontact")}>
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-700 text-orange-500 md:hidden"
          >
            {menuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile links */}
        <div
          id="mobile-menu"
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col gap-1 border-t border-zinc-800 py-4 md:hidden`}
        >
          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className={mobileLinkStyle("/")}
          >
            Home
          </a>

          <a
            href="/fullwork"
            onClick={() => setMenuOpen(false)}
            className={mobileLinkStyle("/fullwork")}
          >
            Work
          </a>

          <a
            href="/fullstack"
            onClick={() => setMenuOpen(false)}
            className={mobileLinkStyle("/fullstack")}
          >
            Stack
          </a>

          <a
            href="/fulljourney"
            onClick={() => setMenuOpen(false)}
            className={mobileLinkStyle("/fulljourney")}
          >
            Journey
          </a>

          <a
            href="/fullabout"
            onClick={() => setMenuOpen(false)}
            className={mobileLinkStyle("/fullabout")}
          >
            About
          </a>

          <a
            href="/fullcontact"
            onClick={() => setMenuOpen(false)}
            className={mobileLinkStyle("/fullcontact")}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}