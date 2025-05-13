"use client";

import { Button } from '@/components/ui/button';
import { Component } from '@/lib/components-data';
import { Check, Copy } from 'lucide-react';
import React, { useState } from 'react';

interface ComponentCodeProps {
  component: Component;
}

const ComponentCode: React.FC<ComponentCodeProps> = ({ component }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(component.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="absolute right-2 top-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="h-8 w-8 p-0"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-gray-500" />
          )}
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
      <pre className="max-h-[500px] overflow-auto rounded-md bg-gray-100 p-4 text-sm dark:bg-gray-800">
        <code className="font-mono text-gray-800 dark:text-gray-200">{component.code}</code>
      </pre>
    </div>
  );
};

export default ComponentCode; 