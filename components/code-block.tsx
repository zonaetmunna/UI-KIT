import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

/**
 * CodeBlock Component
 * 
 * A simple component for displaying code snippets with syntax highlighting
 * 
 * @param {string} code - The code snippet to display
 * @param {string} language - The programming language of the code
 * @param {string} className - Additional CSS classes
 * @returns {React.ReactElement} The CodeBlock component
 */
export function CodeBlock({ code, language = 'typescript', className = '' }: CodeBlockProps) {
  return (
    <div className={`rounded-md bg-gray-950 ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
        <div className="text-xs text-gray-400">{language}</div>
        <button
          className="text-xs text-gray-400 hover:text-gray-300 transition-colors"
          onClick={() => {
            navigator.clipboard.writeText(code);
          }}
        >
          Copy
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-gray-300">{code}</code>
      </pre>
    </div>
  );
}

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-13
 * Description: Initial implementation of the CodeBlock component
 * Reason: Component needed for displaying code examples on documentation pages
 * Impact: None - new component
 * Version: 1.0.0
 */ 