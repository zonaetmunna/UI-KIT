"use client"

import ComponentTemplate from "@/app/components/component-template"
import { useState } from 'react'

export default function CardStackPage() {
  const title = "Card Stack"
  const description = "An interactive card stack component with 3D effects that allows users to swipe, flip, and navigate through a collection of cards."
  
  // Example component for preview
  const ExampleComponent = () => {
    return (
      <div className="w-full flex flex-col items-center space-y-8">
        <div className="relative w-72 h-96">
          {/* Card Stack */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl transform rotate-3 translate-x-4 translate-y-2"></div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 shadow-xl transform rotate-1 translate-x-2 translate-y-1"></div>
          <div className="absolute inset-0 rounded-xl bg-white shadow-xl flex flex-col overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Card Title</h3>
              <p className="text-gray-600 mb-4 flex-1">This is a card in the stack. Swipe or use the controls to navigate through the stack.</p>
              <div className="flex justify-between">
                <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">Details</button>
                <div className="flex space-x-2">
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  // Customization state
  const [stackSize, setStackSize] = useState(3)
  const [cardStyle, setCardStyle] = useState<'gradient' | 'solid' | 'outlined'>('gradient')
  const [showControls, setShowControls] = useState(true)
  const [cardSpacing, setCardSpacing] = useState(6)
  const [stackRotation, setStackRotation] = useState(3)
  const [interactionType, setInteractionType] = useState<'swipe' | 'click'>('swipe')
  
  // Customization UI
  const CustomizationUI = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Stack Size</label>
          <div className="flex items-center space-x-4">
            <input 
              type="range" 
              min="2" 
              max="5" 
              step="1" 
              value={stackSize} 
              onChange={(e) => setStackSize(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="font-mono text-sm">{stackSize} cards</span>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Card Style</label>
          <div className="flex space-x-2">
            <button 
              onClick={() => setCardStyle('gradient')}
              className={`px-3 py-1 rounded ${cardStyle === 'gradient' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Gradient
            </button>
            <button 
              onClick={() => setCardStyle('solid')}
              className={`px-3 py-1 rounded ${cardStyle === 'solid' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Solid
            </button>
            <button 
              onClick={() => setCardStyle('outlined')}
              className={`px-3 py-1 rounded ${cardStyle === 'outlined' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Outlined
            </button>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Card Spacing (px)</label>
          <div className="flex items-center space-x-4">
            <input 
              type="range" 
              min="2" 
              max="12" 
              step="2" 
              value={cardSpacing} 
              onChange={(e) => setCardSpacing(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="font-mono text-sm">{cardSpacing}px</span>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Stack Rotation (deg)</label>
          <div className="flex items-center space-x-4">
            <input 
              type="range" 
              min="0" 
              max="10" 
              step="1" 
              value={stackRotation} 
              onChange={(e) => setStackRotation(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="font-mono text-sm">{stackRotation}°</span>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Interaction Type</label>
          <div className="flex space-x-2">
            <button 
              onClick={() => setInteractionType('swipe')}
              className={`px-3 py-1 rounded ${interactionType === 'swipe' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Swipe
            </button>
            <button 
              onClick={() => setInteractionType('click')}
              className={`px-3 py-1 rounded ${interactionType === 'click' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Click
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="show-controls" 
            checked={showControls}
            onChange={(e) => setShowControls(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="show-controls" className="text-sm font-medium">Show Navigation Controls</label>
        </div>
      </div>
      
      <div className="bg-zinc-950 rounded-lg p-6 flex items-center justify-center">
        <div className="relative w-72 h-96">
          {/* Dynamic Card Stack */}
          {[...Array(stackSize)].map((_, index) => {
            // Skip the top card, which is rendered last
            if (index === stackSize - 1) return null;
            
            const zIndex = index;
            const rotation = (stackRotation * (index + 1)) / stackSize;
            const translate = (cardSpacing * (index + 1)) / stackSize;
            
            return (
              <div 
                key={index}
                className={`absolute inset-0 rounded-xl shadow-xl transform ${
                  cardStyle === 'gradient' 
                    ? `bg-gradient-to-br ${
                        index % 3 === 0 
                          ? 'from-indigo-500 to-purple-600' 
                          : index % 3 === 1 
                            ? 'from-blue-500 to-teal-500' 
                            : 'from-pink-500 to-rose-500'
                      }`
                    : cardStyle === 'solid'
                      ? `${
                          index % 3 === 0 
                            ? 'bg-indigo-600' 
                            : index % 3 === 1 
                              ? 'bg-blue-600' 
                              : 'bg-rose-600'
                        }`
                      : `bg-transparent border-2 ${
                          index % 3 === 0 
                            ? 'border-indigo-600' 
                            : index % 3 === 1 
                              ? 'border-blue-600' 
                              : 'border-rose-600'
                        }`
                }`}
                style={{ 
                  zIndex,
                  transform: `rotate(${rotation}deg) translateX(${translate}px) translateY(${translate}px)`
                }}
              ></div>
            )
          })}
          
          {/* Top Card */}
          <div 
            className={`absolute inset-0 rounded-xl shadow-xl flex flex-col overflow-hidden ${
              cardStyle === 'gradient' 
                ? 'bg-white' 
                : cardStyle === 'solid'
                  ? 'bg-white'
                  : 'bg-white'
            }`}
            style={{ zIndex: stackSize }}
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Card {stackSize}</h3>
              <p className="text-gray-600 mb-4 flex-1">
                {interactionType === 'swipe' 
                  ? 'Swipe left or right to navigate through the stack.'
                  : 'Click the navigation buttons to browse through the stack.'
                }
              </p>
              <div className="flex justify-between">
                <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">Details</button>
                {showControls && (
                  <div className="flex space-x-2">
                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
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
          <td className="py-4 px-4 align-top font-mono text-xs">cards</td>
          <td className="py-4 px-4 align-top text-muted-foreground">CardItem[]</td>
          <td className="py-4 px-4 align-top text-muted-foreground">[]</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Array of card items to display in the stack
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">cardStyle</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'gradient' | 'solid' | 'outlined'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'gradient'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            The visual style for cards in the stack
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">cardSpacing</td>
          <td className="py-4 px-4 align-top text-muted-foreground">number</td>
          <td className="py-4 px-4 align-top text-muted-foreground">6</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Spacing between cards in pixels
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">stackRotation</td>
          <td className="py-4 px-4 align-top text-muted-foreground">number</td>
          <td className="py-4 px-4 align-top text-muted-foreground">3</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Maximum rotation angle for cards in degrees
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">interactionType</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'swipe' | 'click'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'swipe'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            How users interact with the card stack
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">showControls</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">true</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Whether to show navigation control buttons
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">onCardChange</td>
          <td className="py-4 px-4 align-top text-muted-foreground">(index: number) => void</td>
          <td className="py-4 px-4 align-top text-muted-foreground">undefined</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Callback function when active card changes
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
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

export interface CardItem {
  /**
   * Unique identifier for the card
   */
  id: string | number;
  
  /**
   * Card title
   */
  title: string;
  
  /**
   * Card description or content
   */
  content: string;
  
  /**
   * Optional image URL for the card
   */
  imageUrl?: string;
  
  /**
   * Any additional data for the card
   */
  [key: string]: any;
}

export interface CardStackProps {
  /**
   * Array of card items to display in the stack
   * @default []
   */
  cards: CardItem[];
  
  /**
   * The visual style for cards in the stack
   * @default "gradient"
   */
  cardStyle?: 'gradient' | 'solid' | 'outlined';
  
  /**
   * Spacing between cards in pixels
   * @default 6
   */
  cardSpacing?: number;
  
  /**
   * Maximum rotation angle for cards in degrees
   * @default 3
   */
  stackRotation?: number;
  
  /**
   * How users interact with the card stack
   * @default "swipe"
   */
  interactionType?: 'swipe' | 'click';
  
  /**
   * Whether to show navigation control buttons
   * @default true
   */
  showControls?: boolean;
  
  /**
   * Callback function when active card changes
   */
  onCardChange?: (index: number) => void;
  
  /**
   * Additional class names
   */
  className?: string;
}

/**
 * CardStack Component
 * 
 * An interactive card stack component with 3D effects that allows users 
 * to swipe, flip, and navigate through a collection of cards.
 */
export function CardStack({
  cards = [],
  cardStyle = 'gradient',
  cardSpacing = 6,
  stackRotation = 3,
  interactionType = 'swipe',
  showControls = true,
  onCardChange,
  className,
  ...props
}: CardStackProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | null>(null);
  const dragControls = useRef<AbortController | null>(null);
  
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-20, 0, 20]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);
  
  // Handle card transition
  const handleCardChange = (direction: 'prev' | 'next') => {
    if (cards.length <= 1) return;
    
    if (direction === 'next') {
      setExitDirection('left');
      setActiveIndex((prev) => (prev + 1) % cards.length);
    } else {
      setExitDirection('right');
      setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }
    
    if (onCardChange) {
      const newIndex = direction === 'next' 
        ? (activeIndex + 1) % cards.length
        : (activeIndex - 1 + cards.length) % cards.length;
      onCardChange(newIndex);
    }
  };
  
  // Handle drag end for swipe interaction
  const handleDragEnd = (event: any, info: any) => {
    const threshold = 100;
    
    if (info.offset.x > threshold) {
      handleCardChange('prev');
    } else if (info.offset.x < -threshold) {
      handleCardChange('next');
    }
  };
  
  // Get styles for stacked cards
  const getStackedCardStyle = (index: number) => {
    const isActiveCard = index === activeIndex;
    const isBehindActive = (index - activeIndex + cards.length) % cards.length < 3 && !isActiveCard;
    const rotation = isBehindActive 
      ? (stackRotation * ((index - activeIndex + cards.length) % cards.length)) / 3
      : 0;
    const translateX = isBehindActive
      ? (cardSpacing * ((index - activeIndex + cards.length) % cards.length)) / 3
      : 0;
    const translateY = isBehindActive
      ? (cardSpacing * ((index - activeIndex + cards.length) % cards.length)) / 3
      : 0;
    
    return {
      zIndex: isActiveCard ? cards.length : cards.length - ((index - activeIndex + cards.length) % cards.length),
      transform: isBehindActive ? \`rotate(\${rotation}deg) translateX(\${translateX}px) translateY(\${translateY}px)\` : undefined,
      opacity: ((index - activeIndex + cards.length) % cards.length > 3) ? 0 : 1,
    };
  };
  
  // Get background style based on cardStyle
  const getCardBackground = (index: number) => {
    if (cardStyle === 'gradient') {
      return index % 3 === 0 
        ? 'bg-gradient-to-br from-indigo-500 to-purple-600'
        : index % 3 === 1 
          ? 'bg-gradient-to-br from-blue-500 to-teal-500'
          : 'bg-gradient-to-br from-pink-500 to-rose-500';
    } else if (cardStyle === 'solid') {
      return index % 3 === 0 
        ? 'bg-indigo-600'
        : index % 3 === 1 
          ? 'bg-blue-600'
          : 'bg-rose-600';
    } else {
      return \`bg-transparent border-2 \${
        index % 3 === 0 
          ? 'border-indigo-600'
          : index % 3 === 1 
            ? 'border-blue-600'
            : 'border-rose-600'
      }\`;
    }
  };
  
  // Effect to handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handleCardChange('prev');
      } else if (e.key === 'ArrowRight') {
        handleCardChange('next');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, cards.length]);
  
  if (cards.length === 0) {
    return (
      <div className={cn('relative w-full h-96 flex items-center justify-center', className)} {...props}>
        <div className="text-muted-foreground">No cards to display</div>
      </div>
    );
  }
  
  return (
    <div className={cn('relative w-full', className)} {...props}>
      <div className="relative w-full aspect-[3/4] max-w-sm mx-auto">
        {/* Stacked cards in the background */}
        {cards.map((card, index) => {
          if (index === activeIndex) return null; // Skip active card, rendered below
          
          const style = getStackedCardStyle(index);
          
          return (
            <div
              key={card.id}
              className={cn(
                'absolute inset-0 rounded-xl shadow-xl',
                getCardBackground(index)
              )}
              style={style}
            ></div>
          );
        })}
        
        {/* Active card with animation */}
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={cards[activeIndex].id}
            className={cn(
              'absolute inset-0 rounded-xl shadow-xl bg-white overflow-hidden',
              interactionType === 'swipe' ? 'cursor-grab active:cursor-grabbing' : ''
            )}
            style={{
              zIndex: cards.length + 1,
              x: interactionType === 'swipe' ? x : 0,
              rotate: interactionType === 'swipe' ? rotate : 0,
              opacity: interactionType === 'swipe' ? opacity : 1,
            }}
            drag={interactionType === 'swipe' ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragStart={() => {
              if (dragControls.current) {
                dragControls.current.abort();
              }
              dragControls.current = new AbortController();
            }}
            onDragEnd={handleDragEnd}
            initial={{
              x: exitDirection === 'left' ? 300 : exitDirection === 'right' ? -300 : 0,
              opacity: exitDirection ? 0 : 1,
              rotateY: exitDirection ? 45 : 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              rotateY: 0,
            }}
            exit={{
              x: exitDirection === 'left' ? -300 : 300,
              opacity: 0,
              rotateY: exitDirection === 'left' ? -45 : 45,
            }}
            transition={{
              type: 'spring',
              damping: 20,
              stiffness: 100,
            }}
          >
            {/* Card image */}
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              {cards[activeIndex].imageUrl ? (
                <img
                  src={cards[activeIndex].imageUrl}
                  alt={cards[activeIndex].title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <svg className="w-24 h-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              )}
            </div>
            
            {/* Card content */}
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{cards[activeIndex].title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{cards[activeIndex].content}</p>
              
              <div className="flex justify-between">
                {cards[activeIndex].actionButton && (
                  <button
                    onClick={cards[activeIndex].onAction}
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white"
                  >
                    {cards[activeIndex].actionButton}
                  </button>
                )}
                
                {showControls && (
                  <div className="flex space-x-2 ml-auto">
                    <button
                      onClick={() => handleCardChange('prev')}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-colors hover:bg-gray-200"
                      aria-label="Previous card"
                    >
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleCardChange('next')}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-colors hover:bg-gray-200"
                      aria-label="Next card"
                    >
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Card indicator dots */}
      {cards.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {cards.map((_, index) => (
            <button
              key={index}
              className={cn(
                'w-2 h-2 rounded-full transition-colors',
                index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
              )}
              onClick={() => {
                setExitDirection(index > activeIndex ? 'left' : 'right');
                setActiveIndex(index);
                if (onCardChange) onCardChange(index);
              }}
              aria-label={\`Go to card \${index + 1}\`}
            />
          ))}
        </div>
      )}
    </div>
  );
}`

  // Usage examples
  const usageCode = `import { CardStack } from '@/components/ui/card-stack'

// Basic card stack example
export function BasicCardStack() {
  const cards = [
    {
      id: 1,
      title: 'Getting Started',
      content: 'Welcome to our app! Swipe through these cards to learn more.',
      imageUrl: '/images/getting-started.jpg',
      actionButton: 'Learn More'
    },
    {
      id: 2,
      title: 'Features',
      content: 'Explore our powerful features designed to boost your productivity.',
      imageUrl: '/images/features.jpg',
      actionButton: 'View Features'
    },
    {
      id: 3,
      title: 'Support',
      content: 'Need help? Our support team is always ready to assist you.',
      imageUrl: '/images/support.jpg',
      actionButton: 'Contact Support'
    }
  ];

  return (
    <CardStack 
      cards={cards} 
      cardStyle="gradient"
    />
  )
}

// Card stack with click navigation
export function ClickNavigationStack() {
  const cards = [
    {
      id: 'product1',
      title: 'Premium Headphones',
      content: 'Noise-cancelling wireless headphones with 40 hours of battery life.',
      imageUrl: '/images/headphones.jpg',
      price: '$299',
      actionButton: 'Add to Cart'
    },
    {
      id: 'product2',
      title: 'Smart Watch',
      content: 'Track your fitness goals and stay connected with this premium smart watch.',
      imageUrl: '/images/smartwatch.jpg',
      price: '$249',
      actionButton: 'Add to Cart'
    },
    {
      id: 'product3',
      title: 'Bluetooth Speaker',
      content: 'Waterproof speaker with amazing sound quality for any environment.',
      imageUrl: '/images/speaker.jpg',
      price: '$199',
      actionButton: 'Add to Cart'
    }
  ];

  return (
    <CardStack 
      cards={cards}
      interactionType="click"
      cardStyle="solid"
      showControls={true}
      onCardChange={(index) => console.log(\`Viewing card \${index + 1}\`)}
    />
  )
}

// Minimal outlined card stack
export function OutlinedCardStack() {
  const cards = [
    {
      id: 'step1',
      title: 'Step 1: Sign Up',
      content: 'Create your account to get started with our services.',
      actionButton: 'Sign Up'
    },
    {
      id: 'step2',
      title: 'Step 2: Customize',
      content: 'Set up your preferences and personalize your experience.',
      actionButton: 'Configure'
    },
    {
      id: 'step3',
      title: 'Step 3: Invite Friends',
      content: 'Grow your network by inviting friends to join you.',
      actionButton: 'Invite'
    }
  ];

  return (
    <CardStack 
      cards={cards}
      cardStyle="outlined"
      cardSpacing={8}
      stackRotation={5}
      className="max-w-sm mx-auto"
    />
  )
}

// Profile card stack with custom styling
export function ProfileCardStack() {
  const profiles = [
    {
      id: 'user1',
      title: 'Jane Cooper',
      content: 'Product Designer at Design Co. Based in New York City.',
      imageUrl: '/images/jane.jpg',
      social: {
        twitter: '@janecooper',
        linkedin: '/in/janecooper'
      },
      actionButton: 'Connect'
    },
    {
      id: 'user2',
      title: 'Alex Morgan',
      content: 'Frontend Developer at Tech Inc. Remote worker from Berlin.',
      imageUrl: '/images/alex.jpg',
      social: {
        twitter: '@alexmorgan',
        linkedin: '/in/alexmorgan'
      },
      actionButton: 'Connect'
    },
    {
      id: 'user3',
      title: 'Sam Wilson',
      content: 'UX Researcher at Research Labs. Based in Toronto.',
      imageUrl: '/images/sam.jpg',
      social: {
        twitter: '@samwilson',
        linkedin: '/in/samwilson'
      },
      actionButton: 'Connect'
    }
  ];

  // Custom render function for profile cards
  const renderCustomCard = (card) => (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center">
        <img 
          src={card.imageUrl} 
          alt={card.title} 
          className="w-14 h-14 rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
          <div className="flex space-x-2 text-sm text-blue-500">
            <a href={\`https://twitter.com/\${card.social.twitter}\`}>{card.social.twitter}</a>
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{card.content}</p>
      <button className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg">
        {card.actionButton}
      </button>
    </div>
  );

  return (
    <div className="bg-gray-100 p-8 rounded-xl">
      <CardStack 
        cards={profiles}
        cardStyle="gradient"
        // In a real implementation, you would pass the custom render function
        // renderCard={renderCustomCard}
      />
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
 * Description: Initial implementation of the Card Stack component page
 * Reason: To provide documentation and examples for the Card Stack component
 * Impact: None - new page
 * Version: 1.0.0
 */
