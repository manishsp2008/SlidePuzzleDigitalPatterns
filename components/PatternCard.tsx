import React from 'react';
import { Color } from '../lib/patternGenerator';

interface PatternCardProps {
  pattern: Color[];
}

const colorMap: Record<Color, string> = {
  red: 'bg-red-500 shadow-red-700',
  yellow: 'bg-yellow-400 shadow-yellow-600',
  green: 'bg-green-500 shadow-green-700',
  blue: 'bg-blue-500 shadow-blue-700',
};

const PatternCard: React.FC<PatternCardProps> = ({ pattern }) => {
  return (
    <div 
      className="p-4 md:p-8 rounded-2xl shadow-xl max-w-xs md:max-w-md w-full mx-auto border-4 flex flex-col items-center relative overflow-hidden transition-all duration-300"
      style={{ backgroundColor: '#ffffff', borderColor: '#f1f5f9' }}
    >
      
      {/* 4x4 Grid Container */}
      <div className="grid grid-cols-4 gap-3 md:gap-5 relative z-10 mt-4 md:mt-8 mb-4 md:mb-8">
        
        {/* Vertical Track Lines - Perfectly aligned behind each column */}
        <div className="absolute inset-0 -z-10 grid grid-cols-4 gap-3 md:gap-5 pointer-events-none">
          <div className="flex justify-center h-full"><div className="w-1 md:w-1.5 h-full border-x" style={{ backgroundColor: '#f8fafc', borderColor: '#f1f5f9' }} /></div>
          <div className="flex justify-center h-full"><div className="w-1 md:w-1.5 h-full border-x" style={{ backgroundColor: '#f8fafc', borderColor: '#f1f5f9' }} /></div>
          <div className="flex justify-center h-full"><div className="w-1 md:w-1.5 h-full border-x" style={{ backgroundColor: '#f8fafc', borderColor: '#f1f5f9' }} /></div>
          <div className="flex justify-center h-full"><div className="w-1 md:w-1.5 h-full border-x" style={{ backgroundColor: '#f8fafc', borderColor: '#f1f5f9' }} /></div>
        </div>

        {pattern.map((color, index) => (
          <div
            key={index}
            data-testid="pattern-dot"
            className={`w-10 h-10 md:w-14 md:h-14 rounded-full ${colorMap[color]} shadow-[inset_0_-4px_4px_rgba(0,0,0,0.2)] border-2 border-white/20 z-10 transition-all duration-300`}
          />
        ))}
      </div>
      
      <div className="mt-auto mb-2 md:mb-4">
        <span className="text-slate-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">
          Match This Pattern
        </span>
      </div>
    </div>
  );
};

export default PatternCard;