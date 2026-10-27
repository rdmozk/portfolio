import { SiteHeader } from "@/components/SiteHeader";
import {
  education,
  experiences,
  languages,
  profile,
  projects,
  skills,
} from "@/data/cv";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative isolate min-h-[92vh] overflow-hidden border-b border-line">
          <div
            aria-hidden
            className="mesh pointer-events-none absolute inset-0 -z-10"
            style={{
              background: `
                radial-gradient(ellipse 70% 55% at 12% 20%, var(--glow-a), transparent 60%),
                radial-gradient(ellipse 55% 45% at 88% 10%, var(--glow-b), transparent 55%),
                radial-gradient(ellipse 40% 35% at 70% 80%, var(--glow-a), transparent 50%),
                linear-gradient(165deg, #e8ecef 0%, #dde3e8 45%, #d5ddd8 100%)
              `,
            }}
          />

          <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 md:pb-24 md:pt-32">
            <p className="animate-rise text-sm font-medium uppercase tracking-[0.22em] text-accent">
              {profile.location}
            </p>
            <h1 className="animate-rise animate-rise-delay-1 mt-4 max-w-4xl font-[family-name:var(--font-syne)] text-5xl font-semibold leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-8xl">
              {profile.name}
            </h1>
            <p className="animate-rise animate-rise-delay-2 mt-6 max-w-xl text-xl text-ink-muted md:text-2xl">
              {profile.title}. Cloud, full-stack, produits web.
            </p>
            <p className="animate-rise animate-rise-delay-2 mt-4 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              {profile.summary}
            </p>
            <div className="animate-rise animate-rise-delay-3 mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="bg-ink px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
              >
                Me contacter
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ink/20 bg-bg-elevated/70 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ink/20 bg-bg-elevated/70 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="mx-auto max-w-6xl border-b border-line px-6 py-20 md:py-28"
        >
          <div className="mb-12 max-w-2xl">
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight md:text-4xl">
              Expérience
            </h2>
            <p className="mt-3 text-ink-muted">
              Parcours en entreprise, de l’alternance à l’ingénierie logicielle.
            </p>
          </div>

          <ol className="space-y-10">
            {experiences.map((job) => (
              <li
                key={`${job.company}-${job.role}-${job.period}`}
                className="grid gap-4 border-t border-line pt-10 md:grid-cols-[minmax(0,220px)_1fr]"
              >
                <div className="text-sm text-ink-muted">
                  <p>{job.period}</p>
                  <p className="mt-1">{job.location}</p>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-accent">{job.company}</p>
                  <ul className="mt-4 space-y-2 text-ink-muted">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="formation"
          className="mx-auto max-w-6xl border-b border-line px-6 py-20 md:py-28"
        >
          <div className="mb-12 max-w-2xl">
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight md:text-4xl">
              Formation
            </h2>
            <p className="mt-3 text-ink-muted">
              Du DUT au Master Cloud, un parcours informatique progressif.
            </p>
          </div>

          <ul className="space-y-8">
            {education.map((item) => (
              <li
                key={item.degree}
                className="grid gap-2 border-t border-line pt-8 md:grid-cols-[minmax(0,220px)_1fr]"
              >
                <p className="text-sm text-ink-muted">{item.period}</p>
                <div>
                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-ink-muted">
                    {item.school} · {item.location}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="projets"
          className="mx-auto max-w-6xl border-b border-line px-6 py-20 md:py-28"
        >
          <div className="mb-12 max-w-2xl">
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight md:text-4xl">
              Projets
            </h2>
            <p className="mt-3 text-ink-muted">
              Sélection de projets personnels et académiques.
            </p>
          </div>

          <ul className="grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <li key={project.name} className="border-t border-line pt-6">
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold">
                  {"href" in project && project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-accent"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>
                <p className="mt-4 text-xs uppercase tracking-wide text-ink-muted">
                  {project.stack.join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="competences"
          className="mx-auto max-w-6xl border-b border-line px-6 py-20 md:py-28"
        >
          <div className="mb-12 max-w-2xl">
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight md:text-4xl">
              Compétences
            </h2>
            <p className="mt-3 text-ink-muted">
              Stack utilisée en entreprise et sur des projets perso.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {(
              [
                ["Langages", skills.langages],
                ["Frontend", skills.frontend],
                ["Backend", skills.backend],
                ["Cloud & data", skills.cloudData],
              ] as const
            ).map(([label, items]) => (
              <div key={label} className="border-t border-line pt-6">
                <h3 className="text-sm font-medium uppercase tracking-wide text-accent">
                  {label}
                </h3>
                <ul className="mt-4 space-y-2 text-ink-muted">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-line pt-8">
            <h3 className="text-sm font-medium uppercase tracking-wide text-accent">
              Langues
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-10 gap-y-2 text-ink-muted">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <span className="text-ink">{lang.name}</span> — {lang.level}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl px-6 py-20 md:py-28"
        >
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight md:text-4xl">
              Contact
            </h2>
            <p className="mt-3 text-ink-muted">
              Ouvert aux échanges autour de projets logiciel, cloud et produit.
            </p>
            <div className="mt-8 space-y-3 text-lg">
              <p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {profile.email}
                </a>
              </p>
              <p>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                >
                  LinkedIn
                </a>
                {" · "}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                >
                  GitHub
                </a>
              </p>
              <p className="text-ink-muted">{profile.location}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="no-print border-t border-line px-6 py-8 text-sm text-ink-muted">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {profile.name}
          </p>
          <p>CV & portfolio — construit avec Next.js</p>
        </div>
      </footer>
    </div>
  );
}
