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
    const form = event.currentTarget;
    const data = new FormData(form);
    const body = [
      `Name: ${data.get("name") ?? ""}`,
      `Email: ${data.get("email") ?? ""}`,
      `Phone: ${data.get("phone") ?? ""}`,
      "",
      `${data.get("message") ?? ""}`,
    ].join("\n");

    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(
      "Website enquiry — Waikato Coats",
    )}&body=${encodeURIComponent(body)}`;

    await new Promise((resolve) => setTimeout(resolve, 400));
    setStatus("done");
    form.reset();
  };

  return (
    <section className="section-pad bg-paper py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">
            Have You Any Queries?
            <span className="mt-2 block">Contact Us Now.</span>
          </h2>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="text-ink-soft">Location Address:</dt>
              <dd className="mt-1 text-lg font-medium">{brand.address}</dd>
            </div>
            <div>
              <dt className="text-ink-soft">Email Address:</dt>
              <dd className="mt-1 text-lg font-medium">
                <a href={`mailto:${brand.email}`} className="hover:text-accent">
                  {brand.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-ink-soft">Phone Number:</dt>
              <dd className="mt-1 text-lg font-medium">
                <a href={brand.phoneHref} className="hover:text-accent">
                  {brand.phoneIntl}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="border border-line bg-white p-6 md:p-8"
          >
            <div className="grid gap-5">
              <label className="block text-sm">
                <span className="text-ink-soft">Your Name</span>
                <input
                  required
                  name="name"
                  className="mt-2 w-full border border-line bg-paper px-3 py-3 outline-none transition focus:border-accent"
                  placeholder="Your Name"
                />
              </label>
              <label className="block text-sm">
                <span className="text-ink-soft">Your Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full border border-line bg-paper px-3 py-3 outline-none transition focus:border-accent"
                  placeholder="Your Email"
                />
              </label>
              <label className="block text-sm">
                <span className="text-ink-soft">Phone</span>
                <input
                  name="phone"
                  className="mt-2 w-full border border-line bg-paper px-3 py-3 outline-none transition focus:border-accent"
                  placeholder="Phone"
                />
              </label>
              <label className="block text-sm">
                <span className="text-ink-soft">Your Message (Optional)</span>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full resize-y border border-line bg-paper px-3 py-3 outline-none transition focus:border-accent"
                  placeholder="Your Message (Optional)"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-accent px-5 py-3 text-sm font-medium tracking-[0.12em] text-white uppercase transition hover:bg-accent-deep disabled:opacity-60"
              >
                {status === "submitting" ? "Opening email…" : "Send"}
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
                    Your email app should open — or call {brand.phoneIntl}.
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
