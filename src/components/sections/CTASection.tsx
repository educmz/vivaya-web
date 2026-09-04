import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection({ title, description, href, label }: { title: string; description: string; href: string; label: string }) {
  return <section className="py-16 sm:py-24"><Container><div className="rounded-[2rem] bg-[var(--foreground)] p-8 text-white sm:p-12"><h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2><p className="mt-4 max-w-2xl text-white/70">{description}</p><Button href={href} className="mt-7" variant="secondary">{label}</Button></div></Container></section>;
}
