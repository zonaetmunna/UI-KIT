import React from 'react';

interface CLIProps {
  className?: string;
}

/**
 * CLI Component
 * 
 * A component that provides information about the CLI tools for Tailwind CSS and Next.js
 * 
 * @param {string} className - Optional CSS class name for styling
 * @returns {JSX.Element} The CLI component
 */
export const CLI: React.FC<CLIProps> = ({ className = "" }) => {
  return (
    <div className={`${className} p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Using CLI Commands</h2>
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          Here are some useful CLI commands for working with Next.js and Tailwind CSS:
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Next.js CLI Commands</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200">Create a new Next.js project</h4>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-x-auto">
              <pre className="text-sm text-gray-800 dark:text-gray-200">
                <code>npx create-next-app@latest my-project</code>
              </pre>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200">Start the development server</h4>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-x-auto">
              <pre className="text-sm text-gray-800 dark:text-gray-200">
                <code>npm run dev</code>
              </pre>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200">Build for production</h4>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-x-auto">
              <pre className="text-sm text-gray-800 dark:text-gray-200">
                <code>npm run build</code>
              </pre>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200">Start the production server</h4>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-x-auto">
              <pre className="text-sm text-gray-800 dark:text-gray-200">
                <code>npm run start</code>
              </pre>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Tailwind CSS CLI Commands</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200">Initialize Tailwind CSS</h4>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-x-auto">
              <pre className="text-sm text-gray-800 dark:text-gray-200">
                <code>npx tailwindcss init -p</code>
              </pre>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200">Generate CSS with Tailwind CLI</h4>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-x-auto">
              <pre className="text-sm text-gray-800 dark:text-gray-200">
                <code>npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch</code>
              </pre>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200">Build for production (minified)</h4>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-x-auto">
              <pre className="text-sm text-gray-800 dark:text-gray-200">
                <code>npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify</code>
              </pre>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Aceternity UI CLI Commands</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200">Initialize a new Aceternity UI project</h4>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-x-auto">
              <pre className="text-sm text-gray-800 dark:text-gray-200">
                <code>npx create-aceternity-ui my-project</code>
              </pre>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200">Add a component to your project</h4>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-x-auto">
              <pre className="text-sm text-gray-800 dark:text-gray-200">
                <code>npx aceternity-ui add [component-name]</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CLI;

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-10
 * Description: Initial implementation of CLI component
 * Reason: Component needed for displaying useful CLI commands for Next.js and Tailwind CSS
 * Impact: None - new component
 * Version: 1.0.0
 */ 