"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ny } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "features", label: "FEATURES" },
  { id: "contact", label: "CONTACT" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate menu button position for morph effect
  const getButtonPosition = () => {
    if (!menuButtonRef.current) return { top: 36, right: 36 };

    const rect = menuButtonRef.current.getBoundingClientRect();
    return {
      top: rect.top + rect.height / 2,
      right: window.innerWidth - rect.right - rect.width / 2,
    };
  };

  return (
    <motion.header
      className={ny(
        "sticky top-0 z-50 backdrop-blur-sm transition-shadow",
        "bg-background/80 dark:bg-background/90",
        scrolled ? "shadow-lg" : "shadow-none"
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo placeholder */}
          <div className="w-10 h-10 rounded-full" />

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {NAV_ITEMS.map((item) => (
                <motion.li
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    variant="ghost"
                    className={ny(
                      "px-5 py-2 rounded-full text-sm font-light transition-all",
                      "border border-border hover:border-primary/50"
                    )}
                  >
                    <Link
                      href={`#${item.id}`}
                      onClick={(e) => handleScroll(e, item.id)}
                    >
                      {item.label}
                    </Link>
                  </Button>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            ref={menuButtonRef}
            className="md:hidden p-2 rounded-lg focus:outline-none relative z-[60]"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <motion.span
                className={ny(
                  "absolute block h-0.5 w-full rounded",
                  "bg-foreground dark:bg-foreground"
                )}
                animate={{
                  y: isOpen ? 6 : 0,
                  rotate: isOpen ? 45 : 0,
                }}
              />
              <motion.span
                className={ny(
                  "absolute block h-0.5 w-full rounded mt-2",
                  "bg-foreground dark:bg-foreground"
                )}
                animate={{ opacity: isOpen ? 0 : 1 }}
              />
              <motion.span
                className={ny(
                  "absolute block h-0.5 w-full rounded mt-4",
                  "bg-foreground dark:bg-foreground"
                )}
                animate={{
                  y: isOpen ? -6 : 0,
                  rotate: isOpen ? -45 : 0,
                }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden fixed inset-0 z-50"
              initial={{
                clipPath: `circle(0px at ${getButtonPosition().right}px ${
                  getButtonPosition().top
                }px)`,
              }}
              animate={{
                clipPath: `circle(150% at ${getButtonPosition().right}px ${
                  getButtonPosition().top
                }px)`,
              }}
              exit={{
                clipPath: `circle(0px at ${getButtonPosition().right}px ${
                  getButtonPosition().top
                }px)`,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <motion.ul
                className="flex flex-col items-center space-y-8 p-8 relative z-[55] isolate"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 },
                  },
                }}
              >
                <div
                  className={ny(
                    "absolute inset-0 pt-20 top-0 right-0 h-full w-full",
                    "bg-background/95 backdrop-blur-lg dark:bg-background/95 -z-10"
                  )}
                />
                {NAV_ITEMS.map((item) => (
                  <motion.li
                    key={item.id}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 },
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      variant="ghost"
                      className={ny(
                        "px-8 py-3 rounded-full text-lg font-light",
                        "border border-border hover:border-primary/50 w-full"
                      )}
                    >
                      <Link
                        href={`#${item.id}`}
                        onClick={(e) => handleScroll(e, item.id)}
                      >
                        {item.label}
                      </Link>
                    </Button>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
