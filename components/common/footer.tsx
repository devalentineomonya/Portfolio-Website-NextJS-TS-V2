import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="w-full pt-12 text-black shadow border-t"
    >
      <div className="container mx-auto px-4 pt-12 md:pt-24 max-w-6xl">
        <motion.div
          className="flex flex-col md:flex-row justify-between mb-20"
          variants={containerVariants}
        >
          <motion.div
            className="max-w-xl mb-10 md:mb-0"
            variants={itemVariants}
          >
            <motion.p
              className="text-lg font-normal mb-6 text-gray-800 dark:text-gray-300"
              variants={itemVariants}
            >
              The experience and knowledge allow to create most advanced designs
              — from implementation to final appearance.
            </motion.p>
            <motion.p
              className="text-sm text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              Commitment to quality means you unique and valuable — clear and
              concise solutions that summarizes what makes you professional.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row gap-3 items-start md:items-center"
            variants={itemVariants}
          >
            <Link href="#" passHref legacyBehavior>
              <motion.a
                className="px-4 py-2 border border-gray-300 rounded-full text-xs uppercase tracking-wider dark:text-gray-300"
                {...hoverScale}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Related Projects
              </motion.a>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <motion.a
                className="px-4 py-2 border border-gray-300 rounded-full text-xs uppercase tracking-wider dark:text-gray-300"
                {...hoverScale}
                transition={{ type: "spring", stiffness: 300 }}
              >
                About Studio
              </motion.a>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className=" border-t border-gray-400 pt-4 text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="flex justify-between gap-8 w-full">
            <motion.span className="text-sm" whileHover={{ scale: 1.05 }}>
              Social Media
            </motion.span>
            <div className="flex items-center gap-x-2">
              <Link href="#" passHref legacyBehavior>
                <motion.a className="text-sm" {...hoverScale}>
                  Instagram
                </motion.a>
              </Link>
              <Link href="#" passHref legacyBehavior>
                <motion.a className="text-sm" {...hoverScale}>
                  LinkedIn
                </motion.a>
              </Link>
            </div>
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm">© 2024</span>
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </motion.div>
          </div>

        </motion.div>
      </div>
    </motion.footer>
  );
}
