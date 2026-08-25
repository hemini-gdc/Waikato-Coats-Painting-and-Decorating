import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" image="/images/banner1.jpg" />
      <Contact />
    </>
  );
}
