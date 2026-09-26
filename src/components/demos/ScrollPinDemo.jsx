import { useEffect, useRef, useState } from "react";

// A small self-contained "pin scroll" moment: as you scroll this box's
// container into and through view, three panels slide across horizontally.
export default function ScrollPinDemo() {
  const wrapRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = 1 - (rect.bottom - vh) / (rect.height + vh);
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapRef} className="demo-canvas demo-pin">
      <div
        className="demo-pin__track"
        style={{ transform: `translateX(${-progress * 66}%)` }}
      >
        {["Scroll", "Drives", "This"].map((word) => (
          <div className="demo-pin__panel" key={word}>{word}</div>
        ))}
      </div>
    </div>
  );
}
