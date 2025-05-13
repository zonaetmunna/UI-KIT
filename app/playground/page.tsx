"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Copy, Download, Play, Code, Eye, Check } from "lucide-react"

export default function PlaygroundPage() {
  const [activeTab, setActiveTab] = useState("preview")
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mx-auto px-4 py-12 md:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Playground</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Experiment with our components in real-time. Customize them to fit your needs and export the code.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card className="h-full p-6 dark:bg-gray-900 dark:border-gray-800">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Components</h2>
            <div className="space-y-2">
              {["Button", "Card", "Navbar", "Hero", "Footer", "Form", "Modal", "Dropdown"].map((component) => (
                <div key={component} className="cursor-pointer rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                  {component}
                </div>
              ))}
            </div>

            <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900 dark:text-white">Properties</h2>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Variant</label>
                <select className="w-full rounded-md border border-gray-300 p-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                  <option>Default</option>
                  <option>Primary</option>
                  <option>Secondary</option>
                  <option>Outline</option>
                  <option>Ghost</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Size</label>
                <select className="w-full rounded-md border border-gray-300 p-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Color</label>
                <input
                  type="color"
                  className="h-10 w-full rounded-md border border-gray-300 p-1 dark:border-gray-700"
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card className="h-full overflow-hidden dark:bg-gray-900 dark:border-gray-800">
            <div className="flex items-center justify-between border-b p-4 dark:border-gray-800">
              <div className="flex space-x-2">
                <Button
                  variant={activeTab === "preview" ? "default" : "outline"}
                  onClick={() => setActiveTab("preview")}
                  className={activeTab === "preview" ? "bg-[#0F172A] dark:bg-white dark:text-gray-900" : ""}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
                <Button
                  variant={activeTab === "code" ? "default" : "outline"}
                  onClick={() => setActiveTab("code")}
                  className={activeTab === "code" ? "bg-[#0F172A] dark:bg-white dark:text-gray-900" : ""}
                >
                  <Code className="mr-2 h-4 w-4" />
                  Code
                </Button>
              </div>
            </div>

            <div className="p-6">
              {activeTab === "preview" ? (
                <div className="flex h-[400px] items-center justify-center rounded-md border border-dashed border-gray-300 dark:border-gray-700">
                  <Button className="bg-[#0F172A] hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
                    Button Component
                  </Button>
                </div>
              ) : (
                <pre className="h-[400px] overflow-auto rounded-md bg-gray-100 p-4 text-sm dark:bg-gray-800 dark:text-gray-200">
                  <code>
                    {`<Button className="bg-[#0F172A] hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
  Button Component
</Button>`}
                  </code>
                </pre>
              )}
            </div>

            <div className="flex items-center justify-between border-t p-4 dark:border-gray-800">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Code
                    </>
                  )}
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
              <Button
                size="sm"
                className="bg-[#0F172A] hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                <Play className="mr-2 h-4 w-4" />
                Run
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
