import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export interface BackgroundBeamsProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The children to display on top of the background beams
   */
  children?: React.ReactNode;
  
  /**
   * The maximum number of beams to display
   */
  numBeams?: number;
  
  /**
   * The base hue for the beams (in HSL format, 0-360)
   */
  baseHue?: number;
  
  /**
   * The hue range for the beams (in HSL format)
   */
  hueRange?: number;
  
  /**
   * The size of the beams
   */
  beamSize?: number;
  
  /**
   * The opacity of the beams (0-1)
   */
  beamOpacity?: number;
  
  /**
   * The speed of the beam animation
   */
  animationSpeed?: number;
  
  /**
   * Container className
   */
  className?: string;
}

/**
 * Background Beams Component
 * 
 * A beautiful animated beam background effect that follows the cursor
 * 
 * @example
 * ```tsx
 * <BackgroundBeams className="h-[500px]">
 *   <div className="text-white text-center">
 *     <h1 className="text-4xl font-bold">Background Beams</h1>
 *     <p>Animated beams that follow your cursor</p>
 *   </div>
 * </BackgroundBeams>
 * ```
 */
export function BackgroundBeams({
  children,
  numBeams = 5,
  baseHue = 200, // Default to blue hue
  hueRange = 60,
  beamSize = 20,
  beamOpacity = 0.6,
  animationSpeed = 1,
  className,
  ...props
}: BackgroundBeamsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  const beamsRef = useRef<Array<{
    x: number;
    y: number;
    length: number;
    opacity: number;
    width: number;
    speed: number;
    hue: number;
  }>>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (canvas && container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };
    
    setCanvasDimensions();
    
    // Initialize beams
    const initBeams = () => {
      if (!canvas) return;
      beamsRef.current = [];
      
      for (let i = 0; i < numBeams; i++) {
        beamsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 200 + 100,
          opacity: Math.random() * (beamOpacity * 0.5) + beamOpacity * 0.5,
          width: Math.random() * beamSize + 5,
          speed: (Math.random() * 0.1 + 0.05) * animationSpeed,
          hue: Math.random() * hueRange + baseHue,
        });
      }
    };
    
    initBeams();
    
    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      if (container) {
        const rect = container.getBoundingClientRect();
        mousePosition.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }
    };
    
    // If mouse is outside the container, use the center as the default position
    const defaultToCenter = () => {
      if (canvas) {
        mousePosition.current = {
          x: canvas.width / 2,
          y: canvas.height / 2,
        };
      }
    };
    
    defaultToCenter();
    
    // Draw beams
    const drawBeams = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      beamsRef.current.forEach((beam) => {
        // Move beam towards mouse
        const dx = mousePosition.current.x - beam.x;
        const dy = mousePosition.current.y - beam.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 1) {
          beam.x += (dx / distance) * beam.speed;
          beam.y += (dy / distance) * beam.speed;
        }
        
        // Draw beam
        const angle = Math.atan2(dy, dx);
        const endX = beam.x + Math.cos(angle) * beam.length;
        const endY = beam.y + Math.sin(angle) * beam.length;
        
        const gradient = ctx.createLinearGradient(beam.x, beam.y, endX, endY);
        gradient.addColorStop(0, `hsla(${beam.hue}, 100%, 60%, ${beam.opacity})`);
        gradient.addColorStop(1, `hsla(${beam.hue}, 100%, 60%, 0)`);
        
        ctx.beginPath();
        ctx.moveTo(beam.x, beam.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = beam.width;
        ctx.lineCap = 'round';
        ctx.stroke();
      });
    };
    
    // Animation loop
    const animate = () => {
      drawBeams();
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => {
      setCanvasDimensions();
      initBeams();
    });
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, [numBeams, baseHue, hueRange, beamSize, beamOpacity, animationSpeed]);
  
  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-black min-h-[400px] flex items-center justify-center",
        className
      )}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
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
 * Description: Initial implementation of the Background Beams component
 * Reason: To provide an animated beam background that follows the cursor
 * Impact: None - new component
 * Version: 1.0.0
 */ 