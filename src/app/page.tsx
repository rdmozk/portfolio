import { SiteHeader } from "@/components/SiteHeader";
import {
  education,
  experience,
  languages,
  profile,
  projects,
  skills,
} from "@/data/cv";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-6 pb-24">
        {/* Hero */}
        <section className="flex min-h-[72vh] flex-col justify-center gap-8 py-16 sm:py-24">
          <p className="animate-rise text-[13px] uppercase tracking-[0.22em] text-accent">
            {profile.location}
          </p>
          <h1 className="animate-rise-delay-1 font-[family-name:var(--font-display)] text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[0.95] tracking-tight text-ink">
            {profile.name}
          </h1>
          <p className="animate-rise-delay-2 max-w-xl text-xl text-ink-muted sm:text-2xl">
            {profile.title}
          </p>
          <p className="animate-rise-delay-3 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {profile.summary}
          </p>
          <div className="animate-rise-delay-3 no-print flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:brightness-110"
            >
              Me contacter
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-5 py-2.5 text-sm text-ink-muted transition hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-5 py-2.5 text-sm text-ink-muted transition hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* Experience */}
        <Section id="experience" title="Expérience">
          <ol className="space-y-10">
            {experience.map((job) => (
              <li key={`${job.company}-${job.role}-${job.start}`} className="grid gap-3 sm:grid-cols-[9rem_1fr]">
                <p className="text-sm text-ink-muted">
                  {job.start} — {job.end}
                </p>
                <div>
                  <h3 className="text-lg font-medium text-ink">{job.role}</h3>
                  <p className="text-accent">
                    {job.company}
                    <span className="text-ink-muted"> · {job.location}</span>
                  </p>
                  <ul className="mt-3 space-y-1.5 text-[15px] leading-relaxed text-ink-muted">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Education */}
        <Section id="formation" title="Formation">
          <ol className="space-y-8">
            {education.map((edu) => (
              <li key={edu.school + edu.degree} className="grid gap-2 sm:grid-cols-[9rem_1fr]">
                <p className="text-sm text-ink-muted">
                  {edu.start} — {edu.end}
                </p>
                <div>
                  <h3 className="text-lg font-medium text-ink">{edu.degree}</h3>
                  <p className="text-ink-muted">
                    {edu.school} · {edu.location}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Projects */}
        <Section id="projets" title="Projets">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li
                key={project.name}
                className="rounded-2xl border border-line bg-bg-elevated/60 p-5 transition hover:border-accent/40"
              >
                <h3 className="font-[family-name:var(--font-display)] text-xl text-ink">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Skills */}
        <Section id="competences" title="Compétences">
          <div className="grid gap-8 sm:grid-cols-3">
            <SkillGroup title="Web" items={[...skills.web]} />
            <SkillGroup title="Backend" items={[...skills.backend]} />
            <SkillGroup title="Cloud & outils" items={[...skills.cloudInfra]} />
          </div>
          <div className="mt-10">
            <h3 className="mb-3 text-sm uppercase tracking-[0.16em] text-ink-muted">
              Langues
            </h3>
            <ul className="flex flex-wrap gap-4 text-[15px]">
              {languages.map((lang) => (
                <li key={lang.name} className="text-ink">
                  {lang.name}
                  <span className="text-ink-muted"> — {lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <div className="flex flex-col gap-3 text-[15px] sm:flex-row sm:flex-wrap sm:gap-8">
            <a
              href={`mailto:${profile.email}`}
              className="text-ink transition hover:text-accent"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition hover:text-accent"
            >
              GitHub
            </a>
          </div>
        </Section>
      </main>
      <footer className="no-print relative z-10 border-t border-line py-8 text-center text-sm text-ink-muted">
        © 2026 {profile.name}
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
    <section id={id} className="scroll-mt-24 border-t border-line py-16">
      <h2 className="mb-10 font-[family-name:var(--font-display)] text-3xl tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-3 text-sm uppercase tracking-[0.16em] text-ink-muted">
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-line px-3 py-1 text-sm text-ink"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
