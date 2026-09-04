import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("inline-flex rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--foreground)]", className)} {...props} />;
}
