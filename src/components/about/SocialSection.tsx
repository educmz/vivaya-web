"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Play,
  Send,
  Share2,
  ThumbsUp,
} from "lucide-react";
import { motion } from "motion/react";

import { socialConfig } from "@/config/socials";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import {
  AboutItem,
  AboutReveal,
  aboutCardVariants,
} from "@/components/about/AboutMotion";

/* -------------------------------------------------------------------------- */
/* ICONOS */
/* -------------------------------------------------------------------------- */

function InstagramIcon({
  className = "size-5",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({
  className = "size-5",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M13.7 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5H17V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.5V13h2.8v8h3.4Z"
      />
    </svg>
  );
}

function TikTokIcon({
  className = "size-5",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M15.6 3c.3 2.2 1.6 3.6 3.9 3.8v3.1a8 8 0 0 1-3.9-1.1v5.7a5.5 5.5 0 1 1-4.8-5.4v3.2a2.4 2.4 0 1 0 1.7 2.3V3h3.1Z"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* BOTÓN SOCIAL */
/* -------------------------------------------------------------------------- */

interface SocialButtonProps {
  href?: string;
  label: string;
  icon: ReactNode;
  background: string;
}

function SocialButton({
  href,
  label,
  icon,
  background,
}: SocialButtonProps) {
  if (!href) {
    return (
      <div
        className="flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold text-white opacity-60"
        style={{ backgroundColor: background }}
      >
        {icon}
        {label}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ backgroundColor: background }}
    >
      {icon}
      {label}
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* SECCIÓN */
/* -------------------------------------------------------------------------- */

export function SocialSection() {
  const [instagramLiked, setInstagramLiked] = useState(false);
  const [facebookLiked, setFacebookLiked] = useState(false);
  const [tiktokLiked, setTiktokLiked] = useState(false);

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        {/* CABECERA */}
        <AboutReveal
          className="mb-10 sm:mb-12 lg:mb-14"
          amount={0.5}
        >
          <AboutItem>
            <p
              className="text-2xl text-[#FF8A00] sm:text-3xl"
              style={{
                fontFamily:
                  "var(--font-script), 'Pacifico', cursive",
              }}
            >
              Síguenos de cerca
            </p>
          </AboutItem>

          <AnimatedTitle
            text="Momentos que compartimos"
            className="mt-4 text-4xl font-extrabold uppercase tracking-[0.01em] text-[#302E2A] sm:text-5xl lg:text-6xl"
          />
        </AboutReveal>

        {/* REDES */}
        <AboutReveal
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          amount={0.2}
          stagger={0.12}
        >
          {/* ================================================================ */}
          {/* INSTAGRAM */}
          {/* ================================================================ */}

          <motion.div
            variants={aboutCardVariants}
            className="flex min-w-0 flex-col gap-4"
          >
            <motion.article
              whileHover={{ y: -6 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
              className="overflow-hidden rounded-[1.4rem] border border-[#302E2A]/10 bg-white"
            >
              {/* HEADER */}
              <div className="flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-[#FEDA75] via-[#FA7E1E] to-[#D62976] p-[2px]">
                    <div className="flex size-full items-center justify-center rounded-full bg-white">
                      <span className="text-xs font-bold text-[#302E2A]">
                        V
                      </span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-[#302E2A]">
                    vivaya
                  </p>
                </div>

                <MoreHorizontal
                  className="size-5 text-[#302E2A]"
                  strokeWidth={1.8}
                />
              </div>

              {/* IMAGEN */}
              <div className="relative aspect-square overflow-hidden bg-[#F3F0EC]">
                <Image
                  src="/images/1.png"
                  alt="Publicación de Instagram de Vivaya"
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* ACCIONES */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() =>
                        setInstagramLiked((value) => !value)
                      }
                      aria-label="Me gusta"
                    >
                      <motion.div whileTap={{ scale: 0.7 }}>
                        <Heart
                          className={`size-[23px] ${
                            instagramLiked
                              ? "fill-[#ED4956] text-[#ED4956]"
                              : "text-[#302E2A]"
                          }`}
                          strokeWidth={1.8}
                        />
                      </motion.div>
                    </button>

                    <MessageCircle
                      className="size-[22px]"
                      strokeWidth={1.8}
                    />

                    <Send
                      className="size-[21px]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <Bookmark
                    className="size-[22px]"
                    strokeWidth={1.8}
                  />
                </div>

                <p className="mt-4 min-h-[48px] text-sm leading-6 text-[#302E2A]">
                  <span className="mr-2 font-semibold">
                    vivaya
                  </span>
                  Los buenos momentos siempre saben mejor cuando se comparten
                </p>
              </div>
            </motion.article>

            <SocialButton
              href={socialConfig.instagram}
              label="Seguir en Instagram"
              background="#E1306C"
              icon={<InstagramIcon className="size-4" />}
            />
          </motion.div>

          {/* ================================================================ */}
          {/* TIKTOK */}
          {/* ================================================================ */}

          <motion.div
            variants={aboutCardVariants}
            className="flex min-w-0 flex-col gap-4"
          >
            <motion.article
              whileHover={{ y: -6 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
              className="overflow-hidden rounded-[1.4rem] bg-[#111]"
            >
              {/* 
                La tarjeta completa tiene una altura mayor para acercarse
                visualmente a Instagram y Facebook.
              */}
              <div className="relative aspect-[4/5] min-h-[540px] overflow-hidden lg:min-h-[600px]">
                <Image
                  src="/images/3.png"
                  alt="Publicación de TikTok de Vivaya"
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* SUPERIOR */}
                <div className="absolute left-4 top-4 flex items-center gap-2 text-white">
                  <TikTokIcon className="size-5" />

                  <span className="text-sm font-semibold">
                    TikTok
                  </span>
                </div>

                {/* PLAY */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    aria-label="Reproducir video"
                    className="flex size-14 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-transform duration-300 hover:scale-110"
                  >
                    <Play
                      className="ml-1 size-5"
                      fill="currentColor"
                    />
                  </button>
                </div>

                {/* ACCIONES */}
                <div className="absolute bottom-6 right-4 flex flex-col items-center gap-5 text-white">
                  <button
                    type="button"
                    onClick={() =>
                      setTiktokLiked((value) => !value)
                    }
                    aria-label="Me gusta"
                  >
                    <motion.div whileTap={{ scale: 0.7 }}>
                      <Heart
                        className={`size-7 ${
                          tiktokLiked
                            ? "fill-[#FE2C55] text-[#FE2C55]"
                            : "text-white"
                        }`}
                        strokeWidth={1.8}
                      />
                    </motion.div>
                  </button>

                  <MessageCircle
                    className="size-7"
                    strokeWidth={1.8}
                  />

                  <Share2
                    className="size-7"
                    strokeWidth={1.8}
                  />
                </div>

                {/* TEXTO */}
                <div className="absolute bottom-6 left-4 max-w-[72%] text-white">
                  <p className="text-sm font-semibold">
                    @vivaya
                  </p>

                  <p className="mt-2 text-sm leading-5 text-white/90">
                    Buena comida, mejores conversaciones
                  </p>
                </div>
              </div>
            </motion.article>

            <SocialButton
              href={socialConfig.tiktok}
              label="Seguir en TikTok"
              background="#111111"
              icon={<TikTokIcon className="size-4" />}
            />
          </motion.div>

          {/* ================================================================ */}
          {/* FACEBOOK */}
          {/* ================================================================ */}

          <motion.div
            variants={aboutCardVariants}
            className="flex min-w-0 flex-col gap-4"
          >
            <motion.article
              whileHover={{ y: -6 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
              className="overflow-hidden rounded-[1.4rem] border border-[#302E2A]/10 bg-white"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-full bg-[#1877F2] text-white">
                    <FacebookIcon className="size-6" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#050505]">
                      Vivaya
                    </p>

                    <p className="text-[11px] text-[#65676B]">
                      Ahora
                    </p>
                  </div>
                </div>

                <MoreHorizontal
                  className="size-5 text-[#65676B]"
                  strokeWidth={1.8}
                />
              </div>

              {/* TEXTO */}
              <p className="px-4 pb-3 text-sm leading-6 text-[#050505]">
                Una pausa, algo rico y una buena conversación. A veces no hace
                falta más.
              </p>

              {/* IMAGEN */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/2.png"
                  alt="Publicación de Facebook de Vivaya"
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* REACCIONES */}
              <div className="px-4 pb-3">
                <div className="flex items-center justify-between border-b border-[#CED0D4] py-3 text-xs text-[#65676B]">
                  <div className="flex items-center gap-1.5">
                    <span className="grid size-5 place-items-center rounded-full bg-[#1877F2] text-white">
                      <ThumbsUp
                        className="size-3"
                        fill="currentColor"
                      />
                    </span>

                    <span>{facebookLiked ? "1" : "0"}</span>
                  </div>

                  <span>Comentarios</span>
                </div>

                {/* IMPORTANTE: FLEX, NO GRID */}
                <div className="flex items-stretch pt-1">
                  <button
                    type="button"
                    onClick={() =>
                      setFacebookLiked((value) => !value)
                    }
                    className={`flex min-h-12 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-md text-xs font-semibold transition hover:bg-[#F0F2F5] sm:text-sm ${
                      facebookLiked
                        ? "text-[#1877F2]"
                        : "text-[#65676B]"
                    }`}
                  >
                    <ThumbsUp
                      className={`size-[18px] shrink-0 ${
                        facebookLiked
                          ? "fill-[#1877F2]"
                          : ""
                      }`}
                      strokeWidth={1.8}
                    />

                    <span>Me gusta</span>
                  </button>

                  <button
                    type="button"
                    className="flex min-h-12 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-md text-xs font-semibold text-[#65676B] transition hover:bg-[#F0F2F5] sm:text-sm"
                  >
                    <MessageCircle
                      className="size-[18px] shrink-0"
                      strokeWidth={1.8}
                    />

                    <span>Comentar</span>
                  </button>

                  <button
                    type="button"
                    className="flex min-h-12 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-md text-xs font-semibold text-[#65676B] transition hover:bg-[#F0F2F5] sm:text-sm"
                  >
                    <Share2
                      className="size-[18px] shrink-0"
                      strokeWidth={1.8}
                    />

                    <span>Compartir</span>
                  </button>
                </div>
              </div>
            </motion.article>

            <SocialButton
              href={socialConfig.facebook}
              label="Seguir en Facebook"
              background="#1877F2"
              icon={<FacebookIcon className="size-4" />}
            />
          </motion.div>
        </AboutReveal>
      </div>
    </section>
  );
}