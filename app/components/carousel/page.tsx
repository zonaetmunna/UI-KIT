"use client"

import ComponentTemplate from "@/app/components/component-template"
import { useState } from 'react'

export default function CarouselComponentPage() {
  const title = "Carousel"
  const description = "A responsive image carousel component with smooth animations and navigation controls."
  
  // Example component for preview
  const ExampleComponent = () => (
    <div className="w-full max-w-3xl">
      <div className="relative overflow-hidden rounded-lg bg-zinc-900">
        {/* Carousel slide container */}
        <div className="flex transition-transform duration-500 h-64">
          <div className="flex-shrink-0 w-full flex items-center justify-center bg-gradient-to-r from-purple-900 to-blue-900">
            <span className="text-white text-xl font-medium">Slide 1</span>
          </div>
        </div>
        
        {/* Navigation arrows */}
        <button className="absolute top-1/2 left-4 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 text-white">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="absolute top-1/2 right-4 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 text-white">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          <button className="w-2 h-2 rounded-full bg-white"></button>
          <button className="w-2 h-2 rounded-full bg-white/50"></button>
          <button className="w-2 h-2 rounded-full bg-white/50"></button>
        </div>
      </div>
    </div>
  )
  
  // Customization state
  const [autoPlay, setAutoPlay] = useState(true)
  const [showArrows, setShowArrows] = useState(true)
  const [showIndicators, setShowIndicators] = useState(true)
  const [interval, setInterval] = useState(3000)
  const [effect, setEffect] = useState('slide')

  // Customization UI
  const CustomizationUI = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="auto-play" 
            checked={autoPlay}
            onChange={(e) => setAutoPlay(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="auto-play" className="text-sm font-medium">Auto Play</label>
        </div>
        
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="show-arrows" 
            checked={showArrows}
            onChange={(e) => setShowArrows(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="show-arrows" className="text-sm font-medium">Show Navigation Arrows</label>
        </div>
        
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="show-indicators" 
            checked={showIndicators}
            onChange={(e) => setShowIndicators(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="show-indicators" className="text-sm font-medium">Show Indicators</label>
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Transition Effect</label>
          <div className="flex space-x-2">
            <button 
              onClick={() => setEffect('slide')}
              className={`px-3 py-1 rounded ${effect === 'slide' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Slide
            </button>
            <button 
              onClick={() => setEffect('fade')}
              className={`px-3 py-1 rounded ${effect === 'fade' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Fade
            </button>
            <button 
              onClick={() => setEffect('zoom')}
              className={`px-3 py-1 rounded ${effect === 'zoom' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Zoom
            </button>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Auto Play Interval: {interval}ms</label>
          <input 
            type="range" 
            min="1000" 
            max="5000" 
            step="500"
            value={interval} 
            onChange={(e) => setInterval(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
      
      <div className="bg-zinc-950 rounded-lg p-6 flex items-center justify-center min-h-[300px]">
        <div className="w-full max-w-md">
          <div className="relative overflow-hidden rounded-lg bg-zinc-900">
            {/* Carousel slide container with customized transition */}
            <div className={`flex h-56 ${
              effect === 'slide' ? 'transition-transform duration-500' :
              effect === 'fade' ? 'transition-opacity duration-500' :
              'transition-all duration-500 transform'
            }`}>
              <div className="flex-shrink-0 w-full flex items-center justify-center bg-gradient-to-r from-purple-900 to-blue-900">
                <span className="text-white text-xl font-medium">Customized Carousel</span>
              </div>
            </div>
            
            {/* Navigation arrows */}
            {showArrows && (
              <>
                <button className="absolute top-1/2 left-4 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="absolute top-1/2 right-4 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </>
            )}
            
            {/* Indicators */}
            {showIndicators && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                <button className="w-2 h-2 rounded-full bg-white"></button>
                <button className="w-2 h-2 rounded-full bg-white/50"></button>
                <button className="w-2 h-2 rounded-full bg-white/50"></button>
              </div>
            )}
            
            {/* Auto play indicator */}
            {autoPlay && (
              <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 rounded-full text-white text-xs">
                Auto: {interval/1000}s
              </div>
            )}
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
          <td className="py-4 px-4 align-top font-mono text-xs">slides</td>
          <td className="py-4 px-4 align-top text-muted-foreground">React.ReactNode[]</td>
          <td className="py-4 px-4 align-top text-muted-foreground">[]</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Array of React nodes to display as carousel slides
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">autoPlay</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">true</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Whether to automatically advance slides
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">interval</td>
          <td className="py-4 px-4 align-top text-muted-foreground">number</td>
          <td className="py-4 px-4 align-top text-muted-foreground">3000</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Time between slide transitions (in milliseconds)
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">showArrows</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">true</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Whether to show navigation arrows
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">showIndicators</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">true</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Whether to show slide indicators
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">effect</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'slide' | 'fade' | 'zoom'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'slide'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            The transition effect to use when changing slides
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">className</td>
          <td className="py-4 px-4 align-top text-muted-foreground">string</td>
          <td className="py-4 px-4 align-top text-muted-foreground">undefined</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Additional class names to apply to the carousel
          </td>
        </tr>
      </tbody>
    </table>
  )

  // Source code of the component
  const componentCode = `import { cn } from '@/lib/utils';
import React, { useState, useEffect, useRef } from 'react';

export interface CarouselProps {
  /**
   * Array of React nodes to display as carousel slides
   * @default []
   */
  slides: React.ReactNode[];
  
  /**
   * Whether to automatically advance slides
   * @default true
   */
  autoPlay?: boolean;
  
  /**
   * Time between slide transitions (in milliseconds)
   * @default 3000
   */
  interval?: number;
  
  /**
   * Whether to show navigation arrows
   * @default true
   */
  showArrows?: boolean;
  
  /**
   * Whether to show slide indicators
   * @default true
   */
  showIndicators?: boolean;
  
  /**
   * The transition effect to use when changing slides
   * @default 'slide'
   */
  effect?: 'slide' | 'fade' | 'zoom';
  
  /**
   * Additional class names
   */
  className?: string;
}

/**
 * Carousel Component
 * 
 * A responsive image carousel component with smooth animations and navigation controls.
 */
export function Carousel({
  slides = [],
  autoPlay = true,
  interval = 3000,
  showArrows = true,
  showIndicators = true,
  effect = 'slide',
  className,
  ...props
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Handle auto-play functionality
  useEffect(() => {
    if (autoPlay && !isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, interval);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, isPaused, interval, currentSlide]);
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  const pauseAutoPlay = () => {
    setIsPaused(true);
  };
  
  const resumeAutoPlay = () => {
    setIsPaused(false);
  };
  
  // Determine transition classes based on effect
  const getSlideTransitionClass = () => {
    switch (effect) {
      case 'fade':
        return 'transition-opacity duration-500';
      case 'zoom':
        return 'transition-all duration-500 transform';
      case 'slide':
      default:
        return 'transition-transform duration-500';
    }
  };
  
  // Determine transform style based on effect and current slide
  const getSlideStyle = () => {
    switch (effect) {
      case 'fade':
        return { opacity: 1 };
      case 'zoom':
        return { transform: 'scale(1)' };
      case 'slide':
      default:
        return { transform: \`translateX(-\${currentSlide * 100}%)\` };
    }
  };
  
  return (
    <div 
      className={cn('relative overflow-hidden rounded-lg', className)}
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
      {...props}
    >
      {/* Carousel slides */}
      <div 
        className={cn('flex', getSlideTransitionClass())}
        style={getSlideStyle()}
      >
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-full"
            style={effect === 'fade' ? { 
              opacity: currentSlide === index ? 1 : 0,
              position: 'absolute',
              inset: 0,
              transition: 'opacity 500ms ease'
            } : effect === 'zoom' ? {
              transform: currentSlide === index ? 'scale(1)' : 'scale(0.9)',
              opacity: currentSlide === index ? 1 : 0,
              position: 'absolute',
              inset: 0,
              transition: 'all 500ms ease'
            } : {}}
          >
            {slide}
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      {showArrows && slides.length > 1 && (
        <>
          <button 
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </>
      )}
      
      {/* Indicators */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button 
              key={index}
              className={cn(
                'w-2.5 h-2.5 rounded-full transition-colors',
                currentSlide === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
              )}
              onClick={() => goToSlide(index)}
              aria-label={\`Go to slide \${index + 1}\`}
            />
          ))}
        </div>
      )}
    </div>
  );
}`

  // Example usage code
  const usageCode = `import { Carousel } from '@/components/ui/carousel'

export function SimpleCarousel() {
  const slides = [
    <div key="slide1" className="h-64 bg-blue-500 flex items-center justify-center">
      <span className="text-white text-2xl font-bold">Slide 1</span>
    </div>,
    <div key="slide2" className="h-64 bg-green-500 flex items-center justify-center">
      <span className="text-white text-2xl font-bold">Slide 2</span>
    </div>,
    <div key="slide3" className="h-64 bg-purple-500 flex items-center justify-center">
      <span className="text-white text-2xl font-bold">Slide 3</span>
    </div>
  ];

  return (
    <Carousel slides={slides} />
  )
}

export function CustomizedCarousel() {
  const slides = [
    <img key="img1" src="/image1.jpg" alt="Image 1" className="h-full w-full object-cover" />,
    <img key="img2" src="/image2.jpg" alt="Image 2" className="h-full w-full object-cover" />,
    <img key="img3" src="/image3.jpg" alt="Image 3" className="h-full w-full object-cover" />
  ];

  return (
    <Carousel 
      slides={slides}
      effect="fade"
      autoPlay={true}
      interval={5000}
      className="h-80 w-full"
    />
  )
}

export function NoControlsCarousel() {
  const slides = [
    <div key="slide1" className="h-48 bg-red-500 flex items-center justify-center">
      <span className="text-white">Content 1</span>
    </div>,
    <div key="slide2" className="h-48 bg-yellow-500 flex items-center justify-center">
      <span className="text-white">Content 2</span>
    </div>
  ];

  return (
    <Carousel 
      slides={slides}
      showArrows={false}
      showIndicators={false}
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
 * Description: Initial implementation of the Carousel component page
 * Reason: To provide documentation and examples for the Carousel component
 * Impact: None - new page
 * Version: 1.0.0
 */
