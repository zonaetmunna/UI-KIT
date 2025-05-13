import { fireEvent, render, screen } from '@testing-library/react';
import ThreeDCardEffect from '../3d-card-effect';

describe('ThreeDCardEffect', () => {
  test('renders without crashing', () => {
    render(
      <ThreeDCardEffect>
        <div data-testid="test-content">Test Content</div>
      </ThreeDCardEffect>
    );
    
    expect(screen.getByTestId('test-content')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('accepts and renders with custom className', () => {
    const { container } = render(
      <ThreeDCardEffect className="custom-class">
        <div>Test Content</div>
      </ThreeDCardEffect>
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });

  test('applies custom style', () => {
    const { container } = render(
      <ThreeDCardEffect style={{ backgroundColor: 'red' }}>
        <div>Test Content</div>
      </ThreeDCardEffect>
    );
    
    const element = container.firstChild as HTMLElement;
    expect(element.style.backgroundColor).toBe('red');
  });

  test('responds to mouse movements by updating transform style', () => {
    const { container } = render(
      <ThreeDCardEffect>
        <div>Test Content</div>
      </ThreeDCardEffect>
    );
    
    const card = container.firstChild as HTMLElement;
    
    // Get the initial transform style before mouse movement
    const initialTransform = card.style.transform;
    
    // Simulate a mouse move event
    fireEvent.mouseMove(card, { clientX: 50, clientY: 50 });
    
    // After mouse movement, the transform style should change
    expect(card.style.transform).not.toBe(initialTransform);
    expect(card.style.transform).toContain('perspective(1000px)');
  });
  
  test('resets transformation when mouse leaves', () => {
    const { container } = render(
      <ThreeDCardEffect>
        <div>Test Content</div>
      </ThreeDCardEffect>
    );
    
    const card = container.firstChild as HTMLElement;
    
    // Move the mouse over the card and then away from it
    fireEvent.mouseMove(card, { clientX: 50, clientY: 50 });
    fireEvent.mouseLeave(card);
    
    // The transform should reset to no rotation
    expect(card.style.transform).toContain('rotateX(0deg) rotateY(0deg)');
  });
  
  test('applies custom rotation intensity', () => {
    const { container: containerA } = render(
      <ThreeDCardEffect rotationIntensity={10}>
        <div>Low Intensity</div>
      </ThreeDCardEffect>
    );
    
    const { container: containerB } = render(
      <ThreeDCardEffect rotationIntensity={40}>
        <div>High Intensity</div>
      </ThreeDCardEffect>
    );
    
    const cardA = containerA.firstChild as HTMLElement;
    const cardB = containerB.firstChild as HTMLElement;
    
    // Simulate the same mouse movement on both cards
    const mouseEvent = { clientX: 100, clientY: 100 };
    fireEvent.mouseMove(cardA, mouseEvent);
    fireEvent.mouseMove(cardB, mouseEvent);
    
    // Extract rotation values from the transform styles
    const getRotationValues = (transform: string) => {
      const rotateX = parseFloat(transform.match(/rotateX\(([-\d.]+)deg\)/)?.[1] || '0');
      const rotateY = parseFloat(transform.match(/rotateY\(([-\d.]+)deg\)/)?.[1] || '0');
      return { rotateX, rotateY };
    };
    
    const rotationA = getRotationValues(cardA.style.transform);
    const rotationB = getRotationValues(cardB.style.transform);
    
    // Higher intensity should result in larger rotation values (taking absolute values)
    expect(Math.abs(rotationB.rotateX)).toBeGreaterThan(Math.abs(rotationA.rotateX));
    expect(Math.abs(rotationB.rotateY)).toBeGreaterThan(Math.abs(rotationA.rotateY));
  });
}); 