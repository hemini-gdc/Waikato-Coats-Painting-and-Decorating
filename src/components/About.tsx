"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { reasons } from "@/lib/data";
import { Reveal } from "./Reveal";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  return (
    <section id="about" ref={ref} className="overflow-hidden bg-ink py-24 text-white md:py-32">
      <div className="section-pad mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm tracking-[0.2em] text-accent uppercase">Why Northline</p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl tracking-tight md:text-5xl">
            Built for property owners who care how the finish feels up close.
          </h2>
          <p className="mt-5 max-w-2xl text-white/70">
            This is placeholder copy for the demo — once we have your story, warranty, licence
            numbers and real process, we drop them straight in.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {reasons.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="border-t border-white/15 pt-6">
                <h3 className="font-display text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-3 text-white/65">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <motion.div
        style={{ x }}
        className="mt-20 whitespace-nowrap font-display text-[14vw] leading-none tracking-tight text-white/8 select-none md:text-[10vw]"
        aria-hidden
      >
        Prep · Prime · Paint · Protect · Prep · Prime · Paint · Protect
      </motion.div>
    </section>
  );
}
