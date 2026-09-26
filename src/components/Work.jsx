import Reveal from "./Reveal.jsx";

// EDIT THIS DATA — everything you show lives here.
const CLIENT_PROJECTS = [
  {
    name: "Client Project Name",
    role: "Front End Developer",
    description:
      "One or two sentences on what you built and the problem it solved. Client work often can't be linked publicly — that's fine, this is the space to describe it in your own words.",
    tech: ["React", "REST API", "CSS"],
  },
];

const PUBLIC_PROJECTS = [
  {
    name: "Project Name",
    description: "What it does and why you built it.",
    tech: ["JavaScript", "HTML/CSS"],
    live: "",
    code: "",
  },
];

function ProjectCard({ p, index, showLinks }) {
  return (
    <Reveal delay={index * 60}>
      <div className="project" data-cursor="View">
        <span className="project__num">{String(index + 1).padStart(2, "0")}</span>
        <div className="project__body">
          <h3>{p.name}</h3>
          {p.role && <p className="project__role">{p.role}</p>}
          <p className="project__desc">{p.description}</p>
          <div className="project__tags">
            {p.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          {showLinks && (
            <div className="project__actions">
              {p.live ? (
                <a href={p.live} target="_blank" rel="noreferrer" data-cursor="hover">Live demo</a>
              ) : (
                <span className="project__soon">Not deployed yet</span>
              )}
              {p.code && (
                <a href={p.code} target="_blank" rel="noreferrer" data-cursor="hover">Code</a>
              )}
            </div>
          )}
          {!showLinks && <span className="project__badge">Client project</span>}
        </div>
      </div>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section className="section" id="work">
      <Reveal>
        <h2 className="section__title">My Work</h2>
      </Reveal>

      <Reveal delay={60}>
        <div className="project project--featured" data-cursor="hover">
          <span className="project__num">✦</span>
          <div className="project__body">
            <h3>This Portfolio</h3>
            <p className="project__desc">
              Designed and built from scratch in React — the custom cursor,
              scroll-triggered reveals, and layout are all hand-coded, not a
              template. It's the clearest example of how I think about
              interaction and motion on the web.
            </p>
            <div className="project__tags">
              <span>React</span><span>Custom cursor</span><span>Scroll animation</span>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <h3 className="section__subtitle">Client work</h3>
      </Reveal>
      {CLIENT_PROJECTS.map((p, i) => (
        <ProjectCard p={p} index={i} showLinks={false} key={p.name} />
      ))}

      <Reveal delay={100}>
        <h3 className="section__subtitle">Personal &amp; open source</h3>
      </Reveal>
      {PUBLIC_PROJECTS.map((p, i) => (
        <ProjectCard p={p} index={i} showLinks={true} key={p.name} />
      ))}
    </section>
  );
}
