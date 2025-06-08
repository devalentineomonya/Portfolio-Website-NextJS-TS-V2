"use client";
import Link from "next/link";
import { motion } from "framer-motion";

type SocialLinksProps = { orientation?: "vertical" | "horizontal" };

const SocialLinks = ({ orientation = "vertical" }: SocialLinksProps) => {
  const socialLinks = [
    { label: "GitHub", href: "https://github.com/devalentineomonya" },
    { label: "LinkedIn", href: "https://linkedin.com/in/devalentineomonya" },
    { label: "Instagram", href: "https://instagram.com/devalentineomonya" },
    { label: "X-(Twitter)", href: "https://x.com/devalentine_" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: orientation === "vertical" ? 0.8 : 0.7,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const linkHoverVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  const lineVariants = {
    rest: {
      backgroundColor: "#9CA3AF",
      scaleX: 1,
      scaleY: 1,
    },
    hover: {
      backgroundColor: "#ff2975",
      scaleX: orientation === "vertical" ? 1.2 : 1,
      scaleY: orientation === "horizontal" ? 1.5 : 1,
      transition: { duration: 0.3 },
    },
  };

  const textVariants = {
    hover: {
      backgroundPosition: orientation === "vertical" ? "0% 100%" : "100% 0%",
      transition: { duration: 1.5, repeat: Infinity },
    },
  };

  return (
    <motion.div
      className={`text-lg text-gray-300 ${
        orientation === "vertical"
          ? "flex flex-col space-y-4"
          : "flex flex-row space-x-6 md:space-x-4"
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((link, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover="hover"
          initial="rest"
        >
          <Link
            href={link.href}
            target="_blank"
            className={`hover:text-white transition-colors flex items-center ${
              orientation === "vertical"
                ? "justify-end gap-x-2"
                : "justify-center"
            }`}
          >
            <motion.div
              className="flex items-center"
              variants={linkHoverVariants}
            >
              {orientation === "vertical" && (
                <motion.span
                  className="bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#fff] bg-clip-text text-transparent bg-[length:200%_200%] mr-2"
                  variants={textVariants}
                >
                  {link.label}
                </motion.span>
              )}

              <motion.span
                className={`inline-block ${
                  orientation === "vertical"
                    ? "w-10 h-[1px]"
                    : "w-[1px] h-4 mx-2"
                }`}
                variants={lineVariants}
              />

              {orientation === "horizontal" && (
                <motion.span
                  className="bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#fff] bg-clip-text text-transparent bg-[length:200%_200%]"
                  variants={textVariants}
                >
                  {link.label}
                </motion.span>
              )}
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
