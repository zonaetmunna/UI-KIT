import { cn } from "@/lib/utils";
import * as React from "react";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, children, columns = 3, gap = 6, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid",
          `grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} gap-${gap}`,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Grid.displayName = "Grid"

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
}

export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ className, children, colSpan = 1, rowSpan = 1, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "col-span-1",
          colSpan > 1 && `sm:col-span-${colSpan}`,
          rowSpan > 1 && `row-span-${rowSpan}`,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
GridItem.displayName = "GridItem" 