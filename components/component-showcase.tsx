"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ComponentShowcase() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative h-full w-full">
      {/* User avatars */}
      <div className="absolute -top-8 left-1/2 flex -translate-x-1/2 transform space-x-1">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-10 w-10 overflow-hidden rounded-full border-2 border-white dark:border-gray-800">
            <Image
              src={`/placeholder.svg?height=40&width=40`}
              alt="User avatar"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="grid gap-4">
        {/* First Card */}
        <motion.div
          className="overflow-hidden rounded-xl bg-[#0F172A] p-6 text-white shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="mb-4 text-lg font-medium">Beautify your website within minutes</h3>
          <p className="text-sm text-gray-300">
            With Aceternity UI, you can build great looking websites within minutes.
          </p>

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
          className="overflow-hidden rounded-xl bg-[#0F172A] p-6 text-white shadow-lg"
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
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Build <span className="font-bold">better</span>
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">websites with Aceternity UI</p>
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
        <div className="rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=300"
            alt="Website preview"
            width={300}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {/* Copy Paste section */}
      <motion.div
        className="absolute right-0 bottom-0 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-64 dark:bg-gray-800">
          <h3 className="font-bold text-xl mb-1 dark:text-white">Copy Paste,</h3>
          <h3 className="font-bold text-xl mb-2 dark:text-white">Customize, Deploy.</h3>
          <p className="text-sm text-gray-600 mb-2 dark:text-gray-400">Copy paste and be done with it.</p>
        </div>
      </motion.div>
    </div>
  )
}
