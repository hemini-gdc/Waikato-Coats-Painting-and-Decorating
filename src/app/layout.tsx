import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
});

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Waikato Coats Painting and Decorating",
    template: "%s | Waikato Coats",
  },
  description:
    "Waikato-wide specialists in painting finishes — interior, exterior, plastering, repairs and renovations. Based in Kihikihi. Call 020 4078 7381.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} h-full`}>
      <body className="min-h-full antialiased">
        <Preloader />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
