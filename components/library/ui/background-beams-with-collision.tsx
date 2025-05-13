import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export interface BackgroundBeamsWithCollisionProps extends React.HTMLAttributes<HTMLDivElement> {
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
   * Whether to have beams collide and explode on collision
   */
  enableCollisions?: boolean;
  
  /**
   * Container className
   */
  className?: string;
}

/**
 * Background Beams With Collision Component
 * 
 * A beautiful animated beam background effect with beam collisions
 * 
 * @example
 * ```tsx
 * <BackgroundBeamsWithCollision className="h-[500px]">
 *   <div className="text-white text-center">
 *     <h1 className="text-4xl font-bold">Background Beams With Collision</h1>
 *     <p>Animated beams with collision effects</p>
 *   </div>
 * </BackgroundBeamsWithCollision>
 * ```
 */
export function BackgroundBeamsWithCollision({
  children,
  numBeams = 8,
  baseHue = 200, // Default to blue hue
  hueRange = 60,
  beamSize = 30,
  beamOpacity = 0.6,
  animationSpeed = 1,
  enableCollisions = true,
  className,
  ...props
}: BackgroundBeamsWithCollisionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  const beamsRef = useRef<Array<{
    id: number;
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    length: number;
    opacity: number;
    width: number;
    speed: number;
    hue: number;
    exploding?: boolean;
    explosionProgress?: number;
    explosionSize?: number;
  }>>([]);
  
  const explosionsRef = useRef<Array<{
    x: number;
    y: number;
    size: number;
    progress: number;
    hue: number;
  }>>([]);
  
  const idCounterRef = useRef(0);
  
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
        const id = idCounterRef.current++;
        beamsRef.current.push({
          id,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          targetX: Math.random() * canvas.width,
          targetY: Math.random() * canvas.height,
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
        
        // Create a new target point for a random beam
        if (Math.random() > 0.95 && beamsRef.current.length > 0) {
          const randomBeamIndex = Math.floor(Math.random() * beamsRef.current.length);
          const beam = beamsRef.current[randomBeamIndex];
          if (beam) {
            beam.targetX = mousePosition.current.x;
            beam.targetY = mousePosition.current.y;
          }
        }
      }
    };
    
    // Generate new targets for beams periodically
    const generateNewTargets = () => {
      beamsRef.current.forEach(beam => {
        if (Math.random() > 0.99) {
          beam.targetX = Math.random() * canvas.width;
          beam.targetY = Math.random() * canvas.height;
        }
      });
    };
    
    // Check for collisions between beams
    const checkCollisions = () => {
      if (!enableCollisions) return;
      
      for (let i = 0; i < beamsRef.current.length; i++) {
        const beamA = beamsRef.current[i];
        if (beamA.exploding) continue;
        
        for (let j = i + 1; j < beamsRef.current.length; j++) {
          const beamB = beamsRef.current[j];
          if (beamB.exploding) continue;
          
          // Calculate distance between beam centers
          const dx = beamA.x - beamB.x;
          const dy = beamA.y - beamB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // If beams are close enough, trigger explosion
          if (distance < (beamA.width + beamB.width) / 2) {
            // Create explosion
            explosionsRef.current.push({
              x: (beamA.x + beamB.x) / 2,
              y: (beamA.y + beamB.y) / 2,
              size: (beamA.width + beamB.width) * 2,
              progress: 0,
              hue: (beamA.hue + beamB.hue) / 2
            });
            
            // Mark beams for respawn
            beamA.exploding = true;
            beamA.explosionProgress = 0;
            beamA.explosionSize = beamA.width * 2;
            
            beamB.exploding = true;
            beamB.explosionProgress = 0;
            beamB.explosionSize = beamB.width * 2;
          }
        }
      }
    };
    
    // Update explosions
    const updateExplosions = () => {
      explosionsRef.current = explosionsRef.current.filter(explosion => {
        explosion.progress += 0.02 * animationSpeed;
        return explosion.progress < 1;
      });
      
      // Handle exploding beams
      beamsRef.current.forEach(beam => {
        if (beam.exploding && beam.explosionProgress !== undefined) {
          beam.explosionProgress += 0.03 * animationSpeed;
          
          if (beam.explosionProgress >= 1) {
            // Respawn the beam at a new location
            beam.exploding = false;
            beam.explosionProgress = 0;
            beam.x = Math.random() * canvas.width;
            beam.y = Math.random() * canvas.height;
            beam.targetX = Math.random() * canvas.width;
            beam.targetY = Math.random() * canvas.height;
          }
        }
      });
    };
    
    // Draw explosions
    const drawExplosions = () => {
      if (!ctx || !canvas) return;
      
      explosionsRef.current.forEach(explosion => {
        const gradient = ctx.createRadialGradient(
          explosion.x, explosion.y, 0,
          explosion.x, explosion.y, explosion.size * (1 - explosion.progress)
        );
        
        const alpha = 1 - explosion.progress;
        gradient.addColorStop(0, `hsla(${explosion.hue}, 100%, 70%, ${alpha})`);
        gradient.addColorStop(0.7, `hsla(${explosion.hue}, 100%, 40%, ${alpha * 0.5})`);
        gradient.addColorStop(1, `hsla(${explosion.hue}, 100%, 30%, 0)`);
        
        ctx.beginPath();
        ctx.arc(
          explosion.x, 
          explosion.y, 
          explosion.size * (1 - explosion.progress * 0.5), 
          0, 
          Math.PI * 2
        );
        ctx.fillStyle = gradient;
        ctx.fill();
      });
    };
    
    // Draw exploding beams
    const drawExplodingBeams = () => {
      if (!ctx || !canvas) return;
      
      beamsRef.current.forEach(beam => {
        if (beam.exploding && beam.explosionProgress !== undefined && beam.explosionSize !== undefined) {
          const gradient = ctx.createRadialGradient(
            beam.x, beam.y, 0,
            beam.x, beam.y, beam.explosionSize * (1 - beam.explosionProgress)
          );
          
          const alpha = 1 - beam.explosionProgress;
          gradient.addColorStop(0, `hsla(${beam.hue}, 100%, 70%, ${alpha})`);
          gradient.addColorStop(0.7, `hsla(${beam.hue}, 100%, 40%, ${alpha * 0.5})`);
          gradient.addColorStop(1, `hsla(${beam.hue}, 100%, 30%, 0)`);
          
          ctx.beginPath();
          ctx.arc(
            beam.x, 
            beam.y, 
            beam.explosionSize * (1 - beam.explosionProgress * 0.5), 
            0, 
            Math.PI * 2
          );
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });
    };
    
    // Draw beams
    const drawBeams = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Move and draw beams
      beamsRef.current.forEach((beam) => {
        if (beam.exploding) return; // Skip drawing exploding beams
        
        // Move beam towards target
        const dx = beam.targetX - beam.x;
        const dy = beam.targetY - beam.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 1) {
          beam.x += (dx / distance) * beam.speed;
          beam.y += (dy / distance) * beam.speed;
        } else {
          // If reached target, set a new target
          beam.targetX = Math.random() * canvas.width;
          beam.targetY = Math.random() * canvas.height;
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
      
      // Draw explosions and exploding beams
      drawExplosions();
      drawExplodingBeams();
    };
    
    // Animation loop
    const animate = () => {
      generateNewTargets();
      checkCollisions();
      updateExplosions();
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
  }, [numBeams, baseHue, hueRange, beamSize, beamOpacity, animationSpeed, enableCollisions]);
  
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
 * Description: Initial implementation of the Background Beams With Collision component
 * Reason: To provide an animated beam background with exploding collision effects
 * Impact: None - new component
 * Version: 1.0.0
 */ 