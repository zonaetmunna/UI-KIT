import React from 'react';

interface InstallNextjsProps {
  className?: string;
}

/**
 * Install Next.js Component
 * 
 * A component that provides guidance on how to install Next.js
 * 
 * @param {string} className - Optional CSS class name for styling
 * @returns {JSX.Element} The Install Next.js component
 */
export const InstallNextjs: React.FC<InstallNextjsProps> = ({ className = "" }) => {
  return (
    <div className={`${className} p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Installing Next.js</h2>
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          To create a new Next.js project, run one of the following commands:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
          <pre className="text-sm text-gray-800 dark:text-gray-200">
            <code>npx create-next-app@latest my-app</code>
          </pre>
        </div>
        <p className="text-gray-700 dark:text-gray-300">Or with Yarn:</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
          <pre className="text-sm text-gray-800 dark:text-gray-200">
            <code>yarn create next-app my-app</code>
          </pre>
        </div>
        <p className="text-gray-700 dark:text-gray-300">Or with pnpm:</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
          <pre className="text-sm text-gray-800 dark:text-gray-200">
            <code>pnpm create next-app my-app</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default InstallNextjs;

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-10
 * Description: Initial implementation of InstallNextjs component
 * Reason: Component needed for guiding users through Next.js installation
 * Impact: None - new component
 * Version: 1.0.0
 */ 