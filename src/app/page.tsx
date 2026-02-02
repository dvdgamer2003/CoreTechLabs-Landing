import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import Services from "@/components/Features"; // Kept file name as Features.tsx but it exports Services
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col bg-black min-h-screen">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Services />
      <Process />
      <CaseStudies />
      <Benefits />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
