import { useState } from "react";
import Reveal from "./Reveal.jsx";
import ParticleCanvas from "./demos/ParticleCanvas.jsx";
import BlobSVG from "./demos/BlobSVG.jsx";
import ScrollPinDemo from "./demos/ScrollPinDemo.jsx";

const DEMOS = [
  { title: "Particle Field", desc: "Particles repel from the cursor in real time — canvas + physics.", Comp: ParticleCanvas },
  { title: "Morphing Blob", desc: "An SVG shape that reshapes based on cursor position.", Comp: BlobSVG },
  { title: "Scroll-Driven Panels", desc: "Horizontal motion tied directly to scroll position.", Comp: ScrollPinDemo },
];

export default function HardworkSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="section" id="hardwork">
      <Reveal>
        <button
          className="hardwork__toggle"
          data-cursor={open ? "Close" : "Open"}
          data-magnetic
          onClick={() => setOpen((o) => !o)}
        >
          <span>The Hardwork Section</span>
          <span className={`hardwork__arrow ${open ? "hardwork__arrow--open" : ""}`}>+</span>
        </button>
        <p className="hardwork__sub">
          Visual experiments — cursor reactions, scroll mechanics, and canvas
          play. Not client work, just things I built to learn how they work.
        </p>
      </Reveal>

      <div className={`hardwork__gallery ${open ? "hardwork__gallery--open" : ""}`}>
        {DEMOS.map(({ title, desc, Comp }, i) => (
          <Reveal delay={i * 90} key={title}>
            <div className="hardwork__item">
              <Comp />
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
