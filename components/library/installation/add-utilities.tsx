import React from 'react';

interface AddUtilitiesProps {
  className?: string;
}

/**
 * Add Utilities Component
 * 
 * A component that provides guidance on how to add utilities to a Tailwind CSS project
 * 
 * @param {string} className - Optional CSS class name for styling
 * @returns {JSX.Element} The Add Utilities component
 */
export const AddUtilities: React.FC<AddUtilitiesProps> = ({ className = "" }) => {
  return (
    <div className={`${className} p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Adding Utilities to Tailwind CSS</h2>
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          Tailwind CSS allows you to extend its utility classes. Here's how to add custom utilities:
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">1. Adding custom utilities using the theme configuration</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Extend your tailwind.config.js to add custom utility classes:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
          <pre className="text-sm text-gray-800 dark:text-gray-200">
            <code>{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1e40af',
        'custom-red': '#dc2626',
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
      },
    }
  }
}`}</code>
          </pre>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">2. Using the @layer directive</h3>
        <p className="text-gray-700 dark:text-gray-300">
          You can add custom utilities using the @layer directive in your CSS:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
          <pre className="text-sm text-gray-800 dark:text-gray-200">
            <code>{`/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .clip-path-triangle {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
}`}</code>
          </pre>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">3. Using plugins</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Extend Tailwind using plugins in your configuration file:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
          <pre className="text-sm text-gray-800 dark:text-gray-200">
            <code>{`// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  // ... other config
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
        },
      }
      
      addUtilities(newUtilities)
    }),
  ],
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default AddUtilities;

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-10
 * Description: Initial implementation of AddUtilities component
 * Reason: Component needed for guiding users through adding custom utilities to Tailwind CSS
 * Impact: None - new component
 * Version: 1.0.0
 */ 