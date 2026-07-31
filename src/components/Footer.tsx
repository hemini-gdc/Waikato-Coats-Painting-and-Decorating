import { brand, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="section-pad mx-auto flex max-w-7xl flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl tracking-tight">{brand.name}</p>
          <p className="mt-3 max-w-sm text-white/60">{brand.tagline}</p>
          <p className="mt-6 text-xs tracking-[0.16em] text-signal uppercase">
            Demo site · Dummy content
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="section-pad mx-auto max-w-7xl border-t border-white/10 py-5 text-xs text-white/45">
        © {new Date().getFullYear()} {brand.name}. Placeholder brand for client demo.
      </div>
    </footer>
  );
}
