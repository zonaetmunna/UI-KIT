"use client"

import ComponentTemplate from "@/app/components/component-template"
import { ThreeDMarquee } from '@/components/library/ui'
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { useState } from 'react'

// Define types for the MarqueeItem to match the component
interface MarqueeItem {
  id: string | number;
  content: React.ReactNode;
}

export default function ThreeDMarqueePage() {
  const title = "3D Marquee"
  const description = "A 3D rotating marquee effect for showcasing content in an infinite loop with perspective."
  
  // Example marquee for preview
  const ExampleMarquee = () => {
    // Sample testimonials for the marquee
    const testimonials = [
      {
        id: 1,
        name: "Alex Thompson",
        role: "CTO at TechCorp",
        content: "This product completely transformed how we work. 10/10 would recommend!",
        avatar: "https://i.pravatar.cc/100?img=1",
      },
      {
        id: 2,
        name: "Sarah Johnson",
        role: "Product Manager",
        content: "Easy to implement and our customers love the interface.",
        avatar: "https://i.pravatar.cc/100?img=2",
      },
      {
        id: 3,
        name: "Michael Chen",
        role: "Frontend Developer",
        content: "The documentation is excellent and the support team is very responsive.",
        avatar: "https://i.pravatar.cc/100?img=3",
      },
    ]

    // Function to render testimonial cards
    const renderTestimonialCard = (testimonial: typeof testimonials[0]) => (
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 w-80 flex-shrink-0">
        <div className="flex items-start space-x-4">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="text-zinc-300 mb-2">{testimonial.content}</p>
            <p className="text-white font-medium">{testimonial.name}</p>
            <p className="text-zinc-500 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>
    )

    // Generate marquee items as React nodes
    const marqueeItems = testimonials.map(testimonial => 
      renderTestimonialCard(testimonial)
    )

    return (
      <ThreeDMarquee 
        items={marqueeItems}
        direction="left"
        speed={40}
        pauseOnHover={false}
        className="w-full max-w-3xl h-48"
      />
    )
  }
  
  // Customization state
  const [direction, setDirection] = useState<'left' | 'right'>('left')
  const [speed, setSpeed] = useState(50)
  const [reverse, setReverse] = useState(false)
  const [pauseOnHover, setPauseOnHover] = useState(true)

  // Customization UI
  const CustomizationUI = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div className="space-y-6">
        <div>
          <Label className="mb-2 block">Direction</Label>
          <Select 
            value={direction} 
            onValueChange={(value: 'left' | 'right') => setDirection(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select direction" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="left">Left</SelectItem>
              <SelectItem value="right">Right</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <Label>Speed: {speed}</Label>
          </div>
          <Slider 
            value={[speed]} 
            min={10} 
            max={100} 
            step={1} 
            onValueChange={(value) => setSpeed(value[0])} 
          />
          <p className="text-xs text-muted-foreground mt-1">Higher value = slower speed</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch 
            id="pause-on-hover" 
            checked={pauseOnHover}
            onCheckedChange={setPauseOnHover}
          />
          <Label htmlFor="pause-on-hover">Pause on Hover</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch 
            id="reverse" 
            checked={reverse}
            onCheckedChange={setReverse}
          />
          <Label htmlFor="reverse">Reverse Perspective</Label>
        </div>
      </div>
      
      <div className="bg-zinc-950 rounded-lg p-6 flex items-center justify-center">
        <ThreeDMarquee 
          items={[
            <div key="item1" className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-4 w-48 h-32 flex items-center justify-center">
              <span className="text-white font-bold text-xl">Item 1</span>
            </div>,
            <div key="item2" className="bg-gradient-to-br from-pink-500 to-red-600 rounded-lg p-4 w-48 h-32 flex items-center justify-center">
              <span className="text-white font-bold text-xl">Item 2</span>
            </div>,
            <div key="item3" className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 w-48 h-32 flex items-center justify-center">
              <span className="text-white font-bold text-xl">Item 3</span>
            </div>
          ]}
          direction={direction}
          speed={speed}
          pauseOnHover={pauseOnHover}
          reverse={reverse}
          className="w-full h-48"
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
          <td className="py-4 px-4 align-top font-mono text-xs">items</td>
          <td className="py-4 px-4 align-top text-muted-foreground">React.ReactNode[]</td>
          <td className="py-4 px-4 align-top text-muted-foreground">Required</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Array of React elements to display in the marquee.
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">direction</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'left' | 'right'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'left'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Direction of the marquee movement.
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">speed</td>
          <td className="py-4 px-4 align-top text-muted-foreground">number</td>
          <td className="py-4 px-4 align-top text-muted-foreground">50</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Speed of the marquee. Higher values mean slower movement.
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">pauseOnHover</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">true</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Whether to pause the marquee when hovering over it.
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">reverse</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">false</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Whether to reverse the 3D perspective effect.
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">className</td>
          <td className="py-4 px-4 align-top text-muted-foreground">string</td>
          <td className="py-4 px-4 align-top text-muted-foreground">""</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Additional CSS classes to apply to the container.
          </td>
        </tr>
      </tbody>
    </table>
  )

  // Source code of the component
  const componentCode = `import React, { useEffect, useRef, useState } from 'react';

interface ThreeDMarqueeProps {
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
  direction?: 'left' | 'right';
  items: React.ReactNode[];
  reverse?: boolean;
}

/**
 * 3D Marquee Component
 * 
 * A component that creates a 3D marquee/carousel effect with items scrolling horizontally
 * 
 * @param {string} className - Optional CSS class name for styling
 * @param {number} speed - Speed of the marquee movement (default: 50)
 * @param {boolean} pauseOnHover - Whether to pause the marquee on hover (default: true)
 * @param {('left'|'right')} direction - Direction of movement (default: 'left')
 * @param {React.ReactNode[]} items - Array of items to display in the marquee
 * @param {boolean} reverse - Whether to reverse the perspective effect (default: false)
 * @returns {React.ReactElement} The 3D Marquee component
 */
export const ThreeDMarquee: React.FC<ThreeDMarqueeProps> = ({
  className = "",
  speed = 50,
  pauseOnHover = true,
  direction = 'left',
  items,
  reverse = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [duplicatedItems, setDuplicatedItems] = useState<React.ReactNode[]>([...items, ...items]);

  useEffect(() => {
    // Set the container width
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    // Update container width on window resize
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);

    // Ensure we have enough items to create a seamless loop
    // Duplicate items if needed
    if (items.length < 10) {
      setDuplicatedItems([...items, ...items, ...items]);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [items]);

  // Animation styles based on direction and speed
  const animationDirection = direction === 'left' ? 'reverse' : 'normal';
  const animationDuration = \`\${items.length * (100 / speed)}s\`;

  // Handles mouse enter/leave for pause feature
  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  // Apply 3D perspective to the container
  const containerStyle: React.CSSProperties = {
    perspective: '1000px',
    overflow: 'hidden',
  };

  // Style for the actual marquee content
  const marqueeStyle: React.CSSProperties = {
    display: 'flex',
    width: 'fit-content',
    animation: \`scrollLeft \${animationDuration} linear infinite \${animationDirection}\`,
    animationPlayState: isPaused ? 'paused' : 'running',
    transform: reverse ? 'rotateX(20deg)' : 'rotateX(-20deg)',
    transformStyle: 'preserve-3d',
  };

  return (
    <div 
      ref={containerRef}
      className={\`\${className} relative\`}
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* CSS Animation for the marquee */}
      <style jsx>{\`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0) \${reverse ? 'rotateX(20deg)' : 'rotateX(-20deg)'};
          }
          100% {
            transform: translateX(-\${containerWidth / 2}px) \${reverse ? 'rotateX(20deg)' : 'rotateX(-20deg)'};
          }
        }
      \`}</style>

      <div 
        className="marquee-content" 
        style={marqueeStyle}
      >
        {duplicatedItems.map((item, index) => (
          <div 
            key={index} 
            className="marquee-item px-4 transition-transform duration-300 hover:scale-105 hover:z-10"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDMarquee;`

  // Example usage code
  const usageCode = `import { ThreeDMarquee } from '@/components/library'

// Function to render testimonial cards
const renderTestimonialCard = (testimonial) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 w-80 flex-shrink-0">
    <div className="flex items-start space-x-4">
      <img 
        src={testimonial.avatar} 
        alt={testimonial.name} 
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <p className="text-zinc-300 mb-2">{testimonial.content}</p>
        <p className="text-white font-medium">{testimonial.name}</p>
        <p className="text-zinc-500 text-sm">{testimonial.role}</p>
      </div>
    </div>
  </div>
)

// Sample testimonials
const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "CTO at TechCorp",
    content: "This product completely transformed how we work. 10/10 would recommend!",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    content: "Easy to implement and our customers love the interface.",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  // More testimonials...
]

// Generate marquee items from testimonials - directly pass React nodes to items prop
const marqueeItems = testimonials.map(testimonial => renderTestimonialCard(testimonial))

// Use the component with default settings
export function DefaultExample() {
  return (
    <ThreeDMarquee 
      items={marqueeItems}
      className="h-48"
    />
  )
}

// Use the component with custom settings
export function CustomExample() {
  return (
    <ThreeDMarquee 
      items={marqueeItems}
      direction="right"
      speed={30}
      pauseOnHover={false}
      reverse={true}
      className="h-48"
    />
  )
}`

  return (
    <ComponentTemplate
      title={title}
      description={description}
      component={<ExampleMarquee />}
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
 * 
 * Date: 2023-07-19
 * Description: Fixed type errors related to ThreeDMarquee component usage
 * Reason: Property types in usage examples didn't match the component's interface
 * Impact: None - improved type safety
 * Version: 1.0.2
 */
