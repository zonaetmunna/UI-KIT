"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

export default function AddUtilitiesPage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Add utilities</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Add utility functions to help with class name management for Aceternity UI components.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Install dependencies</h2>
        <div className="rounded-lg border p-4 dark:border-gray-800">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Install the required dependencies for class name management:
          </p>
          <pre className="rounded-lg bg-gray-100 dark:bg-gray-900 p-4 text-sm overflow-auto">
            <code className="text-gray-800 dark:text-gray-200">npm install clsx tailwind-merge</code>
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Create utils.ts file</h2>
        <div className="rounded-lg border p-4 dark:border-gray-800">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Create a <code className="text-sm">lib/utils.ts</code> file with the following content:
          </p>
          <div className="relative">
            <pre className="rounded-lg bg-gray-100 dark:bg-gray-900 p-4 text-sm overflow-auto">
              <code className="text-gray-800 dark:text-gray-200">
                {`import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}
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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What does this do?</h2>
        <div className="rounded-lg border p-4 dark:border-gray-800">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            The <code className="text-sm">cn</code> utility function combines <code className="text-sm">clsx</code> and{" "}
            <code className="text-sm">tailwind-merge</code> to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              <code className="text-sm">clsx</code>: Conditionally join class names together
            </li>
            <li>
              <code className="text-sm">tailwind-merge</code>: Efficiently merge Tailwind CSS classes without style
              conflicts
            </li>
          </ul>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            This utility is essential for Aceternity UI components as it allows for proper class name management and
            overriding of styles.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Next steps</h2>
        <div className="rounded-lg border p-4 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400">
            Now that you have added the necessary utilities, you can proceed to install and use Aceternity UI components
            in your project.
          </p>
          <div className="mt-4">
            <Button className="bg-[#0F172A] hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
              <a href="/components/cli">Next: CLI</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
