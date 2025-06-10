"use client";

import React, { useState } from "react";
import Hero from "@/sections/hero/hero";
import Projects from "@/sections/projects/projects";
import About from "@/sections/about/About";
import FeatureSection from "@/sections/features/features";
import LoadingScreen from "@/components/common/loading-screen";
import Navbar from "@/components/common/navbar";
import FAQ from "@/sections/faq/Faq";
import ContactForm from "@/sections/contact/contact";
import Footer from "@/components/common/footer";
import { Ripple } from "@/components/magicui/ripple";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto relative">
        <Hero />
        <About />
        <Projects />
        <FeatureSection />
        <FAQ />
        <ContactForm />
        <Footer />
      </div>

      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
          Ripple
        </p>
        <Ripple />
      </div>
    </>
  );
};

export default Home;
