import { cn } from "@/lib/utils";

export function SectionTitle({ eyebrow, title, description, className }: { eyebrow?: string; title: string; description?: string; className?: string }) {
  return (
    <header className={cn("max-w-2xl", className)}>
      {eyebrow && <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[var(--primary)]">{eyebrow}</p>}
      <h2 className="text-balance text-3xl font-black tracking-[-0.04em] sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-pretty leading-7 text-black/65">{description}</p>}
    </header>
  );
}
