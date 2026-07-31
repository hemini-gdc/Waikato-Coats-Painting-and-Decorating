"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { brand } from "@/lib/data";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden text-white">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=2400&q=80"
          alt="Painter applying a fresh coat to an exterior wall"
          fill
          preload
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,118,110,0.35),transparent_45%)]" />

      <div className="section-pad relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end pb-16 pt-28 md:pb-24">
        <motion.p
          className="font-display text-4xl leading-none tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          {brand.name}
        </motion.p>

        <motion.h1
          className="mt-6 max-w-2xl text-2xl font-medium tracking-tight text-white/95 sm:text-3xl md:text-4xl"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        >
          Painting that feels finished — not just coated.
        </motion.h1>

        <motion.p
          className="mt-4 max-w-xl text-base text-white/80 md:text-lg"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        >
          {brand.tagline} Residential, commercial and body corporate work across Auckland.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-3"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
        >
          <a
            href="#contact"
            className="bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent-deep"
          >
            Get a free quote
          </a>
          <a
            href="#work"
            className="border border-white/40 px-5 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-ink"
          >
            See recent work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
