// Simple synthesized shuffle sound using Web Audio API
// avoiding the need for external assets

let audioContext: AudioContext | null = null;

export function playShuffleSound() {
  if (typeof window === 'undefined') return;

  try {
    if (!audioContext) {
      audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }

    const ctx = audioContext;
    const t = ctx.currentTime;

    // We'll play 3 distinct "slide" sounds to simulate a shuffle
    [0, 0.1, 0.2].forEach((offset, i) => {
      createSlideSound(ctx, t + offset, 0.1 + Math.random() * 0.05);
    });

  } catch (e) {
    console.error("Audio playback failed", e);
  }
}

function createSlideSound(ctx: AudioContext, startTime: number, duration: number) {
  const bufferSize = ctx.sampleRate * duration;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  // White noise
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  // Filter to make it sound more like a plastic slide than static
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(800, startTime);
  filter.frequency.linearRampToValueAtTime(300, startTime + duration);

  // Envelope
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(0.3, startTime + duration * 0.2); // Attack
  gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration); // Decay

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  noise.start(startTime);
  noise.stop(startTime + duration);
}
