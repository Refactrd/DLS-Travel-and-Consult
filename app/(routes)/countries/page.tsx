import Footer from "@/app/components/layout/Footer";
import Navbar from "@/app/components/layout/Navbar";
import CountriesGrid from "@/app/components/sections/countries/CountriesGrid";
import CountriesHero from "@/app/components/sections/countries/CountriesHero";
import CTABanner from "@/app/components/sections/home/CTABanner";
import HeroSection from "@/app/components/sections/home/HeroSection";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Countries",
  description:
    "Explore every European destination DLS has successfully placed clients in — Germany, France, Spain, UK, Netherlands, and more.",
};

export default function CountriesPage() {
  return (
    <main>
      <Navbar />
      <HeroSection/>
      {/* <CountriesHero /> */}
      <CountriesGrid />
      <CTABanner />
      <Footer />
    </main>
  );
}