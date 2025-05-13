"use client"

import ComponentTemplate from "@/app/components/component-template"
import { useState } from 'react'

export default function CodeBlockPage() {
  const title = "Code Block"
  const description = "A syntax-highlighted code block component for displaying code snippets with copy functionality."
  
  // Example component for preview
  const ExampleComponent = () => (
    <div className="w-full max-w-3xl">
      <div className="relative rounded-lg overflow-hidden bg-zinc-950 border border-zinc-800">
        <div className="flex items-center px-4 py-2 bg-zinc-900 border-b border-zinc-800">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-4 text-xs text-zinc-400">example.tsx</div>
          <button className="absolute right-3 px-2 py-1 text-xs text-zinc-400 hover:text-zinc-300 hover:bg-zinc-800 rounded">
            Copy
          </button>
        </div>
        <div className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
          <div><span className="text-pink-500">import</span> <span className="text-blue-400">React</span> <span className="text-pink-500">from</span> <span className="text-green-400">'react'</span>;</div>
          <div></div>
          <div><span className="text-pink-500">function</span> <span className="text-yellow-400">Example</span>() {'{'}</div>
          <div>  <span className="text-pink-500">return</span> (</div>
          <div>    <span className="text-blue-400">&lt;div</span> <span className="text-green-400">className</span>=<span className="text-green-400">"example"</span><span className="text-blue-400">&gt;</span></div>
          <div>      <span className="text-blue-400">&lt;h1&gt;</span>Hello World<span className="text-blue-400">&lt;/h1&gt;</span></div>
          <div>    <span className="text-blue-400">&lt;/div&gt;</span></div>
          <div>  );</div>
          <div>{'}'}</div>
          <div></div>
          <div><span className="text-pink-500">export</span> <span className="text-pink-500">default</span> Example;</div>
        </div>
      </div>
    </div>
  )
  
  // Customization state
  const [language, setLanguage] = useState('typescript')
  const [theme, setTheme] = useState('dark')
  const [showLineNumbers, setShowLineNumbers] = useState(true)
  const [showHeader, setShowHeader] = useState(true)
  const [fileName, setFileName] = useState('example.tsx')
  const [showCopyButton, setShowCopyButton] = useState(true)

  // Customization UI
  const CustomizationUI = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Language</label>
          <div className="flex space-x-2">
            <button 
              onClick={() => setLanguage('typescript')}
              className={`px-3 py-1 rounded ${language === 'typescript' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              TypeScript
            </button>
            <button 
              onClick={() => setLanguage('javascript')}
              className={`px-3 py-1 rounded ${language === 'javascript' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              JavaScript
            </button>
            <button 
              onClick={() => setLanguage('jsx')}
              className={`px-3 py-1 rounded ${language === 'jsx' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              JSX
            </button>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Theme</label>
          <div className="flex space-x-2">
            <button 
              onClick={() => setTheme('dark')}
              className={`px-3 py-1 rounded ${theme === 'dark' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Dark
            </button>
            <button 
              onClick={() => setTheme('light')}
              className={`px-3 py-1 rounded ${theme === 'light' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Light
            </button>
            <button 
              onClick={() => setTheme('dracula')}
              className={`px-3 py-1 rounded ${theme === 'dracula' ? "bg-blue-600 text-white" : "bg-zinc-800"}`}
            >
              Dracula
            </button>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">File Name</label>
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="bg-zinc-800 px-3 py-2 rounded-md border border-zinc-700"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="show-line-numbers" 
            checked={showLineNumbers}
            onChange={(e) => setShowLineNumbers(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="show-line-numbers" className="text-sm font-medium">Show Line Numbers</label>
        </div>
        
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="show-header" 
            checked={showHeader}
            onChange={(e) => setShowHeader(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="show-header" className="text-sm font-medium">Show Header</label>
        </div>
        
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="show-copy-button" 
            checked={showCopyButton}
            onChange={(e) => setShowCopyButton(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="show-copy-button" className="text-sm font-medium">Show Copy Button</label>
        </div>
      </div>
      
      <div className="bg-zinc-950 rounded-lg p-6 flex items-center justify-center">
        <div className="w-full">
          <div className={`relative rounded-lg overflow-hidden ${theme === 'light' ? 'bg-zinc-100 border border-zinc-300' : 'bg-zinc-950 border border-zinc-800'}`}>
            {showHeader && (
              <div className={`flex items-center px-4 py-2 ${theme === 'light' ? 'bg-zinc-200 border-b border-zinc-300' : 'bg-zinc-900 border-b border-zinc-800'}`}>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                {fileName && <div className={`ml-4 text-xs ${theme === 'light' ? 'text-zinc-600' : 'text-zinc-400'}`}>{fileName}</div>}
                {showCopyButton && (
                  <button 
                    className={`absolute right-3 px-2 py-1 text-xs rounded ${
                      theme === 'light' 
                        ? 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200' 
                        : 'text-zinc-400 hover:text-zinc-300 hover:bg-zinc-800'
                    }`}
                  >
                    Copy
                  </button>
                )}
              </div>
            )}
            <div className={`p-4 text-sm font-mono ${theme === 'light' ? 'text-zinc-800' : theme === 'dracula' ? 'text-purple-100 bg-purple-900' : 'text-zinc-300'} overflow-x-auto`}>
              <div className="grid" style={{ gridTemplateColumns: showLineNumbers ? 'auto 1fr' : '1fr' }}>
                {showLineNumbers && (
                  <div className={`select-none pr-4 text-right ${theme === 'light' ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                  </div>
                )}
                <div>
                  <div>
                    <span className={theme === 'light' ? 'text-purple-600' : theme === 'dracula' ? 'text-pink-300' : 'text-pink-500'}>import</span> <span className={theme === 'light' ? 'text-blue-600' : theme === 'dracula' ? 'text-green-300' : 'text-blue-400'}>React</span> <span className={theme === 'light' ? 'text-purple-600' : theme === 'dracula' ? 'text-pink-300' : 'text-pink-500'}>from</span> <span className={theme === 'light' ? 'text-green-600' : theme === 'dracula' ? 'text-yellow-300' : 'text-green-400'}>'react'</span>;
                  </div>
                  <div></div>
                  <div><span className={theme === 'light' ? 'text-purple-600' : theme === 'dracula' ? 'text-pink-300' : 'text-pink-500'}>function</span> <span className={theme === 'light' ? 'text-yellow-600' : theme === 'dracula' ? 'text-green-300' : 'text-yellow-400'}>Example</span>() {'{'}</div>
                  <div>  <span className={theme === 'light' ? 'text-purple-600' : theme === 'dracula' ? 'text-pink-300' : 'text-pink-500'}>return</span> (</div>
                  <div>    <span className={theme === 'light' ? 'text-blue-600' : theme === 'dracula' ? 'text-cyan-300' : 'text-blue-400'}>&lt;div</span> <span className={theme === 'light' ? 'text-green-600' : theme === 'dracula' ? 'text-yellow-300' : 'text-green-400'}>className</span>=<span className={theme === 'light' ? 'text-green-600' : theme === 'dracula' ? 'text-yellow-300' : 'text-green-400'}>"example"</span><span className={theme === 'light' ? 'text-blue-600' : theme === 'dracula' ? 'text-cyan-300' : 'text-blue-400'}>&gt;</span></div>
                  <div>      <span className={theme === 'light' ? 'text-blue-600' : theme === 'dracula' ? 'text-cyan-300' : 'text-blue-400'}>&lt;h1&gt;</span>Hello World<span className={theme === 'light' ? 'text-blue-600' : theme === 'dracula' ? 'text-cyan-300' : 'text-blue-400'}>&lt;/h1&gt;</span></div>
                  <div>    <span className={theme === 'light' ? 'text-blue-600' : theme === 'dracula' ? 'text-cyan-300' : 'text-blue-400'}>&lt;/div&gt;</span></div>
                  <div>  );</div>
                  <div>{'}'}</div>
                  <div></div>
                  <div><span className={theme === 'light' ? 'text-purple-600' : theme === 'dracula' ? 'text-pink-300' : 'text-pink-500'}>export</span> <span className={theme === 'light' ? 'text-purple-600' : theme === 'dracula' ? 'text-pink-300' : 'text-pink-500'}>default</span> Example;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // API Reference table
  const APIReference = (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="bg-muted/50">
          <th className="py-4 px-4 text-left font-medium">Prop</th>
          <th className="py-4 px-4 text-left font-medium">Type</th>
          <th className="py-4 px-4 text-left font-medium">Default</th>
          <th className="py-4 px-4 text-left font-medium">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">code</td>
          <td className="py-4 px-4 align-top text-muted-foreground">string</td>
          <td className="py-4 px-4 align-top text-muted-foreground">Required</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            The code string to highlight and display
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">language</td>
          <td className="py-4 px-4 align-top text-muted-foreground">string</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'typescript'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            The programming language for syntax highlighting
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">theme</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'dark' | 'light' | 'dracula'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">'dark'</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            The color theme for the code block
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">showLineNumbers</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">true</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Whether to display line numbers
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">fileName</td>
          <td className="py-4 px-4 align-top text-muted-foreground">string</td>
          <td className="py-4 px-4 align-top text-muted-foreground">undefined</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Optional filename to display in the header
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">showHeader</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">true</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Whether to show the header with file decoration
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">showCopyButton</td>
          <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
          <td className="py-4 px-4 align-top text-muted-foreground">true</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Whether to show the copy button
          </td>
        </tr>
        <tr className="border-t">
          <td className="py-4 px-4 align-top font-mono text-xs">className</td>
          <td className="py-4 px-4 align-top text-muted-foreground">string</td>
          <td className="py-4 px-4 align-top text-muted-foreground">undefined</td>
          <td className="py-4 px-4 align-top text-muted-foreground">
            Additional class names for the container
          </td>
        </tr>
      </tbody>
    </table>
  )

  // Source code of the component
  const componentCode = `import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula, vs, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export interface CodeBlockProps {
  /**
   * The code string to highlight and display
   */
  code: string;
  
  /**
   * The programming language for syntax highlighting
   * @default "typescript"
   */
  language?: string;
  
  /**
   * The color theme for the code block
   * @default "dark"
   */
  theme?: 'dark' | 'light' | 'dracula';
  
  /**
   * Whether to display line numbers
   * @default true
   */
  showLineNumbers?: boolean;
  
  /**
   * Optional filename to display in the header
   */
  fileName?: string;
  
  /**
   * Whether to show the header with file decoration
   * @default true
   */
  showHeader?: boolean;
  
  /**
   * Whether to show the copy button
   * @default true
   */
  showCopyButton?: boolean;
  
  /**
   * Additional class names
   */
  className?: string;
}

/**
 * CodeBlock Component
 * 
 * A syntax-highlighted code block component for displaying code snippets
 * with an optional header and copy functionality.
 */
export function CodeBlock({
  code,
  language = 'typescript',
  theme = 'dark',
  showLineNumbers = true,
  fileName,
  showHeader = true,
  showCopyButton = true,
  className,
  ...props
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  // Select the style based on theme
  const codeStyle = 
    theme === 'light' ? vs :
    theme === 'dracula' ? dracula :
    vscDarkPlus;
  
  return (
    <div 
      className={cn(
        'rounded-lg overflow-hidden',
        theme === 'light' ? 'bg-zinc-100 border border-zinc-300' : 'bg-zinc-950 border border-zinc-800',
        className
      )}
      {...props}
    >
      {showHeader && (
        <div 
          className={cn(
            'flex items-center px-4 py-2',
            theme === 'light' ? 'bg-zinc-200 border-b border-zinc-300' : 'bg-zinc-900 border-b border-zinc-800',
          )}
        >
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          {fileName && (
            <div 
              className={cn(
                'ml-4 text-xs',
                theme === 'light' ? 'text-zinc-600' : 'text-zinc-400'
              )}
            >
              {fileName}
            </div>
          )}
          
          {showCopyButton && (
            <button
              className={cn(
                'absolute right-3 px-2 py-1 text-xs rounded flex items-center',
                theme === 'light'
                  ? 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200'
                  : 'text-zinc-400 hover:text-zinc-300 hover:bg-zinc-800'
              )}
              onClick={handleCopy}
              aria-label="Copy code"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 mr-1.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 mr-1.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          )}
        </div>
      )}
      
      <SyntaxHighlighter
        language={language}
        style={codeStyle}
        showLineNumbers={showLineNumbers}
        wrapLines={true}
        customStyle={{
          margin: 0,
          padding: '16px',
          fontSize: '14px',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          backgroundColor: 'transparent',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}`

  // Example usage code
  const usageCode = `import { CodeBlock } from '@/components/ui/code-block'

// Basic code block example
export function BasicCodeBlock() {
  const exampleCode = \`import React from 'react';

function Example() {
  return (
    <div className="example">
      <h1>Hello World</h1>
    </div>
  );
}

export default Example;\`;

  return (
    <CodeBlock 
      code={exampleCode} 
      language="tsx"
    />
  )
}

// Customized code block
export function CustomCodeBlock() {
  const cssCode = \`/* Custom Button Styles */
.button {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  background-color: #4F46E5;
  color: white;
  font-weight: 500;
  transition: all 150ms ease;
}

.button:hover {
  background-color: #4338CA;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}\`;

  return (
    <CodeBlock 
      code={cssCode} 
      language="css"
      theme="dracula"
      fileName="styles.css"
      showLineNumbers={true}
    />
  )
}

// Minimal code block without header or line numbers
export function MinimalCodeBlock() {
  const jsonCode = \`{
  "name": "ui-component-library",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwindcss": "^3.3.0"
  }
}\`;

  return (
    <CodeBlock 
      code={jsonCode} 
      language="json"
      showHeader={false}
      showLineNumbers={false}
      className="shadow-lg"
    />
  )
}`

  return (
    <ComponentTemplate
      title={title}
      description={description}
      component={<ExampleComponent />}
      customization={CustomizationUI}
      componentCode={componentCode}
      usageCode={usageCode}
      apiReference={APIReference}
    />
  )
}

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-25
 * Description: Initial implementation of the Code Block component page
 * Reason: To provide documentation and examples for the Code Block component
 * Impact: None - new page
 * Version: 1.0.0
 */ 
