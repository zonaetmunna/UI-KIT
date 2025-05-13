"use client";

import { motion } from "framer-motion";

export const GridPattern = ({
  className,
  ...props
}: {
  className?: string;
}) => {
  return (
    <div
      className={`relative h-96 w-full overflow-hidden bg-slate-950 flex items-center justify-center ${className}`}
      {...props}
    >
      <div className="absolute inset-0 z-0 opacity-50">
        {Array.from({ length: 20 }).map((_, y) => (
          <div key={y} className="flex">
            {Array.from({ length: 20 }).map((_, x) => (
              <motion.div
                key={`${x}-${y}`}
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
}; 