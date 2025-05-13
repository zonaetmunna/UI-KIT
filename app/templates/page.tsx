"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import TemplateCard from "@/components/template-card"

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("all")

  const templates = [
    { id: 1, name: "Landing Page", category: "marketing", preview: "A modern landing page template" },
    { id: 2, name: "Dashboard", category: "app", preview: "A comprehensive dashboard template" },
    { id: 3, name: "Blog", category: "content", preview: "A blog template with multiple layouts" },
    { id: 4, name: "E-commerce", category: "app", preview: "An e-commerce template with product pages" },
    { id: 5, name: "Portfolio", category: "personal", preview: "A portfolio template for showcasing work" },
    { id: 6, name: "Documentation", category: "content", preview: "A documentation template for products" },
    {
      id: 7,
      name: "Schedule",
      category: "app",
      preview: "A schedule template for events and appointments",
      isNew: true,
    },
  ]

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.preview.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = category === "all" || template.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <div className="mx-auto px-4 py-12 md:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm mb-4 dark:bg-gray-900 dark:border-gray-800">
          <span className="mr-2 rounded-full bg-green-500 px-2 py-0.5 text-xs font-semibold text-white">NEW</span>
          <span className="text-gray-600 dark:text-gray-400">Schedule Template now available</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Templates</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Ready-to-use templates to kickstart your next project. Just copy, paste, and customize.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search templates..."
            className="pl-10 pr-4 dark:bg-gray-900 dark:border-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap space-x-2">
          <Button
            variant={category === "all" ? "default" : "outline"}
            onClick={() => setCategory("all")}
            className={category === "all" ? "bg-[#0F172A] dark:bg-white dark:text-gray-900" : ""}
          >
            All
          </Button>
          <Button
            variant={category === "marketing" ? "default" : "outline"}
            onClick={() => setCategory("marketing")}
            className={category === "marketing" ? "bg-[#0F172A] dark:bg-white dark:text-gray-900" : ""}
          >
            Marketing
          </Button>
          <Button
            variant={category === "app" ? "default" : "outline"}
            onClick={() => setCategory("app")}
            className={category === "app" ? "bg-[#0F172A] dark:bg-white dark:text-gray-900" : ""}
          >
            App
          </Button>
          <Button
            variant={category === "content" ? "default" : "outline"}
            onClick={() => setCategory("content")}
            className={category === "content" ? "bg-[#0F172A] dark:bg-white dark:text-gray-900" : ""}
          >
            Content
          </Button>
          <Button
            variant={category === "personal" ? "default" : "outline"}
            onClick={() => setCategory("personal")}
            className={category === "personal" ? "bg-[#0F172A] dark:bg-white dark:text-gray-900" : ""}
          >
            Personal
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTemplates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  )
}
