"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function HoverCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-gray-900 p-8 text-white shadow-lg">
      <motion.div
        className="flex h-full flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="cursor-pointer text-center"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div
            className="mb-4 text-5xl font-bold"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {">"}
          </motion.div>
          <motion.p
            className="text-xl font-medium"
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Hover over me
          </motion.p>

          {isHovered && (
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                <span>Interactive components</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}
