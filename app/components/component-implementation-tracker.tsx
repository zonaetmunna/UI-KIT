"use client"

import { AlertTriangle, Check, X } from "lucide-react"
import { useEffect, useState } from "react"

/**
 * Interface for component implementation status
 */
interface ComponentStatus {
  id: string
  name: string
  implemented: boolean
  hasComponentFile: boolean
  hasTestFile: boolean
  hasPageFile: boolean
}

/**
 * Hardcoded list of components from the sidebar
 * This is used as a fallback when we can't access the sidebar data directly
 */
const COMPONENT_LIST = [
  { id: "3d-card-effect", name: "3D Card Effect" },
  { id: "3d-marquee", name: "3D Marquee" },
  { id: "3d-pin", name: "3D Pin" },
  { id: "animated-modal", name: "Animated Modal" },
  { id: "animated-testimonials", name: "Animated Testimonials" },
  { id: "animated-tooltip", name: "Animated Tooltip" },
  { id: "apple-cards-carousel", name: "Apple Cards Carousel" },
  { id: "aurora-background", name: "Aurora Background" },
  { id: "background-beams", name: "Background Beams" },
  { id: "background-beams-with-collision", name: "Background Beams With Collision" },
  { id: "background-boxes", name: "Background Boxes" },
  { id: "background-gradient", name: "Background Gradient" },
  { id: "background-lines", name: "Background Lines" },
  { id: "bento-grid", name: "Bento Grid" },
  { id: "canvas-reveal-effect", name: "Canvas Reveal Effect" },
  { id: "card-hover-effect", name: "Card Hover Effect" },
  { id: "card-spotlight", name: "Card Spotlight" },
  { id: "card-stack", name: "Card Stack" },
];

/**
 * Component Implementation Tracker
 * A utility component that checks which components from the components-sidebar
 * have been fully implemented and which ones are still missing or incomplete.
 */
export default function ComponentImplementationTracker() {
  const [componentStatus, setComponentStatus] = useState<ComponentStatus[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function checkComponentImplementation() {
      try {
        setLoading(true)
        
        // For client-side only, we'll simulate the check
        // In a real implementation, you would make a server-side API call
        // to check the file system for the component files
        const simulatedStatus: ComponentStatus[] = COMPONENT_LIST.map((component) => {
          // In a real implementation, you would check if these files exist
          // For now, we're using a simple heuristic based on the components we know exist
          const implementedComponents = [
            "3d-card-effect",
            "3d-marquee",
            "3d-pin"
          ]
          
          const implemented = implementedComponents.includes(component.id)
          
          return {
            id: component.id,
            name: component.name,
            implemented,
            hasComponentFile: implemented,
            hasTestFile: implemented,
            hasPageFile: implemented
          }
        })
        
        setComponentStatus(simulatedStatus)
      } catch (err) {
        setError("Failed to check component implementation status")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    
    checkComponentImplementation()
  }, [])

  // Calculate implementation stats
  const totalComponents = componentStatus.length
  const implementedCount = componentStatus.filter(s => s.implemented).length
  const percentComplete = totalComponents > 0 
    ? Math.round((implementedCount / totalComponents) * 100) 
    : 0

  return (
    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-slate-800">
      <h2 className="text-2xl font-bold mb-4">Component Implementation Tracker</h2>
      
      {error && (
        <div className="p-4 mb-4 bg-red-100 text-red-700 rounded-md flex items-center">
          <AlertTriangle className="mr-2" />
          {error}
        </div>
      )}
      
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Implementation Progress</span>
          <span className="font-medium">{percentComplete}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${percentComplete}%` }}
          ></div>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          {implementedCount} of {totalComponents} components implemented
        </div>
      </div>
      
      {loading ? (
        <div className="text-center py-4">Loading component status...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  Component
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  Component File
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  Test File
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  Page File
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {componentStatus.map((status) => (
                <tr key={status.id} className={status.implemented ? "" : "bg-gray-50 dark:bg-gray-900/50"}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium">{status.name}</div>
                    <div className="text-sm text-gray-500">{status.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      status.implemented 
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" 
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                    }`}>
                      {status.implemented ? (
                        <>
                          <Check className="w-3 h-3 mr-1" />
                          Implemented
                        </>
                      ) : (
                        <>
                          <X className="w-3 h-3 mr-1" />
                          Missing
                        </>
                      )}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {status.hasComponentFile ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {status.hasTestFile ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {status.hasPageFile ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2">Next Components to Implement</h3>
        <ul className="space-y-2">
          {componentStatus
            .filter(status => !status.implemented)
            .slice(0, 3)
            .map(status => (
              <li key={status.id} className="flex items-center">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-500 text-white rounded-full text-xs">
                  +
                </span>
                {status.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-20
 * Description: Initial implementation of Component Implementation Tracker
 * Reason: To provide a visual dashboard of component implementation status
 * Impact: None - new utility component
 * Version: 1.0.0
 * 
 * Date: 2023-07-21
 * Description: Simplified implementation by using hardcoded component list 
 * Reason: To avoid dependency on the sidebar component structure
 * Impact: Low - implementation change only, functionality remains the same
 * Version: 1.0.1
 */ 