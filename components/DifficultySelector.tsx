import React from 'react';
import { Difficulty } from '../lib/patternGenerator';

interface DifficultySelectorProps {
  currentDifficulty: Difficulty;
  onSelect: (difficulty: Difficulty) => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({ currentDifficulty, onSelect }) => {
  const options: Difficulty[] = ['easy', 'medium', 'hard'];

  return (
    <div className="flex bg-gray-200 p-1 rounded-xl w-full max-w-sm mx-auto mb-6">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          aria-pressed={currentDifficulty === option}
          className={`
            flex-1 py-2 text-sm font-bold uppercase tracking-wide rounded-lg transition-all
            ${currentDifficulty === option 
              ? 'bg-white text-gray-800 shadow-md transform scale-100' 
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
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
