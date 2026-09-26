import Cursor from "./components/Cursor.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import HardworkSection from "./components/HardworkSection.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <div className="page">
      <Cursor />
      <div className="wrap">
        <Hero />
        <Skills />
        <Work />
        <HardworkSection />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
