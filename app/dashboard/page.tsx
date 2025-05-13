"use client"

import ComponentImplementationTracker from "@/app/components/component-implementation-tracker"
import { Book, ExternalLink, FileCode, Github, Package } from "lucide-react"
import Link from "next/link"

/**
 * Dashboard page for the UI Component Library
 * Displays implementation progress and provides links to important resources
 */
export default function DashboardPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">UI Component Library Dashboard</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Track the implementation progress and access resources for the UI component library
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <DashboardCard 
            title="Documentation" 
            description="Access component guidelines and implementation standards"
            icon={<Book className="h-6 w-6" />}
            href="/documentation"
          />
          <DashboardCard 
            title="Components" 
            description="Browse all implemented UI components"
            icon={<Package className="h-6 w-6" />}
            href="/components"
          />
          <DashboardCard 
            title="Component Template" 
            description="View the standard component page template"
            icon={<FileCode className="h-6 w-6" />}
            href="/components/component-page-template"
          />
          <DashboardCard 
            title="GitHub Repository" 
            description="Access the source code repository"
            icon={<Github className="h-6 w-6" />}
            href="https://github.com/yourusername/ui-component-library"
            external
          />
        </div>

        <div className="mb-12">
          <ComponentImplementationTracker />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 dark:bg-slate-800">
            <h2 className="text-2xl font-bold mb-4">Development Guidelines</h2>
            <ul className="space-y-3">
              <GuidelineItem>Follow the component page structure detailed in the guidelines</GuidelineItem>
              <GuidelineItem>Write comprehensive tests for all components</GuidelineItem>
              <GuidelineItem>Document all component props and customization options</GuidelineItem>
              <GuidelineItem>Include multiple examples for each component</GuidelineItem>
              <GuidelineItem>Ensure all components are responsive and accessible</GuidelineItem>
            </ul>
            <div className="mt-6">
              <Link 
                href="/COMPONENT_PAGE_GUIDELINES.md" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View full guidelines
                <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 dark:bg-slate-800">
            <h2 className="text-2xl font-bold mb-4">Implemented Components</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ComponentItem name="3D Card Effect" href="/components/3d-card-effect" />
              <ComponentItem name="3D Marquee" href="/components/3d-marquee" />
              <ComponentItem name="3D Pin" href="/components/3d-pin" />
              {/* Add more implemented components here */}
            </div>
            <div className="mt-6">
              <Link 
                href="/components" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View all components
                <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 dark:bg-slate-800">
          <h2 className="text-2xl font-bold mb-4">Recent Updates</h2>
          <div className="space-y-4">
            <UpdateItem 
              date="2023-07-20" 
              title="3D Pin Component" 
              description="Added the 3D Pin component for interactive maps" 
            />
            <UpdateItem 
              date="2023-07-18" 
              title="3D Marquee Component" 
              description="Added the 3D Marquee component for scrolling content" 
            />
            <UpdateItem 
              date="2023-07-15" 
              title="3D Card Effect Component" 
              description="Added the 3D Card Effect component with customizable rotation" 
            />
            <UpdateItem 
              date="2023-07-10" 
              title="Project Initialization" 
              description="Set up the initial project structure and component framework" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper Components

interface DashboardCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  external?: boolean
}

function DashboardCard({ title, description, icon, href, external = false }: DashboardCardProps) {
  return (
    <Link 
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 dark:bg-slate-800"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-blue-600 dark:text-blue-400">
          {icon}
        </div>
        {external && (
          <ExternalLink className="h-4 w-4 text-gray-400" />
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </Link>
  )
}

interface GuidelineItemProps {
  children: React.ReactNode
}

function GuidelineItem({ children }: GuidelineItemProps) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mt-1 mr-2">
        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span>{children}</span>
    </li>
  )
}

interface ComponentItemProps {
  name: string
  href: string
}

function ComponentItem({ name, href }: ComponentItemProps) {
  return (
    <Link 
      href={href} 
      className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors duration-200 dark:border-gray-700 dark:hover:bg-gray-900/50"
    >
      <div className="font-medium">{name}</div>
    </Link>
  )
}

interface UpdateItemProps {
  date: string
  title: string
  description: string
}

function UpdateItem({ date, title, description }: UpdateItemProps) {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4">
        <div className="h-12 w-12 rounded-md bg-blue-100 text-blue-800 flex items-center justify-center font-medium dark:bg-blue-900 dark:text-blue-200">
          {date.split('-')[2]}
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-1">{date}</p>
        <h4 className="text-lg font-medium mb-1">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-20
 * Description: Initial implementation of the dashboard page
 * Reason: To provide a central location for tracking component implementation and accessing resources
 * Impact: None - new page
 * Version: 1.0.0
 */ 