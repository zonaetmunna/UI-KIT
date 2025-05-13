import { cn } from "@/lib/utils"
import * as React from "react"

export interface CardHoverEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    title: string
    description: string
    icon?: React.ReactNode
    link?: string
    linkText?: string
  }[]
  className?: string
  cardClassName?: string
  hoverEffect?: "border" | "lift" | "background" | "scale" | "glow"
  alignment?: "center" | "left"
}

/**
 * Card Hover Effect Component
 * 
 * A grid of cards with customizable hover effects
 * 
 * @param {Array} items - Array of items containing details for each card
 * @param {string} className - Optional CSS class for the container
 * @param {string} cardClassName - Optional CSS class for each card
 * @param {string} hoverEffect - The type of hover effect to apply
 * @param {string} alignment - Text alignment within cards
 * @returns {React.ReactElement} The Card Hover Effect component
 */
export function CardHoverEffect({
  items,
  className,
  cardClassName,
  hoverEffect = "border",
  alignment = "center",
  ...props
}: CardHoverEffectProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
      {...props}
    >
      {items.map((item, index) => (
        <CardHoverItem
          key={item.title + index}
          title={item.title}
          description={item.description}
          icon={item.icon}
          link={item.link}
          linkText={item.linkText}
          className={cardClassName}
          hoverEffect={hoverEffect}
          alignment={alignment}
        />
      ))}
    </div>
  )
}

interface CardHoverItemProps {
  title: string
  description: string
  icon?: React.ReactNode
  link?: string
  linkText?: string
  className?: string
  hoverEffect?: "border" | "lift" | "background" | "scale" | "glow"
  alignment?: "center" | "left"
}

function CardHoverItem({
  title,
  description,
  icon,
  link,
  linkText = "Learn more",
  className,
  hoverEffect = "border",
  alignment = "center",
}: CardHoverItemProps) {
  // Base classes that all cards have
  const baseClasses = 
    "relative overflow-hidden rounded-lg border bg-background p-6 transition-all duration-200 ease-in-out"

  // Hover effect specific classes
  const hoverClasses = {
    border: "hover:border-primary/50",
    lift: "hover:-translate-y-1 hover:shadow-lg",
    background: "hover:bg-accent",
    scale: "hover:scale-[1.02]",
    glow: "hover:shadow-[0_0_15px_rgba(var(--primary),.3)]",
  }

  // Text alignment classes
  const alignmentClasses = {
    center: "text-center",
    left: "text-left",
  }

  return (
    <div
      className={cn(
        baseClasses,
        hoverClasses[hoverEffect],
        alignmentClasses[alignment],
        className
      )}
    >
      {icon && (
        <div className={cn(
          "mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted text-primary",
          alignment === "center" ? "mx-auto" : ""
        )}>
          {icon}
        </div>
      )}
      <h3 className="mb-2 font-semibold tracking-tight">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      {link && (
        <a 
          href={link} 
          className="text-sm font-medium text-primary hover:underline"
        >
          {linkText}
          <span className="sr-only">{title}</span>
        </a>
      )}
    </div>
  )
}

export { CardHoverItem }

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-13
 * Description: Initial implementation of the Card Hover Effect component
 * Reason: Component needed for creating grids of cards with hover effects
 * Impact: None - new component
 * Version: 1.0.0
 */ 