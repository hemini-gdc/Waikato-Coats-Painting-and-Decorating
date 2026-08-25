"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function PageHero({
  title,
  image = "/images/banner.jpg",
}: {
  title: string;
  image?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[42vh] overflow-hidden text-white md:min-h-[48vh]">
      <Image
        src={image}
        alt=""
        fill
        preload
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-accent/70" />
      <div className="section-pad relative mx-auto flex min-h-[42vh] max-w-7xl items-end pb-12 pt-36 md:min-h-[48vh] md:pb-16">
        <motion.h1
          className="font-display text-4xl tracking-tight md:text-6xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
