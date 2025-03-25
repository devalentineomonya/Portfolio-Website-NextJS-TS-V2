import { motion } from "framer-motion";
import Image from "next/image";

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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

const FeatureCard = ({
  image,
  title,
  description,
  delay,
}: {
  image: string;
  title: string;
  description: string;
  delay: number;
}) => {
  return (
    <motion.div
      className="w-full dark:bg-neutral-900 rounded-xl p-4 shadow-lg backdrop-blur-sm border border-slate-700/50 hover:border-amber-500 transition-colors"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0px 10px 30px rgba(245, 215, 123, 0.1)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        delay: delay,
      }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      <motion.div
        className="mb-4 overflow-hidden rounded-md"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src={image}
          alt={title}
          className="w-full h-auto rounded-md"
          width={300}
          height={300}
        />
      </motion.div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      image: "/feature-1.png",
      title: "AI-Powered Design Assistance",
      description:
        "Get personalized design recommendations with AI-powered tools that helping you create a polished, professional website effortlessly.",
    },
    {
      image: "/feature-2.png",
      title: "Customizable Templates",
      description:
        "Choose from a wide range of professionally designed templates. Easily customize fonts, colors, and layouts to reflect your brand's.",
    },
    {
      image: "/feature-3.png",
      title: "SEO Tools Built-In",
      description: "Boost your website's visibility with integrated SEO tools.",
    },
    {
      image: "/feature-3.png",
      title: "Seamless Integrations",
      description:
        "easily connect with your favorite apps and services for a website experience.",
    },
    {
      image: "/feature-4.png",
      title: "Responsive Design",
      description: "Create websites that look stunning on any device.",
    },
    {
      image: "/feature-2.png",
      title: "Responsive Design",
      description: "Create websites that look stunning on any device.",
    },
    {
      image: "/feature-1.png",
      title: "Responsive Design",
      description: "Create websites that look stunning on any device.",
    },
    {
      image: "/feature-4.png",
      title: "Responsive Design",
      description: "Create websites that look stunning on any device.",
    },
  ];

  return (
    <div
      id="features"
      className="min-h-screen max-w-7xl mx-auto flex flex-col md:justify-center items-center px-4 pt-12 md:pt-0"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-5"
      >
        <motion.p
          variants={titleVariants}
          transition={{ type: "spring", stiffness: 50 }}
          className="uppercase tracking-[0.25em] text-[#f5d77b] font-medium text-xl mb-6"
        >
          Features
        </motion.p>

        <motion.h2
          variants={containerVariants}
          className="text-center text-white text-4xl font-light leading-tight mb-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
        >
          <motion.span variants={titleVariants} className="inline-block">
            Discover
          </motion.span>
          <motion.span
            variants={titleVariants}
            className="text-[#b88a17] inline-block"
          >
            Powerful
          </motion.span>
          <motion.span variants={titleVariants} className="inline-block">
            Features
          </motion.span>
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {features.slice(0, 3).map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            title={feature.title}
            description={feature.description}
            delay={index * 0.1}
          />
        ))}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8"
      >
        {features.slice(3, features.length - 1).map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            title={feature.title}
            description={feature.description}
            delay={index * 0.1}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Features;
