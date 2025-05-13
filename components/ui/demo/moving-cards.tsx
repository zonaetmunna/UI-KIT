"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

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
}; 