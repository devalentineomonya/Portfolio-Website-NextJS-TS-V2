"use client";

import React, { useState } from "react";
import Hero from "@/sections/hero/hero";
import Projects from "@/sections/projects/projects";
import About from "@/sections/about/About";
import FeatureSection from "@/sections/features/features";
import LoadingScreen from "@/components/common/loading-screen";
import Navbar from "@/components/common/navbar";
import FAQ from "@/sections/faq/Faq";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="bg-dark relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <FeatureSection />
      <FAQ/>
    </div>
  );
};

export default Home;
