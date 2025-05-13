"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function ShowcasePage() {
  const showcaseItems = [
    {
      id: 1,
      title: "Modern Landing Page",
      description: "A sleek landing page for a SaaS product",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description: "A comprehensive dashboard for managing an online store",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A creative portfolio for a designer",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A modern blog with a clean design",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
    },
    {
      id: 5,
      title: "Mobile App Landing",
      description: "A landing page for a mobile application",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
    },
    {
      id: 6,
      title: "Marketing Website",
      description: "A marketing website for a product launch",
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
    },
  ]

  return (
    <div className="mx-auto px-4 py-12 md:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Showcase</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          See what others have built with Aceternity UI. Get inspired and create your own amazing websites.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {showcaseItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="overflow-hidden dark:bg-gray-900 dark:border-gray-800">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{item.description}</p>
                <a
                  href={item.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View Website <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Have you built something with Aceternity UI? We'd love to feature it in our showcase.
        </p>
        <Button className="bg-[#0F172A] hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
          Submit Your Project <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
