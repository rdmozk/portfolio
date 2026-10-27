"use client";

const links = [
  { href: "#competences", label: "Compétences" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="no-print border-b border-line bg-bg">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="text-[14px] font-medium text-ink">
          Erdem Ozkorkmaz
        </a>
        <nav className="flex items-center gap-5 text-[13px] text-ink-muted">
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
            className="text-ink-muted transition-colors hover:text-ink"
          >
            PDF
          </button>
        </nav>
      </div>
    </header>
  );
}
