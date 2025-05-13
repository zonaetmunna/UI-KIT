import {
  ChevronsUpDown,
  CreditCard,
  Layers,
  LayoutGrid,
  Menu,
  PanelRight,
  RotateCw,
  ScrollText,
  Sparkles,
  SquareStack
} from "lucide-react";

export interface Component {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  code: string;
  preview: React.ComponentType<any>;
}

// This will be filled with actual component data
export const components: Component[] = [
  {
    id: "card-stack",
    name: "Card Stack",
    description:
      "A beautiful stack of cards that automatically cycles through content.",
    icon: SquareStack,
    code: `"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div>
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};`,
    preview: () => null, // Will be implemented later
  },
  {
    id: "moving-cards",
    name: "Moving Cards",
    description: "Interactive cards that move with cursor hover effects.",
    icon: CreditCard,
    code: `"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const MovingCards = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePosition({ x: clientX - left, y: clientY - top });
  };

  return (
    <div 
      className="relative h-96 w-full rounded-xl bg-gradient-to-br from-purple-700 to-blue-500 p-8 flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute bg-white rounded-xl shadow-lg p-6 w-64 h-40 flex flex-col justify-between"
        animate={{
          x: mousePosition.x * 0.1 - 100,
          y: mousePosition.y * 0.1 - 60,
          rotate: mousePosition.x * 0.01,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <div className="flex justify-between items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full" />
          <div className="flex flex-col gap-1">
            <div className="w-8 h-1 bg-gray-300 rounded" />
            <div className="w-6 h-1 bg-gray-300 rounded" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="w-full h-2 bg-gray-200 rounded" />
          <div className="w-3/4 h-2 bg-gray-200 rounded" />
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bg-white rounded-xl shadow-lg p-6 w-48 h-32 flex flex-col justify-between"
        animate={{
          x: mousePosition.x * -0.05 + 100,
          y: mousePosition.y * -0.05 + 50,
          rotate: mousePosition.x * -0.01,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-full" />
        <div className="space-y-2">
          <div className="w-full h-2 bg-gray-200 rounded" />
          <div className="w-2/3 h-2 bg-gray-200 rounded" />
        </div>
      </motion.div>
    </div>
  );
};`,
    preview: () => null,
  },
  {
    id: "glowing-button",
    name: "Glowing Button",
    description: "Interactive button with a beautiful glowing effect on hover.",
    icon: Sparkles,
    code: `"use client";
import React from "react";
import { motion } from "framer-motion";

export const GlowingButton = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.button
      className={\`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 \${className}\`}
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        duration: 0.2,
      }}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </motion.button>
  );
};`,
    preview: () => null,
  },
  {
    id: "animated-tabs",
    name: "Animated Tabs",
    description: "Smoothly animated tab interface with indicator effects.",
    icon: PanelRight,
    code: `"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

export const AnimatedTabs = ({ tabs }: { tabs: Tab[] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={\`relative px-4 py-2 text-sm font-medium \${
              activeTab === tab.id
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }\`}
          >
            {activeTab === tab.id && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-500"
                layoutId="tab-indicator"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {tab.content}
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};`,
    preview: () => null,
  },
  {
    id: "grid-pattern",
    name: "Grid Pattern",
    description: "Beautiful grid pattern background with animated effects.",
    icon: LayoutGrid,
    code: `"use client";
import React from "react";
import { motion } from "framer-motion";

export const GridPattern = ({
  className,
  ...props
}: {
  className?: string;
}) => {
  return (
    <div
      className={\`relative h-96 w-full overflow-hidden bg-slate-950 flex items-center justify-center \${className}\`}
      {...props}
    >
      <div className="absolute inset-0 z-0 opacity-50">
        {Array.from({ length: 20 }).map((_, y) => (
          <div key={y} className="flex">
            {Array.from({ length: 20 }).map((_, x) => (
              <motion.div
                key={\`\${x}-\${y}\`}
                className="h-8 w-8 border-[0.5px] border-slate-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: (x + y) * 0.02,
                  duration: 0.5,
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="relative z-10 text-3xl font-bold text-white">
        Beautiful Grid Pattern
      </div>
    </div>
  );
};`,
    preview: () => null,
  },
  {
    id: "wavy-background",
    name: "Wavy Background",
    description: "Animated wavy background created with SVG and Framer Motion.",
    icon: Layers,
    code: `"use client";
import React from "react";
import { motion } from "framer-motion";

export const WavyBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-96 w-full bg-gradient-to-b from-blue-500 to-purple-700 overflow-hidden">
      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <motion.path
            id="wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            animate={{
              d: [
                "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z",
                "M-160 34c30 0 58-14 88-14s 58 14 88 14 58-14 88-14 58 14 88 14 v54h-352z",
                "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
          />
        </defs>
        <g>
          <use
            href="#wave"
            x="0"
            y="0"
            fill="rgba(255,255,255,0.2)"
          />
          <use
            href="#wave"
            x="0"
            y="2"
            fill="rgba(255,255,255,0.3)"
          />
          <use
            href="#wave"
            x="0"
            y="4"
            fill="rgba(255,255,255,0.4)"
          />
          <use
            href="#wave"
            x="0"
            y="6"
            fill="rgba(255,255,255,0.7)"
          />
        </g>
      </svg>
      <div className="relative z-10 flex h-full items-center justify-center">
        {children}
      </div>
    </div>
  );
};`,
    preview: () => null,
  },
  {
    id: "rotating-loader",
    name: "Rotating Loader",
    description: "Animated rotating loader with custom styling.",
    icon: RotateCw,
    code: `"use client";
import React from "react";
import { motion } from "framer-motion";

export const RotatingLoader = ({
  size = "48px",
  color = "#3498db",
}: {
  size?: string;
  color?: string;
}) => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          border: \`4px solid \${color}3a\`,
          borderTop: \`4px solid \${color}\`,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};`,
    preview: () => null,
  },
  {
    id: "accordion",
    name: "Accordion",
    description: "Expandable accordion component with smooth animations.",
    icon: ChevronsUpDown,
    code: `"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const AnimatedAccordion = ({
  items,
}: {
  items: AccordionItem[];
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full max-w-xl space-y-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-lg border border-gray-200 dark:border-gray-800"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="flex w-full items-center justify-between px-4 py-3 text-left"
          >
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <motion.div
              animate={{ rotate: expandedId === item.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </motion.div>
          </button>
          <AnimatePresence>
            {expandedId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-t border-gray-200 px-4 py-3 dark:border-gray-800">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};`,
    preview: () => null,
  },
  {
    id: "menu-transition",
    name: "Menu Transition",
    description: "Smooth transitioning menu with staggered animations.",
    icon: Menu,
    code: `"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface MenuItem {
  id: number;
  label: string;
  href: string;
}

export const MenuTransition = ({
  items,
}: {
  items: MenuItem[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      x: 20,
    },
    open: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="fixed right-4 top-4 z-50 rounded-full bg-gray-900 p-2 text-white dark:bg-white dark:text-gray-900"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white dark:bg-gray-900"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex h-full flex-col items-center justify-center">
              <nav className="space-y-8">
                {items.map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    variants={linkVariants}
                    className="block text-center text-3xl font-bold text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};`,
    preview: () => null,
  },
  {
    id: "scroll-reveal",
    name: "Scroll Reveal",
    description: "Animated elements that reveal when scrolled into view.",
    icon: ScrollText,
    code: `"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const variants = getDirectionVariants();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};`,
    preview: () => null,
  },
];

// Export specific component by ID
export const getComponentById = (id: string) => {
  return components.find((component) => component.id === id);
};
