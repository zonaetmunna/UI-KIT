"use client"

import ComponentTemplate from "@/app/components/component-template"
import { useState } from 'react'

export default function ContainerTextFlipPage() {
  const title = "Container Text Flip"
  const description = "A component that creates an interactive container with text that flips or rotates between different values on hover or at regular intervals."
  
  // Example component for preview
  const ExampleComponent = () => {
    const [selectedExample, setSelectedExample] = useState<'hover' | 'auto'>('hover')
    
    return (
      <div className="w-full flex flex-col items-center space-y-8">
        <div className="flex space-x-4">
          <button 
            onClick={() => setSelectedExample('hover')}
            className={`px-4 py-2 rounded-md ${selectedExample === 'hover' ? 'bg-blue-600 text-white' : 'bg-zinc-800'}`}
          >
            Hover Example
          </button>
          <button 
            onClick={() => setSelectedExample('auto')}
            className={`px-4 py-2 rounded-md ${selectedExample === 'auto' ? 'bg-blue-600 text-white' : 'bg-zinc-800'}`}
          >
            Auto-Flip Example
          </button>
        </div>
        
        {selectedExample === 'hover' ? (
          <div className="relative w-72 h-48 bg-gradient-to-r from-indigo-800 to-purple-800 rounded-lg overflow-hidden group flex items-center justify-center cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full">
              <span className="text-white text-xl font-semibold">Hover me</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
              <span className="text-white text-xl font-semibold">Hello there!</span>
            </div>
          </div>
        ) : (
          <div className="relative w-72 h-48 bg-gradient-to-r from-blue-700 to-teal-600 rounded-lg overflow-hidden flex items-center justify-center">
            <div className="flex flex-col items-center">
              <span className="text-white text-lg font-semibold mb-2">I am a</span>
              <div className="h-10 overflow-hidden">
                <div className="animate-text-slide flex flex-col text-center">
                  <span className="text-white text-xl font-bold h-10">Developer</span>
                  <span className="text-white text-xl font-bold h-10">Designer</span>
                  <span className="text-white text-xl font-bold h-10">Creator</span>
                  <span className="text-white text-xl font-bold h-10">Developer</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
  
  // Customization state
  const [flipType, setFlipType] = useState<'hover' | 'auto'>('hover')
  const [direction, setDirection] = useState<'vertical' | 'horizontal'>('vertical')
  const [speed, setSpeed] = useState(500)
  const [textItems, setTextItems] = useState(['First', 'Second', 'Third'])
  const [containerStyle, setContainerStyle] = useState<'gradient' | 'solid' | 'outlined'>('gradient')
  
  // Customization UI
  const CustomizationUI = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Flip Type</label>
          <div className="flex space-x-2">
            <button 
              onClick={() => setFlipType('hover')}
              className={`px-3 py-1 rounded ${flipType === 'hover' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Hover
            </button>
            <button 
              onClick={() => setFlipType('auto')}
              className={`px-3 py-1 rounded ${flipType === 'auto' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Auto
            </button>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Flip Direction</label>
          <div className="flex space-x-2">
            <button 
              onClick={() => setDirection('vertical')}
              className={`px-3 py-1 rounded ${direction === 'vertical' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Vertical
            </button>
            <button 
              onClick={() => setDirection('horizontal')}
              className={`px-3 py-1 rounded ${direction === 'horizontal' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Horizontal
            </button>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Container Style</label>
          <div className="flex space-x-2">
            <button 
              onClick={() => setContainerStyle('gradient')}
              className={`px-3 py-1 rounded ${containerStyle === 'gradient' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Gradient
            </button>
            <button 
              onClick={() => setContainerStyle('solid')}
              className={`px-3 py-1 rounded ${containerStyle === 'solid' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Solid
            </button>
            <button 
              onClick={() => setContainerStyle('outlined')}
              className={`px-3 py-1 rounded ${containerStyle === 'outlined' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Outlined
            </button>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Transition Speed (ms)</label>
          <div className="flex items-center space-x-4">
            <input 
              type="range" 
              min="100" 
              max="2000" 
              step="100" 
              value={speed} 
              onChange={(e) => setSpeed(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="font-mono text-sm">{speed}ms</span>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Text Items (comma separated)</label>
          <input
            type="text"
            value={textItems.join(', ')}
            onChange={(e) => setTextItems(e.target.value.split(',').map(item => item.trim()))}
            className="bg-zinc-800 px-3 py-2 rounded-md border border-zinc-700"
            placeholder="Enter text items separated by commas"
          />
        </div>
      </div>
      
      <div className="bg-zinc-950 rounded-lg p-6 flex items-center justify-center">
        <div className={`
          relative w-72 h-48 rounded-lg overflow-hidden 
          ${containerStyle === 'gradient' 
            ? 'bg-gradient-to-r from-indigo-800 to-purple-800' 
            : containerStyle === 'solid' 
              ? 'bg-indigo-700' 
              : 'bg-transparent border-2 border-indigo-600'
          }
          ${flipType === 'hover' ? 'group cursor-pointer' : ''}
          flex items-center justify-center
        `}>
          {flipType === 'hover' ? (
            <>
              <div 
                className={`
                  absolute inset-0 flex items-center justify-center 
                  transition-transform duration-${speed} ease-in-out transform 
                  ${direction === 'vertical' 
                    ? 'group-hover:-translate-y-full' 
                    : 'group-hover:-translate-x-full'
                  }
                `}
              >
                <span className={`${containerStyle === 'outlined' ? 'text-indigo-300' : 'text-white'} text-xl font-semibold`}>
                  {textItems[0] || 'First'}
                </span>
              </div>
              <div 
                className={`
                  absolute inset-0 flex items-center justify-center 
                  transition-transform duration-${speed} ease-in-out transform 
                  ${direction === 'vertical' 
                    ? 'translate-y-full group-hover:translate-y-0' 
                    : 'translate-x-full group-hover:translate-x-0'
                  }
                `}
              >
                <span className={`${containerStyle === 'outlined' ? 'text-indigo-300' : 'text-white'} text-xl font-semibold`}>
                  {textItems[1] || 'Second'}
                </span>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <span className={`${containerStyle === 'outlined' ? 'text-indigo-300' : 'text-white'} text-lg font-semibold mb-2`}>
                I am a
              </span>
              <div className="h-10 overflow-hidden">
                <div 
                  className="flex flex-col text-center animate-text-slide"
                  style={{
                    animation: `slide-text ${textItems.length * (speed/1000)}s infinite`
                  }}
                >
                  {textItems.map((item, index) => (
                    <span 
                      key={index} 
                      className={`${containerStyle === 'outlined' ? 'text-indigo-300' : 'text-white'} text-xl font-bold h-10`}
                    >
                      {item}
                    </span>
                  ))}
                  <span 
                    className={`${containerStyle === 'outlined' ? 'text-indigo-300' : 'text-white'} text-xl font-bold h-10`}
                  >
                    {textItems[0]}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
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
          <td className="py-4 px-4 align-top font-mono text-xs">flipType</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'hover' | 'auto'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'hover'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Whether the text flips on hover or automatically at intervals
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">direction</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'vertical' | 'horizontal'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'vertical'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            The direction of the flip animation
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">speed</td>
          <td className="py-4 px-4 align-top text-muted-foreground">number</td>
          <td className="py-4 px-4 align-top text-muted-foreground">500</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            The speed of the transition in milliseconds
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">textItems</td>
          <td className="py-4 px-4 align-top text-muted-foreground">string[]</td>
          <td className="py-4 px-4 align-top text-muted-foreground">['First', 'Second']</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Array of text items to display in the container
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">containerStyle</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'gradient' | 'solid' | 'outlined'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'gradient'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            The visual style of the container
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">interval</td>
          <td className="py-4 px-4 align-top text-muted-foreground">number</td>
          <td className="py-4 px-4 align-top text-muted-foreground">3000</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Interval time between text changes in auto mode (ms)
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">className</td>
          <td className="py-4 px-4 align-top text-muted-foreground">string</td>
          <td className="py-4 px-4 align-top text-muted-foreground">undefined</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Additional class names for the container
          </td>
        </tr>
      </tbody>
    </table>
  )

  // Source code of the component
  const componentCode = `import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';

export interface ContainerTextFlipProps {
  /**
   * Whether the text flips on hover or automatically at intervals
   * @default "hover"
   */
  flipType?: 'hover' | 'auto';
  
  /**
   * The direction of the flip animation
   * @default "vertical"
   */
  direction?: 'vertical' | 'horizontal';
  
  /**
   * The speed of the transition in milliseconds
   * @default 500
   */
  speed?: number;
  
  /**
   * Array of text items to display in the container
   * @default ['First', 'Second']
   */
  textItems?: string[];
  
  /**
   * The visual style of the container
   * @default "gradient"
   */
  containerStyle?: 'gradient' | 'solid' | 'outlined';
  
  /**
   * Interval time between text changes in auto mode (ms)
   * @default 3000
   */
  interval?: number;
  
  /**
   * Additional class names
   */
  className?: string;
  
  /**
   * Additional props
   */
  [key: string]: any;
}

/**
 * ContainerTextFlip Component
 * 
 * A component that creates an interactive container with text that flips
 * or rotates between different values on hover or at regular intervals.
 */
export function ContainerTextFlip({
  flipType = 'hover',
  direction = 'vertical',
  speed = 500,
  textItems = ['First', 'Second'],
  containerStyle = 'gradient',
  interval = 3000,
  className,
  ...props
}: ContainerTextFlipProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  
  useEffect(() => {
    if (flipType === 'auto' && textItems.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % textItems.length;
          setNextIndex((newIndex + 1) % textItems.length);
          return newIndex;
        });
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [flipType, interval, textItems]);
  
  // Get container background style
  const getContainerStyle = () => {
    if (containerStyle === 'gradient') {
      return 'bg-gradient-to-r from-indigo-800 to-purple-800';
    } else if (containerStyle === 'solid') {
      return 'bg-indigo-700';
    } else {
      return 'bg-transparent border-2 border-indigo-600';
    }
  };
  
  // Get text color based on container style
  const getTextColor = () => {
    return containerStyle === 'outlined' ? 'text-indigo-300' : 'text-white';
  };
  
  // Render hover flip variant
  if (flipType === 'hover') {
    return (
      <div
        className={cn(
          'relative rounded-lg overflow-hidden group cursor-pointer',
          getContainerStyle(),
          className
        )}
        {...props}
      >
        <div 
          className={cn(
            'absolute inset-0 flex items-center justify-center',
            'transition-transform ease-in-out transform',
            direction === 'vertical' 
              ? 'group-hover:-translate-y-full' 
              : 'group-hover:-translate-x-full'
          )}
          style={{ transitionDuration: \`\${speed}ms\` }}
        >
          <span className={\`\${getTextColor()} text-xl font-semibold\`}>
            {textItems[0] || 'First'}
          </span>
        </div>
        <div 
          className={cn(
            'absolute inset-0 flex items-center justify-center',
            'transition-transform ease-in-out transform',
            direction === 'vertical' 
              ? 'translate-y-full group-hover:translate-y-0' 
              : 'translate-x-full group-hover:translate-x-0'
          )}
          style={{ transitionDuration: \`\${speed}ms\` }}
        >
          <span className={\`\${getTextColor()} text-xl font-semibold\`}>
            {textItems[1] || 'Second'}
          </span>
        </div>
      </div>
    );
  }
  
  // Render auto-flip variant
  return (
    <div
      className={cn(
        'rounded-lg overflow-hidden',
        getContainerStyle(),
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative h-10 overflow-hidden">
          {textItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                'absolute inset-0 flex items-center justify-center',
                'transition-transform ease-in-out transform',
                index === currentIndex ? 'translate-y-0' : 'translate-y-full'
              )}
              style={{ transitionDuration: \`\${speed}ms\` }}
            >
              <span className={\`\${getTextColor()} text-xl font-semibold\`}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`

  // Example usage code
  const usageCode = `import { ContainerTextFlip } from '@/components/ui/container-text-flip'

// Basic hover flip example
export function BasicFlip() {
  return (
    <div className="w-72 h-48">
      <ContainerTextFlip 
        textItems={['Hover me', 'Hello there!']} 
      />
    </div>
  )
}

// Auto-rotating text example
export function AutoFlip() {
  return (
    <div className="w-72 h-48">
      <ContainerTextFlip 
        flipType="auto"
        textItems={['Developer', 'Designer', 'Creator']}
        interval={2000}
      />
    </div>
  )
}

// Horizontal flip with custom styling
export function CustomFlip() {
  return (
    <div className="w-72 h-48">
      <ContainerTextFlip 
        direction="horizontal"
        containerStyle="outlined"
        textItems={['Click me', 'Thank you!']}
        speed={800}
        className="shadow-lg"
      />
    </div>
  )
}

// Auto-flipping card with prefix text
export function ProfileCard() {
  return (
    <div className="w-80 p-6 rounded-xl bg-zinc-900 border border-zinc-800">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center">
          <span className="text-white text-xl font-bold">JD</span>
        </div>
        <div>
          <h3 className="text-white font-medium">John Doe</h3>
          <div className="flex items-center text-zinc-400">
            <span className="mr-2">I am a</span>
            <div className="h-6 w-24">
              <ContainerTextFlip 
                flipType="auto"
                textItems={['Developer', 'Designer', 'Writer']}
                containerStyle="solid"
                className="h-6 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
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
 * Date: 2023-07-25
 * Description: Initial implementation of the Container Text Flip component page
 * Reason: To provide documentation and examples for the Container Text Flip component
 * Impact: None - new page
 * Version: 1.0.0
 */
