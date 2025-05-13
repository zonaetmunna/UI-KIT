import { render, screen } from '@testing-library/react';
import { BackgroundBeamsWithCollision } from '../background-beams-with-collision';

// Mock the necessary browser APIs
global.requestAnimationFrame = jest.fn(callback => setTimeout(callback, 0));

// Mock canvas context
const mockContext = {
  clearRect: jest.fn(),
  beginPath: jest.fn(),
  moveTo: jest.fn(),
  lineTo: jest.fn(),
  arc: jest.fn(),
  fill: jest.fn(),
  createLinearGradient: jest.fn(() => ({
    addColorStop: jest.fn()
  })),
  createRadialGradient: jest.fn(() => ({
    addColorStop: jest.fn()
  })),
  stroke: jest.fn()
};

// Mock HTMLCanvasElement
HTMLCanvasElement.prototype.getContext = jest.fn(() => mockContext);

describe('BackgroundBeamsWithCollision', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  it('renders the component with children', () => {
    render(
      <BackgroundBeamsWithCollision>
        <span data-testid="test-child">Test Content</span>
      </BackgroundBeamsWithCollision>
    );
    
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
  
  it('applies custom className', () => {
    const { container } = render(
      <BackgroundBeamsWithCollision className="custom-class">
        <span>Test Content</span>
      </BackgroundBeamsWithCollision>
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });
  
  it('renders with default props', () => {
    const { container } = render(
      <BackgroundBeamsWithCollision>
        <span>Test Content</span>
      </BackgroundBeamsWithCollision>
    );
    
    // The component should have a min-height
    expect(container.firstChild).toHaveClass('min-h-[400px]');
    
    // Should have a canvas element
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
    expect(canvas).toHaveClass('absolute');
  });
  
  it('initializes canvas and beams on mount', () => {
    render(
      <BackgroundBeamsWithCollision numBeams={3}>
        <span>Test Content</span>
      </BackgroundBeamsWithCollision>
    );
    
    // Canvas context should be retrieved
    expect(HTMLCanvasElement.prototype.getContext).toHaveBeenCalledWith('2d');
    
    // Wait for the animation frame to be called
    jest.runAllTimers();
    
    // The clearRect should be called at least once during animation
    expect(mockContext.clearRect).toHaveBeenCalled();
  });
  
  it('respects collision settings', () => {
    render(
      <BackgroundBeamsWithCollision numBeams={3} enableCollisions={false}>
        <span>Test Content</span>
      </BackgroundBeamsWithCollision>
    );
    
    // Animation should still work with collisions disabled
    jest.runAllTimers();
    expect(mockContext.clearRect).toHaveBeenCalled();
    expect(mockContext.stroke).toHaveBeenCalled();
  });
  
  it('matches snapshot', () => {
    const { container } = render(
      <BackgroundBeamsWithCollision>
        <span>Test Content</span>
      </BackgroundBeamsWithCollision>
    );
    
    expect(container).toMatchSnapshot();
  });
}); 