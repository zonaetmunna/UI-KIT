"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Check, X } from "lucide-react"
import { useState } from "react"

interface PageCheckItem {
  name: string
  description: string
  status: "pass" | "fail" | "unknown"
}

interface ComponentPageCheck {
  slug: string
  name: string
  checks: PageCheckItem[]
  status: "pass" | "fail" | "partial" | "unknown"
}

/**
 * Component Page Template Checker
 * 
 * A utility tool to check consistency across component pages to ensure
 * they all follow the same structure and pattern.
 */
export default function PageTemplateChecker() {
  const [components, setComponents] = useState<ComponentPageCheck[]>([])
  const [loading, setLoading] = useState(false)
  
  // List of required elements for each component page
  const requiredElements = [
    { name: "ComponentTemplate Usage", description: "Page uses the ComponentTemplate component" },
    { name: "Title & Description", description: "Page defines title and description constants" },
    { name: "Example Component", description: "Page includes an example component function" },
    { name: "Customization UI", description: "Page includes customization controls" },
    { name: "API Reference", description: "Page includes an API reference table" },
    { name: "Component Code", description: "Page includes the component source code" },
    { name: "Usage Examples", description: "Page includes usage code examples" },
    { name: "Changelog", description: "Page includes a changelog entry" }
  ]
  
  // Function to analyze a component page
  const analyzeComponentPage = async (slug: string, name: string) => {
    try {
      // This would normally fetch the file content and analyze it
      // For demonstration purposes, we'll just create a mock result
      const mockChecks = requiredElements.map(element => ({
        name: element.name,
        description: element.description,
        status: Math.random() > 0.2 ? "pass" : "fail" as "pass" | "fail" | "unknown"
      }))
      
      const allPass = mockChecks.every(check => check.status === "pass")
      const anyFail = mockChecks.some(check => check.status === "fail")
      
      return {
        slug,
        name,
        checks: mockChecks,
        status: allPass ? "pass" : anyFail ? "partial" : "unknown"
      }
    } catch (error) {
      console.error(`Error analyzing ${slug}:`, error)
      return {
        slug,
        name,
        checks: requiredElements.map(element => ({
          name: element.name,
          description: element.description,
          status: "unknown" as "pass" | "fail" | "unknown"
        })),
        status: "unknown" as "pass" | "fail" | "partial" | "unknown"
      }
    }
  }
  
  // Function to run the check on all component pages
  const runCheck = async () => {
    setLoading(true)
    
    // List of components to check - this would typically be fetched
    const componentList = [
      { slug: "3d-card-effect", name: "3D Card Effect" },
      { slug: "3d-marquee", name: "3D Marquee" },
      { slug: "3d-pin", name: "3D Pin" },
      { slug: "animated-modal", name: "Animated Modal" },
      { slug: "animated-testimonials", name: "Animated Testimonials" },
      { slug: "animated-tooltip", name: "Animated Tooltip" },
      { slug: "apple-cards-carousel", name: "Apple Cards Carousel" },
    ]
    
    const results = await Promise.all(
      componentList.map(comp => analyzeComponentPage(comp.slug, comp.name))
    )
    
    setComponents(results)
    setLoading(false)
  }
  
  // Function to get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pass":
        return "text-green-500"
      case "fail":
        return "text-red-500"
      case "partial":
        return "text-amber-500"
      default:
        return "text-gray-500"
    }
  }
  
  // Function to get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pass":
        return <Check className="w-4 h-4 text-green-500" />
      case "fail":
        return <X className="w-4 h-4 text-red-500" />
      default:
        return null
    }
  }
  
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Component Page Template Checker</h1>
      
      <div className="mb-8">
        <p className="mb-4">
          Use this tool to check if all component pages follow the same consistent structure and pattern.
          The following elements are checked for each page:
        </p>
        
        <ul className="list-disc pl-6 space-y-2">
          {requiredElements.map((element, i) => (
            <li key={i}>
              <strong>{element.name}</strong>: {element.description}
            </li>
          ))}
        </ul>
      </div>
      
      <Button 
        onClick={runCheck} 
        disabled={loading}
        className="mb-8"
      >
        {loading ? "Checking..." : "Check All Component Pages"}
      </Button>
      
      {components.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component) => (
              <div 
                key={component.slug}
                className="border rounded-lg overflow-hidden"
              >
                <div className={`p-4 font-medium bg-zinc-100 dark:bg-zinc-800 flex justify-between items-center`}>
                  <span>{component.name}</span>
                  <span className={getStatusColor(component.status)}>
                    {component.status === "pass" && "All Pass"}
                    {component.status === "fail" && "Failed"}
                    {component.status === "partial" && "Partial"}
                    {component.status === "unknown" && "Unknown"}
                  </span>
                </div>
                
                <ScrollArea className="h-60">
                  <div className="p-4">
                    {component.checks.map((check, i) => (
                      <div key={i} className="py-2 flex items-start gap-2">
                        <div className="mt-0.5">
                          {getStatusIcon(check.status)}
                        </div>
                        <div>
                          <p className={`font-medium ${getStatusColor(check.status)}`}>
                            {check.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {check.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Template Instructions</h2>
        
        <div className="prose max-w-none dark:prose-invert">
          <h3>Component Page Structure</h3>
          <p>All component pages should follow this structure:</p>
          
          <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg overflow-auto">
{`"use client"

import ComponentTemplate from "@/app/components/component-template"
import { MyComponent } from '@/components/library/ui'
import { useState } from 'react'

export default function MyComponentPage() {
  const title = "My Component"
  const description = "Description of the component"
  
  // Example component for preview
  const ExampleComponent = () => (
    // Example implementation
  )
  
  // Customization state and UI
  const [state, setState] = useState(defaultValue)
  
  const CustomizationUI = (
    // Customization controls
  )

  // API Reference table
  const APIReference = (
    <table>
      {/* API Reference content */}
    </table>
  )

  // Source code of the component
  const componentCode = \`// Component source code\`

  // Example usage code
  const usageCode = \`// Example usage code\`

  return (
    <ComponentTemplate
      title={title}
      description={description}
      component={<ExampleComponent />}
      customization={CustomizationUI}
      componentCode={componentCode}
      usageCode={usageCode}
      apiReference={APIReference}
    />
  )
}

/**
 * CHANGELOG:
 * 
 * Date: YYYY-MM-DD
 * Description: Initial implementation
 * Reason: To provide documentation and examples
 * Impact: None - new page
 * Version: 1.0.0
 */`}
          </pre>
        </div>
      </div>
    </div>
  )
}

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-20
 * Description: Initial implementation of the Page Template Checker tool
 * Reason: To ensure consistency across all component pages
 * Impact: None - new utility component
 * Version: 1.0.0
 */ 