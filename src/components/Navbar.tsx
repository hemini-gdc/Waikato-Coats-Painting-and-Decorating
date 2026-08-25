"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { brand, navLinks } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-4 border-accent bg-white text-ink shadow-sm">
      <div className="section-pad mx-auto flex h-24 max-w-7xl items-center justify-between md:h-28">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo.png"
            alt={brand.name}
            width={280}
            height={180}
            preload
            className="h-[4.75rem] w-auto object-contain md:h-24"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex lg:gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-xs font-semibold tracking-[0.14em] uppercase transition ${
                  active
                    ? "bg-accent text-white"
                    : "text-ink hover:bg-accent hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={brand.phoneHref}
            className="ml-2 bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-deep"
          >
            Call {brand.phone}
          </a>
        </nav>

        <button
          type="button"
          className="text-accent lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-line bg-white text-ink lg:hidden"
          >
            <nav className="section-pad flex flex-col gap-2 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 font-display text-2xl ${
                    isActive(link.href) ? "bg-accent text-white" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={brand.phoneHref}
                className="mt-2 inline-flex w-fit bg-accent px-4 py-2 text-sm text-white"
              >
                Call {brand.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
