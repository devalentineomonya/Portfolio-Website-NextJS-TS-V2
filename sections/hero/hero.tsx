"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import SocialLinks from "@/sections/hero/SocialLinks";
import Image from "next/image";
import Services from "@/sections/hero/services";
import { BorderBeam } from "@/components/ui/beam-border";
import { SparklesText } from "@/components/ui/sparkles-text";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 50 },
    },
  };

  return (
    <motion.div
      className="min-h-[calc(100vh-7rem)] flex flex-col px-4 scroll-mt-20 my-6"
      initial="hidden"
      id="hero"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Text Content */}
        <motion.div
          className="md:w-1/3 justify-center flex flex-col gap-y-8"
          variants={containerVariants}
        >
          <motion.div className="flex flex-col space-y-4">
            <motion.div
              variants={itemVariants}
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <SparklesText
                colors={{ first: "#ffb900", second: "#ff2975" }}
                className="text-6xl md:text-8xl leading-none"
                text="I'm Valentine"
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size={"lg"}
                className="px-8 py-4 rounded-full w-40 font-light transition-transform duration-200 group"
              >
                <Link href="#contact">
                  Let&apos;s Talk
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                variant="outline"
                size={"lg"}
                className="relative overflow-hidden rounded-full border-2 px-8 py-4 w-52 group border-none shadow-md"
              >
                <Link
                  href="https://v1.devalentine.me/resume.pdf"
                  target="_blank"
                  className="flex items-center gap-x-2"
                >
                  <span className="relative z-10">Download Resume</span>
                  <BorderBeam
                    colorFrom="#ff2975"
                    colorTo="#ffb900"
                    duration={10}
                    borderWidth={2}
                    size={100}
                  />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-2/3 relative flex"
          variants={containerVariants}
        >
          <motion.div
            variants={imageVariants}
            className="w-full h-[400px] md:h-auto relative md:mr-36 lg:mr-64"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/hero.png"
              alt="Valentine Omonya"
              fill
              className="object-contain md:object-cover object-center shrink-0"
              priority
            />
          </motion.div>

          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 pr-4">
            <SocialLinks orientation="vertical" />
          </div>
        </motion.div>
      </div>

      {/* Mobile Social Links */}
      <motion.div
        className="md:hidden py-8 flex justify-center"
        variants={itemVariants}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <SocialLinks orientation="horizontal" />
      </motion.div>

      {/* Services Section */}
      <motion.div
        variants={itemVariants}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Services />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
