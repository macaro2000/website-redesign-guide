import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  boards,
  conferences,
  curating,
  education,
  executive,
  exhibitionsLectures,
  fellowships,
  interviews,
  languages,
  person,
  publications,
  sections,
  teaching,
  type Entry,
  type Group,
} from "@/content/cv";

const TITLE = "Mario A. Caro — Curator, Researcher & Critic of Contemporary Indigenous Art";
const DESC =
  "Curriculum vitae of Mario A. Caro: curating, teaching, publications, lectures and fellowships on the history, theory and criticism of contemporary Indigenous arts.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "author", content: "Mario A. Caro" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mario A. Caro",
          email: "mailto:mariocaro@visualcultures.net",
          jobTitle: "Curator and Researcher of Contemporary Art",
          url: "https://www.marioacaro.net/",
        }),
      },
    ],
  }),
  component: Index,
});

function MaybeLink({ href, children }: { href?: string | undefined; children: ReactNode }) {
  if (!href) return <>{children}</>;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="cv-link">
      {children}
    </a>
  );
}

function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split("*").map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : part))}
    </>
  );
}

function Row({ e }: { e: Entry }) {
  return (
    <li className="cv-row">
      <div className="cv-date">{e.date}</div>
      <div className="cv-body">
        <p className={e.italic ? "italic" : undefined}>
          <MaybeLink href={e.href}><Rich text={e.title} /></MaybeLink>
        </p>
        {e.detail && <p className="text-muted-foreground"><Rich text={e.detail} /></p>}
        {e.note && <p className="mt-1 text-muted-foreground"><Rich text={e.note} /></p>}
        {e.img && (
          <MaybeLink href={e.href}>
            <img src={e.img} alt={e.imgAlt ?? ""} loading="lazy" className="cv-thumb" />
          </MaybeLink>
        )}
      </div>
    </li>
  );
}

function List({ entries }: { entries: Entry[] }) {
  return (
    <ul className="cv-list">
      {entries.map((e, i) => (
        <Row key={i} e={e} />
      ))}
    </ul>
  );
}

function Groups({ groups }: { groups: Group[] }) {
  return (
    <div className="space-y-10">
      {groups.map((g) => (
        <div key={g.heading}>
          {g.heading && <h3 className="cv-subhead">{g.heading}</h3>}
          <List entries={g.entries} />
        </div>
      ))}
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="cv-section">
      <h2 className="cv-heading">{title}</h2>
      {children}
    </section>
  );
}

function Index() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-10">
      <header className="cv-masthead">
        <h1 className="cv-name">Mario A. Caro</h1>
      </header>

      <div className="lg:grid lg:grid-cols-[13rem_1fr] lg:gap-16">
      <aside className="cv-nav">
        <nav aria-label="Sections" className="cv-nav-list">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="cv-nav-link">
              {s.label}
            </a>
          ))}
          <a href={person.cv} target="_blank" rel="noreferrer" className="cv-nav-link cv-nav-accent">
            Download CV ↓
          </a>
        </nav>
      </aside>

      <main className="pb-32">
        <section id="about" className="cv-section pt-10 lg:pt-[4.5rem]">
          <p className="max-w-2xl text-lg leading-relaxed text-foreground">{person.bio}</p>
          <p className="mt-6 text-sm">
            <a href={`mailto:${person.email}`} className="cv-link">
              {person.email}
            </a>
            <span className="mx-3 text-muted-foreground">·</span>
            <a href={person.cv} target="_blank" rel="noreferrer" className="cv-link">
              Download current CV (PDF)
            </a>
          </p>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2">
            {person.roles.map((r) => (
              <li key={r.title} className="flex items-center gap-4">
                <a href={r.href} target="_blank" rel="noreferrer" className="shrink-0">
                  <img src={r.img} alt={r.org} loading="lazy" className="cv-logo" />
                </a>
                <span className="text-sm text-muted-foreground">{r.title}</span>
              </li>
            ))}
          </ul>
        </section>

        <Section id="education" title="Education"><List entries={education} /></Section>
        <Section id="executive" title="Executive"><List entries={executive} /></Section>
        <Section id="curating" title="Curating"><List entries={curating} /></Section>
        <Section id="teaching" title="Teaching"><List entries={teaching} /></Section>
        <Section id="publications" title="Publications"><Groups groups={publications} /></Section>
        <Section id="interviews" title="Interviews"><List entries={interviews} /></Section>
        <Section id="lectures" title="Lectures, Conferences & Exhibitions">
          <Groups
            groups={[
              { heading: "Lectures, Conferences, Seminars, Institutes, and Workshops", entries: conferences },
              { heading: "Exhibitions and Public Lectures", entries: exhibitionsLectures },
            ]}
          />
        </Section>
        <Section id="fellowships" title="Fellowships & Awards"><List entries={fellowships} /></Section>
        <Section id="boards" title="Boards & Memberships"><Groups groups={boards} /></Section>
        <Section id="languages" title="Languages">
          <p className="max-w-2xl text-foreground">{languages}</p>
        </Section>

        <footer className="mt-24 border-t border-border pt-8 text-sm text-muted-foreground">
          <a href={`mailto:${person.email}`} className="cv-link">{person.email}</a>
        </footer>
      </main>
      </div>
    </div>
  );
}
