"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { brand } from "@/lib/data";
import { Reveal } from "./Reveal";

type Status = "idle" | "submitting" | "done";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("done");
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-pad bg-paper py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-sm tracking-[0.2em] text-accent uppercase">Contact</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight md:text-5xl">
            Request a free quote.
          </h2>
          <p className="mt-4 max-w-md text-ink-soft">
            Demo form only — nothing is sent. In the real build this can email you, hit a CRM,
            or open a calendar booking.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-ink-soft">Phone</dt>
              <dd className="mt-1 text-lg font-medium">{brand.phone}</dd>
            </div>
            <div>
              <dt className="text-ink-soft">Email</dt>
              <dd className="mt-1 text-lg font-medium">{brand.email}</dd>
            </div>
            <div>
              <dt className="text-ink-soft">Studio</dt>
              <dd className="mt-1 text-lg font-medium">{brand.address}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="border border-line bg-white p-6 md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="text-ink-soft">Name</span>
                <input
                  required
                  name="name"
                  className="mt-2 w-full border border-line bg-paper px-3 py-3 outline-none transition focus:border-accent"
                  placeholder="Alex Morgan"
                />
              </label>
              <label className="block text-sm">
                <span className="text-ink-soft">Phone</span>
                <input
                  required
                  name="phone"
                  className="mt-2 w-full border border-line bg-paper px-3 py-3 outline-none transition focus:border-accent"
                  placeholder="021 000 0000"
                />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="text-ink-soft">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full border border-line bg-paper px-3 py-3 outline-none transition focus:border-accent"
                  placeholder="you@email.com"
                />
              </label>
              <label className="block text-sm">
                <span className="text-ink-soft">Service</span>
                <select
                  name="service"
                  className="mt-2 w-full border border-line bg-paper px-3 py-3 outline-none transition focus:border-accent"
                  defaultValue="Interior Painting"
                >
                  <option>Interior Painting</option>
                  <option>Exterior Painting</option>
                  <option>Office & Commercial</option>
                  <option>Body Corporate Painting</option>
                  <option>Cabinet Refresh</option>
                </select>
              </label>
              <label className="block text-sm">
                <span className="text-ink-soft">Suburb</span>
                <input
                  name="suburb"
                  className="mt-2 w-full border border-line bg-paper px-3 py-3 outline-none transition focus:border-accent"
                  placeholder="Ponsonby"
                />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="text-ink-soft">Project notes</span>
                <textarea
                  name="notes"
                  rows={4}
                  className="mt-2 w-full resize-y border border-line bg-paper px-3 py-3 outline-none transition focus:border-accent"
                  placeholder="Rooms, timelines, colours — whatever helps us quote faster."
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent-deep disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Send quote request"}
              </button>

              <AnimatePresence>
                {status === "done" && (
                  <motion.p
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="inline-flex items-center gap-2 text-sm text-accent"
                  >
                    <CheckCircle2 size={18} />
                    Demo submitted — we’ll wire this up for real later.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
