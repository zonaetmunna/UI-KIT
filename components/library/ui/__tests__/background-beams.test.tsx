import { render, screen } from '@testing-library/react';
import { BackgroundBeams } from '../background-beams';

// Mock the necessary browser APIs
global.requestAnimationFrame = jest.fn(callback => setTimeout(callback, 0));

// Mock canvas context
const mockContext = {
  clearRect: jest.fn(),
  beginPath: jest.fn(),
  moveTo: jest.fn(),
  lineTo: jest.fn(),
  createLinearGradient: jest.fn(() => ({
    addColorStop: jest.fn()
  })),
  stroke: jest.fn()
};

// Mock HTMLCanvasElement
HTMLCanvasElement.prototype.getContext = jest.fn(() => mockContext);

describe('BackgroundBeams', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  it('renders the component with children', () => {
    render(
      <BackgroundBeams>
        <span data-testid="test-child">Test Content</span>
      </BackgroundBeams>
    );
    
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
  
  it('applies custom className', () => {
    const { container } = render(
      <BackgroundBeams className="custom-class">
        <span>Test Content</span>
      </BackgroundBeams>
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });
  
  it('renders with default props', () => {
    const { container } = render(
      <BackgroundBeams>
        <span>Test Content</span>
      </BackgroundBeams>
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
      <BackgroundBeams numBeams={3}>
        <span>Test Content</span>
      </BackgroundBeams>
    );
    
    // Canvas context should be retrieved
    expect(HTMLCanvasElement.prototype.getContext).toHaveBeenCalledWith('2d');
    
    // Wait for the animation frame to be called
    jest.runAllTimers();
    
    // The clearRect should be called at least once during animation
    expect(mockContext.clearRect).toHaveBeenCalled();
  });
  
  it('matches snapshot', () => {
    const { container } = render(
      <BackgroundBeams>
        <span>Test Content</span>
      </BackgroundBeams>
    );
    
    expect(container).toMatchSnapshot();
  });
}); 