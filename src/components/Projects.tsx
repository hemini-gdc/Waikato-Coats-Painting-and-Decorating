"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { projects, type ProjectCategory } from "@/lib/data";
import { Reveal } from "./Reveal";

const filters: ProjectCategory[] = ["All", "Interior", "Exterior", "Commercial"];

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const [activeId, setActiveId] = useState<string | null>(null);

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <section id="work" className="section-pad paint-grid py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm tracking-[0.2em] text-accent uppercase">Selected work</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl tracking-tight md:text-5xl">
            Recent finishes worth a second look.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-8 flex flex-wrap gap-2">
          {filters.map((item) => {
            const selected = filter === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`relative px-4 py-2 text-sm transition ${
                  selected ? "text-white" : "text-ink-soft hover:text-ink"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </button>
            );
          })}
        </Reveal>

        <LayoutGroup>
          <motion.div
            layout
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((project) => (
                <motion.button
                  layout
                  key={project.id}
                  type="button"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  onClick={() =>
                    setActiveId((id) => (id === project.id ? null : project.id))
                  }
                  className="group relative aspect-[4/5] overflow-hidden text-left"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-xs tracking-[0.18em] text-white/70 uppercase">
                      {project.category} · {project.location}
                    </p>
                    <p className="font-display mt-2 text-2xl tracking-tight">
                      {project.title}
                    </p>
                    <AnimatePresence>
                      {activeId === project.id && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 text-sm text-white/75"
                        >
                          Dummy project note — replace with scope, paint system and timeline.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
