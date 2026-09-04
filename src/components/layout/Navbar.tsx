import Link from "next/link";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  return (
    <nav className={cn("hidden items-center gap-6 lg:flex", className)} aria-label="Navegación principal">
      {navigationItems.map((item) => <Link className="text-sm font-semibold transition hover:text-[var(--primary)] focus-visible:outline" href={item.href} key={item.href}>{item.label}</Link>)}
    </nav>
  );
}
