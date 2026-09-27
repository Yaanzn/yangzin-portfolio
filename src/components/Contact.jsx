import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <footer className="footer" id="contact">
      <Reveal>
        <h2 className="footer__title">Let's talk</h2>
        <p>
          Based in Pune, India.{" "}
          <a href="mailto:yangzin.chuskit97@gmail.com" data-cursor="hover">
            yangzin.chuskit97@gmail.com
          </a>{" "}
          · 9622208346
        </p>
      </Reveal>
    </footer>
  );
}
