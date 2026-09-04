"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Navbar } from "@/components/layout/Navbar";
import { socialConfig } from "@/config/socials";

const socialLinks = [
  {
    label: "Facebook",
    href: socialConfig.facebook,
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
        <path fill="currentColor" d="M13.7 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5H17V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.5V13h2.8v8h3.4Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: socialConfig.instagram,
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: socialConfig.tiktok,
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
        <path fill="currentColor" d="M15.6 3c.3 2.2 1.6 3.6 3.9 3.8v3.1a8 8 0 0 1-3.9-1.1v5.7a5.5 5.5 0 1 1-4.8-5.4v3.2a2.4 2.4 0 1 0 1.7 2.3V3h3.1Z" />
      </svg>
    ),
  },
];

export function Header() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY.current;

      // Siempre visible cuando estamos cerca del inicio
      if (currentScrollY < 80) {
        setVisible(true);
      } else if (scrollDifference > 8) {
        setVisible(false);
      } else if (scrollDifference < -8) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{
        y: visible ? 0 : "-110%",
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-x-0 top-0 z-50 w-full"
    >
      <div
        className="
          relative flex w-full items-center justify-between
          px-4 py-3
          sm:px-6 sm:py-4
          lg:px-8 lg:py-4
          xl:px-10
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
            src="/images/brand/vivaya-icon.png"
            alt="Vivaya"
            width={150}
            height={150}
            priority
            className="
              h-16 w-auto object-contain
              sm:h-[68px]
              lg:h-[76px]
              xl:h-20
            "
            style={{
              filter:
                "drop-shadow(2px 0 0 white) drop-shadow(-2px 0 0 white) drop-shadow(0 2px 0 white) drop-shadow(0 -2px 0 white) drop-shadow(0 5px 10px rgba(0,0,0,0.10))",
            }}
          />
        </Link>

        <div className="relative z-50 ml-auto hidden items-center gap-2 lg:flex" aria-label="Redes sociales">
          {socialLinks.map((social) => {
            const styles = "grid size-11 place-items-center rounded-full bg-[#F7FBF3]/90 text-[#335C30] shadow-[0_8px_22px_rgba(7,59,58,0.10)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white";

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

        <MobileMenu />
      </div>
    </motion.header>
  );
}
