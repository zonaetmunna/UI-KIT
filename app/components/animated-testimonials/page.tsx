"use client"

import ComponentTemplate from "@/app/components/component-template"
import { AnimatedTestimonials } from '@/components/library/ui'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { useState } from 'react'

/**
 * Animated Testimonials Component Page
 * This page showcases the AnimatedTestimonials component, provides customization options,
 * and includes documentation, API reference, and example code.
 */
export default function AnimatedTestimonialsPage() {
  // Basic component information
  const title = "Animated Testimonials"
  const description = "A dynamic testimonial showcase component with smooth animations for transitioning between reviews."
  
  // Sample testimonials data
  const sampleTestimonials = [
    {
      id: '1',
      author: 'Alex Johnson',
      role: 'CEO, TechStart',
      content: 'This UI library transformed our product development workflow. The components are not just beautiful, but also incredibly flexible and easy to customize.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: '2',
      author: 'Sarah Miller',
      role: 'Lead Designer, CreativeFlow',
      content: 'As a designer, I appreciate the attention to detail in each component. The animations are subtle yet effective, and the customization options are excellent.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: '3',
      author: 'David Chen',
      role: 'Frontend Developer, InnoSoft',
      content: 'The documentation is comprehensive and the TypeScript support is top-notch. Implementation was a breeze, and our clients love the results.',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    {
      id: '4',
      author: 'Emily Rodriguez',
      role: 'Product Manager, UXFlow',
      content: 'We reduced our development time by 40% after switching to this component library. The animated testimonials component in particular has increased user engagement significantly.',
      avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
    },
  ]
  
  // State for customization
  const [autoplay, setAutoplay] = useState(true)
  const [interval, setInterval] = useState(5000)
  const [animationDuration, setAnimationDuration] = useState(500)
  const [darkMode, setDarkMode] = useState(false)
  
  // Example component for preview
  const ExampleComponent = () => (
    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <AnimatedTestimonials
        testimonials={sampleTestimonials}
        autoplay={autoplay}
        interval={interval}
        animationDuration={animationDuration}
        className="max-w-3xl mx-auto"
      />
      
      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="font-medium mb-2">With Autoplay</h3>
          <button
            onClick={() => setAutoplay(true)}
            className={`w-full py-2 rounded-md ${
              autoplay
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            Enable
          </button>
        </div>
        
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="font-medium mb-2">Without Autoplay</h3>
          <button
            onClick={() => setAutoplay(false)}
            className={`w-full py-2 rounded-md ${
              !autoplay
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            Disable
          </button>
        </div>
        
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="font-medium mb-2">Animation Speed</h3>
          <div className="flex items-center justify-between space-x-2">
            <button
              onClick={() => setAnimationDuration(300)}
              className={`flex-1 py-2 rounded-md ${
                animationDuration === 300
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Fast
            </button>
            <button
              onClick={() => setAnimationDuration(800)}
              className={`flex-1 py-2 rounded-md ${
                animationDuration === 800
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Slow
            </button>
          </div>
        </div>
        
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="font-medium mb-2">Toggle Theme</h3>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </div>
  )

  // Customization UI
  const CustomizationUI = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Switch 
            id="autoplay" 
            checked={autoplay}
            onCheckedChange={setAutoplay}
          />
          <Label htmlFor="autoplay">Autoplay</Label>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <Label>Interval: {interval}ms</Label>
          </div>
          <Slider 
            value={[interval]} 
            min={2000} 
            max={10000} 
            step={500} 
            onValueChange={(value) => setInterval(value[0])} 
            disabled={!autoplay}
          />
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <Label>Animation Duration: {animationDuration}ms</Label>
          </div>
          <Slider 
            value={[animationDuration]} 
            min={100} 
            max={1500} 
            step={100} 
            onValueChange={(value) => setAnimationDuration(value[0])} 
          />
        </div>
      </div>
      
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4">Current Configuration</h3>
        <ul className="space-y-2 text-sm">
          <li><span className="font-medium">Autoplay:</span> {autoplay ? 'Enabled' : 'Disabled'}</li>
          <li><span className="font-medium">Interval:</span> {interval}ms</li>
          <li><span className="font-medium">Animation Duration:</span> {animationDuration}ms</li>
        </ul>
        
        <div className="mt-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Adjust the settings above to see how they affect the testimonials component. 
            The preview will update automatically as you change the configuration.
          </p>
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
          <td className="py-4 px-4 align-top font-mono text-xs">testimonials</td>
          <td className="py-4 px-4 align-top text-muted-foreground">Testimonial[]</td>
          <td className="py-4 px-4 align-top text-muted-foreground">required</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Array of testimonial objects to display. Each must include id, author, content, and optionally role and avatar.
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">autoplay</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">true</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Whether testimonials should automatically cycle.
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">interval</td>
          <td className="py-4 px-4 align-top text-muted-foreground">number</td>
          <td className="py-4 px-4 align-top text-muted-foreground">5000</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Time in milliseconds between testimonial transitions
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">animationDuration</td>
          <td className="py-4 px-4 align-top text-muted-foreground">number</td>
          <td className="py-4 px-4 align-top text-muted-foreground">500</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Duration of the transition animation in milliseconds.
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">className</td>
          <td className="py-4 px-4 align-top text-muted-foreground">string</td>
          <td className="py-4 px-4 align-top text-muted-foreground">undefined</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Additional CSS classes to apply to the component.
          </td>
        </tr>
      </tbody>
    </table>
  )

  // Source code of the component
  const componentCode = `import React, { useEffect, useState } from 'react';

interface Testimonial {
  id: string | number;
  content: string;
  author: string;
  role?: string;
  avatar?: string;
}

interface AnimatedTestimonialsProps {
  className?: string;
  testimonials: Testimonial[];
  autoplay?: boolean;
  interval?: number;
  animationDuration?: number;
}

/**
 * Animated Testimonials Component
 * 
 * A component that displays testimonials with smooth animation transitions
 * 
 * @param {string} className - Optional CSS class name for styling
 * @param {Testimonial[]} testimonials - Array of testimonial objects to display
 * @param {boolean} autoplay - Whether to automatically cycle through testimonials
 * @param {number} interval - Time in milliseconds between testimonial changes
 * @param {number} animationDuration - Duration of the animation in milliseconds
 * @returns {React.ReactElement} The Animated Testimonials component
 */
export const AnimatedTestimonials: React.FC<AnimatedTestimonialsProps> = ({
  className = "",
  testimonials,
  autoplay = true,
  interval = 5000,
  animationDuration = 500,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  
  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      goToNext();
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoplay, interval, currentIndex, testimonials.length]);
  
  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection('prev');
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
      setIsAnimating(false);
    }, animationDuration);
  };
  
  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection('next');
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
      setIsAnimating(false);
    }, animationDuration);
  };
  
  const getAnimationClass = () => {
    if (!isAnimating) return '';
    
    return direction === 'next' 
      ? 'animate-fade-out-left' 
      : 'animate-fade-out-right';
  };
  
  if (testimonials.length === 0) {
    return null;
  }
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <div className={\`\${className} relative overflow-hidden\`}>
      {/* Add animation keyframes */}
      <style jsx>{\`
        @keyframes fadeOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-20px);
          }
        }
        
        @keyframes fadeOutRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(20px);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-out-left {
          animation: fadeOutLeft \${animationDuration}ms ease-in-out forwards;
        }
        
        .animate-fade-out-right {
          animation: fadeOutRight \${animationDuration}ms ease-in-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn \${animationDuration}ms ease-in-out;
        }
      \`}</style>
      
      <div className={\`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md \${getAnimationClass()}\`}>
        <div className="mb-4">
          <div className="text-lg text-gray-700 dark:text-gray-300 italic">
            "\{currentTestimonial.content}"
          </div>
        </div>
        
        <div className="flex items-center">
          {currentTestimonial.avatar && (
            <div className="mr-3">
              <img 
                src={currentTestimonial.avatar} 
                alt={currentTestimonial.author}
                className="h-10 w-10 rounded-full object-cover"
              />
            </div>
          )}
          
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">
              {currentTestimonial.author}
            </div>
            
            {currentTestimonial.role && (
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {currentTestimonial.role}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {testimonials.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          <button 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            onClick={goToPrev}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            onClick={goToNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
      
      {testimonials.length > 1 && (
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <div 
              key={index}
              className={\`h-2 w-2 mx-1 rounded-full \${
                index === currentIndex 
                  ? 'bg-gray-700 dark:bg-gray-300' 
                  : 'bg-gray-300 dark:bg-gray-700'
              }\`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimatedTestimonials;`

  // Example usage code
  const usageCode = `import { AnimatedTestimonials } from '@/components/library/ui'

// Sample testimonials data
const testimonials = [
  {
    id: '1',
    author: 'Alex Johnson',
    role: 'CEO, TechStart',
    content: 'This UI library transformed our product development workflow. The components are not just beautiful, but also incredibly flexible and easy to customize.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: '2',
    author: 'Sarah Miller',
    role: 'Lead Designer, CreativeFlow',
    content: 'As a designer, I appreciate the attention to detail in each component. The animations are subtle yet effective, and the customization options are excellent.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '3',
    author: 'David Chen',
    role: 'Frontend Developer, InnoSoft',
    content: 'The documentation is comprehensive and the TypeScript support is top-notch. Implementation was a breeze, and our clients love the results.',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
]

// Basic usage with default settings
export function BasicTestimonials() {
  return (
    <AnimatedTestimonials testimonials={testimonials} />
  )
}

// Advanced usage with custom settings
export function CustomTestimonials() {
  return (
    <AnimatedTestimonials 
      testimonials={testimonials}
      autoplay={true}
      interval={7000}
      animationDuration={800}
      className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg"
    />
  )
}

// Multiple instances with different configurations
export function TestimonialsShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Default Settings</h3>
        <AnimatedTestimonials 
          testimonials={testimonials}
        />
      </div>
      
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Longer Interval</h3>
        <AnimatedTestimonials 
          testimonials={testimonials}
          interval={8000}
        />
      </div>
      
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Slower Animation</h3>
        <AnimatedTestimonials 
          testimonials={testimonials}
          animationDuration={1000}
        />
      </div>
      
      <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-md text-white">
        <h3 className="text-xl font-bold mb-4">Custom Styling</h3>
        <AnimatedTestimonials 
          testimonials={testimonials}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
        />
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
 * Date: 2023-07-21
 * Description: Initial implementation of Animated Testimonials component page
 * Reason: To provide documentation and examples for the AnimatedTestimonials component
 * Impact: None - new page
 * Version: 1.0.0
 */
