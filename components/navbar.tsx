"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="border-b border-gray-200 bg-white dark:bg-gray-950 dark:border-gray-800">
      <div className="mx-auto flex items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-black text-white">
              <span className="text-lg font-bold">A</span>
            </div>
            <span className="text-xl font-bold dark:text-white">Aceternity UI</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/components"
            className={`text-sm font-medium ${
              pathname.startsWith("/components")
                ? "text-gray-900 dark:text-white"
                : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            }`}
          >
            Components
          </Link>
          <Link
            href="/templates"
            className={`relative text-sm font-medium ${
              pathname.startsWith("/templates")
                ? "text-gray-900 dark:text-white"
                : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            }`}
          >
            Templates
            <span className="absolute -right-8 -top-2 rounded-full bg-green-500 px-2 py-0.5 text-xs text-white">
              NEW
            </span>
          </Link>
          <Link
            href="/pricing"
            className={`text-sm font-medium ${
              pathname.startsWith("/pricing")
                ? "text-gray-900 dark:text-white"
                : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/showcase"
            className={`text-sm font-medium ${
              pathname.startsWith("/showcase")
                ? "text-gray-900 dark:text-white"
                : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            }`}
          >
            Showcase
          </Link>
          <Link
            href="/playground"
            className={`text-sm font-medium ${
              pathname.startsWith("/playground")
                ? "text-gray-900 dark:text-white"
                : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            }`}
          >
            Playground
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://discord.com"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Discord
            </Link>
            <Link
              href="https://twitter.com"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Twitter
            </Link>
            <ThemeToggle />
          </div>
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search Components"
              className="w-64 rounded-md pl-10 pr-4 dark:bg-gray-900 dark:border-gray-700"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">⌘ K</div>
          </div>
        </div>
      </div>
    </header>
  )
}
