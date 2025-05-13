import React, { useEffect, useState } from 'react';

interface Testimonial {
  id: string | number;
  content: string;
  author: string;
  role?: string;
  avatar?: string;
}

interface AnimatedTestimonialsProps {
  className?: string;
  testimonials: Testimonial[];
  autoplay?: boolean;
  interval?: number;
  animationDuration?: number;
}

/**
 * Animated Testimonials Component
 * 
 * A component that displays testimonials with smooth animation transitions
 * 
 * @param {string} className - Optional CSS class name for styling
 * @param {Testimonial[]} testimonials - Array of testimonial objects to display
 * @param {boolean} autoplay - Whether to automatically cycle through testimonials
 * @param {number} interval - Time in milliseconds between testimonial changes
 * @param {number} animationDuration - Duration of the animation in milliseconds
 * @returns {React.ReactElement} The Animated Testimonials component
 */
export const AnimatedTestimonials: React.FC<AnimatedTestimonialsProps> = ({
  className = "",
  testimonials,
  autoplay = true,
  interval = 5000,
  animationDuration = 500,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  
  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      goToNext();
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoplay, interval, currentIndex, testimonials.length]);
  
  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection('prev');
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
      setIsAnimating(false);
    }, animationDuration);
  };
  
  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection('next');
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
      setIsAnimating(false);
    }, animationDuration);
  };
  
  const getAnimationClass = () => {
    if (!isAnimating) return '';
    
    return direction === 'next' 
      ? 'animate-fade-out-left' 
      : 'animate-fade-out-right';
  };
  
  if (testimonials.length === 0) {
    return null;
  }
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <div className={`${className} relative overflow-hidden`}>
      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes fadeOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-20px);
          }
        }
        
        @keyframes fadeOutRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(20px);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-out-left {
          animation: fadeOutLeft ${animationDuration}ms ease-in-out forwards;
        }
        
        .animate-fade-out-right {
          animation: fadeOutRight ${animationDuration}ms ease-in-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn ${animationDuration}ms ease-in-out;
        }
      `}</style>
      
      <div className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md ${getAnimationClass()}`}>
        <div className="mb-4">
          <div className="text-lg text-gray-700 dark:text-gray-300 italic">
            "{currentTestimonial.content}"
          </div>
        </div>
        
        <div className="flex items-center">
          {currentTestimonial.avatar && (
            <div className="mr-3">
              <img 
                src={currentTestimonial.avatar} 
                alt={currentTestimonial.author}
                className="h-10 w-10 rounded-full object-cover"
              />
            </div>
          )}
          
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">
              {currentTestimonial.author}
            </div>
            
            {currentTestimonial.role && (
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {currentTestimonial.role}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {testimonials.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          <button 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            onClick={goToPrev}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            onClick={goToNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
      
      {testimonials.length > 1 && (
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <div 
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${
                index === currentIndex 
                  ? 'bg-gray-700 dark:bg-gray-300' 
                  : 'bg-gray-300 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimatedTestimonials;

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-10
 * Description: Initial implementation of the Animated Testimonials component
 * Reason: Component needed for displaying testimonials with animated transitions
 * Impact: None - new component
 * Version: 1.0.0
 */ 