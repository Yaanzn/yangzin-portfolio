import { useRef } from "react";

export default function BlobSVG() {
  const pathRef = useRef(null);
  const wrapRef = useRef(null);

  const handleMove = (e) => {
    const rect = wrapRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    const cx = 100, cy = 100, r = 60;
    const points = 8;
    let d = "";
    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2;
      const push = Math.cos(angle * 2 - Math.atan2(py, px)) * 14 * Math.hypot(px, py) * 2;
      const rad = r + push;
      const x = cx + Math.cos(angle) * rad;
      const y = cy + Math.sin(angle) * rad;
      d += i === 0 ? `M${x},${y} ` : `L${x},${y} `;
    }
    if (pathRef.current) pathRef.current.setAttribute("d", d + "Z");
  };

  const handleLeave = () => {
    if (pathRef.current) {
      const cx = 100, cy = 100, r = 60, points = 8;
      let d = "";
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        d += i === 0 ? `M${x},${y} ` : `L${x},${y} `;
      }
      pathRef.current.setAttribute("d", d + "Z");
    }
  };

  return (
    <div
      ref={wrapRef}
      className="demo-canvas demo-blob"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <svg viewBox="0 0 200 200" width="100%" height="100%">
        <path ref={pathRef} fill="#FF5A1F" style={{ transition: "d .08s linear" }} />
      </svg>
    </div>
  );
}
