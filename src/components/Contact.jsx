import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <footer className="footer" id="contact">
      <Reveal>
        <h2 className="footer__title">Let's talk</h2>
        <p>
          Based in Pune, India.{" "}
          <a href="mailto:yangzinchuskit85@gmail.com" data-cursor="hover">
            yangzinchuskit85@gmail.com
          </a>{" "}
          · 9622208346
        </p>
      </Reveal>
    </footer>
  );
}
