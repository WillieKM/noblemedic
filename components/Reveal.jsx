"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const el = ref.current;
    if (!el) return;

    setArmed(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const revealClass = armed ? `reveal${visible ? " reveal-visible" : ""}` : "";

  return (
    <div ref={ref} className={[revealClass, className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
