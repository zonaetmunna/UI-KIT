import React from 'react';

interface InstallTailwindCSSProps {
  className?: string;
}

/**
 * Install Tailwind CSS Component
 * 
 * A component that provides guidance on how to install Tailwind CSS
 * 
 * @param {string} className - Optional CSS class name for styling
 * @returns {JSX.Element} The Install Tailwind CSS component
 */
export const InstallTailwindCSS: React.FC<InstallTailwindCSSProps> = ({ className = "" }) => {
  return (
    <div className={`${className} p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Installing Tailwind CSS with Next.js</h2>
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          To install Tailwind CSS in your Next.js project, follow these steps:
        </p>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">1. Install Tailwind CSS</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
          <pre className="text-sm text-gray-800 dark:text-gray-200">
            <code>npm install -D tailwindcss postcss autoprefixer</code>
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">2. Initialize Tailwind CSS</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
          <pre className="text-sm text-gray-800 dark:text-gray-200">
            <code>npx tailwindcss init -p</code>
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">3. Configure your template paths</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Add the paths to all of your template files in your tailwind.config.js file.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
          <pre className="text-sm text-gray-800 dark:text-gray-200">
            <code>{`// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</code>
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">4. Add the Tailwind directives to your CSS</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Add the @tailwind directives for each of Tailwind's layers to your globals.css file.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
          <pre className="text-sm text-gray-800 dark:text-gray-200">
            <code>{`/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default InstallTailwindCSS;

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-10
 * Description: Initial implementation of InstallTailwindCSS component
 * Reason: Component needed for guiding users through Tailwind CSS installation
 * Impact: None - new component
 * Version: 1.0.0
 */ 