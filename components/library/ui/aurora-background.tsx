import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The children to display on top of the aurora background
   */
  children?: React.ReactNode;
  
  /**
   * The base color of the aurora (in HSL hue value - 0-360)
   */
  baseHue?: number;
  
  /**
   * The color range variation (in HSL hue degrees)
   */
  colorRange?: number;
  
  /**
   * The blur amount for the aurora effect
   */
  blurAmount?: string;
  
  /**
   * Container className
   */
  className?: string;
  
  /**
   * Intensity of the aurora movements (1-10)
   */
  intensity?: number;
}

/**
 * Aurora Background Component
 * 
 * A beautiful animated aurora borealis-like background effect
 * 
 * @example
 * ```tsx
 * <AuroraBackground className="h-[500px]">
 *   <div className="text-white text-center">
 *     <h1 className="text-4xl font-bold">Aurora Background</h1>
 *     <p>A beautiful animated background</p>
 *   </div>
 * </AuroraBackground>
 * ```
 */
export function AuroraBackground({
  children,
  baseHue = 180, // Default to a cyan-like color
  colorRange = 60,
  blurAmount = "120px",
  className,
  intensity = 5,
  ...props
}: AuroraBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const blobs = blobsRef.current;
    
    // Set the animation in motion
    const animateBlobs = () => {
      blobs.forEach((blob, i) => {
        const speed = 2 + (intensity / 10) * i;
        const xPos = 10 + Math.sin(Date.now() / (1000 * speed)) * 20;
        const yPos = 10 + Math.cos(Date.now() / (1000 * speed)) * 20;
        const scale = 0.8 + Math.sin(Date.now() / (1000 * speed)) * 0.2;
        
        blob.style.transform = `translate(${xPos}%, ${yPos}%) scale(${scale})`;
        
        // Gradually change colors
        const hue = (baseHue + (Math.sin(Date.now() / 5000) * colorRange / 2)) + (i * (colorRange / blobs.length));
        blob.style.background = `radial-gradient(circle at center, 
          hsl(${hue}, 100%, 70%) 0%, 
          hsl(${hue + 20}, 100%, 60%) 45%, 
          transparent 70%)`;
      });
      
      requestAnimationFrame(animateBlobs);
    };
    
    animateBlobs();
    
    // Cleanup
    return () => {
      // No need to cancel animation since component unmount will stop it
    };
  }, [baseHue, colorRange, intensity]);
  
  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-black min-h-[400px] flex items-center justify-center",
        className
      )}
      {...props}
    >
      {/* Aurora blobs */}
      <div
        ref={el => { if (el) blobsRef.current[0] = el; }}
        className="absolute inset-0 opacity-70"
        style={{
          filter: `blur(${blurAmount})`,
          transform: "translate(10%, 10%) scale(1)",
          background: `radial-gradient(circle at center, 
            hsl(${baseHue}, 100%, 70%) 0%, 
            hsl(${baseHue + 20}, 100%, 60%) 45%, 
            transparent 70%)`,
        }}
      />
      <div
        ref={el => { if (el) blobsRef.current[1] = el; }}
        className="absolute inset-0 opacity-70"
        style={{
          filter: `blur(${blurAmount})`,
          transform: "translate(25%, 20%) scale(1)",
          background: `radial-gradient(circle at center, 
            hsl(${baseHue + colorRange/3}, 100%, 70%) 0%, 
            hsl(${baseHue + colorRange/3 + 20}, 100%, 60%) 45%, 
            transparent 70%)`,
        }}
      />
      <div
        ref={el => { if (el) blobsRef.current[2] = el; }}
        className="absolute inset-0 opacity-70"
        style={{
          filter: `blur(${blurAmount})`,
          transform: "translate(-10%, -10%) scale(1)",
          background: `radial-gradient(circle at center, 
            hsl(${baseHue + colorRange/1.5}, 100%, 70%) 0%, 
            hsl(${baseHue + colorRange/1.5 + 20}, 100%, 60%) 45%, 
            transparent 70%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-14
 * Description: Initial implementation of the Aurora Background component
 * Reason: To provide a beautiful animated background effect
 * Impact: None - new component
 * Version: 1.0.0
 */ 