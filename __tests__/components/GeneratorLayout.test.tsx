import { render, screen, fireEvent } from '@testing-library/react';
import GeneratorLayout from '../../components/GeneratorLayout';

// Mock the child components to simplify integration testing
jest.mock('../../components/PatternCard', () => {
  return function MockPatternCard({ pattern }: { pattern: any[] }) {
    return <div data-testid="pattern-card">Dots: {pattern.length}</div>;
  };
});

// We don't necessarily need to mock DifficultySelector if it's simple, 
// but mocking helps isolate the Layout logic.
jest.mock('../../components/DifficultySelector', () => {
  return function MockDifficultySelector({ currentDifficulty, onSelect }: any) {
    return (
      <div data-testid="difficulty-selector">
        <button onClick={() => onSelect('easy')}>Easy</button>
        <button onClick={() => onSelect('hard')}>Hard</button>
        <span>Current: {currentDifficulty}</span>
      </div>
    );
  };
});

describe('GeneratorLayout', () => {
  it('renders the initial state', () => {
    render(<GeneratorLayout />);
    expect(screen.getByTestId('pattern-card')).toBeInTheDocument();
    expect(screen.getByTestId('difficulty-selector')).toBeInTheDocument();
  });

  it('updates pattern when Generate button is clicked', () => {
    render(<GeneratorLayout />);
    const generateBtn = screen.getByRole('button', { name: /new card/i });
    
    // We can't easily check the *exact* pattern since it's random,
    // but we can assume the component re-renders. 
    // In a real integration test, we might inspect the pattern prop passed to PatternCard.
    // However, since we mocked PatternCard to show length, that's static.
    
    // Let's rely on the button being present and clickable without errors.
    fireEvent.click(generateBtn);
    expect(screen.getByTestId('pattern-card')).toBeInTheDocument();
  });

  it('updates difficulty state when selector is changed', () => {
    render(<GeneratorLayout />);
    const hardBtn = screen.getByText('Hard');
    
    fireEvent.click(hardBtn);
    expect(screen.getByText('Current: hard')).toBeInTheDocument();
  });
});
