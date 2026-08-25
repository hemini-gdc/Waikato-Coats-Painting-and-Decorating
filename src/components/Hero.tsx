"use client";

import Image from "next/image";
import Link from "next/link";
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
          src="/images/banner.jpg"
          alt="Waikato Coats exterior painting in progress"
          fill
          preload
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-accent-deep via-accent/45 to-accent/20" />

      <div className="section-pad relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end pb-16 pt-36 md:pb-24">
        <motion.p
          className="text-sm tracking-[0.2em] text-white/80 uppercase"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Call us: {brand.phoneIntl}
        </motion.p>

        <motion.h1
          className="font-display mt-4 max-w-5xl text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          Waikato-Wide Specialists in all types Painting Finishes
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-base text-white/85 md:text-lg"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          From minor repairs to full home renovations, our team brings the skill,
          experience, and care needed to achieve outstanding results that last
        </motion.p>

        <motion.div
          className="mt-8"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
        >
          <Link
            href="/contact"
            className="inline-flex bg-accent px-5 py-3 text-sm font-medium tracking-[0.12em] text-white uppercase transition hover:bg-accent-deep"
          >
            Contact us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
