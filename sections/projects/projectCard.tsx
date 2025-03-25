"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ny } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";

const ProjectCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative p-4 z-10 w-full h-[500px] sm:max-w-96 rounded-lg border border-b-0
                 bg-stone-100 focus:rounded-full focus:outline-none focus:ring-[1.5px] focus:ring-transparent focus:ring-offset-blue-500
                  focus-visible:ring-offset-2 focus-visible:ring-offset-blue-500 dark:border-x-0 dark:border-b-0 dark:border-t-[1px]
                   dark:border-neutral-500/40 dark:bg-neutral-900 dark:bg-none dark:focus:ring-offset-blue-500
                    dark:focus-visible:ring-offset-blue-500"
    >
      <motion.div
        className="w-full rounded-lg overflow-hidden h-1/2 relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src="/project.png"
          alt="Project image"
          fill
          className="object-cover w-full h-full absolute"
        />
      </motion.div>

      <div className="flex flex-col gap-3 pt-6">
        <span className="text-xs font-medium uppercase tracking-wider text-amber-500">
          web dev
        </span>

        <AuroraText className="text-2xl font-bold">
          E-commerce
        </AuroraText>

        <p className="text-zinc-300 line-clamp-3">
          Sint ullamco duis esse adipisicing occaecat reprehenderit cupidatat
          aliquip consequat. Sit exercitation pariatur commodo aliquip velit ex
          reprehenderit magna deserunt nisi dolor nostrud. Incididunt elit
          aliquip excepteur labore laborum voluptate. Culpa ipsum deserunt sit
          amet pariatur eiusmod eu cupidatat laborum fugiat aliquip est. Nulla
          ut nisi aute ipsum aute in eiusmod velit ut. Proident amet duis
          proident ad est. Eiusmod Lorem proident aute dolore cupidatat veniam
          incididunt qui mollit aliqua irure cupidatat laborum.
        </p>

        <div className="mt-4 flex items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group flex items-center gap-x-3 py-2 px-4 rounded-lg border
                     bg-stone-100 focus:rounded-full focus:outline-none focus:ring-[1.5px] focus:ring-transparent focus:ring-offset-blue-500
                      focus-visible:ring-offset-2 focus-visible:ring-offset-blue-500 dark:border-x-0 dark:border-b-0 dark:border-t-[1px]
                       dark:border-neutral-500/40 dark:bg-neutral-900 dark:bg-none dark:focus:ring-offset-blue-500
                        dark:focus-visible:ring-offset-blue-500"
          >
            View Project
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.button>
        </div>
      </div>

      <motion.div
        animate={{ width: isHovered ? "128px" : "64px" }}
        transition={{ type: "spring", stiffness: 300 }}
        className={ny("absolute top-0 left-0 h-1 rounded-br-md bg-[#f0c75e]")}
      />
    </motion.div>
  );
};

export default ProjectCard;
