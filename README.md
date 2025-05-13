# UI Component Library

A modern, fully-featured UI component library built with React, Next.js, Tailwind CSS, and Framer Motion. This library provides a collection of beautiful, accessible, and customizable components for building modern web applications.

## Features

- 🎨 **Modern Design**: Clean, minimal, and customizable components
- 🔄 **Interactive Components**: Powered by Framer Motion for smooth animations
- 📱 **Responsive**: Fully responsive and mobile-friendly components
- 🌙 **Dark Mode**: Built-in dark mode support
- ♿ **Accessible**: ARIA-compliant and keyboard navigable
- 🧩 **Modular**: Use only what you need
- 🛠️ **Customizable**: Easy to customize with Tailwind CSS
- 📚 **Documented**: Comprehensive documentation and examples

## Component Structure

Each component in this library follows a consistent pattern:

1. **Component Implementation**: Located in `components/library/ui/[component-name].tsx`
2. **Component Demo**: Located in `app/components/[component-name]/page.tsx`
3. **Component Tests**: Located in `components/library/ui/__tests__/[component-name].test.tsx`

## Component Showcase Pages

Each component has a dedicated showcase page that includes:

1. **Hero Section**: Visual preview of the component with title and description
2. **Usage Section**: Examples of how to use the component
3. **Component Preview**: Interactive preview of the component
4. **Usage Code**: Example code for using the component
5. **Customization**: Interactive controls to customize the component (where applicable)
6. **Component Code**: The full source code of the component
7. **API Reference**: Detailed information about props and customization options

## Available Components

The library includes a wide variety of components, including:

- **3D Card Effect**: A perspective card effect with glare and 3D rotation
- **3D Marquee**: A 3D rotating marquee effect for displaying content in a loop
- **Animated Tooltip**: Tooltips with entrance and exit animations
- **Background Beams**: Animated background beams that follow cursor
- **Card Hover Effect**: Interactive card hover effects
- **Card Spotlight**: Cards with spotlight effect on hover
- And many more...

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ui-component-library.git

# Install dependencies
cd ui-component-library
npm install

# Run the development server
npm run dev
```

### Using Components

Import components directly from the library:

```jsx
import { ThreeDCardEffect, CardSpotlight } from "@/components/library";

function MyApp() {
  return (
    <div>
      <ThreeDCardEffect>
        <h2>This is a 3D Card</h2>
        <p>Hover to see the effect!</p>
      </ThreeDCardEffect>

      <CardSpotlight>
        <h2>Spotlight Card</h2>
        <p>Move your cursor to see the spotlight effect</p>
      </CardSpotlight>
    </div>
  );
}
```

## Component Showcase Example

Here's how to create a new component showcase page:

```jsx
import ComponentTemplate from "@/app/components/component-template";
import { MyComponent } from "@/components/library/ui";

export default function MyComponentPage() {
  // Example component for preview
  const ExampleComponent = () => <MyComponent>Example content</MyComponent>;

  // Component code
  const componentCode = `// Your component code here`;

  // Example usage code
  const usageCode = `// Example usage code here`;

  // API Reference table
  const APIReference = <table>{/* API reference content */}</table>;

  return (
    <ComponentTemplate
      title="My Component"
      description="Description of my component"
      component={<ExampleComponent />}
      componentCode={componentCode}
      usageCode={usageCode}
      apiReference={APIReference}
    />
  );
}
```

## Development

### Adding a New Component

1. Create the component in `components/library/ui/[component-name].tsx`
2. Add tests in `components/library/ui/__tests__/[component-name].test.tsx`
3. Export the component in `components/library/ui/index.ts`
4. Add the component to the main export in `components/library/index.ts`
5. Create a showcase page in `app/components/[component-name]/page.tsx`
6. Add the component to the sidebar in `components/components-sidebar.tsx`

### Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [shadcn/ui](https://ui.shadcn.com/) (for inspiration)

## Changelog

### v1.0.0 (2023-07-10)

- Initial release with basic components

### v1.0.1 (2023-07-15)

- Added 3D Card Effect component
- Added Card Spotlight component

### v1.0.2 (2023-07-16)

- Added 3D Marquee component
- Improved component templates
- Added comprehensive documentation
