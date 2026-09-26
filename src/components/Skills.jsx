import Reveal from "./Reveal.jsx";

const SKILLS = [
  "React", "JavaScript", "HTML5", "CSS3", "Responsive Design",
  "REST APIs", "Node.js", "Git", "SQL", "SEO",
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <Reveal>
        <h2 className="section__title">Skills</h2>
      </Reveal>
      <Reveal delay={80}>
        <div className="skills">
          {SKILLS.map((s) => (
            <span className="skills__tag" key={s}>{s}</span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
