"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function CursorOrange() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${event.clientX - 16}px, ${event.clientY - 16}px, 0)`;
      }

      setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
      <div ref={cursorRef} className={`absolute left-0 top-0 will-change-transform transition-opacity duration-75 ${visible ? "opacity-100" : "opacity-0"}`}>
        <div className="relative size-8 drop-shadow-[0_5px_10px_rgba(0,0,0,0.18)]">
          <Image src="/images/cursor/orange-slice.png" alt="" fill sizes="32px" className="object-contain" priority />
        </div>
      </div>
    </div>
  );
}
