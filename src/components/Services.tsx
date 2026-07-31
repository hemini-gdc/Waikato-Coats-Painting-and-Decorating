"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Services() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active) ?? services[0];

  return (
    <section id="services" className="section-pad noise bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm tracking-[0.2em] text-accent uppercase">Services</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl tracking-tight md:text-5xl">
            What we paint — and how we show up.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <Reveal className="relative min-h-[360px] overflow-hidden md:min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                  <p className="font-display text-2xl md:text-3xl">{current.title}</p>
                  <p className="mt-2 max-w-md text-sm text-white/80 md:text-base">
                    {current.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-center">
            <ul className="divide-y divide-line border-y border-line">
              {services.map((service) => {
                const isActive = service.id === active;
                return (
                  <li key={service.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(service.id)}
                      onFocus={() => setActive(service.id)}
                      onClick={() => setActive(service.id)}
                      className="group flex w-full items-center justify-between gap-4 py-5 text-left transition"
                    >
                      <span
                        className={`font-display text-2xl tracking-tight transition md:text-3xl ${
                          isActive ? "text-accent" : "text-ink group-hover:text-accent"
                        }`}
                      >
                        {service.title}
                      </span>
                      <motion.span
                        animate={{
                          x: isActive ? 0 : -4,
                          opacity: isActive ? 1 : 0.35,
                        }}
                        className="text-accent"
                      >
                        <ArrowUpRight size={22} />
                      </motion.span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 text-sm text-ink-soft">
              Hover or tap a service to preview. Demo content — swap for your real list anytime.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
