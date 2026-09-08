"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactForm() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#FFF7E8] py-20 text-[#302E2A] sm:py-28">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[24rem] w-[24rem] rounded-full bg-[#3F7D4F]/15 blur-[100px]" aria-hidden="true" />

      <Container className="relative">
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.75, ease }} className="mx-auto max-w-xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#3F7D4F]">Escríbenos</p>
          <h2 className="font-accent mt-3 text-[clamp(2.5rem,6vw,4rem)] leading-[0.9] text-[#FF8A00]">Cuéntanos qué necesitas.</h2>
        </motion.div>

        <motion.form
          initial={reducedMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="relative mx-auto mt-12 grid max-w-xl gap-5 rounded-[1.8rem] border-2 border-[#302E2A] bg-white p-6 sm:p-8"
          aria-label="Formulario de contacto"
        >
          <label className="grid gap-2 text-sm font-bold">
            Nombre
            <input className="min-h-12 rounded-xl border-2 border-[#302E2A]/20 bg-[#FFF7E8] px-4 font-normal text-[#302E2A] outline-none placeholder:text-[#302E2A]/40 focus:border-[#FF8A00]" name="name" autoComplete="name" placeholder="Tu nombre" />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            Correo
            <input className="min-h-12 rounded-xl border-2 border-[#302E2A]/20 bg-[#FFF7E8] px-4 font-normal text-[#302E2A] outline-none placeholder:text-[#302E2A]/40 focus:border-[#FF8A00]" name="email" type="email" autoComplete="email" placeholder="tucorreo@ejemplo.com" />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            Mensaje
            <textarea className="min-h-36 rounded-xl border-2 border-[#302E2A]/20 bg-[#FFF7E8] p-4 font-normal text-[#302E2A] outline-none placeholder:text-[#302E2A]/40 focus:border-[#FF8A00]" name="message" placeholder="Escribe tu mensaje" />
          </label>
          <Button type="button" disabled className="mt-2 bg-[#FF8A00] text-[#302E2A]">Envío disponible próximamente</Button>
        </motion.form>
      </Container>
    </section>
  );
}
