"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

export default function InstallTailwindCssPage() {
  const [copied1, setCopied1] = useState(false)
  const [copied2, setCopied2] = useState(false)

  const handleCopy1 = () => {
    navigator.clipboard.writeText("npm install -D tailwindcss postcss autoprefixer")
    setCopied1(true)
    setTimeout(() => setCopied1(false), 2000)
  }

  const handleCopy2 = () => {
    navigator.clipboard.writeText("npx tailwindcss init -p")
    setCopied2(true)
    setTimeout(() => setCopied2(false), 2000)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Install Tailwind CSS</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Learn how to install and configure Tailwind CSS for your Next.js project.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Install Tailwind CSS</h2>
        <div className="rounded-lg border p-4 dark:border-gray-800">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            If you created your Next.js project with the <code className="text-sm">--tailwind</code> flag, Tailwind CSS
            is already installed. If not, install Tailwind CSS and its dependencies:
          </p>
          <div className="relative">
            <pre className="rounded-lg bg-gray-100 dark:bg-gray-900 p-4 text-sm overflow-auto">
              <code className="text-gray-800 dark:text-gray-200">npm install -D tailwindcss postcss autoprefixer</code>
            </pre>
            <div className="absolute top-2 right-2">
              <Button size="sm" variant="outline" onClick={handleCopy1}>
                {copied1 ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Initialize Tailwind CSS</h2>
        <div className="rounded-lg border p-4 dark:border-gray-800">
          <p className="mb-4 text-gray-600 dark:text-gray-400">Generate the Tailwind CSS configuration files:</p>
          <div className="relative">
            <pre className="rounded-lg bg-gray-100 dark:bg-gray-900 p-4 text-sm overflow-auto">
              <code className="text-gray-800 dark:text-gray-200">npx tailwindcss init -p</code>
            </pre>
            <div className="absolute top-2 right-2">
              <Button size="sm" variant="outline" onClick={handleCopy2}>
                {copied2 ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Configure Tailwind CSS</h2>
        <div className="rounded-lg border p-4 dark:border-gray-800">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Update your <code className="text-sm">tailwind.config.js</code> file to include the paths to your template
            files:
          </p>
          <pre className="rounded-lg bg-gray-100 dark:bg-gray-900 p-4 text-sm overflow-auto">
            <code className="text-gray-800 dark:text-gray-200">
              {`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
            </code>
          </pre>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Add Tailwind CSS to your CSS</h2>
        <div className="rounded-lg border p-4 dark:border-gray-800">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Add the Tailwind CSS directives to your <code className="text-sm">globals.css</code> file:
          </p>
          <pre className="rounded-lg bg-gray-100 dark:bg-gray-900 p-4 text-sm overflow-auto">
            <code className="text-gray-800 dark:text-gray-200">
              {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
            </code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Next steps</h2>
        <div className="rounded-lg border p-4 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400">
            Now that you have Tailwind CSS installed and configured, you can proceed to add the necessary utilities to
            use Aceternity UI components.
          </p>
          <div className="mt-4">
            <Button className="bg-[#0F172A] hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
              <a href="/components/add-utilities">Next: Add utilities</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
