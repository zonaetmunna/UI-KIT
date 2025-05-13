"use client"

import ComponentTemplate from "@/app/components/component-template"
import { AnimatedModal } from '@/components/library/ui'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { useState } from 'react'

/**
 * Animated Modal Component Page
 * This page showcases the AnimatedModal component, provides customization options,
 * and includes documentation, API reference, and example code.
 */
export default function AnimatedModalPage() {
  // Basic component information
  const title = "Animated Modal"
  const description = "A modal dialog component with smooth entrance and exit animations that enhances user experience."
  
  // State for customization
  const [opacity, setOpacity] = useState(0.3)
  const [backdropBlur, setBackdropBlur] = useState(2)
  const [animation, setAnimation] = useState<'fade' | 'zoom' | 'slide'>('fade')
  const [showCloseButton, setShowCloseButton] = useState(true)
  const [position, setPosition] = useState<'center' | 'top' | 'bottom'>('center')
  const [isOpen, setIsOpen] = useState(false)
  
  // Modal content for the examples
  const ModalContent = () => (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">Modal Title</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        This is an example of the AnimatedModal component. It features smooth animations and customizable properties.
      </p>
      <div className="flex justify-end">
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  )
  
  // Example component for preview
  const ExampleComponent = () => (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* Example 1: Default Modal */}
      <div className="flex flex-col items-center">
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Open Modal
        </button>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Click to open modal with current settings</p>
        
        <AnimatedModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          opacity={opacity}
          backdropBlur={backdropBlur}
          animation={animation}
          showCloseButton={showCloseButton}
          position={position}
        >
          <ModalContent />
        </AnimatedModal>
      </div>
      
      {/* Showcase different animation types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
        <div className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h4 className="text-lg font-medium mb-3">Fade Animation</h4>
          <button
            onClick={() => {
              setAnimation('fade')
              setIsOpen(true)
            }}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Preview
          </button>
        </div>
        
        <div className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h4 className="text-lg font-medium mb-3">Zoom Animation</h4>
          <button
            onClick={() => {
              setAnimation('zoom')
              setIsOpen(true)
            }}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Preview
          </button>
        </div>
        
        <div className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h4 className="text-lg font-medium mb-3">Slide Animation</h4>
          <button
            onClick={() => {
              setAnimation('slide')
              setIsOpen(true)
            }}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  )

  // Customization UI
  const CustomizationUI = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <Label>Backdrop Opacity: {opacity.toFixed(2)}</Label>
          </div>
          <Slider 
            value={[opacity]} 
            min={0} 
            max={1} 
            step={0.05} 
            onValueChange={(value) => setOpacity(value[0])} 
          />
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <Label>Backdrop Blur: {backdropBlur}px</Label>
          </div>
          <Slider 
            value={[backdropBlur]} 
            min={0} 
            max={10} 
            step={1} 
            onValueChange={(value) => setBackdropBlur(value[0])} 
          />
        </div>
        
        <div className="space-y-4">
          <Label>Animation Type</Label>
          <div className="flex gap-4">
            <button 
              className={`px-3 py-2 rounded-md ${animation === 'fade' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              onClick={() => setAnimation('fade')}
            >
              Fade
            </button>
            <button 
              className={`px-3 py-2 rounded-md ${animation === 'zoom' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              onClick={() => setAnimation('zoom')}
            >
              Zoom
            </button>
            <button 
              className={`px-3 py-2 rounded-md ${animation === 'slide' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              onClick={() => setAnimation('slide')}
            >
              Slide
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          <Label>Position</Label>
          <div className="flex gap-4">
            <button 
              className={`px-3 py-2 rounded-md ${position === 'top' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              onClick={() => setPosition('top')}
            >
              Top
            </button>
            <button 
              className={`px-3 py-2 rounded-md ${position === 'center' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              onClick={() => setPosition('center')}
            >
              Center
            </button>
            <button 
              className={`px-3 py-2 rounded-md ${position === 'bottom' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              onClick={() => setPosition('bottom')}
            >
              Bottom
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch 
            id="show-close" 
            checked={showCloseButton}
            onCheckedChange={setShowCloseButton}
          />
          <Label htmlFor="show-close">Show Close Button</Label>
        </div>
      </div>
      
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Open Customized Modal
        </button>
        <div className="mt-4 text-sm">
          <p>Current settings:</p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2">
            <li>Backdrop Opacity: {opacity.toFixed(2)}</li>
            <li>Backdrop Blur: {backdropBlur}px</li>
            <li>Animation: {animation}</li>
            <li>Position: {position}</li>
            <li>Show Close Button: {showCloseButton ? 'Yes' : 'No'}</li>
          </ul>
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
          <td className="py-4 px-4 align-top font-mono text-xs">isOpen</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">false</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Controls whether the modal is displayed or hidden.
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">onClose</td>
          <td className="py-4 px-4 align-top text-muted-foreground">() => void</td>
          <td className="py-4 px-4 align-top text-muted-foreground">required</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Function called when the modal is closed via the close button or backdrop click.
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">children</td>
          <td className="py-4 px-4 align-top text-muted-foreground">ReactNode</td>
          <td className="py-4 px-4 align-top text-muted-foreground">required</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Content to be displayed within the modal.
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">opacity</td>
          <td className="py-4 px-4 align-top text-muted-foreground">number</td>
          <td className="py-4 px-4 align-top text-muted-foreground">0.3</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Opacity of the backdrop (0-1).
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">backdropBlur</td>
          <td className="py-4 px-4 align-top text-muted-foreground">number</td>
          <td className="py-4 px-4 align-top text-muted-foreground">2</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Blur intensity of the backdrop in pixels.
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">animation</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'fade' | 'zoom' | 'slide'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'fade'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Animation style for the modal entrance and exit.
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">showCloseButton</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">true</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Whether to show the close button in the top-right corner.
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">position</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'center' | 'top' | 'bottom'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'center'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Vertical positioning of the modal.
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">className</td>
          <td className="py-4 px-4 align-top text-muted-foreground">string</td>
          <td className="py-4 px-4 align-top text-muted-foreground">undefined</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Additional CSS classes to apply to the modal container.
          </td>
        </tr>
      </tbody>
    </table>
  )

  // Source code of the component
  const componentCode = `import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';

export interface AnimatedModalProps {
  /**
   * Controls whether the modal is displayed or hidden
   * @required
   */
  isOpen: boolean;
  
  /**
   * Function called when the modal is closed
   * @required
   */
  onClose: () => void;
  
  /**
   * Content to be displayed within the modal
   * @required
   */
  children: React.ReactNode;
  
  /**
   * Opacity of the backdrop (0-1)
   * @default 0.3
   */
  opacity?: number;
  
  /**
   * Blur intensity of the backdrop in pixels
   * @default 2
   */
  backdropBlur?: number;
  
  /**
   * Animation style for the modal
   * @default 'fade'
   */
  animation?: 'fade' | 'zoom' | 'slide';
  
  /**
   * Whether to show the close button
   * @default true
   */
  showCloseButton?: boolean;
  
  /**
   * Vertical positioning of the modal
   * @default 'center'
   */
  position?: 'center' | 'top' | 'bottom';
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * AnimatedModal Component
 * 
 * A modal dialog component with smooth entrance and exit animations.
 */
export default function AnimatedModal({
  isOpen,
  onClose,
  children,
  opacity = 0.3,
  backdropBlur = 2,
  animation = 'fade',
  showCloseButton = true,
  position = 'center',
  className,
}: AnimatedModalProps) {
  const [mounted, setMounted] = useState(false);
  const [animationClass, setAnimationClass] = useState<string>('');

  // Handle mounting state to ensure the component is only rendered on the client
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Handle keyboard events (Escape key)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; // Restore scrolling
    };
  }, [isOpen, onClose]);

  // Set animation classes based on animation type
  useEffect(() => {
    if (isOpen) {
      if (animation === 'fade') {
        setAnimationClass('animate-fade-in');
      } else if (animation === 'zoom') {
        setAnimationClass('animate-zoom-in');
      } else if (animation === 'slide') {
        setAnimationClass('animate-slide-in');
      }
    } else {
      setAnimationClass('');
    }
  }, [isOpen, animation]);

  // Position classes
  const positionClasses = {
    center: 'items-center',
    top: 'items-start pt-16',
    bottom: 'items-end pb-16'
  };

  // Don't render on server
  if (!mounted) return null;

  // Don't render if not open
  if (!isOpen) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex justify-center overflow-y-auto"
      style={{ 
        backgroundColor: \`rgba(0, 0, 0, \${opacity})\`,
        backdropFilter: \`blur(\${backdropBlur}px)\`
      }}
      onClick={onClose}
    >
      <div 
        className={cn(
          'flex flex-col w-full h-full',
          positionClasses[position]
        )}
      >
        <div 
          className={cn(
            'relative max-w-xl mx-auto my-4',
            animationClass,
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {showCloseButton && (
            <button 
              onClick={onClose}
              className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}`

  // Example usage code
  const usageCode = `import { AnimatedModal } from '@/components/library/ui'
import { useState } from 'react'

// Basic usage with default settings
export function BasicModal() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Basic Modal
      </button>
      
      <AnimatedModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Modal Title</h2>
          <p className="mb-6">This is a basic modal with default settings.</p>
          <button 
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Close
          </button>
        </div>
      </AnimatedModal>
    </>
  )
}

// Advanced usage with custom settings
export function CustomizedModal() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Custom Modal
      </button>
      
      <AnimatedModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        opacity={0.7}
        backdropBlur={5}
        animation="zoom"
        position="top"
        showCloseButton={false}
        className="w-full max-w-md"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Custom Modal</h2>
          <p className="mb-6">
            This modal has custom opacity, blur, animation, and positioning.
          </p>
          <div className="flex justify-end">
            <button 
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      </AnimatedModal>
    </>
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
 * Description: Initial implementation of Animated Modal component page
 * Reason: To provide documentation and examples for the AnimatedModal component
 * Impact: None - new page
 * Version: 1.0.0
 */ 