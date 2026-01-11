import React from 'react';
import { Difficulty } from '../lib/patternGenerator';

interface DifficultySelectorProps {
  currentDifficulty: Difficulty;
  onSelect: (difficulty: Difficulty) => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({ currentDifficulty, onSelect }) => {
  const options: Difficulty[] = ['easy', 'medium', 'hard'];

  return (
    <div 
      className="flex p-1 rounded-xl w-full max-w-sm mx-auto mb-6"
      style={{ backgroundColor: '#e2e8f0' }}
    >
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          aria-pressed={currentDifficulty === option}
          style={{ 
            backgroundColor: currentDifficulty === option ? '#ffffff' : 'transparent',
            color: currentDifficulty === option ? '#1e293b' : '#64748b'
          }}
          className={`
            flex-1 py-2 text-sm font-bold uppercase tracking-wide rounded-lg transition-all
            ${currentDifficulty === option 
              ? 'shadow-md transform scale-100' 
              : 'hover:text-gray-700 hover:bg-white/20'
            }
            cursor-pointer
          `}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default DifficultySelector;
