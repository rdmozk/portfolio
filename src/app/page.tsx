import { SiteHeader } from "@/components/SiteHeader";
import { languages, profile, skills } from "@/data/cv";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 md:py-24">
        <section className="border-b border-line pb-14">
          <p className="text-[13px] text-ink-muted">{profile.location}</p>
          <h1 className="display mt-3 text-[clamp(2.4rem,6vw,3.4rem)] font-medium leading-[1.1] text-ink">
            {profile.name}
          </h1>
          <p className="mt-3 text-[18px] text-ink-muted">{profile.title}</p>
          <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-ink-muted">
            {profile.summary}
          </p>
          <p className="mt-6 text-[14px]">
            <a
              href={`mailto:${profile.email}`}
              className="underline decoration-line underline-offset-4 hover:decoration-ink"
            >
              {profile.email}
            </a>
            <span className="mx-2 text-ink-muted">·</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-line underline-offset-4 hover:decoration-ink"
            >
              LinkedIn
            </a>
            <span className="mx-2 text-ink-muted">·</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-line underline-offset-4 hover:decoration-ink"
            >
              GitHub
            </a>
          </p>
        </section>

        <section id="competences" className="border-b border-line py-14">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.12em] text-ink-muted">
            Compétences
          </h2>

          <div className="mt-8 grid gap-10 sm:grid-cols-2">
            {(
              [
                ["Web", skills.web],
                ["Backend", skills.backend],
                ["Cloud & infra", skills.cloudInfra],
                ["Autres", skills.autres],
              ] as const
            ).map(([label, items]) => (
              <div key={label}>
                <h3 className="text-[15px] font-medium text-ink">{label}</h3>
                <ul className="mt-3 space-y-1.5 text-[14px] text-ink-muted">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-[15px] font-medium text-ink">Langues</h3>
            <ul className="mt-3 space-y-1.5 text-[14px] text-ink-muted">
              {languages.map((lang) => (
                <li key={lang.name}>
                  {lang.name} — {lang.level}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="py-14">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.12em] text-ink-muted">
            Contact
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-muted">
            Pour un échange autour d’un besoin web, cloud ou infra :
          </p>
          <ul className="mt-6 space-y-2 text-[15px]">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="underline decoration-line underline-offset-4 hover:decoration-ink"
              >
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-line underline-offset-4 hover:decoration-ink"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-line underline-offset-4 hover:decoration-ink"
              >
                GitHub
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="no-print border-t border-line px-6 py-6 text-[12px] text-ink-muted">
        <div className="mx-auto max-w-3xl">© 2026 {profile.name}</div>
      </footer>
    </div>
  );
}
