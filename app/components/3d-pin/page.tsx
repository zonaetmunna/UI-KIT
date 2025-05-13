"use client"

import ComponentTemplate from "@/app/components/component-template"
import { ThreeDPin } from '@/components/library/ui'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { useState } from 'react'

export default function ThreeDPinPage() {
  const title = "3D Pin"
  const description = "A realistic 3D map pin/marker with customizable appearance and hover animations."
  
  // Example pin for preview
  const ExamplePin = () => (
    <div className="flex flex-wrap gap-8 items-end justify-center">
      <div className="flex flex-col items-center">
        <ThreeDPin size={60} color="#FF5353" />
        <p className="mt-4 text-sm text-muted-foreground">Default</p>
      </div>
      
      <div className="flex flex-col items-center">
        <ThreeDPin size={80} color="#4CAF50" showShadow={false} />
        <p className="mt-4 text-sm text-muted-foreground">No Shadow</p>
      </div>
      
      <div className="flex flex-col items-center">
        <ThreeDPin size={60} color="#2196F3" animateOnHover={false} />
        <p className="mt-4 text-sm text-muted-foreground">No Animation</p>
      </div>
      
      <div className="flex flex-col items-center">
        <ThreeDPin size={100} color="#9C27B0" shadowIntensity={0.7} />
        <p className="mt-4 text-sm text-muted-foreground">Larger</p>
      </div>
    </div>
  )
  
  // Customization state
  const [color, setColor] = useState("#FF5353")
  const [size, setSize] = useState(60)
  const [showShadow, setShowShadow] = useState(true)
  const [shadowIntensity, setShadowIntensity] = useState(0.4)
  const [animateOnHover, setAnimateOnHover] = useState(true)

  // Customization UI
  const CustomizationUI = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div className="space-y-6">
        <div>
          <Label className="mb-2 block">Color</Label>
          <div className="flex space-x-2">
            <Input 
              type="color" 
              value={color} 
              onChange={(e) => setColor(e.target.value)} 
              className="w-16 h-10 p-1"
            />
            <Input 
              type="text" 
              value={color} 
              onChange={(e) => setColor(e.target.value)} 
              className="w-32"
            />
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <Label>Size: {size}px</Label>
          </div>
          <Slider 
            value={[size]} 
            min={20} 
            max={150} 
            step={5} 
            onValueChange={(value) => setSize(value[0])} 
          />
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <Label>Shadow Intensity: {shadowIntensity.toFixed(1)}</Label>
          </div>
          <Slider 
            value={[shadowIntensity * 10]} 
            min={0} 
            max={10} 
            step={1} 
            onValueChange={(value) => setShadowIntensity(value[0] / 10)} 
            disabled={!showShadow}
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch 
            id="show-shadow" 
            checked={showShadow}
            onCheckedChange={setShowShadow}
          />
          <Label htmlFor="show-shadow">Show Shadow</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch 
            id="animate-on-hover" 
            checked={animateOnHover}
            onCheckedChange={setAnimateOnHover}
          />
          <Label htmlFor="animate-on-hover">Animate on Hover</Label>
        </div>
      </div>
      
      <div className="bg-zinc-950 rounded-lg p-6 flex items-center justify-center h-[300px]">
        <ThreeDPin 
          color={color}
          size={size}
          showShadow={showShadow}
          shadowIntensity={shadowIntensity}
          animateOnHover={animateOnHover}
          className="transform-gpu"
        />
      </div>
    </div>
  )

  // API Reference table
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
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">color</td>
          <td className="py-4 px-4 align-top text-muted-foreground">string</td>
          <td className="py-4 px-4 align-top text-muted-foreground">"#FF5353"</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Base color of the pin
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">size</td>
          <td className="py-4 px-4 align-top text-muted-foreground">number</td>
          <td className="py-4 px-4 align-top text-muted-foreground">60</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Size of the pin in pixels
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">showShadow</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">true</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Whether to show the shadow under the pin
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">shadowIntensity</td>
          <td className="py-4 px-4 align-top text-muted-foreground">number</td>
          <td className="py-4 px-4 align-top text-muted-foreground">0.4</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Intensity of the shadow (0-1)
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">animateOnHover</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">true</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Whether to animate the pin on hover
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">className</td>
          <td className="py-4 px-4 align-top text-muted-foreground">string</td>
          <td className="py-4 px-4 align-top text-muted-foreground">undefined</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Additional class names to apply to the pin
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">onClick</td>
          <td className="py-4 px-4 align-top text-muted-foreground">function</td>
          <td className="py-4 px-4 align-top text-muted-foreground">undefined</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Function to call when the pin is clicked
          </td>
        </tr>
      </tbody>
    </table>
  )

  // Source code of the component
  const componentCode = `import { cn } from '@/lib/utils';
import React, { useRef } from 'react';

export interface ThreeDPinProps {
  /**
   * Base color of the pin
   * @default "#FF5353"
   */
  color?: string;
  
  /**
   * Size of the pin in pixels
   * @default 60
   */
  size?: number;
  
  /**
   * Whether to show the shadow under the pin
   * @default true
   */
  showShadow?: boolean;
  
  /**
   * Intensity of the shadow (0-1)
   * @default 0.4
   */
  shadowIntensity?: number;
  
  /**
   * Whether to animate the pin on hover
   * @default true
   */
  animateOnHover?: boolean;
  
  /**
   * Optional CSS class name
   */
  className?: string;
  
  /**
   * Optional click handler
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

/**
 * 3D Pin Component
 * 
 * A realistic 3D map pin/marker with customizable appearance and hover animations.
 * Can be used in map interfaces, location markers, or anywhere a pin metaphor is needed.
 */
export default function ThreeDPin({
  color = "#FF5353",
  size = 60,
  showShadow = true,
  shadowIntensity = 0.4,
  animateOnHover = true,
  className,
  onClick,
  ...props
}: ThreeDPinProps) {
  // Create refs for animation purposes
  const pinRef = useRef<HTMLDivElement>(null);
  
  // Calculate derived sizes based on the main size
  const pinHeadSize = size;
  const pinBodyHeight = size * 0.8;
  const pinTipSize = size * 0.5;
  
  // Generate shadow styles
  const shadowStyle = showShadow ? {
    boxShadow: \`0 \${size * 0.2}px \${size * 0.5}px rgba(0, 0, 0, \${shadowIntensity})\`,
  } : {};
  
  // Generate hover animation class
  const hoverClass = animateOnHover ? 'hover:translate-y-[-10%] hover:scale-105' : '';
  
  return (
    <div 
      ref={pinRef}
      className={cn(
        'relative inline-block transform-gpu transition-transform duration-300 ease-out',
        hoverClass,
        className
      )}
      style={{ 
        height: \`\${pinHeadSize + pinBodyHeight}px\`,
        width: \`\${pinHeadSize}px\`,
      }}
      onClick={onClick}
      {...props}
    >
      {/* Pin head (circle part) */}
      <div
        className="absolute top-0 left-0 right-0 rounded-full transform-gpu"
        style={{
          backgroundColor: color,
          height: \`\${pinHeadSize}px\`,
          width: \`\${pinHeadSize}px\`,
          ...shadowStyle,
        }}
      >
        {/* Inner circle highlight */}
        <div 
          className="absolute rounded-full opacity-70"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            height: \`\${pinHeadSize * 0.3}px\`,
            width: \`\${pinHeadSize * 0.3}px\`,
            top: \`\${pinHeadSize * 0.15}px\`,
            left: \`\${pinHeadSize * 0.15}px\`,
          }}
        />
      </div>
      
      {/* Pin body (cone part) */}
      <div 
        className="absolute bottom-0 overflow-hidden transform-gpu"
        style={{
          height: \`\${pinBodyHeight}px\`,
          width: \`\${pinHeadSize}px\`,
          top: \`\${pinHeadSize * 0.5}px\`,
        }}
      >
        {/* Cone shape created using a pseudo-element */}
        <div 
          className="absolute top-0 left-0 right-0 transform-gpu"
          style={{
            backgroundColor: color,
            height: \`\${pinBodyHeight}px\`,
            clipPath: \`polygon(50% 100%, 0 0, 100% 0)\`,
            filter: 'brightness(0.7)',
          }}
        />
      </div>
      
      {/* Shadow on the ground (optional) */}
      {showShadow && (
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full bg-black opacity-30 blur-sm"
          style={{
            height: \`\${pinTipSize * 0.4}px\`,
            width: \`\${pinTipSize}px\`,
          }}
        />
      )}
    </div>
  );
}`

  // Example usage code
  const usageCode = `import { ThreeDPin } from '@/components/library'

// Basic usage with default settings
export function BasicExample() {
  return <ThreeDPin />
}

// Customized pin with different color and size
export function CustomExample() {
  return (
    <ThreeDPin 
      color="#4CAF50" 
      size={80}
    />
  )
}

// Pin with click handler for interactivity
export function InteractiveExample() {
  const handlePinClick = () => {
    alert('Pin clicked!')
  }

  return (
    <ThreeDPin 
      color="#2196F3" 
      onClick={handlePinClick}
    />
  )
}

// Multiple pins with different stylings
export function MapExample() {
  return (
    <div className="relative h-[300px] w-full bg-gray-100 rounded-lg">
      {/* Pin positioned at different locations */}
      <div className="absolute top-[30%] left-[20%]">
        <ThreeDPin color="#FF5353" size={40} />
      </div>
      
      <div className="absolute top-[60%] left-[50%]">
        <ThreeDPin color="#4CAF50" size={60} />
      </div>
      
      <div className="absolute top-[40%] left-[80%]">
        <ThreeDPin color="#2196F3" size={50} />
      </div>
    </div>
  )
}`

  return (
    <ComponentTemplate
      title={title}
      description={description}
      component={<ExamplePin />}
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
 * Date: 2023-07-20
 * Description: Initial implementation of the 3D Pin demo page
 * Reason: To provide documentation and examples for the 3D Pin component
 * Impact: None - new page
 * Version: 1.0.0
 */
