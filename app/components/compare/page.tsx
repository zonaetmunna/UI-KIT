"use client"

import ComponentTemplate from "@/app/components/component-template"
import { useState } from 'react'

export default function CompareComponentPage() {
  const title = "Compare"
  const description = "A component for side-by-side content comparison with adjustable slider."
  
  // Example component for preview
  const ExampleComponent = () => (
    <div className="flex flex-wrap gap-8 items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="p-8 bg-zinc-900 rounded-lg">
          <div className="w-full h-64 relative bg-zinc-800 rounded-lg overflow-hidden">
            <div className="absolute inset-0 w-1/2 h-full bg-zinc-700 border-r border-white/50">
              <div className="flex h-full items-center justify-center">
                <span className="text-white font-medium">Before</span>
              </div>
            </div>
            <div className="absolute inset-0 flex h-full items-center justify-center">
              <span className="text-white font-medium">After</span>
            </div>
            <div className="absolute inset-y-0 left-1/2 w-1 bg-white/80 -translate-x-1/2 flex items-center justify-center cursor-ew-resize">
              <div className="h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8L22 12M22 12L18 16M22 12H2" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Basic Compare Slider</p>
      </div>
    </div>
  )
  
  // Customization state
  const [direction, setDirection] = useState("horizontal")
  const [initialPosition, setInitialPosition] = useState(50)
  const [showLabels, setShowLabels] = useState(true)

  // Customization UI
  const CustomizationUI = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div className="space-y-6">
        {/* Customization controls could go here */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Direction</label>
          <div className="flex space-x-2">
            <button 
              onClick={() => setDirection("horizontal")}
              className={`px-3 py-1 rounded ${direction === "horizontal" ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Horizontal
            </button>
            <button 
              onClick={() => setDirection("vertical")}
              className={`px-3 py-1 rounded ${direction === "vertical" ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Vertical
            </button>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Initial Position: {initialPosition}%</label>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={initialPosition} 
            onChange={(e) => setInitialPosition(Number(e.target.value))}
            className="w-full"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="show-labels" 
            checked={showLabels}
            onChange={(e) => setShowLabels(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="show-labels" className="text-sm font-medium">Show Labels</label>
        </div>
      </div>
      
      <div className="bg-zinc-950 rounded-lg p-6 flex items-center justify-center min-h-[300px]">
        <div className="w-full h-64 relative bg-zinc-800 rounded-lg overflow-hidden">
          <div 
            className="absolute inset-0 bg-zinc-700 border-r border-white/50"
            style={direction === "horizontal" 
              ? { width: `${initialPosition}%`, height: "100%" } 
              : { width: "100%", height: `${initialPosition}%` }}
          >
            {showLabels && (
              <div className="flex h-full items-center justify-center">
                <span className="text-white font-medium">Before</span>
              </div>
            )}
          </div>
          {showLabels && (
            <div className="absolute inset-0 flex h-full items-center justify-center">
              <span className="text-white font-medium">After</span>
            </div>
          )}
          <div 
            className={`absolute bg-white/80 cursor-${direction === "horizontal" ? "ew" : "ns"}-resize flex items-center justify-center`}
            style={direction === "horizontal" 
              ? { 
                  insetY: 0, 
                  left: `${initialPosition}%`, 
                  width: "1px",
                  transform: "translateX(-50%)",
                } 
              : {
                  insetX: 0,
                  top: `${initialPosition}%`,
                  height: "1px",
                  transform: "translateY(-50%)",
                }
            }
          >
            <div className="h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d={direction === "horizontal" 
                    ? "M18 8L22 12M22 12L18 16M22 12H2" 
                    : "M8 6L12 2M12 2L16 6M12 2V22"} 
                  stroke="black" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
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
          <td className="py-4 px-4 align-top font-mono text-xs">direction</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'horizontal' | 'vertical'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'horizontal'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            The direction of the comparison slider
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">initialPosition</td>
          <td className="py-4 px-4 align-top text-muted-foreground">number</td>
          <td className="py-4 px-4 align-top text-muted-foreground">50</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            The initial position of the slider as a percentage (0-100)
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">showLabels</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">true</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Whether to show the before/after labels
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
import React, { useState, useRef, useEffect } from 'react';

export interface CompareProps {
  /**
   * The direction of the comparison slider
   * @default "horizontal"
   */
  direction?: 'horizontal' | 'vertical';
  
  /**
   * The initial position of the slider as a percentage (0-100)
   * @default 50
   */
  initialPosition?: number;
  
  /**
   * Whether to show the before/after labels
   * @default true
   */
  showLabels?: boolean;
  
  /**
   * The before content
   */
  beforeContent: React.ReactNode;
  
  /**
   * The after content
   */
  afterContent: React.ReactNode;
  
  /**
   * Additional class names
   */
  className?: string;
}

/**
 * Compare Component
 * 
 * A component for side-by-side content comparison with an adjustable slider.
 */
export function Compare({
  direction = 'horizontal',
  initialPosition = 50,
  showLabels = true,
  beforeContent,
  afterContent,
  className,
  ...props
}: CompareProps) {
  const [position, setPosition] = useState(initialPosition);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  
  const handleDragStart = () => {
    isDragging.current = true;
  };
  
  const handleDragEnd = () => {
    isDragging.current = false;
  };
  
  const handleDrag = (event: React.MouseEvent | MouseEvent | React.TouchEvent | TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    
    // Get clientX/clientY depending on event type
    let clientPos;
    if ('touches' in event) {
      clientPos = {
        clientX: event.touches[0].clientX,
        clientY: event.touches[0].clientY,
      };
    } else {
      clientPos = {
        clientX: (event as MouseEvent).clientX,
        clientY: (event as MouseEvent).clientY,
      };
    }
    
    let newPosition;
    if (direction === 'horizontal') {
      newPosition = ((clientPos.clientX - containerRect.left) / containerRect.width) * 100;
    } else {
      newPosition = ((clientPos.clientY - containerRect.top) / containerRect.height) * 100;
    }
    
    // Clamp position between 0 and 100
    newPosition = Math.max(0, Math.min(100, newPosition));
    setPosition(newPosition);
  };
  
  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
    };
    
    const handleMouseMove = (event: MouseEvent) => {
      handleDrag(event);
    };
    
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      <div className="absolute inset-0">
        {afterContent}
      </div>
      
      <div 
        className="absolute"
        style={direction === 'horizontal' 
          ? { inset: 0, width: `${position}%` } 
          : { inset: 0, height: `${position}%` }
        }
      >
        <div className="absolute inset-0 overflow-hidden">
          {beforeContent}
        </div>
        
        {direction === 'horizontal' && (
          <div 
            className="absolute inset-y-0 right-0 w-0.5 bg-white shadow-lg cursor-ew-resize"
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            onTouchMove={handleDrag}
            onTouchEnd={handleDragEnd}
          >
            <div className="absolute top-1/2 right-0 h-10 w-10 -translate-y-1/2 translate-x-1/2 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8L22 12M22 12L18 16M22 12H2" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        )}
        
        {direction === 'vertical' && (
          <div 
            className="absolute inset-x-0 bottom-0 h-0.5 bg-white shadow-lg cursor-ns-resize"
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            onTouchMove={handleDrag}
            onTouchEnd={handleDragEnd}
          >
            <div className="absolute left-1/2 h-10 w-10 -translate-x-1/2 translate-y-1/2 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ns-resize">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6L12 2M12 2L16 6M12 2V22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        )}
        
        {showLabels && (
          <>
            <div className="absolute top-2 left-2 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded">Before</div>
            <div className="absolute top-2 right-2 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded">After</div>
          </>
        )}
      </div>
    </div>
  );
}`

  // Example usage code
  const usageCode = `import { Compare } from '@/components/ui/compare'

export function SimpleCompare() {
  return (
    <Compare
      beforeContent={
        <div className="w-full h-full bg-blue-500 flex items-center justify-center">
          <span className="text-white font-medium">Before</span>
        </div>
      }
      afterContent={
        <div className="w-full h-full bg-green-500 flex items-center justify-center">
          <span className="text-white font-medium">After</span>
        </div>
      }
      className="h-64 w-full"
    />
  )
}

export function VerticalCompare() {
  return (
    <Compare
      direction="vertical"
      beforeContent={
        <div className="w-full h-full bg-blue-500 flex items-center justify-center">
          <span className="text-white font-medium">Before</span>
        </div>
      }
      afterContent={
        <div className="w-full h-full bg-green-500 flex items-center justify-center">
          <span className="text-white font-medium">After</span>
        </div>
      }
      className="h-64 w-full"
    />
  )
}

export function ImageCompare() {
  return (
    <Compare
      beforeContent={
        <img src="/before-image.jpg" alt="Before" className="object-cover w-full h-full" />
      }
      afterContent={
        <img src="/after-image.jpg" alt="After" className="object-cover w-full h-full" />
      }
      className="h-64 w-full"
    />
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
 * Description: Initial implementation of the Compare component page
 * Reason: To provide documentation and examples for the Compare component
 * Impact: None - new page
 * Version: 1.0.0
 */ 
