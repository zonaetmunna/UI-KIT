import React, { useEffect, useRef, useState } from 'react';

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
  const animationDuration = `${items.length * (100 / speed)}s`;

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
    animation: `scrollLeft ${animationDuration} linear infinite ${animationDirection}`,
    animationPlayState: isPaused ? 'paused' : 'running',
    transform: reverse ? 'rotateX(20deg)' : 'rotateX(-20deg)',
    transformStyle: 'preserve-3d',
  };

  return (
    <div 
      ref={containerRef}
      className={`${className} relative`}
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* CSS Animation for the marquee */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0) ${reverse ? 'rotateX(20deg)' : 'rotateX(-20deg)'};
          }
          100% {
            transform: translateX(-${containerWidth / 2}px) ${reverse ? 'rotateX(20deg)' : 'rotateX(-20deg)'};
          }
        }
      `}</style>

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

export default ThreeDMarquee;

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-10
 * Description: Initial implementation of the 3D Marquee component
 * Reason: Component needed for creating scrolling 3D marquee effects
 * Impact: None - new component
 * Version: 1.0.0
 */ 