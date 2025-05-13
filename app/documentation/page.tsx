"use client"

import { Check, ChevronRight, Code, Copy, FileText, GitBranch, Layout, Package, PenTool } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

/**
 * Documentation page for the UI Component Library
 * Provides guidelines for component development, usage, and contribution
 */
export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState("getting-started")
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null)

  const copyToClipboard = (code: string, snippetId: string) => {
    navigator.clipboard.writeText(code)
    setCopiedSnippet(snippetId)
    setTimeout(() => setCopiedSnippet(null), 2000)
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">UI Component Library Documentation</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive guide to using and contributing to the UI component library
          </p>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <nav className="sticky top-4 bg-white rounded-lg shadow-md p-4 dark:bg-slate-800">
              <div className="space-y-1">
                <NavItem 
                  id="getting-started"
                  active={activeSection === "getting-started"}
                  onClick={() => setActiveSection("getting-started")}
                  icon={<FileText className="h-5 w-5" />}
                >
                  Getting Started
                </NavItem>
                <NavItem 
                  id="component-structure"
                  active={activeSection === "component-structure"}
                  onClick={() => setActiveSection("component-structure")}
                  icon={<Layout className="h-5 w-5" />}
                >
                  Component Structure
                </NavItem>
                <NavItem 
                  id="usage-guidelines"
                  active={activeSection === "usage-guidelines"}
                  onClick={() => setActiveSection("usage-guidelines")}
                  icon={<Code className="h-5 w-5" />}
                >
                  Usage Guidelines
                </NavItem>
                <NavItem 
                  id="development-workflow"
                  active={activeSection === "development-workflow"}
                  onClick={() => setActiveSection("development-workflow")}
                  icon={<PenTool className="h-5 w-5" />}
                >
                  Development Workflow
                </NavItem>
                <NavItem 
                  id="api-reference"
                  active={activeSection === "api-reference"}
                  onClick={() => setActiveSection("api-reference")}
                  icon={<Package className="h-5 w-5" />}
                >
                  API Reference
                </NavItem>
                <NavItem 
                  id="contribution-guide"
                  active={activeSection === "contribution-guide"}
                  onClick={() => setActiveSection("contribution-guide")}
                  icon={<GitBranch className="h-5 w-5" />}
                >
                  Contribution Guide
                </NavItem>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="w-full bg-white rounded-lg shadow-md p-6 pb-12 dark:bg-slate-800">
            <div className={activeSection === "getting-started" ? "block" : "hidden"}>
              <SectionTitle>Getting Started</SectionTitle>
              <p className="mb-6">Welcome to the UI Component Library documentation! This library provides a collection of beautifully designed and highly customizable UI components for your web applications.</p>
              
              <h3 className="text-xl font-semibold mb-3">Installation</h3>
              <p className="mb-4">You can install the UI Component Library using npm or yarn:</p>
              
              <CodeSnippet 
                id="install-npm"
                code="npm install ui-component-library"
                language="bash"
                onCopy={copyToClipboard}
                isCopied={copiedSnippet === "install-npm"}
              />
              
              <p className="my-4">Or with yarn:</p>
              
              <CodeSnippet 
                id="install-yarn"
                code="yarn add ui-component-library"
                language="bash"
                onCopy={copyToClipboard}
                isCopied={copiedSnippet === "install-yarn"}
              />
              
              <h3 className="text-xl font-semibold mt-8 mb-3">Basic Usage</h3>
              <p className="mb-4">Import and use components in your React application:</p>
              
              <CodeSnippet 
                id="basic-usage"
                code={`import { ThreeDCardEffect } from 'ui-component-library'

function App() {
  return (
    <div>
      <h1>My Awesome App</h1>
      <ThreeDCardEffect>
        <div className="p-6">
          <h2>Interactive Card</h2>
          <p>Hover over me to see the 3D effect!</p>
        </div>
      </ThreeDCardEffect>
    </div>
  )
}`}
                language="jsx"
                onCopy={copyToClipboard}
                isCopied={copiedSnippet === "basic-usage"}
              />
              
              <h3 className="text-xl font-semibold mt-8 mb-3">Exploring the Library</h3>
              <p className="mb-4">You can explore all available components and their usage examples in our component browser:</p>
              
              <div className="mt-6">
                <Link 
                  href="/components" 
                  className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Browse Components
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className={activeSection === "component-structure" ? "block" : "hidden"}>
              <SectionTitle>Component Structure</SectionTitle>
              <p className="mb-6">Understanding the structure of our components will help you use them effectively in your projects.</p>
              
              <h3 className="text-xl font-semibold mb-3">Component Architecture</h3>
              <p className="mb-4">Each component in the library follows a consistent structure:</p>
              
              <ul className="list-disc ml-6 mb-6 space-y-2">
                <li><strong>Props Interface</strong>: Well-defined TypeScript interfaces for all props</li>
                <li><strong>Default Props</strong>: Sensible defaults for optional props</li>
                <li><strong>Component Logic</strong>: Clean separation of logic and presentation</li>
                <li><strong>Styling</strong>: Tailwind CSS for styling with customization options</li>
                <li><strong>Documentation</strong>: Comprehensive JSDoc comments</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-8 mb-3">Component Anatomy</h3>
              <p className="mb-4">Let's look at the structure of a typical component:</p>
              
              <CodeSnippet 
                id="component-structure"
                code={`/**
 * Interface for ThreeDCardEffect component props
 */
export interface ThreeDCardEffectProps {
  /** The content to be displayed inside the card */
  children: React.ReactNode;
  /** Maximum rotation angle in degrees (1-20) */
  rotationIntensity?: number;
  /** Intensity of the glare effect (0-100) */
  glareIntensity?: number;
  /** Custom border radius in pixels */
  borderRadius?: number;
  /** Whether to show shadow effect */
  shadow?: boolean;
  /** Additional class names to apply to the card */
  className?: string;
}

/**
 * A card component with interactive 3D effect on hover
 * 
 * @example
 * <ThreeDCardEffect rotationIntensity={10} glareIntensity={20}>
 *   <div className="p-6">Card content goes here</div>
 * </ThreeDCardEffect>
 */
export default function ThreeDCardEffect({
  children,
  rotationIntensity = 10,
  glareIntensity = 25,
  borderRadius = 8,
  shadow = true,
  className = "",
}: ThreeDCardEffectProps) {
  // Component implementation...
}`}
                language="tsx"
                onCopy={copyToClipboard}
                isCopied={copiedSnippet === "component-structure"}
              />
              
              <h3 className="text-xl font-semibold mt-8 mb-3">Component Pages</h3>
              <p className="mb-4">Each component in our library has a dedicated page with:</p>
              
              <ul className="list-disc ml-6 mb-6 space-y-2">
                <li><strong>Interactive Preview</strong>: See the component in action</li>
                <li><strong>Customization Options</strong>: Adjust props to see how they affect the component</li>
                <li><strong>Component Code</strong>: View the complete source code</li>
                <li><strong>Usage Examples</strong>: Copy-paste examples for common use cases</li>
                <li><strong>API Reference</strong>: Detailed documentation of all available props</li>
              </ul>
            </div>

            <div className={activeSection === "usage-guidelines" ? "block" : "hidden"}>
              <SectionTitle>Usage Guidelines</SectionTitle>
              <p className="mb-6">Follow these guidelines to get the most out of the UI component library.</p>
              
              <h3 className="text-xl font-semibold mb-3">Importing Components</h3>
              <p className="mb-4">You can import components individually to optimize bundle size:</p>
              
              <CodeSnippet 
                id="import-individual"
                code={`import { ThreeDCardEffect, ThreeDMarquee } from 'ui-component-library'`}
                language="jsx"
                onCopy={copyToClipboard}
                isCopied={copiedSnippet === "import-individual"}
              />
              
              <h3 className="text-xl font-semibold mt-8 mb-3">Customizing Components</h3>
              <p className="mb-4">All components accept a <code className="bg-gray-100 px-1 py-0.5 rounded dark:bg-gray-800">className</code> prop for custom styling:</p>
              
              <CodeSnippet 
                id="custom-styling"
                code={`<ThreeDCardEffect
  className="my-custom-card"
  rotationIntensity={15}
  glareIntensity={30}
>
  <div className="p-6">
    <h2 className="text-xl font-bold">Custom Card</h2>
    <p>With custom styling and props</p>
  </div>
</ThreeDCardEffect>`}
                language="jsx"
                onCopy={copyToClipboard}
                isCopied={copiedSnippet === "custom-styling"}
              />
              
              <h3 className="text-xl font-semibold mt-8 mb-3">Responsive Behavior</h3>
              <p className="mb-4">Components are designed to be responsive, but you can control their behavior with responsive utility classes:</p>
              
              <CodeSnippet 
                id="responsive-example"
                code={`<ThreeDCardEffect 
  className="w-full md:w-1/2 lg:w-1/3"
>
  <div className="p-6">
    <h2>Responsive Card</h2>
    <p>This card will adjust its width based on screen size</p>
  </div>
</ThreeDCardEffect>`}
                language="jsx"
                onCopy={copyToClipboard}
                isCopied={copiedSnippet === "responsive-example"}
              />
              
              <h3 className="text-xl font-semibold mt-8 mb-3">Accessibility</h3>
              <p className="mb-4">Our components are built with accessibility in mind. Here are some best practices:</p>
              
              <ul className="list-disc ml-6 mb-6 space-y-2">
                <li>Use semantic HTML within component content</li>
                <li>Provide appropriate alt text for images</li>
                <li>Ensure sufficient color contrast in your content</li>
                <li>Test with keyboard navigation and screen readers</li>
              </ul>
            </div>

            <div className={activeSection === "development-workflow" ? "block" : "hidden"}>
              <SectionTitle>Development Workflow</SectionTitle>
              <p className="mb-6">If you're contributing to the library or developing new components, follow this workflow.</p>
              
              <h3 className="text-xl font-semibold mb-3">Setting Up the Development Environment</h3>
              <p className="mb-4">Clone the repository and install dependencies:</p>
              
              <CodeSnippet 
                id="dev-setup"
                code={`git clone https://github.com/yourusername/ui-component-library.git
cd ui-component-library
npm install`}
                language="bash"
                onCopy={copyToClipboard}
                isCopied={copiedSnippet === "dev-setup"}
              />
              
              <h3 className="text-xl font-semibold mt-8 mb-3">Component Development Process</h3>
              <p className="mb-4">Follow these steps when creating a new component:</p>
              
              <ol className="list-decimal ml-6 mb-6 space-y-4">
                <li>
                  <p className="font-medium">Create the component file in the appropriate directory:</p>
                  <CodeSnippet 
                    id="create-component"
                    code={`// components/library/ui/my-component.tsx
import { useState } from 'react'

export interface MyComponentProps {
  // Define props here
}

export default function MyComponent({ /* props */ }: MyComponentProps) {
  // Component implementation
}`}
                    language="tsx"
                    onCopy={copyToClipboard}
                    isCopied={copiedSnippet === "create-component"}
                  />
                </li>
                <li>
                  <p className="font-medium">Write tests for your component:</p>
                  <CodeSnippet 
                    id="write-tests"
                    code={`// components/library/ui/__tests__/my-component.test.tsx
import { render, screen } from '@testing-library/react'
import MyComponent from '../my-component'

describe('MyComponent', () => {
  it('renders without crashing', () => {
    render(<MyComponent />)
    // Add assertions
  })
})`}
                    language="tsx"
                    onCopy={copyToClipboard}
                    isCopied={copiedSnippet === "write-tests"}
                  />
                </li>
                <li>
                  <p className="font-medium">Create a demo page:</p>
                  <CodeSnippet 
                    id="create-demo"
                    code={`// app/components/my-component/page.tsx
"use client"

import ComponentTemplate from "@/app/components/component-template"
import { MyComponent } from '@/components/library/ui'
import { useState } from 'react'

export default function MyComponentPage() {
  // Demo page implementation following the template
}`}
                    language="tsx"
                    onCopy={copyToClipboard}
                    isCopied={copiedSnippet === "create-demo"}
                  />
                </li>
                <li>
                  <p className="font-medium">Update the exports in the index file:</p>
                  <CodeSnippet 
                    id="update-exports"
                    code={`// components/library/ui/index.ts
// ... existing exports
export { default as MyComponent } from './my-component'`}
                    language="tsx"
                    onCopy={copyToClipboard}
                    isCopied={copiedSnippet === "update-exports"}
                  />
                </li>
              </ol>
              
              <h3 className="text-xl font-semibold mt-8 mb-3">Testing Components</h3>
              <p className="mb-4">Run tests to ensure your component works as expected:</p>
              
              <CodeSnippet 
                id="run-tests"
                code={`npm test

# Or to run tests for a specific component
npm test -- -t "MyComponent"`}
                language="bash"
                onCopy={copyToClipboard}
                isCopied={copiedSnippet === "run-tests"}
              />
            </div>

            <div className={activeSection === "api-reference" ? "block" : "hidden"}>
              <SectionTitle>API Reference</SectionTitle>
              <p className="mb-6">Detailed API reference for all components in the library.</p>
              
              <h3 className="text-xl font-semibold mb-3">Component Index</h3>
              <p className="mb-4">Here's a list of all available components:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <APIReferenceCard
                  name="ThreeDCardEffect"
                  description="Card with interactive 3D effect on hover"
                  href="/components/3d-card-effect"
                />
                <APIReferenceCard
                  name="ThreeDMarquee"
                  description="Animated marquee with 3D rotation effect"
                  href="/components/3d-marquee"
                />
                <APIReferenceCard
                  name="ThreeDPin"
                  description="Interactive pin component for maps"
                  href="/components/3d-pin"
                />
                {/* Add more components here */}
              </div>
              
              <h3 className="text-xl font-semibold mt-8 mb-3">Common Props</h3>
              <p className="mb-4">Many components share these common props:</p>
              
              <table className="w-full border-collapse mb-8">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-900">
                    <th className="text-left p-3 border border-gray-300 dark:border-gray-700">Prop</th>
                    <th className="text-left p-3 border border-gray-300 dark:border-gray-700">Type</th>
                    <th className="text-left p-3 border border-gray-300 dark:border-gray-700">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-300 dark:border-gray-700"><code>className</code></td>
                    <td className="p-3 border border-gray-300 dark:border-gray-700"><code>string</code></td>
                    <td className="p-3 border border-gray-300 dark:border-gray-700">Additional CSS classes to apply</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                    <td className="p-3 border border-gray-300 dark:border-gray-700"><code>children</code></td>
                    <td className="p-3 border border-gray-300 dark:border-gray-700"><code>React.ReactNode</code></td>
                    <td className="p-3 border border-gray-300 dark:border-gray-700">Content to render inside the component</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-300 dark:border-gray-700"><code>style</code></td>
                    <td className="p-3 border border-gray-300 dark:border-gray-700"><code>React.CSSProperties</code></td>
                    <td className="p-3 border border-gray-300 dark:border-gray-700">Inline styles to apply</td>
                  </tr>
                </tbody>
              </table>
              
              <p className="mb-4">For component-specific props, please refer to each component's documentation page.</p>
            </div>

            <div className={activeSection === "contribution-guide" ? "block" : "hidden"}>
              <SectionTitle>Contribution Guide</SectionTitle>
              <p className="mb-6">Learn how to contribute to the UI Component Library.</p>
              
              <h3 className="text-xl font-semibold mb-3">Contribution Process</h3>
              <p className="mb-4">We welcome contributions from the community! Here's how to contribute:</p>
              
              <ol className="list-decimal ml-6 mb-6 space-y-3">
                <li>Fork the repository on GitHub</li>
                <li>Clone your fork to your local machine</li>
                <li>Create a new branch for your feature or fix</li>
                <li>Make your changes following our coding standards</li>
                <li>Write or update tests as needed</li>
                <li>Update documentation to reflect your changes</li>
                <li>Submit a pull request with a clear description of the changes</li>
              </ol>
              
              <h3 className="text-xl font-semibold mt-8 mb-3">Coding Standards</h3>
              <p className="mb-4">Please follow these coding standards when contributing:</p>
              
              <ul className="list-disc ml-6 mb-6 space-y-2">
                <li>Use TypeScript for all components</li>
                <li>Follow the existing code style and formatting</li>
                <li>Write comprehensive JSDoc comments</li>
                <li>Ensure all components have proper prop type definitions</li>
                <li>Write tests for all new functionality</li>
                <li>Use semantic component names</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-8 mb-3">Pull Request Guidelines</h3>
              <p className="mb-4">When submitting a pull request:</p>
              
              <ul className="list-disc ml-6 mb-6 space-y-2">
                <li>Provide a clear and detailed description of your changes</li>
                <li>Include references to any related issues</li>
                <li>Ensure all tests pass</li>
                <li>Update documentation as needed</li>
                <li>Include screenshots or GIFs for UI changes if possible</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-8 mb-3">Get in Touch</h3>
              <p className="mb-4">If you have questions or need help with your contribution, feel free to:</p>
              
              <ul className="list-disc ml-6 mb-6 space-y-2">
                <li>Open an issue on GitHub</li>
                <li>Join our Discord community</li>
                <li>Email the maintainers at support@ui-component-library.com</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Page Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              © 2023 UI Component Library. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                Dashboard
              </Link>
              <Link href="/components" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                Components
              </Link>
              <a href="https://github.com/yourusername/ui-component-library" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper Components

interface NavItemProps {
  id: string
  children: React.ReactNode
  active: boolean
  onClick: () => void
  icon: React.ReactNode
}

function NavItem({ id, children, active, onClick, icon }: NavItemProps) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`w-full flex items-center px-3 py-2 text-left rounded-md transition-colors duration-200 ${
        active 
          ? "bg-blue-100 text-blue-800 font-medium dark:bg-blue-900 dark:text-blue-200" 
          : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
      }`}
    >
      <span className="mr-2">
        {icon}
      </span>
      {children}
    </button>
  )
}

interface SectionTitleProps {
  children: React.ReactNode
}

function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
      {children}
    </h2>
  )
}

interface CodeSnippetProps {
  id: string
  code: string
  language: string
  onCopy: (code: string, id: string) => void
  isCopied: boolean
}

function CodeSnippet({ id, code, language, onCopy, isCopied }: CodeSnippetProps) {
  return (
    <div className="relative group">
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto dark:bg-gray-900 mb-6">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <button
        onClick={() => onCopy(code, id)}
        className="absolute top-2 right-2 p-2 bg-white rounded-md shadow-sm border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Copy code"
      >
        {isCopied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-gray-500" />
        )}
      </button>
    </div>
  )
}

interface APIReferenceCardProps {
  name: string
  description: string
  href: string
}

function APIReferenceCard({ name, description, href }: APIReferenceCardProps) {
  return (
    <Link 
      href={href} 
      className="block p-4 border border-gray-200 rounded-md hover:border-blue-500 transition-colors duration-200 dark:border-gray-700 dark:hover:border-blue-500"
    >
      <h4 className="font-medium mb-1">{name}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </Link>
  )
}

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-20
 * Description: Initial implementation of the documentation page
 * Reason: To provide comprehensive guidelines for using and contributing to the component library
 * Impact: None - new page
 * Version: 1.0.0
 */ 