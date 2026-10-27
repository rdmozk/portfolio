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
    <header className="no-print sticky top-0 z-20 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-[15px] font-medium tracking-tight text-ink"
        >
          {profile.name}
        </a>
        <nav className="hidden items-center gap-5 text-[13px] text-ink-muted sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-full border border-line px-3 py-1 text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            PDF
          </button>
        </nav>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-full border border-line px-3 py-1 text-[13px] text-ink-muted sm:hidden"
        >
          PDF
        </button>
      </div>
    </header>
  );
}
