import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/hero/Hero";
import About from "@/src/components/about/About";
import FeaturedProperties from "@/src/components/properties/FeaturedProperties";
import Process from "@/src/components/process/Process";
import Contact from "@/src/components/contact/Contact";
import Footer from "@/src/components/hero/Footer";
import LifestyleBanner from "@/src/components/banner/LifestyleBanner";
// import RealEstateTips from "@/src/components/tips/RealEstateTips";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedProperties />
      <Process />
      <LifestyleBanner />
      {/* <RealEstateTips /> */}
      <Contact />
      <Footer />
    </>
  );
}
