"use client"

import { ComponentCard } from "@/components/component-card";
import { components } from "@/lib/components-data";

export default function ComponentsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Components</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Beautiful, reusable UI components built with Tailwind CSS and Framer Motion
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {components.map((component) => (
          <ComponentCard
            key={component.id}
            title={component.name}
            description={component.description}
            href={`/components/${component.id}`}
            icon={component.icon}
          />
        ))}
      </div>
    </div>
  );
}
