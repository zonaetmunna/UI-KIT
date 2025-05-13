"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Define the showcase examples
const showcaseExamples = [
  {
    id: "hero-section",
    title: "Hero Section",
    description: "Captivating hero sections that grab user attention",
    image: "/images/showcase/hero-section.webp",
    tags: ["3D Card Effect", "Background Gradient", "Animated Text"],
    liveURL: "#demo-hero",
    components: [
      { name: "3D Card Effect", path: "/components/3d-card-effect" },
      { name: "Background Gradient", path: "/components/background-gradient" },
      { name: "Animated Text", path: "/components/text-generate-effect" }
    ]
  },
  {
    id: "testimonials",
    title: "Testimonial Wall",
    description: "Showcase customer testimonials with style",
    image: "/images/showcase/testimonials.webp",
    tags: ["3D Marquee", "Animated Testimonials", "Card Stack"],
    liveURL: "#demo-testimonials",
    components: [
      { name: "3D Marquee", path: "/components/3d-marquee" },
      { name: "Animated Testimonials", path: "/components/animated-testimonials" },
      { name: "Card Stack", path: "/components/card-stack" }
    ]
  },
  {
    id: "product-showcase",
    title: "Interactive Product Showcase",
    description: "Display products with interactive 3D elements",
    image: "/images/showcase/product-showcase.webp",
    tags: ["3D Card Effect", "Background Lines", "Spotlight Effect"],
    liveURL: "#demo-product",
    components: [
      { name: "3D Card Effect", path: "/components/3d-card-effect" },
      { name: "Background Lines", path: "/components/background-lines" },
      { name: "Spotlight Effect", path: "/components/card-spotlight" }
    ]
  },
  {
    id: "pricing-section",
    title: "Dynamic Pricing Section",
    description: "Engaging pricing tables with animations",
    image: "/images/showcase/pricing-section.webp",
    tags: ["Card Hover Effect", "Animated Modal", "Spotlight"],
    liveURL: "#demo-pricing",
    components: [
      { name: "Card Hover Effect", path: "/components/card-hover-effect" },
      { name: "Animated Modal", path: "/components/animated-modal" },
      { name: "Spotlight", path: "/components/spotlight" }
    ]
  },
  {
    id: "features-grid",
    title: "Features Grid",
    description: "Showcase product features in an engaging grid layout",
    image: "/images/showcase/features-grid.webp",
    tags: ["Bento Grid", "Hover Border Gradient", "Card Spotlight"],
    liveURL: "#demo-features",
    components: [
      { name: "Bento Grid", path: "/components/bento-grid" },
      { name: "Hover Border Gradient", path: "/components/hover-border-gradient" },
      { name: "Card Spotlight", path: "/components/card-spotlight" }
    ]
  },
  {
    id: "contact-form",
    title: "Interactive Contact Form",
    description: "Engaging forms with animation effects",
    image: "/images/showcase/contact-form.webp",
    tags: ["Text Generate Effect", "Animated Modal", "Background Gradient"],
    liveURL: "#demo-contact",
    components: [
      { name: "Text Generate Effect", path: "/components/text-generate-effect" },
      { name: "Animated Modal", path: "/components/animated-modal" },
      { name: "Background Gradient", path: "/components/background-gradient" }
    ]
  },
]

// Define showcase categories for filtering
const categories = [
  { id: "all", name: "All Examples" },
  { id: "landing", name: "Landing Pages" },
  { id: "marketing", name: "Marketing" },
  { id: "ecommerce", name: "E-commerce" },
  { id: "dashboard", name: "Dashboards" },
]

export default function ShowcasePage() {
  const [activeCategory, setActiveCategory] = useState("all")
  
  // Filter examples based on active category (simplified for demo)
  const filteredExamples = showcaseExamples
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Component Showcase
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              See our components in action with real-world examples and use cases.
              Get inspired and learn how to combine components to create beautiful interfaces.
            </motion.p>
          </div>
        </div>
        
        {/* Background decoration elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-10 bg-grid-gray-900/[0.2] bg-[size:30px_30px]"></div>
        </div>
      </section>
      
      {/* Category Filter */}
      <section className="py-8 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-20 bg-white dark:bg-gray-950 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Showcase Examples */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExamples.map((example, index) => (
              <motion.div
                key={example.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow">
                  {/* Example Image */}
                  <div className="aspect-[16/9] relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/30 text-white text-lg">
                      {example.title}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex flex-wrap gap-2">
                        {example.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 text-xs bg-black/20 backdrop-blur-sm rounded-full text-white">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Example Details */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2">{example.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {example.description}
                    </p>
                    
                    {/* Components Used */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Components Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {example.components.map((component) => (
                          <Link
                            key={component.name}
                            href={component.path}
                            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          >
                            {component.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <Link 
                        href={example.liveURL} 
                        className="flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                      </Link>
                      <Link 
                        href={`/showcase/${example.id}`} 
                        className="flex items-center text-sm text-primary hover:text-primary/80"
                      >
                        View Details <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to build your own?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Get started with our component library and create beautiful interfaces today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/components"
              className="px-6 py-3 bg-white text-primary rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Browse Components
            </Link>
            <Link 
              href="/playground"
              className="px-6 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground rounded-md font-medium hover:bg-primary-foreground/20 transition-colors"
            >
              Try Playground
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-22
 * Description: Created showcase page to display component examples in real-world contexts
 * Reason: To provide inspiration and demonstrate practical uses of the component library
 * Impact: None - new page
 * Version: 1.0.0
 */