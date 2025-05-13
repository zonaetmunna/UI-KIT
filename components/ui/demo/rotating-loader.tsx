"use client";

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
          border: `4px solid ${color}3a`,
          borderTop: `4px solid ${color}`,
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
}; 