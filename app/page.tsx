"use client"

import { ArrowRight, Github, Star, Twitter } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

// Featured components to highlight on the homepage
const featuredComponents = [
  {
    name: "3D Card Effect",
    description: "Interactive cards with perspective effects on hover",
    href: "/components/3d-card-effect",
    image: "/images/previews/3d-card-effect.webp", 
    isNew: false,
  },
  {
    name: "3D Marquee",
    description: "Animated 3D carousel for showcasing testimonials and content",
    href: "/components/3d-marquee",
    image: "/images/previews/3d-marquee.webp",
    isNew: true,
  },
  {
    name: "3D Pin",
    description: "Animated location marker for maps and spatial interfaces",
    href: "/components/3d-pin",
    image: "/images/previews/3d-pin.webp",
    isNew: false,
  },
  {
    name: "Animated Modal",
    description: "Beautiful transitions for modal dialogs with multiple animation styles",
    href: "/components/animated-modal",
    image: "/images/previews/animated-modal.webp",
    isNew: false,
  },
  {
    name: "Animated Testimonials",
    description: "Showcase user feedback with smooth animation transitions",
    href: "/components/animated-testimonials",
    image: "/images/previews/animated-testimonials.webp",
    isNew: false,
  },
  {
    name: "Background Gradient",
    description: "Stunning animated gradients for section backgrounds",
    href: "/components/background-gradient",
    image: "/images/previews/background-gradient.webp",
    isNew: false,
  },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Magic UI Components
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Beautiful, responsive UI components for your Next.js applications. 
                  Built with TailwindCSS and Framer Motion.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/components"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Browse Components
                </Link>
                <Link
                  href="/playground"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Try Playground
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span>70+ components</span>
                </div>
                <div className="flex items-center gap-1">
                  <Github className="h-4 w-4" />
                  <span>MIT License</span>
                </div>
                <div className="flex items-center gap-1">
                  <Twitter className="h-4 w-4 text-blue-500" />
                  <span>@magicui</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              {mounted && (
                <div className="w-full p-4 bg-gradient-to-b from-background/10 to-background/50 backdrop-blur-xl rounded-xl border shadow-xl">
                  <div className="aspect-[16/9] overflow-hidden rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800">
                    <div className="w-full h-full flex items-center justify-center text-white text-lg">
                      {/* Placeholder for demo animation */}
                      <div className="p-8 max-w-md text-center">
                        <h3 className="text-2xl font-semibold mb-4">Magical UI Components</h3>
                        <p>Transform your website with beautiful, interactive components</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Components Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Components</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our most popular UI components ready to enhance your projects
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredComponents.map((component) => (
              <Link 
                key={component.name}
                href={component.href}
                className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md"
              >
                <div className="aspect-[16/9] overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
                  {/* Component preview image would go here */}
                  <div className="flex h-full items-center justify-center bg-gradient-to-tr from-gray-900/80 to-gray-900/40 text-white">
                    {component.name}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold tracking-tight text-lg group-hover:underline">
                    {component.name}
                    {component.isNew && (
                      <span className="ml-2 rounded bg-green-500 px-1.5 py-0.5 text-xs text-white">
                        NEW
                      </span>
                    )}
                  </h3>
                  <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {component.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link 
              href="/components"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
            >
              View All Components
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Getting Started</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Everything you need to know to start using our components
                </p>
              </div>
              <div className="grid gap-2">
                <Link
                  href="/components/install-nextjs"
                  className="flex items-center gap-2 rounded-md px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Install Next.js</span>
                </Link>
                <Link
                  href="/components/install-tailwind-css"
                  className="flex items-center gap-2 rounded-md px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Install Tailwind CSS</span>
                </Link>
                <Link
                  href="/components/add-utilities"
                  className="flex items-center gap-2 rounded-md px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Add Utilities</span>
                </Link>
                <Link
                  href="/components/cli"
                  className="flex items-center gap-2 rounded-md px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Use CLI</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Explore More</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover all the ways to use our component library
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/showcase"
                  className="group flex flex-col items-center justify-center rounded-md border p-6 shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="mb-2 rounded-full bg-primary/10 p-3 text-primary">
                    <div className="h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold">Showcase</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      See our components in action
                    </p>
                  </div>
                </Link>
                <Link
                  href="/playground"
                  className="group flex flex-col items-center justify-center rounded-md border p-6 shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="mb-2 rounded-full bg-primary/10 p-3 text-primary">
                    <div className="h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold">Playground</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Experiment with components live
                    </p>
                  </div>
                </Link>
                <Link
                  href="/pricing"
                  className="group flex flex-col items-center justify-center rounded-md border p-6 shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="mb-2 rounded-full bg-primary/10 p-3 text-primary">
                    <div className="h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold">Pricing</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Premium component plans
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://github.com/your-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center rounded-md border p-6 shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="mb-2 rounded-full bg-primary/10 p-3 text-primary">
                    <div className="h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold">GitHub</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Contribute to our project
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to enhance your UI?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start building beautiful interfaces with our component library today
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/components"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Browse Components
              </Link>
              <Link
                href="/playground"
                className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground/20 bg-transparent px-8 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Try Playground
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2023 Magic UI. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/terms" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
              Privacy
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-22
 * Description: Complete redesign of the homepage inspired by Aceternity UI
 * Reason: To improve the overall user experience and showcase components better
 * Impact: High - complete overhaul of the homepage layout and design
 * Version: 2.0.0
 */