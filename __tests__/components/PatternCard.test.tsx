import { render, screen } from '@testing-library/react';
import PatternCard from '../../components/PatternCard';
import { Color } from '../../lib/patternGenerator';

const mockPattern: Color[] = [
  'red', 'yellow', 'green', 'blue',
  'red', 'yellow', 'green', 'blue',
  'red', 'yellow', 'green', 'blue',
  'red', 'yellow', 'green', 'blue',
];

describe('PatternCard', () => {
  it('renders exactly 16 colored dots', () => {
    render(<PatternCard pattern={mockPattern} />);
    // We'll assume the dots have a specific role or test-id
    const dots = screen.getAllByTestId('pattern-dot');
    expect(dots).toHaveLength(16);
  });
});
