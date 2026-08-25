import Image from "next/image";
import Link from "next/link";
import { brand, navLinks, serviceAreas } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t-4 border-accent bg-footer text-white">
      <div className="section-pad mx-auto grid max-w-7xl gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="inline-block bg-white p-3">
            <Image
              src="/images/logo.png"
              alt={brand.name}
              width={220}
              height={140}
              className="h-24 w-auto object-contain"
            />
          </div>
          <p className="mt-4 max-w-sm text-white/80">{brand.tagline}</p>
          <a
            href={brand.facebook}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block text-sm text-white/80 hover:text-white"
          >
            Facebook page
          </a>
        </div>

        <div>
          <p className="text-xs tracking-[0.16em] text-white uppercase">Areas we service</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.16em] text-white uppercase">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={brand.phoneHref} className="hover:text-white">
                {brand.phoneIntl}
              </a>
            </li>
            <li>
              <a href={`mailto:${brand.email}`} className="hover:text-white">
                {brand.email}
              </a>
            </li>
            <li>{brand.address}</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="section-pad mx-auto max-w-7xl border-t border-white/20 py-5 text-xs text-white/70">
        © {new Date().getFullYear()} {brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
