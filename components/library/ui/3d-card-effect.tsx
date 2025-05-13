import { cn } from '@/lib/utils';
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
 * 
 * @example
 * ```tsx
 * <ThreeDCardEffect className="p-6 bg-white rounded-lg shadow-lg">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </ThreeDCardEffect>
 * ```
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
        background = `linear-gradient(to bottom, ${glareColor} 0%, transparent 100%)`;
        break;
      case 'right':
        background = `linear-gradient(to left, ${glareColor} 0%, transparent 100%)`;
        break;
      case 'bottom':
        background = `linear-gradient(to top, ${glareColor} 0%, transparent 100%)`;
        break;
      case 'left':
        background = `linear-gradient(to right, ${glareColor} 0%, transparent 100%)`;
        break;
      case 'all':
      default:
        background = `radial-gradient(circle at ${glareCoords.x}% ${glareCoords.y}%, ${glareColor}, transparent 70%)`;
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
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
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
}

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-15
 * Description: Initial implementation of ThreeDCardEffect component
 * Reason: To provide a 3D perspective effect for cards that responds to mouse movement
 * Impact: None - new component
 * Version: 1.0.0
 */ 