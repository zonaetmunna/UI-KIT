"use client"

import ComponentTemplate from "@/app/components/component-template"
import { useState } from 'react'

/**
 * This file serves as a template for creating new component pages.
 * Copy this file and modify it for each new component you add to the library.
 * 
 * Replace all occurrences of "NewComponent" with your component name.
 * Fill in all sections with appropriate content for your component.
 */
export default function NewComponentPage() {
  // Basic component information
  const title = "New Component"
  const description = "A brief description of what the component does and its purpose."
  
  // Example component for preview section
  const ExampleComponent = () => (
    <div className="flex flex-wrap gap-8 items-center justify-center">
      {/* Include examples of your component with different configurations */}
      <div className="flex flex-col items-center">
        {/* Example 1 */}
        <div className="p-8 bg-zinc-900 rounded-lg">
          {/* <YourComponent prop1="value1" /> */}
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-medium">Example</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Default</p>
      </div>
      
      <div className="flex flex-col items-center">
        {/* Example 2 */}
        <div className="p-8 bg-zinc-900 rounded-lg">
          {/* <YourComponent prop1="value2" prop2={true} /> */}
          <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-medium">Variant</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">With Options</p>
      </div>
    </div>
  )
  
  // Customization state
  // Define state variables for each customizable property of your component
  const [someProp, setSomeProp] = useState("default value")
  const [anotherProp, setAnotherProp] = useState(true)
  const [numericProp, setNumericProp] = useState(50)

  // Customization UI
  // Create UI controls for each customizable property
  const CustomizationUI = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div className="space-y-6">
        {/* Customization controls go here */}
        {/* Example slider control */}
        {/* 
        <div>
          <div className="flex justify-between mb-2">
            <Label>Numeric Property: {numericProp}</Label>
          </div>
          <Slider 
            value={[numericProp]} 
            min={0} 
            max={100} 
            step={1} 
            onValueChange={(value) => setNumericProp(value[0])} 
          />
        </div>
        */}
        
        {/* Example switch control */}
        {/* 
        <div className="flex items-center space-x-2">
          <Switch 
            id="another-prop" 
            checked={anotherProp}
            onCheckedChange={setAnotherProp}
          />
          <Label htmlFor="another-prop">Toggle Feature</Label>
        </div>
        */}
      </div>
      
      <div className="bg-zinc-950 rounded-lg p-6 flex items-center justify-center h-[300px]">
        {/* Live preview with current customization settings */}
        {/* 
        <YourComponent 
          someProp={someProp}
          anotherProp={anotherProp}
          numericProp={numericProp}
        />
        */}
        <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-medium">Customizable Preview</span>
        </div>
      </div>
    </div>
  )

  // API Reference table
  // Document all props and their types, defaults, and descriptions
  const APIReference = (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="bg-muted/50">
          <th className="py-4 px-4 text-left font-medium">Prop</th>
          <th className="py-4 px-4 text-left font-medium">Type</th>
          <th className="py-4 px-4 text-left font-medium">Default</th>
          <th className="py-4 px-4 text-left font-medium">Description</th>
        </tr>
      </thead>
      <tbody>
        {/* Document each prop of your component */}
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">someProp</td>
          <td className="py-4 px-4 align-top text-muted-foreground">string</td>
          <td className="py-4 px-4 align-top text-muted-foreground">"default"</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Description of what this prop does and how to use it.
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">anotherProp</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">true</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Description of what this prop does and how to use it.
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">numericProp</td>
          <td className="py-4 px-4 align-top text-muted-foreground">number</td>
          <td className="py-4 px-4 align-top text-muted-foreground">50</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Description of what this prop does and how to use it.
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">className</td>
          <td className="py-4 px-4 align-top text-muted-foreground">string</td>
          <td className="py-4 px-4 align-top text-muted-foreground">undefined</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Additional class names to apply to the component.
          </td>
        </tr>
      </tbody>
    </table>
  )

  // Source code of the component
  // Include the actual source code of your component
  const componentCode = `import { cn } from '@/lib/utils';
import React from 'react';

export interface YourComponentProps {
  /**
   * Description of someProp
   * @default "default"
   */
  someProp?: string;
  
  /**
   * Description of anotherProp
   * @default true
   */
  anotherProp?: boolean;
  
  /**
   * Description of numericProp
   * @default 50
   */
  numericProp?: number;
  
  /**
   * Optional CSS class name
   */
  className?: string;
}

/**
 * Your Component
 * 
 * A detailed description of what your component does, its features,
 * and how it should be used.
 */
export default function YourComponent({
  someProp = "default",
  anotherProp = true,
  numericProp = 50,
  className,
  ...props
}: YourComponentProps) {
  // Component implementation
  
  return (
    <div 
      className={cn(
        'your-base-classes',
        anotherProp && 'class-when-anotherProp-is-true',
        className
      )}
      style={{
        // Your component styles
      }}
      {...props}
    >
      {/* Your component content */}
      <div>
        {someProp}
        {numericProp}
      </div>
    </div>
  );
}`

  // Example usage code
  // Provide examples of how to use your component
  const usageCode = `import { YourComponent } from '@/components/library'

// Basic usage with default settings
export function BasicExample() {
  return <YourComponent />
}

// Customized component
export function CustomExample() {
  return (
    <YourComponent 
      someProp="custom value" 
      anotherProp={false}
      numericProp={75}
    />
  )
}

// Multiple components with different configurations
export function MultipleExample() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <YourComponent someProp="First" />
      <YourComponent someProp="Second" anotherProp={false} />
      <YourComponent someProp="Third" numericProp={25} />
      <YourComponent someProp="Fourth" numericProp={75} anotherProp={false} />
    </div>
  )
}`

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
 * Description: Initial implementation of the component page
 * Reason: To provide documentation and examples for the component
 * Impact: None - new page
 * Version: 1.0.0
 */ 