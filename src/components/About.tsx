"use client";

import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/data";
import { Reveal } from "./Reveal";

export function AboutTeaser() {
  return (
    <section className="section-pad bg-paper py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">
            Waikato Coats
            <span className="mt-2 block text-3xl md:text-4xl">Painting and Decorating</span>
          </h2>
          <p className="mt-5 text-ink-soft">
            At Waikato Coats Painting and Decorating, we understand that renovating
            your home is a big investment for you. That&apos;s why we work with you to
            understand what you need done. Offering in depth breakdowns in quotes.
            Detailing what products and preparation methods will be used, How long
            the job is likely to take, discussing what really works best for you.
          </p>
          <div className="mt-8">
            <p className="text-sm tracking-[0.2em] text-accent uppercase">Call now to book</p>
            <a
              href={brand.phoneHref}
              className="font-display mt-2 block text-3xl tracking-tight transition hover:text-accent md:text-4xl"
            >
              {brand.phoneIntl}
            </a>
          </div>
          <Link
            href="/about"
            className="mt-8 inline-flex bg-ink px-5 py-3 text-sm font-medium tracking-[0.12em] text-white uppercase transition hover:bg-accent"
          >
            More about us
          </Link>
        </Reveal>
        <Reveal delay={0.1} className="relative aspect-[4/5] overflow-hidden md:aspect-[5/4]">
          <Image
            src="/images/about.jpg"
            alt="Interior painting prep and finished walls"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section-pad bg-paper py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">
            Waikato Coats
            <span className="mt-2 block text-3xl md:text-4xl">Painting and Decorating</span>
          </h2>
          <p className="mt-6 text-ink-soft">
            At Waikato Coats Painting and Decorating, we understand that renovating
            your home is a big investment for you. That&apos;s why we work with you to
            understand what you need done. Offering in depth breakdowns in quotes.
            Detailing what products and preparation methods will be used, How long
            the job is likely to take, discussing what really works best for you.
            We&apos;re a small local company that don&apos;t carry the overheads of larger
            companies do. Offering ultra-competitive rates without walking on
            quality. As you&apos;ll see from the photo examples, our work is only of
            the highest standards.
          </p>
          <div className="mt-10">
            <p className="text-sm tracking-[0.2em] text-accent uppercase">Call us</p>
            <a
              href={brand.phoneHref}
              className="font-display mt-2 block text-3xl tracking-tight transition hover:text-accent md:text-4xl"
            >
              {brand.phoneIntl}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="relative min-h-[320px] overflow-hidden md:min-h-[480px]">
          <Image
            src="/images/banner1.jpg"
            alt="Freshly painted interior with white trim and Waikato views"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
