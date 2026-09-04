import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[color:var(--background)/0.92] backdrop-blur-xl">
      <Container className="relative flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="text-2xl font-black tracking-[-0.05em] focus-visible:outline" aria-label={`${siteConfig.name}, inicio`}>{siteConfig.name}</Link>
        <Navbar />
        <MobileMenu />
      </Container>
    </header>
  );
}
