"use client";

import Image from "next/image";
import { services } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section className="section-pad noise bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-10">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <article className="grid items-center gap-8 border-t border-line pt-10 lg:grid-cols-[0.7fr_1.3fr]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                </div>
                <div>
                  <p className="text-sm tracking-[0.2em] text-accent">{service.number}</p>
                  <h3 className="font-display mt-3 text-3xl tracking-tight md:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-ink-soft">{service.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
