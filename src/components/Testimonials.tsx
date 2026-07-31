"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="section-pad bg-paper-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm tracking-[0.2em] text-accent uppercase">Clients</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight md:text-5xl">
            Words from people who hired us.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={item.name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-display max-w-3xl text-2xl leading-snug tracking-tight md:text-4xl">
                  “{item.quote}”
                </p>
                <footer className="mt-8">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-ink-soft">{item.role}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="border border-line p-3 transition hover:border-ink hover:bg-ink hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="border border-line p-3 transition hover:border-ink hover:bg-ink hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </Reveal>

        <div className="mt-8 flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 flex-1 transition ${
                i === index ? "bg-accent" : "bg-ink/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
