export type Color = 'red' | 'yellow' | 'green' | 'blue';
export type Difficulty = 'easy' | 'medium' | 'hard';

const BASE_TILES: Color[] = [
  ...Array(4).fill('red'),
  ...Array(4).fill('yellow'),
  ...Array(4).fill('green'),
  ...Array(4).fill('blue'),
];

// Fisher-Yates shuffle
function shuffle<T>(array: T[]): T[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export function generatePattern(difficulty: Difficulty): Color[] {
  if (difficulty === 'easy') {
    // Start sorted-ish to ensure clustering
    // But perfect sorting (RRRRYYYY...) is boring. 
    // Let's group them by chunks but maybe randomize the order of chunks?
    // Or just start sorted and swap a few.
    const sorted = [...BASE_TILES];
    
    // Perform a few random swaps (e.g. 3-5) to create a solvable but simple pattern
    const swaps = 5;
    for (let k = 0; k < swaps; k++) {
      const i = Math.floor(Math.random() * 16);
      const j = Math.floor(Math.random() * 16);
      [sorted[i], sorted[j]] = [sorted[j], sorted[i]];
    }
    return sorted;
  }
  
  if (difficulty === 'medium') {
    // Standard random shuffle
    return shuffle(BASE_TILES);
  }

  if (difficulty === 'hard') {
    // For hard, we want maximum scattering (low clustering).
    // We can generate candidates and pick the one with lowest clustering score.
    let bestCandidate = shuffle(BASE_TILES);
    let minScore = Infinity;

    // Try 10 times to find a scattered pattern
    for (let attempt = 0; attempt < 10; attempt++) {
      const candidate = shuffle(BASE_TILES);
      const score = calculateClusteringScore(candidate);
      if (score < minScore) {
        minScore = score;
        bestCandidate = candidate;
      }
    }
    return bestCandidate;
  }

  return shuffle(BASE_TILES);
}

function calculateClusteringScore(pattern: Color[]): number {
  let score = 0;
  // Horizontal
  for (let i = 0; i < 16; i++) {
    if (i % 4 < 3 && pattern[i] === pattern[i + 1]) score++;
  }
  // Vertical
  for (let i = 0; i < 12; i++) {
    if (pattern[i] === pattern[i + 4]) score++;
  }
  return score;
}
