import Footer from "@/app/components/layout/Footer";
import Navbar from "@/app/components/layout/Navbar";
import CountryDetail from "@/app/components/sections/countries/CountryDetail";
import CTABanner from "@/app/components/sections/home/CTABanner";
import { countriesData, getCountryBySlug } from "@/app/lib/countriesData";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return countriesData.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return { title: "Country Not Found" };
  return {
    title: `${country.name} — Study, Work & Live in ${country.name} | DLS`,
    description: country.heroTagline,
  };
}

export default async function CountryPage({ params }: Props) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) notFound();

  return (
    <main>
      <Navbar />
      <CountryDetail country={country} />
      <CTABanner />
      <Footer />
    </main>
  );
}