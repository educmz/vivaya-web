"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Menu } from "lucide-react";

import { MobileCarta } from "@/components/layout/MobileCarta";
import { Navbar } from "@/components/layout/Navbar";
import { socialLinks } from "./socialLinks";



export function Header() {
  const [isCartaOpen, setIsCartaOpen] = useState(false);
  const closeCarta = useCallback(() => setIsCartaOpen(false), []);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full bg-background">
      <div
        className="
          relative flex h-[88px] w-full items-center justify-between sm:h-24 lg:h-28
          px-6
          sm:px-6
          lg:px-6
        "
      >
        <Link
          href="/"
          aria-label="Vivaya, inicio"
          className="
            relative z-50 shrink-0
            transition-transform duration-300
            hover:scale-[1.04]
            focus-visible:outline
          "
        >
          <Image
            src="/images/brand/logo_negro.png"
            alt="Vivaya"
            width={2172}
            height={724}
            priority
            className="
              h-auto w-28 object-contain
              sm:w-32
              lg:w-36
            "
            style={{
              filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.10))",
            }}
          />
        </Link>

        <div className="relative z-50 ml-auto hidden items-center gap-2 lg:flex" aria-label="Redes sociales">
          {socialLinks.map((social) => {
            const styles = "grid size-10 place-items-center rounded-full bg-[#FF8A00] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#E67C00]";

            return social.href ? (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className={styles}>
                {social.icon}
              </a>
            ) : (
              <span key={social.label} aria-label={social.label} role="img" className={styles}>
                {social.icon}
              </span>
            );
          })}
        </div>

        <Navbar className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

        <button
          type="button"
          onClick={() => setIsCartaOpen(true)}
          aria-label="Abrir carta"
          aria-expanded={isCartaOpen}
          aria-controls="mobile-navigation"
          className="grid size-12 place-items-center rounded-full bg-[#FF8A00] text-white lg:hidden"
        >
          <Menu size={22} aria-hidden="true" />
        </button>
        <MobileCarta isOpen={isCartaOpen} onClose={closeCarta} />
      </div>
    </header>
  );
}
