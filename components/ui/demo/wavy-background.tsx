"use client";

import { motion } from "framer-motion";
import React from "react";

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
}; 