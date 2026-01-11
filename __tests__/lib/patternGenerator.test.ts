import { generatePattern, Color, Difficulty } from '../../lib/patternGenerator';

describe('PatternGenerator', () => {
  it('should generate a pattern with exactly 16 items', () => {
    const pattern = generatePattern('medium');
    expect(pattern).toHaveLength(16);
  });

  it('should generate a pattern with exactly 4 of each color', () => {
    const pattern = generatePattern('medium');
    
    const counts = pattern.reduce((acc, color) => {
      acc[color] = (acc[color] || 0) + 1;
      return acc;
    }, {} as Record<Color, number>);

    expect(counts['red']).toBe(4);
    expect(counts['yellow']).toBe(4);
    expect(counts['green']).toBe(4);
    expect(counts['blue']).toBe(4);
  });

  it('should produce different clustering for easy vs hard', () => {
    // Helper to calculate clustering score (number of adjacent same-color pairs)
    const getClusteringScore = (pattern: Color[]) => {
      let score = 0;
      // Check horizontal neighbors
      for (let i = 0; i < 16; i++) {
        if (i % 4 < 3 && pattern[i] === pattern[i + 1]) score++;
      }
      // Check vertical neighbors
      for (let i = 0; i < 12; i++) {
        if (pattern[i] === pattern[i + 4]) score++;
      }
      return score;
    };

    // Generate multiple samples to average out randomness
    let easyScoreSum = 0;
    let hardScoreSum = 0;
    const samples = 20;

    for (let i = 0; i < samples; i++) {
      easyScoreSum += getClusteringScore(generatePattern('easy'));
      hardScoreSum += getClusteringScore(generatePattern('hard'));
    }

    const avgEasy = easyScoreSum / samples;
    const avgHard = hardScoreSum / samples;

    // Easy mode should generally have higher clustering (more grouped colors)
    // Hard mode should have lower clustering (more scattered)
    expect(avgEasy).toBeGreaterThan(avgHard);
  });
});
