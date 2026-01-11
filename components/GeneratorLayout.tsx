'use client';

import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import PatternCard from './PatternCard';
import DifficultySelector from './DifficultySelector';
import { generatePattern, Difficulty, Color } from '../lib/patternGenerator';
import { playShuffleSound } from '../lib/soundUtils';

const GeneratorLayout: React.FC = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [pattern, setPattern] = useState<Color[] | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Generate initial pattern on client mount only
  React.useEffect(() => {
    setPattern(generatePattern('easy'));
  }, []);

  const handleGenerate = () => {
    playShuffleSound();
    setIsAnimating(true);
    // Brief animation delay for effect
    setTimeout(() => {
      setPattern(generatePattern(difficulty));
      setIsAnimating(false);
    }, 150);
  };

  const handleDifficultyChange = (newDifficulty: Difficulty) => {
    setDifficulty(newDifficulty);
    // Optionally auto-generate when difficulty changes
    setPattern(generatePattern(newDifficulty));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-10 px-4 md:p-8">
      <div className="w-full max-w-md flex flex-col items-center gap-4 md:gap-8">
        
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">Pattern Match</h1>
          <p className="text-slate-500 text-sm">Slide Puzzle Companion</p>
        </div>

        {/* Controls */}
        <DifficultySelector 
          currentDifficulty={difficulty} 
          onSelect={handleDifficultyChange} 
        />

        {/* Card Display */}
        <div className={`transition-all duration-300 transform ${isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}>
          {pattern ? <PatternCard pattern={pattern} /> : <div className="h-[470px] w-full flex items-center justify-center text-gray-400">Loading...</div>}
        </div>

        {/* Action Button */}
        <button
          onClick={handleGenerate}
          className="mt-8 flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-slate-800 hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          <RefreshCw className={`w-5 h-5 ${isAnimating ? 'animate-spin' : ''}`} />
          New Card
        </button>

      </div>
    </div>
  );
};

export default GeneratorLayout;
