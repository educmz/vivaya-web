"use client";

import { useLayoutEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export function ScrollStory({ steps, className }: { steps: string[]; className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useLayoutEffect(() => {
    if (reduced || !rootRef.current) return;
    const { gsap } = getGsap();
    const context = gsap.context(() => {
      gsap.from("[data-story-step]", { opacity: 0.2, y: 24, stagger: 0.15, scrollTrigger: { trigger: rootRef.current, start: "top 75%", end: "bottom 60%", scrub: 0.5 } });
    }, rootRef);
    return () => context.revert();
  }, [reduced]);
  return <div ref={rootRef} className={cn("grid gap-6", className)}>{steps.map((step, index) => <div data-story-step className="rounded-2xl border border-black/10 bg-white p-6" key={step}><span className="text-sm font-black text-[var(--primary)]">0{index + 1}</span><p className="mt-2 font-bold">{step}</p></div>)}</div>;
}
