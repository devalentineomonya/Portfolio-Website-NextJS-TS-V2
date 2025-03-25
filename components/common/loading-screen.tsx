"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SparklesText } from "../ui/sparkles-text";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({
  onLoadingComplete,
}: LoadingScreenProps) {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const languages = [
    { text: "D3f4alt_", lang: "English" },
    { text: "こんにちは", lang: "Japanese" },
    { text: "你好", lang: "Chinese" },
    { text: "Bonjour", lang: "French" },
    { text: "Hola", lang: "Spanish" },
  ];

  useEffect(() => {
    if (currentLanguageIndex < languages.length) {
      const timer = setTimeout(() => {
        setCurrentLanguageIndex(currentLanguageIndex + 1);
      }, 1000); // Each language shows for 1 second

      return () => clearTimeout(timer);
    } else {
      // All languages have been shown
      const timer = setTimeout(() => {
        setIsComplete(true);
        setTimeout(onLoadingComplete, 500); // Fade out animation time
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [currentLanguageIndex, languages.length, onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {languages.map(
              (item, index) =>
                currentLanguageIndex === index && (
                  <motion.div
                    key={item.lang}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.5,
                    }}
                  >
                    <SparklesText
                      colors={{ first: "#ffb900", second: "#ff2975" }}
                      className="text-3xl md:text-6xl leading-none"
                      text={item.text}
                    />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
