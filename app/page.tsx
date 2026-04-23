import type { Metadata } from "next";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/home/HeroSection";
import DestinationsSection from "./components/sections/home/DestinationSection";
import AboutSection from "./components/sections/home/AboutSection";
import AboutStorySection from "./components/sections/home/AboutStorySection";
import ProgramsSection from "./components/sections/home/ProgramsSection";
import ProcessSection from "./components/sections/home/ProcessSection";
import TestimonialsSection from "./components/sections/home/TestimonialsSection";
import FAQSection from "./components/sections/home/FAQSection";
import Footer from "./components/layout/Footer";
import CTABanner from "./components/sections/home/CTABanner";
import CountriesHero from "./components/sections/countries/CountriesHero";


export const metadata: Metadata = {
  title: "DLS — Your Journey to Europe Starts Here",
  description:
    "DLS connects ambitious Africans to study, work, and life opportunities across Europe with expert visa guidance, language training, and end-to-end support.",
};

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <CountriesHero/>
      {/* <HeroSection /> */}
      <DestinationsSection />
      <AboutSection/>
      <AboutStorySection/>
      <ProgramsSection/>
      <ProcessSection/> 
      <TestimonialsSection/>
      <FAQSection/>
      <CTABanner/>
      <Footer/>
    </main>
  );
}