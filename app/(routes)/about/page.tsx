import Footer from "@/app/components/layout/Footer";
import Navbar from "@/app/components/layout/Navbar";
import AboutHero from "@/app/components/sections/about/AboutHero";
import MissionVision from "@/app/components/sections/about/MissionVision";
// import WhoWeAre from "@/app/components/sections/about/WhoWeAre";
import WhyDLS from "@/app/components/sections/about/WhyDLS";
import AboutStorySection from "@/app/components/sections/home/AboutStorySection";
import CTABanner from "@/app/components/sections/home/CTABanner";
import ProcessSection from "@/app/components/sections/home/ProcessSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how DLS Travel and Consult was built to bridge continents — helping ambitious Nigerians navigate European visa processes with confidence and clarity.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <AboutStorySection />
      {/* <WhoWeAre/> */}
      <MissionVision/>
      <WhyDLS/>
      <ProcessSection/>
      <CTABanner />
      <Footer />
    </main>
  );
}
