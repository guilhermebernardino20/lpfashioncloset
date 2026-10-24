import BrandMarquee from "@/components/landing/BrandMarquee";
import BrandUniverse from "@/components/landing/BrandUniverse";
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
      <Header />
      <main>
        <Hero />
        <BrandMarquee />
        <Manifesto />
        <BrandUniverse />
        <ProductSelection />
        <ShoppingExperience />
        <EditorialGallery />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
