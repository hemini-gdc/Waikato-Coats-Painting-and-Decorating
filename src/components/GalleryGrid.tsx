"use client";

import Image from "next/image";
import Link from "next/link";
import { gallery, homeGallery } from "@/lib/data";
import { Reveal } from "./Reveal";

export function GalleryGrid({
  preview = false,
  showIntro = true,
}: {
  preview?: boolean;
  showIntro?: boolean;
}) {
  const items = preview ? homeGallery : gallery;

  return (
    <section className="section-pad paint-grid py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {showIntro && (
          <Reveal>
            <h2 className="font-display text-4xl tracking-tight md:text-6xl">
              Our Works
            </h2>
          </Reveal>
        )}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={`${item.src}-${i}`} delay={i * 0.03} className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </Reveal>
          ))}
        </div>

        {preview && (
          <Reveal delay={0.1} className="mt-10">
            <Link
              href="/gallery"
              className="inline-flex bg-ink px-5 py-3 text-sm font-medium tracking-[0.12em] text-white uppercase transition hover:bg-accent"
            >
              View more works...
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
