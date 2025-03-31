import Image from "next/image";
import { Mail, Linkedin, Instagram, Globe } from "lucide-react";
import { motion } from "framer-motion";

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "tween", duration: 0.3 }}
    className="p-4 group z-10 flex flex-col select-none items-start justify-start rounded-md border border-b-0 bg-stone-100 cursor-pointer dark:border-x-0 dark:border-b-0 dark:border-t-[1px] dark:border-neutral-500/40 dark:bg-neutral-900"
  >
    <h3 className="text-amber-500 text-2xl font-medium">{value}</h3>
    <p className="text-zinc-400 text-sm">{label}</p>
  </motion.div>
);

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <motion.a
    whileHover={{ scale: 1.15, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 300 }}
    href={href}
    className="z-10 flex h-12 w-12 items-center justify-center rounded-full border border-b-0 bg-stone-100 dark:border-neutral-500/40 dark:bg-neutral-900 cursor-pointer"
  >
    {icon}
  </motion.a>
);

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.6,
      },
    },
  };

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
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true}}
      id="about"
      className="flex justify-end items-center flex-col px-4 my-24"
    >
      <div className="max-w-7xl w-full">
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-[1fr_1.5fr] gap-8"
        >
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-black to-zinc-900 shadow-xl  "
          >
            <Image
              src="/about.png"
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex flex-col justify-between"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-amber-500 text-3xl font-medium flex items-center gap-3"
              >
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-8 h-1 bg-amber-500 origin-left"
                />
                About me
              </motion.h2>

              <motion.div
                className="text-zinc-300 text-lg space-y-"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.05 },
                  },
                }}
              >
                {[
                  "I build ",
                  "scalable and interactive applications ",
                  "using ",
                  "React, Next.js, Vite, and Tailwind CSS ",
                  "for the frontend, with ",
                  "Node.js, MongoDB, and SQL ",
                  "on the backend. I focus on ",
                  "high-performance architectures, ",
                  "smooth animations with Framer Motion, ",
                  "and ",
                  "efficient API design. ",
                  "Passionate about ",
                  "problem-solving, clean code, and scalability, ",
                  "I continuously refine my skills in ",
                  "data structures, algorithms, and database management ",
                  "to create ",
                  "fast, reliable, and well-optimized systems.",
                ].map((text, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className={`inline-block ${
                      index % 2 === 1 ? "text-white font-medium mx-1" : ""
                    }`}
                  >
                    {text}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4 my-8"
            >
              {[
                ["20+", "Projects Completed"],
                ["99%", "Client Satisfaction"],
                ["30%", "Conversion Rate Boost"],
                ["3+", "Years of Experience"],
              ].map(([value, label], index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <StatCard value={value} label={label} />
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h3 className="text-zinc-200 text-xl font-medium">
                Connect with me
              </motion.h3>
              <motion.div
                variants={containerVariants}
                className="flex gap-4 flex-wrap"
              >
                {[
                  <Mail key="mail" className="w-6 h-6 text-zinc-300" />,
                  <Linkedin key="linkedin" className="w-6 h-6 text-zinc-300" />,
                  <Instagram
                    key="instagram"
                    className="w-6 h-6 text-zinc-300"
                  />,
                  <Globe key="website" className="w-6 h-6 text-zinc-300" />,
                ].map((icon, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SocialLink href="#" icon={icon} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
