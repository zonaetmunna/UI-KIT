"use client"

import ComponentTemplate from "@/app/components/component-template"
import { ThreeDCardEffect } from '@/components/library/ui'
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { useState } from 'react'

export default function ThreeDCardEffectPage() {
  const title = "3D Card Effect"
  const description = "A card perspective effect that elevates card elements on hover with realistic 3D rotation."
  
  // Example card for preview
  const ExampleCard = () => (
    <ThreeDCardEffect className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-8 w-full max-w-md">
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            <h3 className="font-medium text-white">3D Card Effect</h3>
          </div>
          <p className="text-white/70 text-sm">
            Hover over this card to see the 3D rotation effect that creates depth and interactivity.
          </p>
        </div>
        <div className="pt-4 mt-auto">
          <div className="bg-white/5 h-16 rounded-md"></div>
        </div>
      </div>
    </ThreeDCardEffect>
  )
  
  // Customization state
  const [rotationIntensity, setRotationIntensity] = useState(20)
  const [glareIntensity, setGlareIntensity] = useState(0.3)
  const [showGlare, setShowGlare] = useState(true)
  const [borderRadius, setBorderRadius] = useState(16)
  const [shadow, setShadow] = useState(true)

  // Customization UI
  const CustomizationUI = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <Label>Rotation Intensity: {rotationIntensity}°</Label>
          </div>
          <Slider 
            value={[rotationIntensity]} 
            min={0} 
            max={45} 
            step={1} 
            onValueChange={(value) => setRotationIntensity(value[0])} 
          />
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <Label>Glare Intensity: {glareIntensity.toFixed(1)}</Label>
          </div>
          <Slider 
            value={[glareIntensity * 10]} 
            min={0} 
            max={10} 
            step={1} 
            onValueChange={(value) => setGlareIntensity(value[0] / 10)} 
          />
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <Label>Border Radius: {borderRadius}px</Label>
          </div>
          <Slider 
            value={[borderRadius]} 
            min={0} 
            max={30} 
            step={1} 
            onValueChange={(value) => setBorderRadius(value[0])} 
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch 
            id="show-glare" 
            checked={showGlare}
            onCheckedChange={setShowGlare}
          />
          <Label htmlFor="show-glare">Show Glare Effect</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch 
            id="show-shadow" 
            checked={shadow}
            onCheckedChange={setShadow}
          />
          <Label htmlFor="show-shadow">Show Shadow</Label>
        </div>
      </div>
      
      <div className="bg-zinc-950 rounded-lg p-6 flex items-center justify-center">
        <ThreeDCardEffect 
          className="bg-zinc-900 border border-zinc-800 p-8 w-full max-w-md"
          rotationIntensity={rotationIntensity}
          glareIntensity={showGlare ? glareIntensity : 0}
          style={{
            borderRadius: `${borderRadius}px`, 
            boxShadow: shadow ? '0 20px 80px -10px rgba(0, 0, 0, 0.5)' : 'none'
          }}
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <h3 className="text-xl font-medium text-white mb-2">Custom Card</h3>
              <p className="text-zinc-400 mb-4">
                This card demonstrates the customizable props of the 3D Card Effect component.
                Adjust the controls to see how they affect the appearance and behavior.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="h-12 bg-zinc-800 rounded-md"></div>
              <div className="h-12 bg-zinc-800 rounded-md"></div>
            </div>
          </div>
        </ThreeDCardEffect>
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
            The content to display inside the 3D card
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">rotationIntensity</td>
          <td className="py-4 px-4 align-top text-muted-foreground">number</td>
          <td className="py-4 px-4 align-top text-muted-foreground">20</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Controls how dramatic the rotation effect is (higher = more rotation)
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">glareIntensity</td>
          <td className="py-4 px-4 align-top text-muted-foreground">number</td>
          <td className="py-4 px-4 align-top text-muted-foreground">0.3</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Controls the intensity of the glare effect (0-1, 0 = no glare)
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">glareColor</td>
          <td className="py-4 px-4 align-top text-muted-foreground">string</td>
          <td className="py-4 px-4 align-top text-muted-foreground">"white"</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            The color of the glare effect
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">glarePositionType</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'top' | 'right' | 'bottom' | 'left' | 'all'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">"all"</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Where to position the glare effect
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">className</td>
          <td className="py-4 px-4 align-top text-muted-foreground">string</td>
          <td className="py-4 px-4 align-top text-muted-foreground">undefined</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Additional class names to apply to the card
          </td>
        </tr>
      </tbody>
    </table>
  )

  // Source code of the component
  const componentCode = `import { cn } from '@/lib/utils';
import React, { CSSProperties, useRef, useState } from 'react';

export interface ThreeDCardEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content to display inside the 3D card
   */
  children: React.ReactNode;
  
  /**
   * Controls how dramatic the rotation effect is (higher = more rotation)
   * @default 20
   */
  rotationIntensity?: number;
  
  /**
   * Controls the intensity of the glare effect (0-1, 0 = no glare)
   * @default 0.3
   */
  glareIntensity?: number;
  
  /**
   * The color of the glare effect
   * @default "white"
   */
  glareColor?: string;
  
  /**
   * Where to position the glare
   * @default "all"
   */
  glarePositionType?: 'top' | 'right' | 'bottom' | 'left' | 'all';
  
  /**
   * Additional class names to apply to the card
   */
  className?: string;
}

/**
 * A 3D card effect component that rotates based on mouse position
 */
export default function ThreeDCardEffect({
  children,
  rotationIntensity = 20,
  glareIntensity = 0.3,
  glareColor = "white",
  glarePositionType = "all",
  className,
  style,
  ...props
}: ThreeDCardEffectProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glareCoords, setGlareCoords] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse movement over the card to calculate rotation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    // Get the card's dimensions and position
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate the mouse position relative to the card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate rotation based on mouse position and intensity
    // Normalize by card dimensions and apply rotationIntensity
    const rotateY = (mouseX / (rect.width / 2)) * rotationIntensity;
    const rotateX = -((mouseY / (rect.height / 2)) * rotationIntensity);
    
    // Update the rotation state
    setRotation({ x: rotateX, y: rotateY });
    
    // Calculate glare position (percentage values for background position)
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlareCoords({ x: glareX, y: glareY });
  };

  // Reset rotation and glare when mouse leaves the card
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  // Set hovered state when mouse enters the card
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Generate glare styles based on props and state
  const generateGlareStyles = (): CSSProperties => {
    if (glareIntensity === 0) return { opacity: 0 };

    let background = '';
    const opacity = isHovered ? glareIntensity : 0;
    
    // Position the glare based on the glarePositionType prop
    switch (glarePositionType) {
      case 'top':
        background = \`linear-gradient(to bottom, \${glareColor} 0%, transparent 100%)\`;
        break;
      case 'right':
        background = \`linear-gradient(to left, \${glareColor} 0%, transparent 100%)\`;
        break;
      case 'bottom':
        background = \`linear-gradient(to top, \${glareColor} 0%, transparent 100%)\`;
        break;
      case 'left':
        background = \`linear-gradient(to right, \${glareColor} 0%, transparent 100%)\`;
        break;
      case 'all':
      default:
        background = \`radial-gradient(circle at \${glareCoords.x}% \${glareCoords.y}%, \${glareColor}, transparent 70%)\`;
        break;
    }

    return {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      opacity,
      mixBlendMode: 'overlay',
      background,
      transition: isHovered ? 'none' : 'opacity 300ms ease',
    };
  };

  return (
    <div
      ref={cardRef}
      className={cn('relative transition-transform duration-150 ease-out transform-gpu', className)}
      style={{
        transform: \`perspective(1000px) rotateX(\${rotation.x}deg) rotateY(\${rotation.y}deg)\`,
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {children}
      
      {/* Glare effect */}
      <div 
        aria-hidden="true"
        style={generateGlareStyles()} 
      />
    </div>
  );
}`

  // Example usage code
  const usageCode = `import { ThreeDCardEffect } from '@/components/library'

export function ExampleCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ThreeDCardEffect className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-white mb-2">Advanced Analytics</h3>
          <p className="text-zinc-400 text-sm">Get a detailed breakdown of your metrics with our analytics suite</p>
        </div>
      </ThreeDCardEffect>

      {/* Custom behavior */}
      <ThreeDCardEffect 
        className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg"
        rotationIntensity={25}
        glareIntensity={0.5}
        glareColor="#6366f1"
        glarePositionType="top"
      >
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-white mb-2">Custom Settings</h3>
          <p className="text-zinc-400 text-sm">This card has custom rotation intensity and glare settings</p>
        </div>
      </ThreeDCardEffect>
    </div>
  )
}`

  return (
    <ComponentTemplate
      title={title}
      description={description}
      component={<ExampleCard />}
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
 * Date: 2023-07-18
 * Description: Updated page to use ComponentTemplate
 * Reason: To provide a consistent layout for all component pages
 * Impact: None - improved organization
 * Version: 1.0.1
 */
