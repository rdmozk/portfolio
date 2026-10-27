"use client";

const links = [
  { href: "#profil", label: "Profil" },
  { href: "#expertises", label: "Expertises" },
  { href: "#competences", label: "Compétences" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-line/80 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4 md:px-10">
        <a
          href="#top"
          className="display text-[17px] font-medium tracking-tight text-ink transition-colors hover:text-accent"
        >
          Erdem Ozkorkmaz
        </a>
        <nav className="hidden items-center gap-7 text-[13px] font-medium text-ink-muted md:flex">
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
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 text-[11px] font-medium text-ok sm:inline-flex">
            <span className="status-dot" aria-hidden />
            Disponible
          </span>
          <button
            type="button"
            onClick={() => window.print()}
            className="border border-line px-3 py-1.5 text-[12px] font-medium text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            PDF
          </button>
        </div>
      </div>
    </header>
  );
}
