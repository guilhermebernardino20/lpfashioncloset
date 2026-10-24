import BrandMarquee from "@/components/landing/BrandMarquee";
import BrandUniverse from "@/components/landing/BrandUniverse";
import EditorialMarquee from "@/components/motion/EditorialMarquee";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { CatalogProvider } from "@/components/landing/CatalogProvider";
import EditorialGallery from "@/components/landing/EditorialGallery";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Manifesto from "@/components/landing/Manifesto";
import ProductSelection from "@/components/landing/ProductSelection";
import ShoppingExperience from "@/components/landing/ShoppingExperience";

export default function Home() {
  return (
    <>
      <SmoothScroll>
      <CatalogProvider>
      <Header />
      <main>
        <Hero />
        <BrandMarquee />
        <Manifesto />
        <BrandUniverse />
        <ProductSelection />
        <ShoppingExperience />
        <EditorialMarquee />
        <EditorialGallery />
        <FinalCTA />
      </main>
      <Footer />
      </CatalogProvider>
      </SmoothScroll>
    </>
  );
}
