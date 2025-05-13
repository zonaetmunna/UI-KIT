"use client"

import ComponentTemplate from "@/app/components/component-template"
import { useState } from 'react'

export default function CardsComponentPage() {
  const title = "Cards"
  const description = "A collection of customizable card components for displaying content in various layouts."
  
  // Example component for preview
  const ExampleComponent = () => (
    <div className="flex flex-wrap gap-8 items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-64 rounded-lg overflow-hidden bg-zinc-800 shadow-lg">
          <div className="h-40 bg-gradient-to-br from-blue-600 to-purple-600"></div>
          <div className="p-5">
            <h3 className="text-lg font-medium text-white mb-2">Basic Card</h3>
            <p className="text-zinc-400 text-sm">
              A simple card with an image area and content section.
            </p>
            <div className="mt-4">
              <button className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded text-sm">
                View Details
              </button>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Basic Card</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-64 rounded-lg overflow-hidden bg-zinc-800 border border-zinc-700 shadow-lg">
          <div className="p-5">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
                  stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Info Card</h3>
            <p className="text-zinc-400 text-sm">
              A card designed for displaying important information or features.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Info Card</p>
      </div>
    </div>
  )
  
  // Customization state
  const [variant, setVariant] = useState('default')
  const [hasImage, setHasImage] = useState(true)
  const [hasFooter, setHasFooter] = useState(true)
  const [hasShadow, setHasShadow] = useState(true)
  const [hasBorder, setHasBorder] = useState(false)
  const [hasHoverEffect, setHasHoverEffect] = useState(true)

  // Customization UI
  const CustomizationUI = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Card Variant</label>
          <div className="flex space-x-2">
            <button 
              onClick={() => setVariant('default')}
              className={`px-3 py-1 rounded ${variant === 'default' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Default
            </button>
            <button 
              onClick={() => setVariant('feature')}
              className={`px-3 py-1 rounded ${variant === 'feature' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Feature
            </button>
            <button 
              onClick={() => setVariant('profile')}
              className={`px-3 py-1 rounded ${variant === 'profile' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Profile
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="has-image" 
            checked={hasImage}
            onChange={(e) => setHasImage(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="has-image" className="text-sm font-medium">Include Image</label>
        </div>
        
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="has-footer" 
            checked={hasFooter}
            onChange={(e) => setHasFooter(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="has-footer" className="text-sm font-medium">Include Footer</label>
        </div>
        
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="has-shadow" 
            checked={hasShadow}
            onChange={(e) => setHasShadow(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="has-shadow" className="text-sm font-medium">Add Shadow</label>
        </div>
        
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="has-border" 
            checked={hasBorder}
            onChange={(e) => setHasBorder(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="has-border" className="text-sm font-medium">Add Border</label>
        </div>
        
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="has-hover-effect" 
            checked={hasHoverEffect}
            onChange={(e) => setHasHoverEffect(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="has-hover-effect" className="text-sm font-medium">Add Hover Effect</label>
        </div>
      </div>
      
      <div className="bg-zinc-950 rounded-lg p-6 flex items-center justify-center min-h-[300px]">
        <div 
          className={`w-72 rounded-lg overflow-hidden bg-zinc-800 
            ${hasBorder ? 'border border-zinc-700' : ''} 
            ${hasShadow ? 'shadow-lg' : ''} 
            ${hasHoverEffect ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl' : ''}`}
        >
          {hasImage && variant !== 'feature' && (
            <div className={`h-40 ${
              variant === 'profile' 
                ? 'flex justify-center pt-6'
                : 'bg-gradient-to-r from-indigo-500 to-purple-600'
            }`}>
              {variant === 'profile' && (
                <div className="w-24 h-24 rounded-full bg-zinc-700 ring-4 ring-zinc-800"></div>
              )}
            </div>
          )}
          
          <div className="p-5">
            {variant === 'feature' && (
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3V7M3 5H7M6 17V21M4 19H8M13 3L15.2857 9.85714L21 12L15.2857 14.1429L13 21L10.7143 14.1429L5 12L10.7143 9.85714L13 3Z" 
                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
            
            {variant === 'profile' && hasImage && (
              <div className="text-center mb-4 -mt-2">
                <h3 className="text-lg font-medium text-white">Sarah Johnson</h3>
                <p className="text-zinc-400 text-sm">Product Designer</p>
              </div>
            )}
            
            {variant !== 'profile' && (
              <h3 className="text-lg font-medium text-white mb-2">
                {variant === 'feature' ? 'Feature Card' : 'Default Card'}
              </h3>
            )}
            
            <p className="text-zinc-400 text-sm">
              {variant === 'profile' 
                ? 'Product designer with 5+ years of experience in creating user-centered digital products.'
                : 'This is a customizable card component that can be adapted for various use cases in your application.'}
            </p>
            
            {hasFooter && (
              <div className={`mt-4 ${variant === 'profile' ? 'flex justify-center space-x-3' : ''}`}>
                {variant === 'profile' ? (
                  <>
                    <button className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8.28809L20.8686 3.40002M18 4L20 6L22 4M8 21C12.4183 21 16 17.4183 16 13C16 8.58172 12.4183 5 8 5C3.58172 5 0 8.58172 0 13C0 17.4183 3.58172 21 8 21Z" 
                          stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 8H10V16H9V8Z" fill="white" />
                        <path d="M13 8H14V16H13V8Z" fill="white" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10C2 10 5 4 12 4C19 4 22 10 22 10C22 10 19 16 12 16C5 16 2 10 2 10Z" 
                          stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" 
                          stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </>
                ) : (
                  <button className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded text-sm">
                    {variant === 'feature' ? 'Learn More' : 'View Details'}
                  </button>
                )}
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
          <td className="py-4 px-4 align-top font-mono text-xs">variant</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'default' | 'feature' | 'profile'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'default'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            The card variation to display
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">children</td>
          <td className="py-4 px-4 align-top text-muted-foreground">React.ReactNode</td>
          <td className="py-4 px-4 align-top text-muted-foreground">Required</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            The content to display inside the card
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">image</td>
          <td className="py-4 px-4 align-top text-muted-foreground">React.ReactNode</td>
          <td className="py-4 px-4 align-top text-muted-foreground">undefined</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Optional image content to display at the top of the card
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">footer</td>
          <td className="py-4 px-4 align-top text-muted-foreground">React.ReactNode</td>
          <td className="py-4 px-4 align-top text-muted-foreground">undefined</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Optional footer content to display at the bottom of the card
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">withBorder</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">false</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Whether to display a border around the card
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">withShadow</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">true</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Whether to display a shadow under the card
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">withHoverEffect</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">false</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Whether to apply a hover effect to the card
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
import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The card variation to display
   * @default "default"
   */
  variant?: 'default' | 'feature' | 'profile';
  
  /**
   * Optional image content to display at the top of the card
   */
  image?: React.ReactNode;
  
  /**
   * Optional footer content to display at the bottom of the card
   */
  footer?: React.ReactNode;
  
  /**
   * Whether to display a border around the card
   * @default false
   */
  withBorder?: boolean;
  
  /**
   * Whether to display a shadow under the card
   * @default true
   */
  withShadow?: boolean;
  
  /**
   * Whether to apply a hover effect to the card
   * @default false
   */
  withHoverEffect?: boolean;
}

/**
 * Card Component
 * 
 * A versatile card component that can be customized for different layouts and purposes.
 */
export function Card({
  variant = 'default',
  image,
  footer,
  withBorder = false,
  withShadow = true,
  withHoverEffect = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div 
      className={cn(
        'rounded-lg overflow-hidden bg-zinc-800',
        withBorder && 'border border-zinc-700',
        withShadow && 'shadow-lg',
        withHoverEffect && 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl',
        className
      )}
      {...props}
    >
      {variant !== 'feature' && image && (
        <div className={variant === 'profile' ? 'flex justify-center pt-6' : ''}>
          {image}
        </div>
      )}
      
      <div className="p-5">
        {variant === 'feature' && (
          <div className="mb-4">
            {image}
          </div>
        )}
        
        {children}
        
        {footer && (
          <div className={cn(
            'mt-4',
            variant === 'profile' && 'flex justify-center space-x-3'
          )}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Card.Title Component
 */
export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 
      className={cn('text-lg font-medium text-white mb-2', className)}
      {...props}
    >
      {children}
    </h3>
  );
}

/**
 * Card.Description Component
 */
export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={cn('text-zinc-400 text-sm', className)}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * Card.Image Component
 */
export function CardImage({
  className,
  src,
  alt = "",
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img 
      src={src}
      alt={alt}
      className={cn('w-full h-auto', className)}
      {...props}
    />
  );
}`

  // Example usage code
  const usageCode = `import { Card } from '@/components/ui/card'

// Basic card example
export function BasicCard() {
  return (
    <Card>
      <Card.Title>Basic Card</Card.Title>
      <Card.Description>
        This is a simple card component with a title and description.
      </Card.Description>
    </Card>
  )
}

// Card with image
export function ImageCard() {
  return (
    <Card
      image={
        <Card.Image 
          src="/placeholder-image.jpg" 
          alt="Card image" 
          className="h-48 object-cover"
        />
      }
    >
      <Card.Title>Card with Image</Card.Title>
      <Card.Description>
        This card includes an image at the top.
      </Card.Description>
    </Card>
  )
}

// Feature card
export function FeatureCard() {
  return (
    <Card
      variant="feature"
      image={
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 3V7M3 5H7M6 17V21M4 19H8M13 3L15.2857 9.85714L21 12L15.2857 14.1429L13 21L10.7143 14.1429L5 12L10.7143 9.85714L13 3Z" 
              stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      }
      footer={
        <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm">
          Learn More
        </button>
      }
      withBorder
      withHoverEffect
    >
      <Card.Title>Feature Card</Card.Title>
      <Card.Description>
        A card designed to highlight features with an icon and a call-to-action button.
      </Card.Description>
    </Card>
  )
}

// Profile card
export function ProfileCard() {
  return (
    <Card
      variant="profile"
      image={
        <div className="w-24 h-24 rounded-full bg-gray-200 ring-4 ring-white">
          <img 
            src="/avatar.jpg" 
            alt="User avatar" 
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      }
      footer={
        <>
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8.28809L20.8686 3.40002M18 4L20 6L22 4M8 21C12.4183 21 16 17.4183 16 13C16 8.58172 12.4183 5 8 5C3.58172 5 0 8.58172 0 13C0 17.4183 3.58172 21 8 21Z" 
                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 8H10V16H9V8Z" fill="black" />
              <path d="M13 8H14V16H13V8Z" fill="black" />
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10C2 10 5 4 12 4C19 4 22 10 22 10C22 10 19 16 12 16C5 16 2 10 2 10Z" 
                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" 
                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </>
      }
      withShadow
    >
      <div className="text-center">
        <Card.Title>Sarah Johnson</Card.Title>
        <Card.Description>Product Designer</Card.Description>
      </div>
    </Card>
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
 * Description: Initial implementation of the Cards component page
 * Reason: To provide documentation and examples for the Cards component
 * Impact: None - new page
 * Version: 1.0.0
 */
