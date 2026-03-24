import Footer from "@/app/components/layout/Footer";
import Navbar from "@/app/components/layout/Navbar";
import CTABanner from "@/app/components/sections/home/CTABanner";
import LanguageTraining from "@/app/components/sections/programs/LangiaageTraining";
import ProgramsDetail from "@/app/components/sections/programs/ProgramsDetails";
import ProgramsHero from "@/app/components/sections/programs/ProgramsHero";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Programs",
  description:
    "From study abroad to vocational training, voluntary service, and family reunification — DLS covers every legitimate route to Europe.",
};

export default function ProgramsPage() {
  return (
    <main>
      <Navbar />
      <ProgramsHero />
      <ProgramsDetail />
      <LanguageTraining />
      <CTABanner />
      <Footer />
    </main>
  );
}