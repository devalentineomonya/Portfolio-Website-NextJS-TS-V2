"use client";
import React from "react";
import ProjectCard from "./projectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      id="projects"
      viewport={{ once: false, amount: 0.2 }}
      className="flex md:justify-center items-center flex-col px-4 scroll-mt-20"
    >
      <motion.p
        variants={titleVariants}
        transition={{ type: "spring", stiffness: 50 }}
        className="uppercase tracking-[0.25em] text-[#f5d77b] font-medium text-xl mb-6 text-center"
      >
        PROJECTS
      </motion.p>

      <motion.h1
        variants={containerVariants}
        className="text-center text-white text-3xl font-light leading-tight mb-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1"
      >
        <motion.span variants={titleVariants} className="inline-block">
          Discover
        </motion.span>
        <motion.span variants={titleVariants} className="inline-block">
          Amazing
        </motion.span>
        <motion.span
          variants={titleVariants}
          className="text-[#b88a17] inline-block"
        >
          Design Projects
        </motion.span>
      </motion.h1>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full justify-center max-w-[1200px] gap-6"
      >
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            variants={itemVariants}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-full"
          >
            <ProjectCard />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
