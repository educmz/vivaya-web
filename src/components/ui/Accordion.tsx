"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const id = useId();

  return (
    <div className={cn("divide-y divide-black/10 border-y border-black/10", className)}>
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${id}-panel-${index}`;
        return (
          <div key={item.title}>
            <h3>
              <button type="button" className="flex w-full items-center justify-between gap-4 py-5 text-left font-bold" aria-expanded={open} aria-controls={panelId} onClick={() => setOpenIndex(open ? null : index)}>
                {item.title}<span aria-hidden="true">{open ? "−" : "+"}</span>
              </button>
            </h3>
            <div id={panelId} hidden={!open} className="pb-5 text-sm leading-7 text-black/65">{item.content}</div>
          </div>
        );
      })}
    </div>
  );
}
