"use client"

import { CodeBlock } from "@/components/code-block"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Code, Copy, Eye } from "lucide-react"
import { useState } from 'react'

interface ComponentTemplateProps {
  title: string
  description: string
  component: React.ReactNode
  customization?: React.ReactNode
  componentCode: string
  usageCode: string
  apiReference?: React.ReactNode
}

/**
 * ComponentTemplate
 * 
 * A template for component pages that includes:
 * - Hero section with title, description, and preview
 * - Usage example with code
 * - Component code display
 * - Optional customization section
 * - API reference section
 * 
 * @param title - Component title
 * @param description - Component description
 * @param component - The component to display in the hero section
 * @param customization - Optional customization UI
 * @param componentCode - Source code of the component
 * @param usageCode - Example usage code
 * @param apiReference - API documentation for the component
 */
export default function ComponentTemplate({
  title,
  description,
  component,
  customization,
  componentCode,
  usageCode,
  apiReference
}: ComponentTemplateProps) {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (code: string, type: string) => {
    navigator.clipboard.writeText(code)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="container mx-auto py-10 space-y-12">
      {/* Hero Section */}
      <div className="relative">
        <div className="min-h-[450px] rounded-lg bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center overflow-hidden p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 w-full max-w-5xl">
            <div className="flex items-center justify-center h-full">
              {component}
            </div>

            <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left p-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Usage</h2>
          <p className="text-muted-foreground">
            Below you can see a demonstration of the {title} component and how to use it in your project.
          </p>
        </div>

        <Tabs defaultValue="preview" className="mb-12">
          <TabsList>
            <TabsTrigger value="preview" className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>Preview</span>
            </TabsTrigger>
            <TabsTrigger value="code" className="flex items-center gap-1">
              <Code className="h-4 w-4" />
              <span>Usage Code</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="p-6 mt-6 border rounded-lg bg-zinc-950">
            <div className="flex items-center justify-center min-h-[200px]">
              {component}
            </div>
          </TabsContent>
          <TabsContent value="code" className="mt-6 relative">
            <div className="absolute right-4 top-4 z-10">
              <Button
                size="sm"
                variant="ghost"
                className="h-8 gap-1"
                onClick={() => handleCopy(usageCode, "usage")}
              >
                {copied === "usage" ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy</span>
                  </>
                )}
              </Button>
            </div>
            <CodeBlock language="tsx" code={usageCode} />
          </TabsContent>
        </Tabs>

        {customization && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Customization</h2>
            <p className="mb-6 text-muted-foreground">
              Customize the appearance and behavior of the {title} component.
            </p>
            {customization}
          </div>
        )}

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Component Code</h2>
          <p className="mb-6 text-muted-foreground">
            Here's the source code for the {title} component:
          </p>
          <div className="relative">
            <div className="absolute right-4 top-4 z-10">
              <Button
                size="sm"
                variant="ghost"
                className="h-8 gap-1"
                onClick={() => handleCopy(componentCode, "component")}
              >
                {copied === "component" ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy</span>
                  </>
                )}
              </Button>
            </div>
            <CodeBlock language="tsx" code={componentCode} />
          </div>
        </div>

        {apiReference && (
          <div>
            <h2 className="text-2xl font-bold mb-4">API Reference</h2>
            <div className="rounded-lg border">
              {apiReference}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-18
 * Description: Initial implementation of ComponentTemplate
 * Reason: To provide a standardized way to display component pages with consistent layout and features
 * Impact: None - new component
 * Version: 1.0.0
 */ 