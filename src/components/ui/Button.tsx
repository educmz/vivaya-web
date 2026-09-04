import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "ghost";
}

const variants = {
  primary: "bg-[var(--primary)] text-white hover:brightness-95",
  secondary: "bg-[var(--secondary)] text-[var(--foreground)] hover:brightness-95",
  ghost: "border border-current bg-transparent hover:bg-black/5",
};

export function Button({ children, className, href, external = false, variant = "primary", type = "button", ...props }: ButtonProps) {
  const styles = cn("inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-45", variants[variant], className);

  if (href) {
    if (external) return <a className={styles} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
    return <Link className={styles} href={href}>{children}</Link>;
  }

  return <button className={styles} type={type} {...props}>{children}</button>;
}
