"use client";
import About from "@/components/About";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Experience from "@/components/Experiences";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";


import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
   const AnimatedSection = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const variants = {
      hidden: { scale: 0.8, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={variants}
        className="w-full"
      >
        {children}
      </motion.div>
    );
  };
  return (
    <main className="min-h-screen bg-background">
      <AnimatedSection>
        <Hero/>
      </AnimatedSection>
      <AnimatedSection>
        <About/>
      </AnimatedSection>
      <AnimatedSection>
        <CaseStudy/>
      </AnimatedSection>
      <AnimatedSection>
        <Projects/>
      </AnimatedSection>
      <AnimatedSection>
        <Experience/>
      </AnimatedSection>
      <AnimatedSection>
        <Contact/>
      </AnimatedSection>
      <AnimatedSection>
        <Footer/>
      </AnimatedSection>
    </main>
  );
}
