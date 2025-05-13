"use client"

import { Input } from "@/components/ui/input"
import { BarChart, ChevronDown, ChevronRight, FormInput, Layers, Layout, Menu, Search, Table, Type } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const componentCategories = [
  {
    name: "Layout",
    icon: Layout,
    components: [
      { name: "Container", slug: "container" },
      { name: "Grid", slug: "grid" },
      { name: "Section", slug: "section" },
      { name: "Divider", slug: "divider" },
      { name: "Aspect Ratio", slug: "aspect-ratio" },
    ],
  },
  {
    name: "UI",
    icon: Type,
    components: [
      { name: "Button", slug: "button" },
      { name: "Card", slug: "card" },
      { name: "Badge", slug: "badge" },
      { name: "Avatar", slug: "avatar" },
      { name: "Alert", slug: "alert" },
      { name: "Tooltip", slug: "tooltip" },
      { name: "Toast", slug: "toast" },
    ],
  },
  {
    name: "Navigation",
    icon: Menu,
    components: [
      { name: "Navbar", slug: "navbar" },
      { name: "Sidebar", slug: "sidebar" },
      { name: "Dropdown", slug: "dropdown" },
      { name: "Tabs", slug: "tabs" },
      { name: "Breadcrumb", slug: "breadcrumb" },
      { name: "Pagination", slug: "pagination" },
    ],
  },
  {
    name: "Forms",
    icon: FormInput,
    components: [
      { name: "Input", slug: "input" },
      { name: "Select", slug: "select" },
      { name: "Checkbox", slug: "checkbox" },
      { name: "Radio", slug: "radio" },
      { name: "Switch", slug: "switch" },
      { name: "Textarea", slug: "textarea" },
      { name: "Form", slug: "form" },
    ],
  },
  {
    name: "Data Display",
    icon: Table,
    components: [
      { name: "Table", slug: "table" },
      { name: "List", slug: "list" },
      { name: "Calendar", slug: "calendar" },
      { name: "Timeline", slug: "timeline" },
    ],
  },
  {
    name: "Data Visualization",
    icon: BarChart,
    components: [
      { name: "Chart", slug: "chart" },
      { name: "Progress", slug: "progress" },
      { name: "Stat", slug: "stat" },
    ],
  },
  {
    name: "Advanced",
    icon: Layers,
    components: [
      { name: "Modal", slug: "modal" },
      { name: "Drawer", slug: "drawer" },
      { name: "Popover", slug: "popover" },
      { name: "Command", slug: "command" },
      { name: "Carousel", slug: "carousel" },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["UI"])

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const filteredCategories = componentCategories
    .map((category) => ({
      ...category,
      components: category.components.filter((component) =>
        component.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.components.length > 0)

  return (
    <div className="w-64 border-r border-gray-200 bg-gray-50 dark:bg-gray-900 dark:border-gray-800 overflow-y-auto">
      <div className="p-4">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search components..."
            className="pl-10 pr-4 dark:bg-gray-800 dark:border-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          {filteredCategories.map((category) => (
            <div key={category.name}>
              <button
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => toggleCategory(category.name)}
              >
                <div className="flex items-center">
                  <category.icon className="mr-2 h-4 w-4" />
                  {category.name}
                </div>
                {expandedCategories.includes(category.name) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>

              {expandedCategories.includes(category.name) && (
                <div className="ml-6 mt-1 space-y-1">
                  {category.components.map((component) => (
                    <Link
                      key={component.slug}
                      href={`/components/${component.slug}`}
                      className={`block rounded-md px-3 py-2 text-sm ${
                        pathname === `/components/${component.slug}`
                          ? "bg-gray-200 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
                          : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                      }`}
                    >
                      {component.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
