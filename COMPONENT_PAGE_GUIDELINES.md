# Component Page Guidelines

This document provides guidelines for creating and maintaining consistent component pages in the UI Component Library. Following these guidelines ensures that all component pages have a uniform structure, making them more user-friendly and easier to maintain.

## Page Structure

Every component page should follow this consistent structure:

1. **Hero Section**

   - Title
   - Description
   - Component preview

2. **Usage Section**

   - Preview/Code tabs
   - Working example of the component
   - Example code

3. **Customization Section (if applicable)**

   - Interactive controls to adjust component properties
   - Live preview of customization

4. **Component Code Section**

   - Full source code of the component
   - Copy button

5. **API Reference Section**
   - Table of available props
   - Types, defaults, and descriptions

## Required Elements

Each component page must include:

- `"use client"` directive at the top
- Import of `ComponentTemplate` from "@/app/components/component-template"
- Import of the component from '@/components/library/ui'
- Title and description constants
- Example component function
- Customization controls (if the component has customizable props)
- API reference table
- Component source code
- Usage examples code
- Changelog comment

## Template Usage

To ensure consistency, use the template provided in `app/components/component-page-template.tsx` as a starting point when creating a new component page.

### Component Template Structure

```tsx
"use client"

import ComponentTemplate from "@/app/components/component-template"
import { YourComponent } from '@/components/library/ui'
import { useState } from 'react'

export default function YourComponentPage() {
  const title = "Your Component"
  const description = "Description of the component"

  // Example component for preview
  const ExampleComponent = () => (
    // Example implementation
  )

  // Customization state and UI
  const [prop, setProp] = useState(defaultValue)

  const CustomizationUI = (
    // Customization controls
  )

  // API Reference table
  const APIReference = (
    <table>
      {/* API Reference content */}
    </table>
  )

  // Source code of the component
  const componentCode = `// Component source code`

  // Example usage code
  const usageCode = `// Example usage code`

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
 * Date: YYYY-MM-DD
 * Description: Initial implementation
 * Reason: To provide documentation and examples
 * Impact: None - new page
 * Version: 1.0.0
 */
```

## Code Sections Guidelines

### Example Component

- Include multiple examples showcasing different variants or configurations
- Keep examples clear and concise
- Add labels to explain different examples

### Customization UI

- Include controls for all customizable properties
- Group related controls together
- Provide appropriate input types for different properties (sliders for numbers, switches for booleans, etc.)
- Ensure controls update a live preview

### API Reference

- Document all available props
- Include:
  - Prop name
  - Type
  - Default value
  - Description of what the prop does
- Use a consistent table format

### Component Code

- Include the complete source code of the component
- Include JSDoc comments for the component and all props
- Format code consistently

### Usage Examples

- Include basic example with default props
- Include examples with custom configurations
- Include practical use cases

## Handling Updates

When updating an existing component page:

1. Maintain the same structure
2. Update all relevant sections
3. Add a new changelog entry with:
   - Date
   - Description of changes
   - Reason for changes
   - Impact assessment
   - Version number increment

## Testing Component Pages

Use the `app/components/page-template-checker.tsx` tool to check if all component pages follow the required structure. This tool will:

1. Check for the presence of all required elements
2. Identify missing or inconsistent sections
3. Provide guidance on how to fix issues

## Example of a Well-Structured Page

The following component pages serve as good examples to follow:

- `app/components/3d-card-effect/page.tsx`
- `app/components/3d-marquee/page.tsx`
- `app/components/3d-pin/page.tsx`

## Common Mistakes to Avoid

- **Inconsistent Section Order**: Always maintain the order of sections as outlined above.
- **Missing Sections**: Ensure all required sections are included.
- **Incomplete API Reference**: Document all props, even those that might seem obvious.
- **Poor Examples**: Provide diverse, practical examples that showcase the component's features.
- **Outdated Code**: Make sure the component code and examples match the actual implementation.
- **Missing Changelog**: Always include and update the changelog when making changes.

By following these guidelines, we ensure that all component pages provide a consistent, high-quality user experience for developers using our UI Component Library.
