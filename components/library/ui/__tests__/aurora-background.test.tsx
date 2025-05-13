import { render, screen } from '@testing-library/react';
import { AuroraBackground } from '../aurora-background';

// Mock the requestAnimationFrame since we're not testing the animation
global.requestAnimationFrame = jest.fn(callback => setTimeout(callback, 0));

describe('AuroraBackground', () => {
  it('renders the component with children', () => {
    render(
      <AuroraBackground>
        <span data-testid="test-child">Test Content</span>
      </AuroraBackground>
    );
    
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
  
  it('applies custom className', () => {
    const { container } = render(
      <AuroraBackground className="custom-class">
        <span>Test Content</span>
      </AuroraBackground>
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });
  
  it('renders with default props', () => {
    const { container } = render(
      <AuroraBackground>
        <span>Test Content</span>
      </AuroraBackground>
    );
    
    // The component should have a min-height
    expect(container.firstChild).toHaveClass('min-h-[400px]');
    
    // Should have 3 aurora blobs (divs with absolute positioning)
    const blobs = container.querySelectorAll('.absolute.inset-0');
    expect(blobs.length).toBe(3);
  });
  
  it('matches snapshot', () => {
    const { container } = render(
      <AuroraBackground>
        <span>Test Content</span>
      </AuroraBackground>
    );
    
    expect(container).toMatchSnapshot();
  });
});
