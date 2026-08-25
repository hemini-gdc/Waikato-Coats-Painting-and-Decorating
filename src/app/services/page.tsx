import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/components/Services";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" image="/images/g2.jpg" />
      <Services />
    </>
  );
}
