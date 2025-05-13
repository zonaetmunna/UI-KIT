# Testing Guide for Aceternity UI Components

This document outlines our testing approach for the UI component library, following Test-Driven Development (TDD) principles and best practices for React component testing.

## Test-Driven Development Workflow

1. **Write Tests First**: Before implementing a component, write tests that define the expected behavior.
2. **Watch Tests Fail**: Run the tests to confirm they fail (as the component isn't implemented yet).
3. **Implement the Component**: Write the minimum code needed to make the tests pass.
4. **Verify Tests Pass**: Run the tests to ensure they pass with your implementation.
5. **Refactor**: Improve the code while ensuring tests continue to pass.

## Testing Tools

Our testing stack includes:

- **Jest**: Test runner and assertion library
- **React Testing Library**: For rendering and interacting with components
- **@testing-library/user-event**: For simulating user interactions
- **jest-axe**: For accessibility testing

## Test File Structure

For each component, create a test file in the same directory:

```
components/library/ui/
  ├── component-name.tsx
  └── component-name.test.tsx
```

## Test File Template

Use this template for component test files:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { ComponentName } from "./component-name";

describe("ComponentName", () => {
  // Setup tests
  test("renders without crashing", () => {
    render(<ComponentName />);
    // Add assertions
  });

  // Prop tests
  test("accepts and renders with custom className", () => {
    render(<ComponentName className="custom-class" />);
    const element = screen.getByTestId("component-name");
    expect(element).toHaveClass("custom-class");
  });

  // Functionality tests
  test("responds to user interaction correctly", async () => {
    const user = userEvent.setup();
    render(<ComponentName />);
    // Test interactions
  });

  // Accessibility tests
  test("has no accessibility violations", async () => {
    const { container } = render(<ComponentName />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

## What to Test

### 1. Component Rendering

Test that components render correctly:

```tsx
test("renders correctly", () => {
  render(<ComponentName />);
  expect(screen.getByTestId("component-name")).toBeInTheDocument();
});
```

### 2. Props Testing

Test all component props:

```tsx
test("renders with custom content", () => {
  render(<ComponentName>Custom Content</ComponentName>);
  expect(screen.getByText("Custom Content")).toBeInTheDocument();
});

test("applies styles based on size prop", () => {
  render(<ComponentName size="large" />);
  const element = screen.getByTestId("component-name");
  expect(element).toHaveClass("text-lg");
});
```

### 3. User Interactions

Test user interactions with the component:

```tsx
test("toggles state on click", async () => {
  const user = userEvent.setup();
  render(<ToggleComponent />);

  const toggleButton = screen.getByRole("button");
  expect(toggleButton).toHaveAttribute("aria-pressed", "false");

  await user.click(toggleButton);
  expect(toggleButton).toHaveAttribute("aria-pressed", "true");
});
```

### 4. Controlled vs. Uncontrolled Testing

Test both controlled and uncontrolled component modes:

```tsx
test("works as controlled component", () => {
  const onChange = jest.fn();
  render(<InputComponent value="test" onChange={onChange} />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveValue("test");
});

test("works as uncontrolled component", async () => {
  const user = userEvent.setup();
  render(<InputComponent defaultValue="default" />);
  const input = screen.getByRole("textbox");

  expect(input).toHaveValue("default");
  await user.clear(input);
  await user.type(input, "new value");
  expect(input).toHaveValue("new value");
});
```

### 5. Animation and Transition Testing

For components with animations, test their state changes:

```tsx
test("applies animation classes when triggered", async () => {
  const user = userEvent.setup();
  render(<AnimatedComponent />);

  const trigger = screen.getByRole("button");
  const element = screen.getByTestId("animated-element");

  expect(element).not.toHaveClass("opacity-100");
  await user.click(trigger);
  expect(element).toHaveClass("opacity-100");
});
```

### 6. Accessibility Testing

Test accessibility features of components:

```tsx
test("has proper ARIA attributes", () => {
  render(<AccordionComponent />);
  const button = screen.getByRole("button");

  expect(button).toHaveAttribute("aria-expanded", "false");
  expect(button).toHaveAttribute("aria-controls");
});

test("has no accessibility violations", async () => {
  const { container } = render(<ComponentName />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Mock Data and Fixtures

Create mock data for component testing:

```tsx
// In a separate file or at the top of your test file
const mockItems = [
  { id: "1", title: "Item 1", content: "Content 1" },
  { id: "2", title: "Item 2", content: "Content 2" },
];

test("renders list of items", () => {
  render(<ListComponent items={mockItems} />);
  expect(screen.getByText("Item 1")).toBeInTheDocument();
  expect(screen.getByText("Item 2")).toBeInTheDocument();
});
```

## Testing Complex Behavior

For complex components, break down tests into manageable units:

```tsx
describe("Carousel", () => {
  test("renders initial slide", () => {
    // Test initial render
  });

  test("navigates to next slide on next button click", async () => {
    // Test next navigation
  });

  test("navigates to previous slide on previous button click", async () => {
    // Test previous navigation
  });

  test("autoplay advances slides", async () => {
    // Test autoplay functionality
  });
});
```

## Integration Testing

Include some integration tests for components that work together:

```tsx
test("modal opens when trigger button is clicked", async () => {
  const user = userEvent.setup();
  render(
    <>
      <Button data-testid="trigger">Open Modal</Button>
      <Modal trigger="trigger">Modal Content</Modal>
    </>
  );

  expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  await user.click(screen.getByText("Open Modal"));
  expect(screen.getByText("Modal Content")).toBeInTheDocument();
});
```

## Snapshot Testing (Optional)

Use snapshot testing sparingly for UI stability checks:

```tsx
test("matches snapshot", () => {
  const { container } = render(<ComponentName />);
  expect(container).toMatchSnapshot();
});
```

## Conclusion

Following this testing guide will ensure that our UI component library is thoroughly tested, reliable, and maintains high quality. By writing tests first (TDD approach), we can ensure our components meet specifications and continue to work correctly as the codebase evolves.
