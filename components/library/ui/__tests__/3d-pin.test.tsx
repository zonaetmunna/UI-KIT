import { fireEvent, render, screen } from '@testing-library/react';
import ThreeDPin from '../3d-pin';

describe('ThreeDPin Component', () => {
  // Render Tests
  test('renders without crashing', () => {
    render(<ThreeDPin />);
    // Component should be in the document
    expect(document.querySelector('div')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    const className = 'custom-class';
    const { container } = render(<ThreeDPin className={className} />);
    
    expect(container.firstChild).toHaveClass(className);
  });

  test('applies hover animation class when animateOnHover is true', () => {
    const { container } = render(<ThreeDPin animateOnHover={true} />);
    
    // Should have hover classes for animation
    expect(container.firstChild).toHaveClass('hover:translate-y-[-10%]');
    expect(container.firstChild).toHaveClass('hover:scale-105');
  });

  test('does not apply hover animation class when animateOnHover is false', () => {
    const { container } = render(<ThreeDPin animateOnHover={false} />);
    
    // Should NOT have hover classes for animation
    expect(container.firstChild).not.toHaveClass('hover:translate-y-[-10%]');
    expect(container.firstChild).not.toHaveClass('hover:scale-105');
  });

  // Shadow Tests
  test('adds shadow when showShadow is true', () => {
    const { container } = render(<ThreeDPin showShadow={true} />);
    
    // Should have a shadow element
    const shadowElement = container.querySelector('.bg-black');
    expect(shadowElement).toBeInTheDocument();
  });

  test('does not add shadow when showShadow is false', () => {
    const { container } = render(<ThreeDPin showShadow={false} />);
    
    // Should NOT have a shadow element
    const shadowElement = container.querySelector('.bg-black');
    expect(shadowElement).not.toBeInTheDocument();
  });

  // Interactivity Tests
  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<ThreeDPin onClick={handleClick} />);
    
    // Get the pin element and click it
    const pinElement = screen.getByRole('presentation');
    fireEvent.click(pinElement);
    
    // The click handler should have been called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Style Tests
  test('applies custom color', () => {
    const color = '#00FF00';
    const { container } = render(<ThreeDPin color={color} />);
    
    // The pin head should have the custom color
    const pinHead = container.querySelector('.absolute.top-0.left-0.right-0');
    expect(pinHead).toHaveStyle({ backgroundColor: color });
    
    // The pin body should also have the custom color
    const pinBody = container.querySelector('.absolute.top-0.left-0.right-0');
    expect(pinBody).toHaveStyle({ backgroundColor: color });
  });

  test('applies custom size', () => {
    const size = 100;
    const { container } = render(<ThreeDPin size={size} />);
    
    // The pin container should have the correct height and width
    expect(container.firstChild).toHaveStyle({
      height: `${size + size * 0.8}px`, // pinHeadSize + pinBodyHeight
      width: `${size}px`, // pinHeadSize
    });
    
    // The pin head should have the correct size
    const pinHead = container.querySelector('.absolute.top-0.left-0.right-0');
    expect(pinHead).toHaveStyle({
      height: `${size}px`,
      width: `${size}px`,
    });
  });
});

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-20
 * Description: Initial implementation of 3D Pin component tests
 * Reason: Validate functionality and ensure component works as expected
 * Impact: None - new test file
 * Version: 1.0.0
 */ 