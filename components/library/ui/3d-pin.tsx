import { cn } from '@/lib/utils';
import React, { useRef } from 'react';

export interface ThreeDPinProps {
  /**
   * Base color of the pin
   * @default "#FF5353"
   */
  color?: string;
  
  /**
   * Size of the pin in pixels
   * @default 60
   */
  size?: number;
  
  /**
   * Whether to show the shadow under the pin
   * @default true
   */
  showShadow?: boolean;
  
  /**
   * Intensity of the shadow (0-1)
   * @default 0.4
   */
  shadowIntensity?: number;
  
  /**
   * Whether to animate the pin on hover
   * @default true
   */
  animateOnHover?: boolean;
  
  /**
   * Optional CSS class name
   */
  className?: string;
  
  /**
   * Optional click handler
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

/**
 * 3D Pin Component
 * 
 * A realistic 3D map pin/marker with customizable appearance and hover animations.
 * Can be used in map interfaces, location markers, or anywhere a pin metaphor is needed.
 */
export default function ThreeDPin({
  color = "#FF5353",
  size = 60,
  showShadow = true,
  shadowIntensity = 0.4,
  animateOnHover = true,
  className,
  onClick,
  ...props
}: ThreeDPinProps) {
  // Create refs for animation purposes
  const pinRef = useRef<HTMLDivElement>(null);
  
  // Calculate derived sizes based on the main size
  const pinHeadSize = size;
  const pinBodyHeight = size * 0.8;
  const pinTipSize = size * 0.5;
  
  // Generate shadow styles
  const shadowStyle = showShadow ? {
    boxShadow: `0 ${size * 0.2}px ${size * 0.5}px rgba(0, 0, 0, ${shadowIntensity})`,
  } : {};
  
  // Generate hover animation class
  const hoverClass = animateOnHover ? 'hover:translate-y-[-10%] hover:scale-105' : '';
  
  return (
    <div 
      ref={pinRef}
      className={cn(
        'relative inline-block transform-gpu transition-transform duration-300 ease-out',
        hoverClass,
        className
      )}
      style={{ 
        height: `${pinHeadSize + pinBodyHeight}px`,
        width: `${pinHeadSize}px`,
      }}
      onClick={onClick}
      {...props}
    >
      {/* Pin head (circle part) */}
      <div
        className="absolute top-0 left-0 right-0 rounded-full transform-gpu"
        style={{
          backgroundColor: color,
          height: `${pinHeadSize}px`,
          width: `${pinHeadSize}px`,
          ...shadowStyle,
        }}
      >
        {/* Inner circle highlight */}
        <div 
          className="absolute rounded-full opacity-70"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            height: `${pinHeadSize * 0.3}px`,
            width: `${pinHeadSize * 0.3}px`,
            top: `${pinHeadSize * 0.15}px`,
            left: `${pinHeadSize * 0.15}px`,
          }}
        />
      </div>
      
      {/* Pin body (cone part) */}
      <div 
        className="absolute bottom-0 overflow-hidden transform-gpu"
        style={{
          height: `${pinBodyHeight}px`,
          width: `${pinHeadSize}px`,
          top: `${pinHeadSize * 0.5}px`,
        }}
      >
        {/* Cone shape created using a pseudo-element */}
        <div 
          className="absolute top-0 left-0 right-0 transform-gpu"
          style={{
            backgroundColor: color,
            height: `${pinBodyHeight}px`,
            clipPath: `polygon(50% 100%, 0 0, 100% 0)`,
            filter: 'brightness(0.7)',
          }}
        />
      </div>
      
      {/* Shadow on the ground (optional) */}
      {showShadow && (
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full bg-black opacity-30 blur-sm"
          style={{
            height: `${pinTipSize * 0.4}px`,
            width: `${pinTipSize}px`,
          }}
        />
      )}
    </div>
  );
}

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-20
 * Description: Initial implementation of the 3D Pin component
 * Reason: Component needed for map interfaces and location markers
 * Impact: None - new component
 * Version: 1.0.0
 */ 