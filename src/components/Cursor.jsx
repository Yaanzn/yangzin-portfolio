import { useEffect, useRef, useState } from "react";

// Dynamic cursor: a small dot tracks instantly, a larger blended ring trails
// with easing, magnetically snaps toward the center of any [data-cursor]
// element when nearby, and morphs into a text label on hover.
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const target = useRef(null); // element currently being snapped to
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const move = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };

    const over = (e) => {
      const el = e.target.closest("[data-cursor]");
      target.current = el;
      setLabel(el?.dataset.cursor === "hover" ? "" : el?.dataset.cursor || "");
    };
    const out = (e) => {
      if (e.target.closest("[data-cursor]") === target.current) {
        target.current = null;
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);

    let raf;
    const tick = () => {
      let tx = pos.current.x;
      let ty = pos.current.y;

      if (target.current) {
        const rect = target.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        // pull the ring 55% of the way toward the element's center
        tx = pos.current.x + (cx - pos.current.x) * 0.55;
        ty = pos.current.y + (cy - pos.current.y) * 0.55;
      }

      ring.current.x += (tx - ring.current.x) * 0.2;
      ring.current.y += (ty - ring.current.y) * 0.2;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
        dotRef.current.style.opacity = target.current ? "0" : "1";
      }
      if (ringRef.current) {
        const scale = target.current ? (label ? 3.2 : 2.4) : 1;
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%,-50%) scale(${scale})`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    document.body.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
      cancelAnimationFrame(raf);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [label]);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef}>
        {label && <span className="cursor-ring__label">{label}</span>}
      </div>
    </>
  );
}
