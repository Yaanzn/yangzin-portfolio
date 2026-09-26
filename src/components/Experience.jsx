import Reveal from "./Reveal.jsx";

const JOBS = [
  { role: "Front End Developer", company: "Ethosh", place: "Pune, India", dates: "Jul 2021 — Present" },
  { role: "Location Head", company: "Ethosh", place: "Ladakh, India", dates: "Apr 2022 — Jun 2023" },
  { role: "Intern", company: "Harman International Industries", place: "Pune, India", dates: "Jun 2019 — Jul 2019" },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <Reveal>
        <h2 className="section__title">Experience</h2>
      </Reveal>
      {JOBS.map((j, i) => (
        <Reveal delay={i * 70} key={j.role + j.dates}>
          <div className="job">
            <div className="job__role">{j.role}, {j.company}</div>
            <div className="job__meta">{j.place} · {j.dates}</div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
