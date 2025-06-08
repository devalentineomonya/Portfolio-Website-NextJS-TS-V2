"use client"

import type React from "react"
import { motion } from "framer-motion"
import { AuroraText } from "@/components/ui/aurora-text"

interface ServiceCardProps {
  number: string
  title: string
  description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description }) => {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <AuroraText className="text-5xl mb-4">{number}</AuroraText>
      <h3 className="font-medium mb-2 text-xl text-amber-400 dark:text-amber-200" >{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Web & Mobile app",
      description: "Visually appealing, modern & clean engaging",
    },
    {
      number: "02",
      title: "UI / UX",
      description: "Seamless experiences to drive growth and engagement",
    },
    {
      number: "03",
      title: "Brand Identity",
      description: "Build innovative digital products & impactful brands",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <motion.div
        className="w-full md:w-2/3 mb-8 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-4xl text-amber-500">Crafting Digital Excellence</h2>
        <p className="mt-6 leading-relaxed md:max-w-md text-muted-foreground">
          I Build Innovative Digital Products, Impactful Brands, And Seamless Experiences That Drive Growth And
          Engagement. From Concept To Launch, We Turn Ideas Into Reality.
        </p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-end"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Services
