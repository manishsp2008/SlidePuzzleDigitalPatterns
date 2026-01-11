import { render, screen, fireEvent } from '@testing-library/react';
import DifficultySelector from '../../components/DifficultySelector';
import { Difficulty } from '../../lib/patternGenerator';

describe('DifficultySelector', () => {
  it('renders all difficulty options', () => {
    render(<DifficultySelector currentDifficulty="easy" onSelect={() => {}} />);
    expect(screen.getByText(/Easy/i)).toBeInTheDocument();
    expect(screen.getByText(/Medium/i)).toBeInTheDocument();
    expect(screen.getByText(/Hard/i)).toBeInTheDocument();
  });

  it('triggers onSelect when a difficulty is clicked', () => {
    const handleSelect = jest.fn();
    render(<DifficultySelector currentDifficulty="easy" onSelect={handleSelect} />);
    
    fireEvent.click(screen.getByText(/Hard/i));
    expect(handleSelect).toHaveBeenCalledWith('hard');
  });

  it('highlights the selected difficulty', () => {
    render(<DifficultySelector currentDifficulty="medium" onSelect={() => {}} />);
    const mediumButton = screen.getByText(/Medium/i);
    // Assuming we use some active class or attribute. 
    // For now, let's check if it has a specific aria-pressed or similar, 
    // but typically class checking is brittle. 
    // We'll check if it's disabled or has a specific styling class if we knew it.
    // Better: use aria-pressed="true"
    expect(mediumButton).toHaveAttribute('aria-pressed', 'true');
  });
});
