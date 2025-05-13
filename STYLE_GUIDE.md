# Aceternity UI Style Guide

This style guide ensures our components match the Aceternity UI design patterns and maintain consistent styling across the library.

## Component Design Principles

### 1. Visual Aesthetics

- **Minimalist Design**: Focus on clean, minimalist aesthetics with plenty of whitespace
- **Dark Mode First**: Design components with dark mode as the primary theme, with light mode support
- **Gradient and Glow Effects**: Use subtle gradients and glow effects for emphasis
- **Animation**: Incorporate smooth, subtle animations that enhance user experience
- **Rounded Corners**: Use consistent border radius values (typically rounded-lg = 0.5rem)

### 2. Component Structure

All components should follow this general structure:

```tsx
export interface ComponentNameProps extends React.HTMLAttributes<HTMLElement> {
  // Props with JSDoc comments
}

/**
 * Component Name
 *
 * Description of what the component does
 *
 * @example
 * Basic usage example
 */
export function ComponentName({
  // Props with sensible defaults
  ...props
}: ComponentNameProps) {
  // Implementation

  return (
    // Component JSX with Tailwind classes
  );
}
```

### 3. CSS & Tailwind Patterns

- Use Tailwind classes for all styling
- Use `cn()` utility for class name conditionals and merging
- Common class patterns:
  - Container: `relative overflow-hidden rounded-lg`
  - Text: `text-white text-sm font-medium`
  - Gradients: `bg-gradient-to-r from-[color] to-[color]`
  - Animations: `transition-all duration-300 ease-in-out`

## Demo Page Structure

Every component demo page should follow this exact structure to match Aceternity UI:

### 1. Hero Section

The hero should showcase the component in action with a brief description.

```tsx
<div className="relative">
  <Component className="h-[450px] rounded-lg">
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
        Component Name
      </h1>
      <p className="text-lg md:text-xl text-white/80 max-w-xl">
        Brief description of the component.
      </p>
    </div>
  </Component>
</div>
```

### 2. Usage Section

Explain how to use the component with a preview and code example.

```tsx
<div className="mb-8">
  <h2 className="text-2xl font-bold mb-2">Usage</h2>
  <p className="text-muted-foreground">
    Explanation of the component's purpose and usage.
  </p>
</div>

<Tabs defaultValue="preview" className="mb-12">
  <TabsList>
    <TabsTrigger value="preview">Preview</TabsTrigger>
    <TabsTrigger value="code">Code</TabsTrigger>
  </TabsList>
  <TabsContent value="preview" className="p-0 mt-6">
    {/* Component preview */}
  </TabsContent>
  <TabsContent value="code" className="mt-6">
    <CodeBlock language="tsx" code={`/* Example code */`} />
  </TabsContent>
</Tabs>
```

### 3. Customization Section

Show different ways to customize the component with sliders, switches, or other inputs.

```tsx
<div className="mb-12">
  <h2 className="text-2xl font-bold mb-4">Customization</h2>
  <p className="mb-6 text-muted-foreground">
    Customize the appearance and behavior of the component.
  </p>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
    {/* Controls on the left */}
    <div className="space-y-6">{/* Sliders, switches, etc. */}</div>

    {/* Live preview on the right */}
    <div>{/* Component with customized props */}</div>
  </div>

  <CodeBlock language="tsx" code={`/* Example with customized props */`} />
</div>
```

### 4. Use Cases / Examples Section

Show practical use cases of the component.

```tsx
<div className="mb-12">
  <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    {/* Use case examples */}
  </div>
</div>
```

### 5. API Reference

Document the component props in a table format.

```tsx
<div>
  <h2 className="text-2xl font-bold mb-4">API Reference</h2>
  <div className="border rounded-lg overflow-hidden">
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="bg-muted/50">
          <th className="py-4 px-4 text-left font-medium">Prop</th>
          <th className="py-4 px-4 text-left font-medium">Type</th>
          <th className="py-4 px-4 text-left font-medium">Default</th>
          <th className="py-4 px-4 text-left font-medium">Description</th>
        </tr>
      </thead>
      <tbody>{/* Props documentation */}</tbody>
    </table>
  </div>
</div>
```

## Color Palette

Follow these color values for consistency:

- **Primary Blue**: hsl(210, 100%, 50%) / #0080FF
- **Cyan**: hsl(180, 100%, 50%) / #00FFFF
- **Purple**: hsl(270, 100%, 60%) / #8040FF
- **Pink**: hsl(330, 100%, 60%) / #FF40BF
- **Background Dark**: hsl(222, 47%, 11%) / #0F172A
- **Text White**: hsl(0, 0%, 100%) / #FFFFFF
- **Text White Muted**: hsla(0, 0%, 100%, 0.8) / rgba(255, 255, 255, 0.8)
- **Border Light**: hsla(215, 16%, 47%, 0.2) / rgba(153, 161, 179, 0.2)

## Typography

- **Headings**:
  - H1: `text-4xl font-bold tracking-tighter`
  - H2: `text-2xl font-bold`
  - H3: `text-xl font-medium`
- **Body**:
  - Regular: `text-base text-muted-foreground`
  - Small: `text-sm text-muted-foreground`
- **Code**:
  - Inline: `font-mono text-xs`

## Interactive Elements

- **Buttons**:
  - Primary: `bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md`
  - Secondary: `bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-md`
- **Inputs**:
  - Text: `px-3 py-2 rounded-md border border-input bg-background text-sm`

## Animation Guidelines

- **Transitions**:
  - Default: `transition-all duration-300 ease-in-out`
  - Fast: `transition-all duration-150 ease-in-out`
  - Slow: `transition-all duration-500 ease-in-out`
- **Hover Effects**:
  - Scale: `hover:scale-105`
  - Translate: `hover:-translate-y-1`
  - Opacity: `hover:opacity-90`

## Conclusion

By following this style guide for both component implementation and demo pages, we'll ensure that our UI component library maintains a consistent look and feel matching the Aceternity UI design patterns.
