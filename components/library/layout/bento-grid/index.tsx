"use client";

import { cn } from "@/lib/utils";
import React from "react";

export interface BentoGridProps {
  className?: string;
  children: React.ReactNode;
}

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
};

export interface BentoGridItemProps {
  className?: string;
  title?: string;
  description?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  children,
  colSpan = 1,
  rowSpan = 1,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-neutral-200 justify-between flex flex-col space-y-4",
        className,
        colSpan === 1 ? "col-span-1" : colSpan === 2 ? "col-span-2 md:col-span-2" : "col-span-3 md:col-span-3",
        rowSpan === 1 ? "row-span-1" : "row-span-2 md:row-span-2"
      )}
    >
      {header && <div className="w-full">{header}</div>}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon && <div className="mb-2 mt-2">{icon}</div>}
        {title && <h3 className="font-semibold text-lg dark:text-zinc-200">{title}</h3>}
        {description && <p className="text-sm text-neutral-600 dark:text-neutral-300">{description}</p>}
      </div>
      {children}
    </div>
  );
}; 