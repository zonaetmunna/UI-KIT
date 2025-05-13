"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

// Define the component data structure
interface Component {
  id: string
  title: string
  description: string
  image: string
  link: string
}

// Complete list of components matching Aceternity UI
const components: Component[] = [
  {
    id: "fey-macbook-scroll",
    title: "Fey.com Macbook Scroll",
    description: "Scroll through the page and see the image come out of the screen, as seen on Fey.com website.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/components/fey-macbook-scroll",
  },
  {
    id: "3d-card-effect",
    title: "3D Card Effect",
    description: "A card perspective effect, hover over the card to elevate card elements.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/components/3d-card-effect",
  },
  {
    id: "aceternity-logo-reveal",
    title: "Aceternity Logo Reveal",
    description: "A logo reveal animation with a gradient outline effect.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/components/aceternity-logo-reveal",
  },
  {
    id: "testimonial-card",
    title: "Testimonial Card",
    description: "A testimonial card with avatar and quote.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/components/testimonial-card",
  },
  {
    id: "animated-tooltip",
    title: "Animated Tooltip",
    description: "A tooltip with entrance and exit animations.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/components/animated-tooltip",
  },
  {
    id: "background-beams",
    title: "Background Beams",
    description: "Animated background beams that follow the cursor.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/components/background-beams",
  },
  {
    id: "bento-grid",
    title: "Bento Grid",
    description: "A grid layout inspired by the Bento box design.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/components/bento-grid",
  },
  {
    id: "card-hover-effect",
    title: "Card Hover Effect",
    description: "Cards with smooth hover animations and transitions.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/components/card-hover-effect",
  },
  {
    id: "moving-border",
    title: "Moving Border",
    description: "A border that moves around the element creating a dynamic effect.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/components/moving-border",
  },
  {
    id: "text-reveal",
    title: "Text Reveal",
    description: "Text that reveals itself with a typing or fading effect.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/components/text-reveal",
  },
  {
    id: "spotlight-cursor",
    title: "Spotlight Cursor",
    description: "A spotlight effect that follows the cursor.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/components/spotlight-cursor",
  },
  {
    id: "wavy-background",
    title: "Wavy Background",
    description: "A wavy animated background created with SVG.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/components/wavy-background",
  },
]

export default function ComponentsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {components.map((component, index) => (
        <motion.div
          key={component.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <Link href={component.link} className="block">
            <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-black aspect-video relative">
                <Image
                  src={component.image || "/placeholder.svg"}
                  alt={component.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{component.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{component.description}</p>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
