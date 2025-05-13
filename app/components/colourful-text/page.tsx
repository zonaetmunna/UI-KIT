"use client"

import ComponentTemplate from "@/app/components/component-template"
import { useState } from 'react'

export default function ColourfulTextPage() {
  const title = "Colourful Text"
  const description = "A text component with vibrant gradient or animated color effects to highlight important content."
  
  // Example component for preview
  const ExampleComponent = () => (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          Gradient Text Effect
        </h2>
        <p className="mt-2 text-zinc-400">Horizontal gradient using background-clip</p>
      </div>
      
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            Animated Gradient
          </span>
        </h2>
        <p className="mt-2 text-zinc-400">Animated background position</p>
      </div>
    </div>
  )
  
  // Customization state
  const [gradientType, setGradientType] = useState('horizontal')
  const [isAnimated, setIsAnimated] = useState(false)
  const [colorScheme, setColorScheme] = useState('purplePink')
  const [fontSize, setFontSize] = useState('4xl')
  const [fontWeight, setFontWeight] = useState('bold')
  const [text, setText] = useState('Colourful Text')

  // Customization UI
  const CustomizationUI = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Text Content</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="bg-zinc-800 px-3 py-2 rounded-md border border-zinc-700"
          />
        </div>
      
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Gradient Type</label>
          <div className="flex space-x-2">
            <button 
              onClick={() => setGradientType('horizontal')}
              className={`px-3 py-1 rounded ${gradientType === 'horizontal' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Horizontal
            </button>
            <button 
              onClick={() => setGradientType('vertical')}
              className={`px-3 py-1 rounded ${gradientType === 'vertical' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Vertical
            </button>
            <button 
              onClick={() => setGradientType('radial')}
              className={`px-3 py-1 rounded ${gradientType === 'radial' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Radial
            </button>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Color Scheme</label>
          <div className="flex space-x-2">
            <button 
              onClick={() => setColorScheme('purplePink')}
              className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 border border-white/20"
              aria-label="Purple Pink gradient"
            />
            <button 
              onClick={() => setColorScheme('blueTeal')}
              className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 border border-white/20"
              aria-label="Blue Teal gradient"
            />
            <button 
              onClick={() => setColorScheme('orangeRed')}
              className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 border border-white/20"
              aria-label="Orange Red gradient"
            />
            <button 
              onClick={() => setColorScheme('rainbow')}
              className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 border border-white/20"
              aria-label="Rainbow gradient"
            />
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Font Size</label>
          <div className="flex space-x-2">
            <button 
              onClick={() => setFontSize('2xl')}
              className={`px-3 py-1 rounded ${fontSize === '2xl' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Small
            </button>
            <button 
              onClick={() => setFontSize('4xl')}
              className={`px-3 py-1 rounded ${fontSize === '4xl' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Medium
            </button>
            <button 
              onClick={() => setFontSize('6xl')}
              className={`px-3 py-1 rounded ${fontSize === '6xl' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Large
            </button>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Font Weight</label>
          <div className="flex space-x-2">
            <button 
              onClick={() => setFontWeight('normal')}
              className={`px-3 py-1 rounded ${fontWeight === 'normal' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Normal
            </button>
            <button 
              onClick={() => setFontWeight('medium')}
              className={`px-3 py-1 rounded ${fontWeight === 'medium' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Medium
            </button>
            <button 
              onClick={() => setFontWeight('bold')}
              className={`px-3 py-1 rounded ${fontWeight === 'bold' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Bold
            </button>
            <button 
              onClick={() => setFontWeight('extrabold')}
              className={`px-3 py-1 rounded ${fontWeight === 'extrabold' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Extra Bold
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="animated" 
            checked={isAnimated}
            onChange={(e) => setIsAnimated(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="animated" className="text-sm font-medium">Animate Gradient</label>
        </div>
      </div>
      
      <div className="bg-zinc-950 rounded-lg p-6 flex items-center justify-center min-h-[300px]">
        <h2 className={`
          text-${fontSize} font-${fontWeight}
          ${isAnimated ? 'animate-text' : ''}
          bg-clip-text text-transparent
          ${gradientType === 'horizontal' ? 'bg-gradient-to-r' : 
            gradientType === 'vertical' ? 'bg-gradient-to-b' : 
            'bg-radial-gradient'}
          ${colorScheme === 'purplePink' ? 'from-pink-500 via-purple-500 to-indigo-500' : 
            colorScheme === 'blueTeal' ? 'from-blue-500 via-teal-500 to-emerald-500' : 
            colorScheme === 'orangeRed' ? 'from-orange-500 via-red-500 to-pink-500' : 
            'from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500'}
        `}>
          {text}
        </h2>
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
          <td className="py-4 px-4 align-top font-mono text-xs">children</td>
          <td className="py-4 px-4 align-top text-muted-foreground">React.ReactNode</td>
          <td className="py-4 px-4 align-top text-muted-foreground">Required</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            The text content to display with the gradient effect
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">gradientType</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'horizontal' | 'vertical' | 'radial'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'horizontal'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            The direction of the gradient
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">colors</td>
          <td className="py-4 px-4 align-top text-muted-foreground">string[]</td>
          <td className="py-4 px-4 align-top text-muted-foreground">['#FF4D4D', '#9900FF', '#4D4DFF']</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Array of color values for the gradient
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">animated</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">false</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Whether to animate the gradient
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">as</td>
          <td className="py-4 px-4 align-top text-muted-foreground">React.ElementType</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'span'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            The HTML element to render the text as
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">className</td>
          <td className="py-4 px-4 align-top text-muted-foreground">string</td>
          <td className="py-4 px-4 align-top text-muted-foreground">undefined</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Additional class names to apply to the component
          </td>
        </tr>
      </tbody>
    </table>
  )

  // Source code of the component
  const componentCode = `import { cn } from '@/lib/utils';
import React from 'react';

export interface ColourfulTextProps {
  /**
   * The text content to display with gradient effect
   */
  children: React.ReactNode;
  
  /**
   * The direction of the gradient
   * @default "horizontal"
   */
  gradientType?: 'horizontal' | 'vertical' | 'radial';
  
  /**
   * Array of color values for the gradient
   * @default ['#FF4D4D', '#9900FF', '#4D4DFF']
   */
  colors?: string[];
  
  /**
   * Whether to animate the gradient
   * @default false
   */
  animated?: boolean;
  
  /**
   * The HTML element to render the text as
   * @default "span"
   */
  as?: React.ElementType;
  
  /**
   * Additional class names
   */
  className?: string;
}

/**
 * ColourfulText Component
 * 
 * A text component with vibrant gradient or animated color effects
 * to highlight important content.
 */
export function ColourfulText({
  children,
  gradientType = 'horizontal',
  colors = ['#FF4D4D', '#9900FF', '#4D4DFF'],
  animated = false,
  as: Component = 'span',
  className,
  ...props
}: ColourfulTextProps) {
  // Convert colors array to CSS gradient
  const gradientColors = colors.map((color, index) => {
    const percentage = index * (100 / (colors.length - 1));
    return \`\${color} \${percentage}%\`;
  }).join(', ');
  
  // Determine gradient direction based on type
  const gradientDirection = 
    gradientType === 'horizontal' ? 'to right' :
    gradientType === 'vertical' ? 'to bottom' :
    'circle'; // radial
  
  // Build the background gradient style
  const gradientStyle = {
    backgroundImage: gradientType === 'radial' 
      ? \`radial-gradient(\${gradientDirection}, \${gradientColors})\`
      : \`linear-gradient(\${gradientDirection}, \${gradientColors})\`,
    backgroundSize: animated ? '300% 300%' : '100% 100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  };
  
  const animationClass = animated 
    ? 'animate-gradient-animation' 
    : '';
  
  return (
    <Component
      className={cn(animationClass, className)}
      style={gradientStyle}
      {...props}
    >
      {children}
    </Component>
  );
}

// Add global CSS in your styles file for the animation:
/*
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient-animation {
  animation: gradient-animation 3s ease infinite;
}
*/`

  // Example usage code
  const usageCode = `import { ColourfulText } from '@/components/ui/colourful-text'

// Basic horizontal gradient text
export function BasicGradient() {
  return (
    <h2 className="text-3xl font-bold">
      <ColourfulText>
        Gradient Text Effect
      </ColourfulText>
    </h2>
  )
}

// Animated gradient with custom colors
export function AnimatedRainbow() {
  return (
    <h1 className="text-5xl font-extrabold">
      <ColourfulText
        animated
        colors={['#FF0080', '#FF8C00', '#FFD700', '#7CFC00', '#00BFFF', '#9370DB']}
      >
        Rainbow Animation
      </ColourfulText>
    </h1>
  )
}

// Vertical gradient with custom element
export function VerticalGradient() {
  return (
    <ColourfulText
      as="div"
      gradientType="vertical"
      colors={['#3B82F6', '#8B5CF6', '#EC4899']}
      className="text-2xl font-medium"
    >
      Vertical gradient on a div element
    </ColourfulText>
  )
}

// Radial gradient effect
export function RadialGradient() {
  return (
    <h3 className="text-4xl font-bold text-center">
      <ColourfulText
        gradientType="radial"
        colors={['#60A5FA', '#34D399', '#A78BFA']}
      >
        Radial Gradient Effect
      </ColourfulText>
    </h3>
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
 * Description: Initial implementation of the Colourful Text component page
 * Reason: To provide documentation and examples for the Colourful Text component
 * Impact: None - new page
 * Version: 1.0.0
 */
