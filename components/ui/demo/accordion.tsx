"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

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
}; 