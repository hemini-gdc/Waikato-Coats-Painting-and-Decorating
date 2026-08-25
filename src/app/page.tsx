import { AboutTeaser } from "@/components/About";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Hero } from "@/components/Hero";
import { HomeServices } from "@/components/HomeServices";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <HomeServices />
      <GalleryGrid preview />
    </>
  );
}
