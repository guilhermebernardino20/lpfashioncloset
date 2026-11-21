import BrandMarquee from "@/components/landing/BrandMarquee";
import Curadoria from "@/components/landing/Curadoria";
import EditorialMarquee from "@/components/motion/EditorialMarquee";
import Preloader from "@/components/landing/Preloader";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { MotionProvider } from "@/components/landing/MotionProvider";
import EditorialGallery from "@/components/landing/EditorialGallery";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Historia from "@/components/landing/Historia";
import WhatsAppFab from "@/components/landing/WhatsAppFab";
import Hero from "@/components/landing/Hero";
import Duo from "@/components/landing/Duo";
import Manifesto from "@/components/landing/Manifesto";
import ShoppingExperience from "@/components/landing/ShoppingExperience";

export default function Home() {
  return (
    <>
      <SmoothScroll>
      <MotionProvider>
      <a href="#conceito" className="skip-link">Pular para o conteúdo</a>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Duo />
        <BrandMarquee />
        <Manifesto />
        <Historia />
        <Curadoria />
        <EditorialMarquee />
        <EditorialGallery />
        <ShoppingExperience />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
      </MotionProvider>
      </SmoothScroll>
    </>
  );
}
