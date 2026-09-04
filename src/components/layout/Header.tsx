"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Navbar } from "@/components/layout/Navbar";

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
          flex w-full items-center justify-between
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
            src="/images/brand/vivaya-logo.png"
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

        <Navbar />

        <MobileMenu />
      </div>
    </motion.header>
  );
}
