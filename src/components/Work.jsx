import Reveal from "./Reveal.jsx";

// EDIT THIS DATA — everything you show lives here.
const CLIENT_PROJECTS = [
  {
    name: "Baxter AAT",
    role: "Front End Developer",
    description:
      "1. Developed an interactive 3D web-based sales tool for Baxter’s AAT surgical table using **React.js and WebGL<br> 2. Integrated an interactive 3D model with 360° rotation, clickable product interactions, voice-over, and captions to demonstrate product features.<br>3. Built the solution with a scalable architecture, including provisions for future translations and content expansion.<br> 4.Collaborated closely with cross-functional teams and technical stakeholders to understand requirements and deliver a product-focused sales experience.",
    tech: ["React", "webGl", "CSS", "RestAPI"],
  },
];

const PUBLIC_PROJECTS = [
  {
    name: "Alamar Bioscience – WordPress Website Development",
    description: "Developed a responsive and interactive WordPress website for Alamar Bioscience.Built a user-friendly WordPress dashboard, customized to the client’s specific content management and business requirements. Implemented interactive web experiences and optimized the site for usability and maintainability",
    tech: ["Wordpress", "PHP" , "HTML/CSS" , "Javascript"],
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
