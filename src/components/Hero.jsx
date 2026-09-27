import { useMagnetic } from "../hooks/useMagnetic.js";

function MagneticLink({ href, children, cursorLabel = "hover", ...props }) {
  const ref = useMagnetic(0.4);
  return (
    <a
      ref={ref}
      href={href}
      data-magnetic
      data-cursor={cursorLabel}
      {...props}
    >
      {children}
    </a>
  );
}

export default function Hero() {
  return (
    <header className="hero">
      <p className="hero__role">Front End Developer</p>
      <h1 className="hero__name">
        <span>Yangzin</span>
        <span>Chuskit</span>
      </h1>
      <p className="hero__lede">
        I build fast, responsive interfaces with React and JavaScript — this
        page is one of them. Scroll down; it was built to move.
      </p>
      <div className="hero__cta">
        <MagneticLink href="#work" cursorLabel="View">
          See my work
        </MagneticLink>
        <MagneticLink href="#hardwork" cursorLabel="Play">
          Play with the demos
        </MagneticLink>
      </div>
      <div className="hero__links">
        <MagneticLink href="mailto:yangzin.chuskit97@gmail.com">
          yangzin.chuskit97@gmail.com
        </MagneticLink>
        <MagneticLink href="https://github.com//Yaanzn" target="_blank" rel="noreferrer">
          GitHub
        </MagneticLink>
        <MagneticLink href="https://linkedin.com/in/yangzin-chuskit" target="_blank" rel="noreferrer">
          LinkedIn
        </MagneticLink>
      </div>
    </header>
  );
}
