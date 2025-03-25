"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "features", label: "FEATURES" },
];

const Navbar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-dark/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex justify-end">
          <ul className="flex space-x-4">
            {NAV_ITEMS.map((item) => (
              <motion.li key={item.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={`#${item.id}`}
                  onClick={(e) => handleScroll(e, item.id)}
                  className="px-5 py-2 border rounded-full text-sm font-light transition-all border-gray-700 hover:border-[#ff2975]/50"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
