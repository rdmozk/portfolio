"use client";

import { profile } from "@/data/cv";

const links = [
  { href: "#services", label: "Services" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="no-print sticky top-0 z-20 border-b border-line bg-bg-elevated/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="display text-[16px] font-medium text-ink">
          {profile.name}
        </a>
        <nav className="hidden items-center gap-6 text-[13px] font-medium text-ink-muted sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-accent px-3.5 py-1.5 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
          >
            Discuter
          </a>
        </nav>
        <a
          href="#contact"
          className="bg-accent px-3.5 py-1.5 text-[13px] font-medium text-white sm:hidden"
        >
          Discuter
        </a>
      </div>
    </header>
  );
}
