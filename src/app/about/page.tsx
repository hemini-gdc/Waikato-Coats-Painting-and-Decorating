import type { Metadata } from "next";
import { About } from "@/components/About";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" image="/images/about.jpg" />
      <About />
    </>
  );
}
