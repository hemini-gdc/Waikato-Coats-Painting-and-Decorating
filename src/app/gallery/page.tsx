import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" image="/images/g1.jpg" />
      <GalleryGrid showIntro={false} />
    </>
  );
}
