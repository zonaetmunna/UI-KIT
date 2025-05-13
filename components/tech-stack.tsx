"use client"

import { motion } from "framer-motion"

export default function TechStack() {
  const technologies = [
    { name: "Next.js", logo: "N" },
    { name: "React", logo: "⚛️" },
    { name: "TailwindCSS", logo: "T" },
    { name: "Framer Motion", logo: "F" },
    { name: "Remix", logo: "R" },
  ]

  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-8 md:justify-between"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-medium dark:bg-gray-800">
            {tech.logo}
          </div>
          <span className="text-sm font-medium">{tech.name}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
