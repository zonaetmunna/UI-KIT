"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import React, { useState } from "react"

interface ComponentCardProps {
  title: string
  description: string
  href: string
  icon: React.ComponentType<any>
}

export const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  description,
  href,
  icon: Icon,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <Icon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <div className="mt-6 flex items-center text-blue-600 dark:text-blue-500">
        <span className="text-sm font-medium">Learn more</span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1 h-4 w-4"
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </motion.svg>
      </div>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-10 bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-10",
          "from-blue-600 to-purple-600"
        )}
      />
    </Link>
  )
}
