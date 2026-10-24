import BrandMarquee from "@/components/landing/BrandMarquee";
import BrandUniverse from "@/components/landing/BrandUniverse";
import EditorialMarquee from "@/components/motion/EditorialMarquee";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { MotionProvider } from "@/components/landing/MotionProvider";
import EditorialGallery from "@/components/landing/EditorialGallery";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Manifesto from "@/components/landing/Manifesto";
import ShoppingExperience from "@/components/landing/ShoppingExperience";

export default function Home() {
  return (
    <>
      <SmoothScroll>
      <MotionProvider>
      <Header />
      <main>
        <Hero />
        <BrandMarquee />
        <Manifesto />
        <BrandUniverse />
        <EditorialMarquee />
        <EditorialGallery />
        <ShoppingExperience />
        <FinalCTA />
      </main>
      <Footer />
      </MotionProvider>
      </SmoothScroll>
    </>
  );
}
