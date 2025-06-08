"use client";

import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}


const faqs: FAQItem[] = [
  {
    question: "What services do you offer as a developer?",
    answer:
      "I specialize in building modern, scalable web applications and APIs. My services include full-stack development, backend architecture, API integration, performance optimization, and deploying secure, maintainable applications using technologies like Go, TypeScript, and modern frameworks such as Next.js and NestJS.",
  },
  {
    question: "What is your development process like?",
    answer:
      "My development workflow typically follows a structured process: discovery (understanding your business goals), planning (defining architecture and choosing the right tech stack), implementation (coding and integrating features), testing (ensuring performance and security), and deployment (launching and maintaining the application).",
  },
  {
    question: "How long does a typical development project take?",
    answer:
      "Timelines vary based on complexity and features. A simple MVP might take 2–14 weeks, while a more complex platform could require 6–12 weeks. I provide a tailored timeline after understanding your requirements during the initial consultation.",
  },
  {
    question: "Can I be involved in the development process?",
    answer:
      "Absolutely. I prioritize clear communication and collaboration throughout the project. You’ll receive regular updates, demos, and opportunities to provide feedback to ensure the final product aligns with your vision and goals.",
  },
  {
    question: "Do you offer revisions or post-launch support?",
    answer:
      "Yes. Every project includes revision rounds to refine functionality and UX based on your input. Post-launch, I provide 30 days of free support for bug fixes and minor tweaks. For long-term needs, I offer maintenance and feature update packages.",
  },
];

export default function FAQ() {
  const headerRef = useRef(null);
  const accordionRef = useRef(null);

  const headerInView = useInView(headerRef, { once: false, amount: 0.3 });
  const accordionInView = useInView(accordionRef, { once: false, amount: 0.1 });

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.5,
      },
    },
    hover: {
      scale: 1.02,
      rotateZ: 2,
      boxShadow: "0px 20px 40px rgba(245, 215, 123, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <div className="w-full py-16 md:py-24 ">
      <div className=" px-4 md:px-0 mx-auto max-w-7xl">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-amber-500 text-sm font-medium tracking-wider uppercase mb-2">
            GOT A QUESTION?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-amber-500">
            Here&apos;s some of FAQs
          </h2>
        </motion.div>

        <motion.div
          ref={accordionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={
            accordionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-[1.5fr_1fr] gap-8"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-amber-500/20 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-amber-500/5 group">
                  <span className="text-left font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AnimatePresence>
                  <AccordionContent className="px-6 pb-4">
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-200">{faq.answer}</p>
                    </motion.div>
                  </AccordionContent>
                </AnimatePresence>
              </AccordionItem>
            ))}
          </Accordion>
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-black to-zinc-900 shadow-xl  "
          >
            <Image
              src="/faq.png"
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
