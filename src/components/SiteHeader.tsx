"use client";

import { profile } from "@/data/cv";

const links = [
  { href: "#experience", label: "Expérience" },
  { href: "#formation", label: "Formation" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#top"
          className="font-[family-name:var(--font-syne)] text-sm font-semibold tracking-tight text-ink"
        >
          {profile.name}
        </a>
        <nav className="hidden items-center gap-6 text-sm text-ink-muted md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => window.print()}
          className="border border-line bg-bg-elevated px-3 py-1.5 text-sm text-ink transition-colors hover:border-ink"
        >
          Imprimer / PDF
        </button>
      </div>
    </header>
  );
}
