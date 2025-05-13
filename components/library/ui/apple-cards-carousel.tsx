import React, { useEffect, useRef, useState } from 'react';

interface Card {
  id: string | number;
  title: string;
  description?: string;
  image?: string;
  backgroundColor?: string;
  textColor?: string;
}

interface AppleCardsCarouselProps {
  className?: string;
  cards: Card[];
  autoplay?: boolean;
  interval?: number;
  focusedCardScale?: number;
  unfocusedCardScale?: number;
  gap?: number;
}

/**
 * Apple Cards Carousel Component
 * 
 * A sleek and minimal carousel implementation, inspired by Apple's website
 * 
 * @param {string} className - Optional CSS class name for styling
 * @param {Card[]} cards - Array of card objects to display
 * @param {boolean} autoplay - Whether to automatically cycle through cards
 * @param {number} interval - Time in milliseconds between card changes
 * @param {number} focusedCardScale - Scale factor for the focused card
 * @param {number} unfocusedCardScale - Scale factor for unfocused cards
 * @param {number} gap - Gap between cards in pixels
 * @returns {React.ReactElement} The Apple Cards Carousel component
 */
export const AppleCardsCarousel: React.FC<AppleCardsCarouselProps> = ({
  className = "",
  cards,
  autoplay = true,
  interval = 5000,
  focusedCardScale = 1,
  unfocusedCardScale = 0.85,
  gap = 40,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Handle autoplay functionality
  useEffect(() => {
    if (!autoplay || isHovering || cards.length <= 1) return;
    
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoplay, interval, isHovering, cards.length]);
  
  // Handle manual navigation
  const goToCard = (index: number) => {
    if (index >= 0 && index < cards.length) {
      setActiveIndex(index);
    }
  };

  const goToPrevCard = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const goToNextCard = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };
  
  // Calculate card styles based on their position relative to active card
  const getCardStyle = (index: number): React.CSSProperties => {
    const distance = index - activeIndex;
    const absDistance = Math.abs(distance);
    
    // Calculate scale based on distance from active card
    let scale = index === activeIndex 
      ? focusedCardScale 
      : unfocusedCardScale;
    
    // For cards far from the active one, reduce scale even more
    if (absDistance > 1) {
      scale = scale - 0.05 * (absDistance - 1);
    }
    
    // Calculate horizontal position
    // Cards before active card are positioned to the left, cards after to the right
    let translateX = `${distance * (300 + gap)}px`;
    
    // Cards beyond visible range are hidden
    const opacity = absDistance > 2 ? 0 : 1 - absDistance * 0.2;
    
    // Z-index decreases as distance increases, active card has highest z-index
    const zIndex = cards.length - absDistance;
    
    return {
      transform: `translateX(${translateX}) scale(${scale})`,
      opacity,
      zIndex,
      transition: 'all 0.5s ease-out',
    };
  };
  
  return (
    <div 
      className={`${className} relative overflow-hidden`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={containerRef}
    >
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="relative w-full flex justify-center items-center">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="absolute w-[300px] rounded-xl shadow-lg cursor-pointer overflow-hidden"
              style={{
                ...getCardStyle(index),
                backgroundColor: card.backgroundColor || '#ffffff',
                color: card.textColor || '#000000',
              }}
              onClick={() => goToCard(index)}
            >
              {card.image && (
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                {card.description && (
                  <p className="opacity-80">{card.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {cards.length > 1 && (
        <div className="flex justify-center mt-8 space-x-4">
          <button 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            onClick={goToPrevCard}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          <div className="flex space-x-2">
            {cards.map((_, index) => (
              <button 
                key={index}
                className={`h-2 w-8 rounded-full transition-colors ${
                  index === activeIndex 
                    ? 'bg-gray-700 dark:bg-gray-300' 
                    : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                }`}
                onClick={() => goToCard(index)}
              />
            ))}
          </div>
          
          <button 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            onClick={goToNextCard}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default AppleCardsCarousel;

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-11
 * Description: Initial implementation of the Apple Cards Carousel component
 * Reason: Component needed for creating Apple-style carousel effects
 * Impact: None - new component
 * Version: 1.0.0
 */ 