"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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
}; 