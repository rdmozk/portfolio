import { SiteHeader } from "@/components/SiteHeader";
import {
  languages,
  profile,
  projects,
  services,
  skills,
} from "@/data/cv";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="mx-auto w-full max-w-5xl flex-1 px-6 pb-24">
        <section className="border-b border-line py-16 sm:py-24">
          <p className="text-[13px] font-medium text-accent">
            {profile.location}
          </p>
          <h1 className="display mt-4 text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.08] text-ink">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-ink sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-muted">
            {profile.summary}
          </p>
          <div className="no-print mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="bg-accent px-5 py-3 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
            >
              Me contacter
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-line bg-bg-elevated px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:border-ink/30"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-line bg-bg-elevated px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:border-ink/30"
            >
              GitHub
            </a>
          </div>
        </section>

        <Section id="services" title="Ce que je propose">
          <ul className="grid gap-0 sm:grid-cols-2">
            {services.map((service, index) => (
              <li
                key={service.title}
                className={`border-t border-line py-8 sm:pr-8 ${
                  index % 2 === 1 ? "sm:border-l sm:pl-8 sm:pr-0" : ""
                }`}
              >
                <h3 className="text-[17px] font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projets" title="Réalisations">
          <ul className="space-y-0">
            {projects.map((project) => (
              <li
                key={project.name}
                className="grid gap-2 border-t border-line py-8 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-8"
              >
                <h3 className="display text-[20px] font-medium text-ink">
                  {project.name}
                </h3>
                <div>
                  <p className="text-[15px] leading-relaxed text-ink-muted">
                    {project.description}
                  </p>
                  <p className="mt-3 text-[12px] font-medium tracking-wide text-ink/55">
                    {project.stack.join(" · ")}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="competences" title="Compétences">
          <div className="grid gap-10 sm:grid-cols-3">
            <SkillGroup title="Frontend" items={[...skills.frontend]} />
            <SkillGroup title="Backend" items={[...skills.backend]} />
            <SkillGroup title="DevOps & cloud" items={[...skills.devops]} />
          </div>
          <div className="mt-10 border-t border-line pt-8">
            <h3 className="text-[13px] font-medium uppercase tracking-[0.12em] text-ink-muted">
              Langues
            </h3>
            <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-[15px] text-ink-muted">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <span className="font-medium text-ink">{lang.name}</span>
                  {" — "}
                  {lang.level}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="max-w-xl text-[16px] leading-relaxed text-ink-muted">
            Vous avez un besoin en développement web, API ou cloud ? Écrivons
            pour cadrer la mission.
          </p>
          <ul className="mt-8 space-y-3 text-[16px]">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-accent"
              >
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted underline decoration-line underline-offset-4 hover:text-ink hover:decoration-accent"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted underline decoration-line underline-offset-4 hover:text-ink hover:decoration-accent"
              >
                GitHub
              </a>
            </li>
          </ul>
        </Section>
      </main>

      <footer className="no-print border-t border-line py-7 text-center text-[13px] text-ink-muted">
        © 2026 {profile.name} · Portfolio Malt
      </footer>
    </>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-line py-16 last:border-b-0">
      <h2 className="display mb-10 text-[1.85rem] font-semibold tracking-tight text-ink sm:text-[2.1rem]">
        {title}
      </h2>
      {children}
    </section>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-[13px] font-medium uppercase tracking-[0.12em] text-ink-muted">
        {title}
      </h3>
      <ul className="mt-3 space-y-1.5 text-[15px] text-ink">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
