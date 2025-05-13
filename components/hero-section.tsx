"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm dark:bg-gray-900 dark:border-gray-800">
            <span className="mr-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold dark:bg-gray-800">
              NEW
            </span>
            <span className="text-gray-600 dark:text-gray-400">Introducing Schedule Template</span>
            <ArrowRight className="ml-2 h-3 w-3 text-gray-400" />
          </div>

          <motion.h1
            className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Make your <br />
            websites look <br />
            <span className="relative">
              <span className="relative z-10">10x better</span>
              <span className="absolute -inset-1 z-0 rounded-lg bg-gray-100 dark:bg-gray-800"></span>
            </span>
          </motion.h1>

          <motion.p
            className="max-w-md text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Copy paste the most trending components and use them in your websites without having to worry about styling
            and animations.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/components">
              <Button className="rounded-md bg-gray-900 px-6 py-2 font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
                Browse Components
              </Button>
            </Link>
            <Link href="/custom">
              <Button
                variant="outline"
                className="rounded-md px-6 py-2 font-medium dark:border-gray-700 dark:text-gray-300"
              >
                Custom Components
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="relative">
          <HeroShowcase />
        </div>
      </div>
    </section>
  )
}

function HeroShowcase() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative h-full w-full">
      <div className="absolute -top-8 left-1/2 flex -translate-x-1/2 transform space-x-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-10 w-10 overflow-hidden rounded-full border-2 border-white dark:border-gray-800">
            <img src={`/placeholder.svg?height=40&width=40`} alt="User avatar" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      <div className="grid gap-4">
        {/* First Card */}
        <motion.div
          className="overflow-hidden rounded-xl bg-gray-900 p-6 text-white shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="mb-4 text-lg font-medium">Beautify your website within minutes</h3>
          <p className="text-sm text-gray-300">With YourUI, you can build great looking websites within minutes.</p>

          <div className="mt-8 flex items-center justify-center">
            <motion.div
              className="relative cursor-pointer text-4xl font-bold text-gray-700"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <span className="relative z-10">Hover it</span>
              <motion.div
                className="absolute inset-0 -z-10 bg-gray-800"
                animate={{
                  opacity: isHovered ? 0.3 : 0,
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Second Card */}
        <motion.div
          className="overflow-hidden rounded-xl bg-gray-900 p-6 text-white shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex h-32 items-center justify-center">
            <motion.div
              className="cursor-pointer text-lg font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="mr-2">{">"}</span>
              Hover over me
            </motion.div>
          </div>
        </motion.div>

        {/* Third Card */}
        <motion.div
          className="overflow-hidden rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Build better</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">websites with YourUI</p>
          </div>
        </motion.div>
      </div>

      {/* Right side image */}
      <motion.div
        className="absolute -right-20 top-1/4 hidden md:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <img src="/placeholder.svg?height=400&width=300" alt="Website preview" className="rounded-lg shadow-lg" />
      </motion.div>
    </div>
  )
}
