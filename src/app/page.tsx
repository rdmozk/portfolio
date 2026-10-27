import { SiteHeader } from "@/components/SiteHeader";
import {
  aboutBlocks,
  focusAreas,
  languages,
  profile,
  reliabilitySignals,
  skills,
} from "@/data/cv";

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="label text-accent">{index}</span>
      <h2 className="display text-3xl font-medium tracking-tight text-ink md:text-[2.15rem]">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative isolate overflow-hidden border-b border-line">
          <div className="hero-glow" aria-hidden />

          <div className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-end px-6 pb-20 pt-28 md:px-10 md:pb-24">
            <p className="animate-rise label flex items-center gap-2 text-ok">
              <span className="status-dot" aria-hidden />
              Système prêt
            </p>

            <h1 className="display animate-rise animate-rise-delay-1 mt-7 max-w-4xl text-[clamp(3rem,9vw,5.6rem)] font-medium italic leading-[0.95] text-ink">
              {profile.heroClaim}
            </h1>

            <p className="animate-rise animate-rise-delay-2 mt-8 text-[clamp(1.2rem,2.5vw,1.55rem)] font-semibold tracking-tight text-ink">
              {profile.name}
              <span className="mx-2 font-normal text-ink-muted">—</span>
              <span className="font-medium text-accent">{profile.title}</span>
            </p>

            <p className="animate-rise animate-rise-delay-2 mt-2 text-[14px] font-medium tracking-wide text-ink-muted">
              {profile.heroLine}
            </p>

            <p className="animate-rise animate-rise-delay-3 mt-7 max-w-2xl text-[17px] leading-relaxed text-ink-muted md:text-[18px]">
              {profile.summary}
            </p>

            <dl className="animate-rise animate-rise-delay-3 mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
              {reliabilitySignals.map((signal) => (
                <div
                  key={signal.key}
                  className="border border-line bg-bg-elevated/70 px-3.5 py-3.5"
                >
                  <dt className="label text-[10px] text-ink-muted">
                    {signal.key}
                  </dt>
                  <dd className="mt-2 text-[13px] font-semibold text-ink">
                    {signal.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="animate-rise animate-rise-delay-4 mt-11 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="bg-accent px-5 py-3 text-[13px] font-semibold text-bg transition-opacity hover:opacity-90"
              >
                Lancer un projet
              </a>
              <a
                href="#expertises"
                className="border border-ink/25 px-5 py-3 text-[13px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Voir les expertises
              </a>
            </div>
          </div>
        </section>

        <section
          id="profil"
          className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-24"
        >
          <SectionLabel index="01" title="Profil" />

          <div className="mt-12 space-y-11">
            {aboutBlocks.map((block) => (
              <div key={block.title} className="max-w-2xl">
                <h3 className="text-[15px] font-semibold tracking-tight text-ink">
                  {block.title}
                </h3>
                <p className="mt-3 text-[16px] leading-relaxed text-ink-muted">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="expertises"
          className="mx-auto max-w-5xl border-t border-line px-6 py-20 md:px-10 md:py-24"
        >
          <SectionLabel index="02" title="Expertises" />
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-muted">
            Quatre leviers pour un delivery fiable.
          </p>

          <ul className="mt-12 grid gap-0 sm:grid-cols-2">
            {focusAreas.map((area, index) => (
              <li
                key={area.id}
                className={`border-t border-line py-9 sm:pr-10 ${
                  index % 2 === 1 ? "sm:border-l sm:pl-10 sm:pr-0" : ""
                }`}
              >
                <p className="label text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="display mt-4 text-[1.45rem] font-medium tracking-tight text-ink">
                  {area.label}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                  {area.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="competences"
          className="mx-auto max-w-5xl border-t border-line px-6 py-20 md:px-10 md:py-24"
        >
          <SectionLabel index="03" title="Compétences" />

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {(
              [
                ["Web", skills.web],
                ["Backend & data", skills.backend],
                ["Cloud & infra", skills.cloudInfra],
                ["Pilotage", skills.delivery],
              ] as const
            ).map(([label, items]) => (
              <div key={label}>
                <h3 className="text-[14px] font-semibold tracking-tight text-ink">
                  {label}
                </h3>
                <ul className="mt-4 space-y-2 text-[14px] text-ink-muted">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 border border-accent/25 bg-accent-dim px-5 py-5">
            <p className="label text-accent">Engagement</p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink">
              Code propre, infra reproductible, communication claire — pour que
              ton produit reste fiable après la mise en ligne.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-[14px] font-semibold tracking-tight text-ink">
              Langues
            </h3>
            <ul className="mt-4 space-y-2 text-[14px] text-ink-muted">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <span className="font-medium text-ink">{lang.name}</span>
                  {" — "}
                  {lang.level}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-5xl border-t border-line px-6 py-20 md:px-10 md:py-24"
        >
          <SectionLabel index="04" title="Contact" />
          <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-ink">
            Tu as un projet web, cloud ou infra à cadrer ?
            <br />
            <span className="text-ink-muted">Partons sur une base solide.</span>
          </p>

          <ul className="mt-10 space-y-4 text-[15px]">
            <li>
              <span className="text-ink-muted">Email</span>
              <br />
              <a
                href={`mailto:${profile.email}`}
                className="font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {profile.email}
              </a>
            </li>
            <li>
              <span className="text-ink-muted">GitHub</span>
              <br />
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                github.com/rdmozk
              </a>
            </li>
            <li>
              <span className="text-ink-muted">LinkedIn</span>
              <br />
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                linkedin.com/in/erdem-ozkorkmaz
              </a>
            </li>
            <li>
              <span className="text-ink-muted">Base</span>
              <br />
              <span className="font-medium text-ink">{profile.location}</span>
            </li>
          </ul>
        </section>
      </main>

      <footer className="no-print border-t border-line px-6 py-7 text-[13px] text-ink-muted md:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}</p>
          <p className="flex items-center gap-2">
            <span className="status-dot" aria-hidden />
            Fiabilité d’abord
          </p>
        </div>
      </footer>
    </div>
  );
}
