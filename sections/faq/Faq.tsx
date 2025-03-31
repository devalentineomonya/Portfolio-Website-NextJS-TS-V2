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
    question: "What services do you offer as a designer?",
    answer:
      "I specialize in a wide range of design services, including branding, web design, UI/UX design, and visual identity creation. My goal is to deliver designs that not only look great but also function seamlessly, enhancing the user experience and conveying your brand message clearly.",
  },
  {
    question: "What is your design process like?",
    answer:
      "My design process typically involves five key stages: discovery (understanding your needs and goals), research (analyzing your industry, competitors, and target audience), conceptualization (developing initial design concepts), refinement (iterating based on feedback), and finalization (delivering the completed design assets with documentation).",
  },
  {
    question: "How long does a typical design project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A basic logo design might take 1-2 weeks, while a comprehensive website design could take 4-8 weeks. During our initial consultation, I'll provide a more accurate timeline based on your specific project requirements.",
  },
  {
    question: "Can I be involved in the design process?",
    answer:
      "I believe in collaborative design. Your input is valuable throughout the process, and I schedule regular check-ins to gather feedback and ensure the design aligns with your vision. My goal is to create a partnership that leads to the best possible outcome.",
  },
  {
    question: "Do you offer revisions or post-project support?",
    answer:
      "Yes, all projects include a set number of revision rounds to ensure your complete satisfaction. After project completion, I offer 30 days of support to address any questions or minor adjustments. For ongoing support, I also offer maintenance packages tailored to your needs.",
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
      <div className=" px-4 md:px-0 mx-auto max-w-6xl">
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
