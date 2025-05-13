"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

export default function InstallNextJsPage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("npx create-next-app@latest my-app --typescript --tailwind --eslint")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Install Next.js</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Learn how to install Next.js for your project to use with Aceternity UI components.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Create a new Next.js project</h2>
        <div className="rounded-lg border p-4 dark:border-gray-800">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            To create a new Next.js project with TypeScript, Tailwind CSS, and ESLint, run the following command:
          </p>
          <div className="relative">
            <pre className="rounded-lg bg-gray-100 dark:bg-gray-900 p-4 text-sm overflow-auto">
              <code className="text-gray-800 dark:text-gray-200">
                npx create-next-app@latest my-app --typescript --tailwind --eslint
              </code>
            </pre>
            <div className="absolute top-2 right-2">
              <Button size="sm" variant="outline" onClick={handleCopy}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Navigate to your project</h2>
        <div className="rounded-lg border p-4 dark:border-gray-800">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Once the installation is complete, navigate to your project directory:
          </p>
          <pre className="rounded-lg bg-gray-100 dark:bg-gray-900 p-4 text-sm overflow-auto">
            <code className="text-gray-800 dark:text-gray-200">cd my-app</code>
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Start the development server</h2>
        <div className="rounded-lg border p-4 dark:border-gray-800">
          <p className="mb-4 text-gray-600 dark:text-gray-400">Start the development server with:</p>
          <pre className="rounded-lg bg-gray-100 dark:bg-gray-900 p-4 text-sm overflow-auto">
            <code className="text-gray-800 dark:text-gray-200">npm run dev</code>
          </pre>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Your Next.js app will be running at <code className="text-sm">http://localhost:3000</code>
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Next steps</h2>
        <div className="rounded-lg border p-4 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400">
            Now that you have Next.js installed, you can proceed to install Tailwind CSS and add the necessary utilities
            to use Aceternity UI components.
          </p>
          <div className="mt-4">
            <Button className="bg-[#0F172A] hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
              <a href="/components/install-tailwind-css">Next: Install Tailwind CSS</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
