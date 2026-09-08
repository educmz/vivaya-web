"use client";

import { motion } from "motion/react";
import { AtSign, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { siteConfig } from "@/config/site";
import { socialConfig } from "@/config/socials";

const ease = [0.22, 1, 0.36, 1] as const;
const accents = ["#FF8A00", "#3F7D4F", "#7A4B2A"];

const channels = [
  { icon: Phone, label: "Teléfono", value: siteConfig.phone, href: siteConfig.phone ? `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}` : undefined },
  { icon: Mail, label: "Correo", value: siteConfig.email, href: siteConfig.email ? `mailto:${siteConfig.email}` : undefined },
  { icon: AtSign, label: "Instagram", value: socialConfig.instagram, href: socialConfig.instagram || undefined },
];

function ChannelCard({ channel, index }: { channel: (typeof channels)[number]; index: number }) {
  const reducedMotion = useReducedMotion();
  const leftCard = index % 2 === 0;
  const accent = accents[index % accents.length];
  const Icon = channel.icon;

  const content = (
    <>
      <span className="grid size-14 shrink-0 place-items-center rounded-full border-2 border-[#302E2A]" style={{ backgroundColor: accent }}>
        <Icon className="size-6 text-[#FFF7E8]" aria-hidden="true" />
      </span>
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#302E2A]/50">{channel.label}</p>
        <p className="mt-1 font-accent text-2xl leading-none text-[#302E2A]">{channel.value || "Próximamente"}</p>
      </div>
    </>
  );

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 40, rotate: leftCard ? -4 : 4, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, rotate: leftCard ? -1.4 : 1.4, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease }}
      className="group relative"
    >
      <div aria-hidden="true" className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[1.6rem] border-2 border-[#302E2A]" style={{ backgroundColor: accent }} />
      <motion.div whileHover={reducedMotion ? undefined : { y: -6, rotate: 0 }} transition={{ duration: 0.4, ease }} className="relative flex items-center gap-4 rounded-[1.6rem] border-2 border-[#302E2A] bg-[#FFF7E8] p-6">
        {channel.href ? (
          <a href={channel.href} target={channel.href.startsWith("http") ? "_blank" : undefined} rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex items-center gap-4">
            {content}
          </a>
        ) : (
          content
        )}
      </motion.div>
    </motion.article>
  );
}

export function ContactInfo() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-[#FFF7E8] py-20 text-[#302E2A] sm:py-28">
      <Container>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, ease }}
          className="border-b-2 border-[#302E2A] pb-6"
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#3F7D4F]">Estamos disponibles</p>
          <h2 className="font-accent text-[clamp(3rem,7vw,5.5rem)] leading-[0.9] text-[#FF8A00]">Hablemos.</h2>
        </motion.div>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {channels.map((channel, index) => <ChannelCard channel={channel} index={index} key={channel.label} />)}
        </div>
      </Container>
    </section>
  );
}
