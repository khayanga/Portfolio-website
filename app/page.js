import About from "@/components/About";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Experience from "@/components/Experiences";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero/>
      <About/>
      
      <CaseStudy/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
  );
}
