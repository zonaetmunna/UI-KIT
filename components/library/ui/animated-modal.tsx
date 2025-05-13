import React, { useEffect, useState } from 'react';

interface AnimatedModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  animationType?: 'fade' | 'scale' | 'slide';
  duration?: number;
}

/**
 * Animated Modal Component
 * 
 * A modal component with various animation options
 * 
 * @param {string} className - Optional CSS class name for styling
 * @param {boolean} isOpen - Whether the modal is open
 * @param {Function} onClose - Function to call when the modal is closed
 * @param {React.ReactNode} children - Content to be displayed inside the modal
 * @param {string} animationType - Type of animation ('fade', 'scale', 'slide')
 * @param {number} duration - Animation duration in milliseconds
 * @returns {React.ReactElement | null} The Animated Modal component
 */
export const AnimatedModal: React.FC<AnimatedModalProps> = ({
  className = "",
  isOpen,
  onClose,
  children,
  animationType = 'fade',
  duration = 300,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      // Delay hiding to allow for exit animation
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration]);
  
  // If not open and not in the animation phase, don't render
  if (!isOpen && !isVisible) {
    return null;
  }
  
  // Animation styles based on type and state
  const getAnimationStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      transition: `all ${duration}ms ease-in-out`,
    };
    
    switch (animationType) {
      case 'scale':
        return {
          ...baseStyles,
          transform: isOpen ? 'scale(1)' : 'scale(0.8)',
          opacity: isOpen ? 1 : 0,
        };
      case 'slide':
        return {
          ...baseStyles,
          transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
          opacity: isOpen ? 1 : 0,
        };
      case 'fade':
      default:
        return {
          ...baseStyles,
          opacity: isOpen ? 1 : 0,
        };
    }
  };
  
  // Handle clicks on the backdrop (outside modal)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`${className} bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-auto`}
        style={getAnimationStyles()}
      >
        <div className="relative p-6">
          <button 
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AnimatedModal;

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-10
 * Description: Initial implementation of the Animated Modal component
 * Reason: Component needed for creating animated modal dialogs
 * Impact: None - new component
 * Version: 1.0.0
 */ 