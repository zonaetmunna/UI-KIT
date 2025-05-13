"use client"

import { motion } from "framer-motion"
import { Check, Code, Copy, Eye, Info, Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Define categories and components
const componentCategories = [
  {
    id: "layout",
    name: "Layout",
    components: [
      { id: "bento-grid", name: "Bento Grid" },
      { id: "card-stack", name: "Card Stack" },
      { id: "masonry-grid", name: "Masonry Grid" },
    ]
  },
  {
    id: "animation",
    name: "Animation",
    components: [
      { id: "text-generate-effect", name: "Text Generate Effect" },
      { id: "animated-testimonials", name: "Animated Testimonials" },
      { id: "card-hover-effect", name: "Card Hover Effect" },
      { id: "animated-modal", name: "Animated Modal" },
    ]
  },
  {
    id: "effects",
    name: "Effects",
    components: [
      { id: "spotlight", name: "Spotlight" },
      { id: "card-spotlight", name: "Card Spotlight" },
      { id: "3d-card-effect", name: "3D Card Effect" },
      { id: "background-gradient", name: "Background Gradient" },
      { id: "background-lines", name: "Background Lines" },
    ]
  }
]

// Sample props for components
const componentProps = {
  "text-generate-effect": [
    { name: "text", type: "string", default: "Hello, world!", description: "The text to animate" },
    { name: "speed", type: "number", default: "50", description: "Animation speed in milliseconds" },
    { name: "className", type: "string", default: "", description: "Additional CSS classes" }
  ],
  "animated-testimonials": [
    { name: "testimonials", type: "array", default: "[]", description: "Array of testimonial objects" },
    { name: "autoplay", type: "boolean", default: "true", description: "Whether to auto-cycle testimonials" },
    { name: "interval", type: "number", default: "5000", description: "Time between transitions in ms" },
    { name: "animationDuration", type: "number", default: "500", description: "Duration of transition animation" }
  ],
  "animated-modal": [
    { name: "isOpen", type: "boolean", default: "false", description: "Controls modal visibility" },
    { name: "onClose", type: "function", default: "() => {}", description: "Function called when modal closes" },
    { name: "children", type: "ReactNode", default: "", description: "Content to display inside modal" },
    { name: "position", type: "string", default: "center", description: "Modal position (center, top, etc.)" },
    { name: "showCloseButton", type: "boolean", default: "true", description: "Whether to show close button" }
  ]
}

// Default code templates for components
const defaultComponentCode = {
  "text-generate-effect": `import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

export function TextGenerateDemo() {
  return (
    <div className="flex flex-col gap-4">
      <TextGenerateEffect 
        text="Magic UI components provide a modern, interactive user experience."
        speed={50}
        className="text-xl font-medium"
      />
    </div>
  )
}`,
  "animated-testimonials": `import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

const testimonials = [
  {
    id: "1",
    author: "Sarah Johnson",
    role: "Product Designer",
    content: "These components have revolutionized our design workflow. Highly recommend!",
    avatar: "/avatars/avatar-1.png"
  },
  {
    id: "2",
    author: "Michael Chen",
    role: "Frontend Developer",
    content: "The best UI library I've worked with. Clean code and amazing animations.",
    avatar: "/avatars/avatar-2.png"
  }
]

export function TestimonialsDemo() {
  return (
    <AnimatedTestimonials
      testimonials={testimonials}
      autoplay={true}
      interval={5000}
      animationDuration={500}
      className="max-w-3xl mx-auto"
    />
  )
}`,
  "animated-modal": `import { useState } from "react"
import { AnimatedModal } from "@/components/ui/animated-modal"
import { Button } from "@/components/ui/button"

export function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      
      <AnimatedModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="center"
        showCloseButton={true}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
          <p className="mb-6">This is an animated modal component with customizable properties.</p>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </div>
      </AnimatedModal>
    </>
  )
}`
}

export default function PlaygroundPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedComponent, setSelectedComponent] = useState<string | null>("text-generate-effect")
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")
  const [copied, setCopied] = useState(false)
  
  // Filter components based on search query
  const filteredCategories = componentCategories.map(category => ({
    ...category,
    components: category.components.filter(comp => 
      comp.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.components.length > 0)
  
  // Handle copy to clipboard
  const handleCopy = () => {
    if (selectedComponent && defaultComponentCode[selectedComponent as keyof typeof defaultComponentCode]) {
      navigator.clipboard.writeText(defaultComponentCode[selectedComponent as keyof typeof defaultComponentCode])
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Component Playground
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore, customize, and interact with our components in real-time.
              Copy the code and use it directly in your projects.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Main Playground */}
      <section className="py-8 md:py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Component Selection */}
            <div className="w-full lg:w-64 xl:w-72 flex-shrink-0">
              <div className="sticky top-8">
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search components..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  {filteredCategories.map((category) => (
                    <div key={category.id}>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                        {category.name}
                      </h3>
                      <ul className="space-y-1">
                        {category.components.map((component) => (
                          <li key={component.id}>
                            <button
                              onClick={() => setSelectedComponent(component.id)}
                              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                                selectedComponent === component.id
                                  ? "bg-primary text-primary-foreground"
                                  : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100"
                              }`}
                            >
                              {component.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main Content Area */}
            <div className="flex-1">
              {selectedComponent ? (
                <>
                  {/* Component Header */}
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold">
                        {componentCategories.flatMap(c => c.components).find(c => c.id === selectedComponent)?.name}
                      </h2>
                      <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                        <Link 
                          href={`/components/${selectedComponent}`}
                          className="flex items-center hover:text-primary"
                        >
                          <Info className="h-4 w-4 mr-1" />
                          View documentation
                        </Link>
                      </div>
                    </div>
                    <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-md p-1">
                      <button
                        onClick={() => setActiveTab("preview")}
                        className={`px-3 py-1.5 rounded text-sm font-medium ${
                          activeTab === "preview"
                            ? "bg-white dark:bg-gray-700 shadow-sm"
                            : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                        }`}
                      >
                        <Eye className="h-4 w-4 inline-block mr-1" />
                        Preview
                      </button>
                      <button
                        onClick={() => setActiveTab("code")}
                        className={`px-3 py-1.5 rounded text-sm font-medium ${
                          activeTab === "code"
                            ? "bg-white dark:bg-gray-700 shadow-sm"
                            : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                        }`}
                      >
                        <Code className="h-4 w-4 inline-block mr-1" />
                        Code
                      </button>
                    </div>
                  </div>
                  
                  {/* Preview/Code Area */}
                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                    {activeTab === "preview" ? (
                      <div className="bg-white dark:bg-gray-900 p-8 min-h-[400px] flex items-center justify-center">
                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <p>[Component Preview Placeholder]</p>
                          <p className="text-sm mt-2">Interactive preview would be rendered here.</p>
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        <div className="bg-gray-900 text-gray-100 rounded-t-lg p-4 text-sm font-mono overflow-x-auto">
                          <pre className="whitespace-pre">
                            {selectedComponent && defaultComponentCode[selectedComponent as keyof typeof defaultComponentCode]}
                          </pre>
                        </div>
                        <button
                          onClick={handleCopy}
                          className="absolute top-3 right-3 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
                          aria-label="Copy code"
                        >
                          {copied ? (
                            <Check className="h-4 w-4 text-green-400" />
                          ) : (
                            <Copy className="h-4 w-4 text-gray-400" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {/* Props Table */}
                  {selectedComponent && componentProps[selectedComponent as keyof typeof componentProps] && (
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-4">Component Props</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b border-gray-200 dark:border-gray-800">
                              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Prop</th>
                              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Type</th>
                              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Default</th>
                              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {componentProps[selectedComponent as keyof typeof componentProps].map((prop) => (
                              <tr key={prop.name} className="border-b border-gray-200 dark:border-gray-800">
                                <td className="py-3 px-4 text-sm font-mono text-gray-900 dark:text-gray-100">{prop.name}</td>
                                <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100">{prop.type}</td>
                                <td className="py-3 px-4 text-sm font-mono text-gray-900 dark:text-gray-100">{prop.default}</td>
                                <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{prop.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center p-12 text-center">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">Select a component from the sidebar to get started.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 mt-12 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to use these components in your project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Get started with our component library and build beautiful interfaces today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/docs/installation"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Installation Guide
            </Link>
            <Link 
              href="/components"
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Browse Components
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
 * Description: Created playground page to allow users to explore and interact with components
 * Reason: To provide an interactive environment for testing and exploring components
 * Impact: None - new page
 * Version: 1.0.0
 */