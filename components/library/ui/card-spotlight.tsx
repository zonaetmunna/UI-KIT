import React, { useRef, useState } from 'react';

interface CardSpotlightProps {
  className?: string;
  children: React.ReactNode;
  glowColor?: string;
  glowSize?: number;
  glowOpacity?: number;
  borderRadius?: number;
  containerClassName?: string;
}

/**
 * Card Spotlight Component
 * 
 * A card component that creates a spotlight/glow effect that follows the mouse cursor
 * 
 * @param {string} className - Optional CSS class for the card
 * @param {React.ReactNode} children - Content to display inside the card
 * @param {string} glowColor - Color of the spotlight/glow effect
 * @param {number} glowSize - Size of the glow effect in pixels
 * @param {number} glowOpacity - Opacity of the glow effect (0-1)
 * @param {number} borderRadius - Border radius of the card in pixels
 * @param {string} containerClassName - Optional CSS class for the container
 * @returns {React.ReactElement} The Card Spotlight component
 */
export const CardSpotlight: React.FC<CardSpotlightProps> = ({
  className = "",
  children,
  glowColor = "255, 255, 255",
  glowSize = 500,
  glowOpacity = 0.15,
  borderRadius = 12,
  containerClassName = "",
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle mouse move to update spotlight position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Get position relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setPosition({ x, y });
  };
  
  // Handle mouse enter/leave to control spotlight visibility
  const handleMouseEnter = () => {
    setIsHovering(true);
    setOpacity(1);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setOpacity(0);
  };

  // Calculate spotlight style
  const spotlightStyle = isHovering ? {
    background: `radial-gradient(${glowSize}px circle at ${position.x}px ${position.y}px, rgba(${glowColor}, ${glowOpacity}), transparent 40%)`,
    opacity,
    transition: 'opacity 0.15s ease-in-out',
  } : {};

  return (
    <div className={`relative ${containerClassName}`}>
      <div
        className={`relative overflow-hidden ${className}`}
        style={{ borderRadius: `${borderRadius}px` }}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* The spotlight/glow effect */}
        <div 
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={spotlightStyle}
        />
        
        {/* Card content */}
        <div className="relative z-20">
          {children}
        </div>
      </div>
    </div>
  );
};

// Extended version with additional features
interface CardSpotlightWithBorderProps extends CardSpotlightProps {
  showBorder?: boolean;
  borderColor?: string;
  borderWidth?: number;
  borderGlowColor?: string;
  borderGlowSize?: number;
  borderGlowOpacity?: number;
}

/**
 * Card Spotlight With Border Component
 * 
 * An extended version of CardSpotlight that also adds a glowing border effect
 * 
 * @param {boolean} showBorder - Whether to show the glowing border
 * @param {string} borderColor - Color of the border
 * @param {number} borderWidth - Width of the border in pixels
 * @param {string} borderGlowColor - Color of the border glow effect
 * @param {number} borderGlowSize - Size of the border glow effect in pixels
 * @param {number} borderGlowOpacity - Opacity of the border glow effect (0-1)
 * @returns {React.ReactElement} The Card Spotlight With Border component
 */
export const CardSpotlightWithBorder: React.FC<CardSpotlightWithBorderProps> = ({
  className = "",
  children,
  glowColor = "255, 255, 255",
  glowSize = 500,
  glowOpacity = 0.15,
  borderRadius = 12,
  containerClassName = "",
  showBorder = true,
  borderColor = "255, 255, 255",
  borderWidth = 1,
  borderGlowColor = "255, 255, 255",
  borderGlowSize = 5,
  borderGlowOpacity = 0.5,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle mouse move to update spotlight position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Get position relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setPosition({ x, y });
  };
  
  // Handle mouse enter/leave to control spotlight and border visibility
  const handleMouseEnter = () => {
    setIsHovering(true);
    setOpacity(1);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setOpacity(0);
  };

  // Calculate spotlight style
  const spotlightStyle = isHovering ? {
    background: `radial-gradient(${glowSize}px circle at ${position.x}px ${position.y}px, rgba(${glowColor}, ${glowOpacity}), transparent 40%)`,
    opacity,
    transition: 'opacity 0.15s ease-in-out',
  } : {};

  // Calculate border style
  const borderStyle = isHovering && showBorder ? {
    boxShadow: `inset 0 0 0 ${borderWidth}px rgba(${borderColor}, ${opacity}), 0 0 ${borderGlowSize}px rgba(${borderGlowColor}, ${opacity * borderGlowOpacity})`,
    transition: 'box-shadow 0.15s ease-in-out',
  } : {};

  return (
    <div className={`relative ${containerClassName}`}>
      <div
        className={`relative overflow-hidden ${className}`}
        style={{ 
          borderRadius: `${borderRadius}px`,
          ...borderStyle
        }}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* The spotlight/glow effect */}
        <div 
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={spotlightStyle}
        />
        
        {/* Card content */}
        <div className="relative z-20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardSpotlight;

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-12
 * Description: Initial implementation of the Card Spotlight component
 * Reason: Component needed for creating mouse-following spotlight effects on cards
 * Impact: None - new component
 * Version: 1.0.0
 */ 