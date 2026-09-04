"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function CursorOrange() {
  const mouse = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current = { x: event.clientX, y: event.clientY };
      setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let frameId: number;

    const animate = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.22;
      current.current.y += (mouse.current.y - current.current.y) * 0.22;

      const element = document.getElementById("orange-cursor");

      if (element) {
        element.style.transform = `translate3d(${current.current.x - 16}px, ${current.current.y - 16}px, 0)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
      <div id="orange-cursor" className={`absolute left-0 top-0 transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"}`}>
        <div className="relative size-8 drop-shadow-[0_5px_10px_rgba(0,0,0,0.18)]">
          <Image src="/images/cursor/orange-slice.png" alt="" fill sizes="32px" className="object-contain" priority />
        </div>
      </div>
    </div>
  );
}
