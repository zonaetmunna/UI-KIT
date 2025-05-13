"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

export default function CliPage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("npx aceternity-ui@latest add <component-name>")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">CLI</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Use the Aceternity UI CLI to easily add components to your project.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Using the CLI</h2>
        <div className="rounded-lg border p-4 dark:border-gray-800">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            The Aceternity UI CLI allows you to add components directly to your project without having to copy and paste
            code.
          </p>
          <div className="relative">
            <pre className="rounded-lg bg-gray-100 dark:bg-gray-900 p-4 text-sm overflow-auto">
              <code className="text-gray-800 dark:text-gray-200">
                npx aceternity-ui@latest add &lt;component-name&gt;
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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Available components</h2>
        <div className="rounded-lg border p-4 dark:border-gray-800">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            You can add any of the components available on the Aceternity UI website. For example:
          </p>
          <pre className="rounded-lg bg-gray-100 dark:bg-gray-900 p-4 text-sm overflow-auto">
            <code className="text-gray-800 dark:text-gray-200">npx aceternity-ui@latest add 3d-card-effect</code>
          </pre>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            This will add the 3D Card Effect component to your project.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">CLI options</h2>
        <div className="rounded-lg border p-4 dark:border-gray-800">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            The CLI supports several options to customize the installation:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              <code className="text-sm">--path</code>: Specify the path where the component should be added
            </li>
            <li>
              <code className="text-sm">--typescript</code>: Generate TypeScript files (default)
            </li>
            <li>
              <code className="text-sm">--javascript</code>: Generate JavaScript files
            </li>
            <li>
              <code className="text-sm">--help</code>: Show help information
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Example usage</h2>
        <div className="rounded-lg border p-4 dark:border-gray-800">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Here's an example of adding the Background Beams component to a specific path:
          </p>
          <pre className="rounded-lg bg-gray-100 dark:bg-gray-900 p-4 text-sm overflow-auto">
            <code className="text-gray-800 dark:text-gray-200">
              npx aceternity-ui@latest add background-beams --path=components/ui
            </code>
          </pre>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            This will add the Background Beams component to the <code className="text-sm">components/ui</code> directory
            in your project.
          </p>
        </div>
      </div>
    </div>
  )
}
