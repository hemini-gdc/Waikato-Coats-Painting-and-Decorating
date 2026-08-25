"use client";

import Link from "next/link";
import { homeServices } from "@/lib/data";
import { Reveal } from "./Reveal";

export function HomeServices() {
  return (
    <section className="section-pad noise bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">
            Our Services
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {homeServices.map((title, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <Link href="/services" className="group block border-t border-line pt-6">
                <p className="text-sm tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-3 text-2xl tracking-tight transition group-hover:text-accent">
                  {title}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
