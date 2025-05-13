"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check, Code, Eye } from "lucide-react"
import Image from "next/image"

// Define the component data structure
interface ComponentData {
  title: string
  description: string
  image: string
  code: string
  usage?: string
  dependencies?: string[]
}

// Complete database of component data
const componentDatabase: Record<string, ComponentData> = {
  "fey-macbook-scroll": {
    title: "Fey.com Macbook Scroll",
    description: "Scroll through the page and see the image come out of the screen, as seen on Fey.com website.",
    image: "/placeholder.svg?height=400&width=600",
    code: `import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const MacbookScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0]);

  return (
    <div
      ref={ref}
      className="relative h-[300vh] bg-black flex items-start justify-center"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <div className="text-center max-w-screen-lg px-4">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8">
            This Macbook is built with Tailwindcss.
            <br />
            No kidding.
          </h1>
          <motion.div
            style={{
              scale: imageScale,
              opacity: imageOpacity,
            }}
            className="relative w-full max-w-3xl mx-auto"
          >
            <img
              src="/macbook.png"
              alt="Macbook"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};`,
    dependencies: ["framer-motion"],
  },
  "3d-card-effect": {
    title: "3D Card Effect",
    description: "A card perspective effect, hover over the card to elevate card elements.",
    image: "/placeholder.svg?height=400&width=600",
    code: `import React, { useState, useRef, useEffect } from "react";

export const ThreeDCardEffect = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = isHovered
    ? {
        transform: \`
          perspective(1000px)
          rotateX(\${(mousePosition.y / cardRef.current?.offsetHeight - 0.5) * -20}deg)
          rotateY(\${(mousePosition.x / cardRef.current?.offsetWidth - 0.5) * 20}deg)
        \`,
        transition: "transform 0.1s ease",
      }
    : {
        transform: "perspective(1000px) rotateX(0) rotateY(0)",
        transition: "transform 0.5s ease",
      };

  return (
    <div className="flex items-center justify-center min-h-[400px] bg-gray-100 p-4">
      <div
        ref={cardRef}
        className="relative w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden"
        style={cardStyle}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">3D Card Effect</h3>
          <p className="text-gray-600">
            Hover over this card to see the 3D effect in action. The card will
            rotate based on your mouse position.
          </p>
          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};`,
  },
  "animated-tooltip": {
    title: "Animated Tooltip",
    description: "A tooltip with entrance and exit animations.",
    image: "/placeholder.svg?height=400&width=600",
    code: `import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AnimatedTooltip = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative">
        <button
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Hover me
        </button>
        
        <AnimatePresence>
          {isTooltipVisible && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2 bg-black text-white text-sm rounded-md shadow-lg"
            >
              <div className="text-center">This is an animated tooltip</div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-black"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};`,
    dependencies: ["framer-motion"],
  },
  "background-beams": {
    title: "Background Beams",
    description: "Animated background beams that follow the cursor.",
    image: "/placeholder.svg?height=400&width=600",
    code: `import React, { useRef, useEffect } from "react";

export const BackgroundBeams = () => {
  const canvasRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let beams = [];

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize beams
    const initBeams = () => {
      beams = [];
      const numBeams = 5;
      
      for (let i = 0; i < numBeams; i++) {
        beams.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 200 + 100,
          opacity: Math.random() * 0.5 + 0.1,
          width: Math.random() * 15 + 5,
          speed: Math.random() * 0.1 + 0.05,
          hue: Math.random() * 60 + 170, // Blue to purple range
        });
      }
    };

    // Handle mouse movement
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    // Draw beams
    const drawBeams = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      beams.forEach((beam) => {
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
        gradient.addColorStop(0, \`hsla(\${beam.hue}, 100%, 60%, \${beam.opacity})\`);
        gradient.addColorStop(1, \`hsla(\${beam.hue}, 100%, 60%, 0)\`);
        
        ctx.beginPath();
        ctx.moveTo(beam.x, beam.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = beam.width;
        ctx.stroke();
      });
    };

    // Animation loop
    const animate = () => {
      drawBeams();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    setCanvasDimensions();
    initBeams();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", () => {
      setCanvasDimensions();
      initBeams();
    });
    
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return (
    <div className="relative h-[500px] w-full overflow-hidden bg-gray-950">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Background Beams</h1>
      </div>
    </div>
  );
};`,
  },
  "bento-grid": {
    title: "Bento Grid",
    description: "A grid layout inspired by the Bento box design.",
    image: "/placeholder.svg?height=400&width=600",
    code: `import React from "react";
import { motion } from "framer-motion";

export const BentoGrid = () => {
  const items = [
    {
      title: "Feature 1",
      description: "Description for feature 1",
      icon: "🚀",
      className: "md:col-span-2",
    },
    {
      title: "Feature 2",
      description: "Description for feature 2",
      icon: "💡",
      className: "md:row-span-2",
    },
    {
      title: "Feature 3",
      description: "Description for feature 3",
      icon: "🔍",
    },
    {
      title: "Feature 4",
      description: "Description for feature 4",
      icon: "🛠️",
      className: "md:col-span-2",
    },
    {
      title: "Feature 5",
      description: "Description for feature 5",
      icon: "📊",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className={\`\${item.className || ""} group relative overflow-hidden rounded-lg bg-gray-100 p-6 hover:bg-gray-200 transition-colors duration-300\`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="mb-2 text-3xl">{item.icon}</div>
            <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};`,
    dependencies: ["framer-motion"],
  },
  "card-hover-effect": {
    title: "Card Hover Effect",
    description: "Cards with smooth hover animations and transitions.",
    image: "/placeholder.svg?height=400&width=600",
    code: `import React from "react";
import { motion } from "framer-motion";

export const CardHoverEffect = () => {
  const cards = [
    {
      title: "Card 1",
      description: "This is the first card with a hover effect",
      icon: "🌟",
    },
    {
      title: "Card 2",
      description: "This is the second card with a hover effect",
      icon: "🚀",
    },
    {
      title: "Card 3",
      description: "This is the third card with a hover effect",
      icon: "💡",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-8">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="w-64 rounded-xl bg-white p-6 shadow-lg"
          whileHover={{
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: { duration: 0.2 },
          }}
        >
          <div className="mb-4 text-4xl">{card.icon}</div>
          <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
          <p className="text-gray-600">{card.description}</p>
          <motion.button
            className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
};`,
    dependencies: ["framer-motion"],
  },
  "moving-border": {
    title: "Moving Border",
    description: "A border that moves around the element creating a dynamic effect.",
    image: "/placeholder.svg?height=400&width=600",
    code: `import React from "react";
import { motion } from "framer-motion";

export const MovingBorder = () => {
  return (
    <div className="flex min-h-[400px] items-center justify-center p-4">
      <div className="relative">
        {/* Moving border container */}
        <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 opacity-75 blur-sm">
          <motion.div
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500"
            animate={{
              background: [
                "linear-gradient(to right, rgb(236, 72, 153), rgb(168, 85, 247))",
                "linear-gradient(to right, rgb(59, 130, 246), rgb(16, 185, 129))",
                "linear-gradient(to right, rgb(249, 115, 22), rgb(234, 179, 8))",
                "linear-gradient(to right, rgb(236, 72, 153), rgb(168, 85, 247))",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>
        
        {/* Content */}
        <div className="relative rounded-lg bg-white px-8 py-6 dark:bg-gray-900">
          <h3 className="mb-2 text-xl font-bold">Moving Border</h3>
          <p className="text-gray-600 dark:text-gray-400">
            This element has a moving gradient border that animates smoothly.
          </p>
          <button className="mt-4 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
            Hover me
          </button>
        </div>
      </div>
    </div>
  );
};`,
    dependencies: ["framer-motion"],
  },
  "text-reveal": {
    title: "Text Reveal",
    description: "Text that reveals itself with a typing or fading effect.",
    image: "/placeholder.svg?height=400&width=600",
    code: `import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const TextReveal = () => {
  const [text, setText] = useState("");
  const fullText = "Building beautiful interfaces with Aceternity UI";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  const words = ["Modern", "Beautiful", "Responsive", "Interactive"];

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center p-4">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-bold">{text}</h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
      </div>

      <div className="h-16 overflow-hidden">
        {words.map((word, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-2xl font-bold"
            style={{
              position: "absolute",
              display: i === index % words.length ? "block" : "none",
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>
    </div>
  );
};`,
    dependencies: ["framer-motion"],
  },
  "spotlight-cursor": {
    title: "Spotlight Cursor",
    description: "A spotlight effect that follows the cursor.",
    image: "/placeholder.svg?height=400&width=600",
    code: `import React, { useState, useEffect } from "react";

export const SpotlightCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-gray-950 text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.15 : 0,
          background: \`radial-gradient(600px circle at \${position.x}px \${position.y}px, rgba(255,255,255,0.4), transparent 40%)\`,
        }}
      />

      <div className="max-w-md text-center z-10">
        <h2 className="mb-4 text-3xl font-bold">Spotlight Cursor Effect</h2>
        <p className="mb-6">
          Move your cursor around to see the spotlight effect follow it. This creates an
          interactive and engaging experience for users.
        </p>
        <button className="rounded-md bg-white px-4 py-2 font-medium text-gray-900 hover:bg-gray-100">
          Hover me too
        </button>
      </div>
    </div>
  );
};`,
  },
  "wavy-background": {
    title: "Wavy Background",
    description: "A wavy animated background created with SVG.",
    image: "/placeholder.svg?height=400&width=600",
    code: `import React from "react";

export const WavyBackground = () => {
  return (
    <div className="relative min-h-[400px] overflow-hidden bg-blue-500">
      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,186.7C672,213,768,235,864,224C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Second wave with animation */}
      <div className="absolute bottom-0 left-0 w-full animate-[wave_15s_linear_infinite]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full opacity-50"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.5"
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,170.7C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[400px] items-center justify-center px-4 py-16">
        <div className="max-w-md text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">Wavy Background</h2>
          <p className="mb-6">
            This component features a beautiful wavy background created with SVG
            and animated with CSS. Perfect for hero sections and dividers.
          </p>
          <button className="rounded-md bg-white px-4 py-2 font-medium text-blue-500 hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};`,
  },
}

export default function ComponentPage() {
  const params = useParams()
  const slug = params.slug as string
  const [copied, setCopied] = useState(false)

  // Get component data or use fallback
  const component = componentDatabase[slug] || {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    description: "Component description",
    image: "/placeholder.svg?height=400&width=600",
    code: "// Component code will be here",
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(component.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{component.title}</h1>
        <p className="text-gray-600 dark:text-gray-400">{component.description}</p>
      </div>

      <div className="mb-8">
        <Tabs defaultValue="preview">
          <TabsList className="mb-4">
            <TabsTrigger value="preview">
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </TabsTrigger>
            <TabsTrigger value="code">
              <Code className="mr-2 h-4 w-4" />
              Code
            </TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="rounded-lg border p-0 overflow-hidden">
            <div className="bg-black aspect-video relative">
              <Image src={component.image || "/placeholder.svg"} alt={component.title} fill className="object-cover" />
            </div>
          </TabsContent>
          <TabsContent value="code">
            <div className="relative">
              <pre className="rounded-lg bg-gray-100 dark:bg-gray-900 p-4 text-sm overflow-auto max-h-[500px]">
                <code className="text-gray-800 dark:text-gray-200">{component.code}</code>
              </pre>
              <div className="absolute top-2 right-2">
                <Button size="sm" variant="outline" onClick={handleCopy}>
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Installation</h2>
        <div className="rounded-lg border p-4 dark:border-gray-800">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            To use this component, copy the code and paste it into your project. You can customize it to fit your needs.
          </p>
          <div className="space-y-2">
            {component.dependencies && component.dependencies.length > 0 && (
              <>
                <p className="text-sm text-gray-600 dark:text-gray-400">1. Install dependencies:</p>
                <pre className="rounded-lg bg-gray-100 dark:bg-gray-900 p-3 text-sm overflow-auto">
                  <code className="text-gray-800 dark:text-gray-200">
                    npm install {component.dependencies.join(" ")}
                  </code>
                </pre>
              </>
            )}
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {component.dependencies && component.dependencies.length > 0 ? "2" : "1"}. Copy the component code
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {component.dependencies && component.dependencies.length > 0 ? "3" : "2"}. Use the component in your
              project
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Usage</h2>
        <div className="rounded-lg border p-4 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Import and use the component in your React project:</p>
          <pre className="rounded-lg bg-gray-100 dark:bg-gray-900 p-3 text-sm overflow-auto">
            <code className="text-gray-800 dark:text-gray-200">
              {`import { ${slug
                .split("-")
                .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                .join("")} } from './components/${slug}'

export default function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <${slug
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join("")} />
    </div>
  )
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
