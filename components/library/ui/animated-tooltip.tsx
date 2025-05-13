import React, { useEffect, useRef, useState } from 'react';

interface AnimatedTooltipProps {
  className?: string;
  content: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
  animation?: 'fade' | 'scale' | 'shift';
  arrow?: boolean;
  maxWidth?: number;
  theme?: 'light' | 'dark' | 'auto';
}

/**
 * Animated Tooltip Component
 * 
 * A tooltip component that shows on hover with animations
 * 
 * @param {string} className - Optional CSS class name for the tooltip container
 * @param {React.ReactNode} content - Content to show in the tooltip
 * @param {React.ReactNode} children - Element that triggers the tooltip
 * @param {string} position - Position of the tooltip relative to trigger ('top', 'right', 'bottom', 'left')
 * @param {number} delay - Delay before showing/hiding the tooltip in milliseconds
 * @param {string} animation - Animation type for the tooltip ('fade', 'scale', 'shift')
 * @param {boolean} arrow - Whether to show an arrow pointing to the trigger
 * @param {number} maxWidth - Maximum width of the tooltip
 * @param {string} theme - Color theme for the tooltip ('light', 'dark', 'auto')
 * @returns {React.ReactElement} The Animated Tooltip component
 */
export const AnimatedTooltip: React.FC<AnimatedTooltipProps> = ({
  className = "",
  content,
  children,
  position = 'top',
  delay = 300,
  animation = 'fade',
  arrow = true,
  maxWidth = 250,
  theme = 'dark',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const showTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Calculate position of tooltip
  const updatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;
    
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    
    // Calculate position based on the chosen position prop
    let x = 0;
    let y = 0;
    
    switch (position) {
      case 'top':
        x = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
        y = triggerRect.top - tooltipRect.height - 8; // 8px gap
        break;
      case 'right':
        x = triggerRect.right + 8; // 8px gap
        y = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
        break;
      case 'bottom':
        x = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
        y = triggerRect.bottom + 8; // 8px gap
        break;
      case 'left':
        x = triggerRect.left - tooltipRect.width - 8; // 8px gap
        y = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
        break;
    }
    
    // Adjust position to ensure the tooltip stays within the viewport
    const padding = 10; // padding from viewport edge
    
    // Horizontal adjustments
    if (x < padding) {
      x = padding;
    } else if (x + tooltipRect.width > window.innerWidth - padding) {
      x = window.innerWidth - tooltipRect.width - padding;
    }
    
    // Vertical adjustments
    if (y < padding) {
      y = padding;
    } else if (y + tooltipRect.height > window.innerHeight - padding) {
      y = window.innerHeight - tooltipRect.height - padding;
    }
    
    setCoords({ x, y });
  };
  
  // Show tooltip with delay
  const showTooltip = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    
    showTimeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      setTimeout(updatePosition, 0); // Update position after tooltip is visible
    }, delay);
  };
  
  // Hide tooltip with delay
  const hideTooltip = () => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }
    
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, delay / 2); // Hide faster than show
  };
  
  // Clear timeouts on unmount
  useEffect(() => {
    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);
  
  // Update position on window resize
  useEffect(() => {
    if (isVisible) {
      updatePosition();
      window.addEventListener('resize', updatePosition);
      
      return () => window.removeEventListener('resize', updatePosition);
    }
  }, [isVisible]);
  
  // Get animation styles based on animation type and position
  const getAnimationStyle = (): React.CSSProperties => {
    let animationStyle: React.CSSProperties = {
      opacity: isVisible ? 1 : 0,
      transition: `opacity ${delay/2}ms ease-in-out, transform ${delay/2}ms ease-in-out`,
    };
    
    if (animation === 'scale') {
      animationStyle.transform = isVisible 
        ? 'scale(1)' 
        : 'scale(0.9)';
      
      switch (position) {
        case 'top':
          animationStyle.transformOrigin = 'bottom center';
          break;
        case 'right':
          animationStyle.transformOrigin = 'left center';
          break;
        case 'bottom':
          animationStyle.transformOrigin = 'top center';
          break;
        case 'left':
          animationStyle.transformOrigin = 'right center';
          break;
      }
    } else if (animation === 'shift') {
      let translateValue = isVisible ? '0' : '8px';
      
      switch (position) {
        case 'top':
          animationStyle.transform = `translateY(${isVisible ? '0' : '8px'})`;
          break;
        case 'right':
          animationStyle.transform = `translateX(${isVisible ? '0' : '-8px'})`;
          break;
        case 'bottom':
          animationStyle.transform = `translateY(${isVisible ? '0' : '-8px'})`;
          break;
        case 'left':
          animationStyle.transform = `translateX(${isVisible ? '0' : '8px'})`;
          break;
      }
    }
    
    return animationStyle;
  };
  
  // Get theme-based styles
  const getThemeStyle = () => {
    if (theme === 'light') {
      return 'bg-white text-gray-900 border border-gray-200 shadow-lg';
    } else {
      return 'bg-gray-900 text-white shadow-lg';
    }
  };
  
  // Arrow position and style
  const getArrowStyle = (): React.CSSProperties => {
    const arrowSize = 8;
    let style: React.CSSProperties = {
      position: 'absolute',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    };
    
    if (theme === 'light') {
      // Light theme arrow
      switch (position) {
        case 'top':
          style.bottom = -arrowSize;
          style.left = '50%';
          style.marginLeft = -arrowSize;
          style.borderWidth = `${arrowSize}px ${arrowSize}px 0 ${arrowSize}px`;
          style.borderColor = 'white transparent transparent transparent';
          break;
        case 'right':
          style.left = -arrowSize;
          style.top = '50%';
          style.marginTop = -arrowSize;
          style.borderWidth = `${arrowSize}px ${arrowSize}px ${arrowSize}px 0`;
          style.borderColor = 'transparent white transparent transparent';
          break;
        case 'bottom':
          style.top = -arrowSize;
          style.left = '50%';
          style.marginLeft = -arrowSize;
          style.borderWidth = `0 ${arrowSize}px ${arrowSize}px ${arrowSize}px`;
          style.borderColor = 'transparent transparent white transparent';
          break;
        case 'left':
          style.right = -arrowSize;
          style.top = '50%';
          style.marginTop = -arrowSize;
          style.borderWidth = `${arrowSize}px 0 ${arrowSize}px ${arrowSize}px`;
          style.borderColor = 'transparent transparent transparent white';
          break;
      }
    } else {
      // Dark theme arrow
      switch (position) {
        case 'top':
          style.bottom = -arrowSize;
          style.left = '50%';
          style.marginLeft = -arrowSize;
          style.borderWidth = `${arrowSize}px ${arrowSize}px 0 ${arrowSize}px`;
          style.borderColor = '#111827 transparent transparent transparent';
          break;
        case 'right':
          style.left = -arrowSize;
          style.top = '50%';
          style.marginTop = -arrowSize;
          style.borderWidth = `${arrowSize}px ${arrowSize}px ${arrowSize}px 0`;
          style.borderColor = 'transparent #111827 transparent transparent';
          break;
        case 'bottom':
          style.top = -arrowSize;
          style.left = '50%';
          style.marginLeft = -arrowSize;
          style.borderWidth = `0 ${arrowSize}px ${arrowSize}px ${arrowSize}px`;
          style.borderColor = 'transparent transparent #111827 transparent';
          break;
        case 'left':
          style.right = -arrowSize;
          style.top = '50%';
          style.marginTop = -arrowSize;
          style.borderWidth = `${arrowSize}px 0 ${arrowSize}px ${arrowSize}px`;
          style.borderColor = 'transparent transparent transparent #111827';
          break;
      }
    }
    
    return style;
  };
  
  return (
    <div 
      className={`${className} inline-block relative`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      ref={triggerRef}
    >
      {children}
      
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`fixed z-50 p-2 rounded-lg text-sm ${getThemeStyle()}`}
          style={{
            left: coords.x,
            top: coords.y,
            maxWidth: `${maxWidth}px`,
            ...getAnimationStyle(),
          }}
        >
          {content}
          {arrow && <div style={getArrowStyle()} />}
        </div>
      )}
    </div>
  );
};

export default AnimatedTooltip;

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-11
 * Description: Initial implementation of the Animated Tooltip component
 * Reason: Component needed for creating interactive tooltips with animations
 * Impact: None - new component
 * Version: 1.0.0
 */ 