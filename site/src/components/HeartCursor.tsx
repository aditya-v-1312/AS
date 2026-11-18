import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  char: string;
  rotation: number;
}

export const HeartCursor: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    setIsFinePointer(isFine);
    if (!isFine) return;

    let counter = 0;
    let lastTime = 0;
    const heartChars = ['♡', '♥', '✨', '🌸', '♡'];

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      // Throttle creation to every 70ms
      if (now - lastTime < 70) return;
      lastTime = now;

      const newParticle: Particle = {
        id: counter++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 12,
        char: heartChars[Math.floor(Math.random() * heartChars.length)],
        rotation: (Math.random() - 0.5) * 40,
      };

      setParticles((prev) => [...prev.slice(-18), newParticle]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const cleanupInterval = setInterval(() => {
      setParticles((prev) => prev.filter((p) => performance.now() - p.id > 1500));
    }, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanupInterval);
    };
  }, []);

  if (!isFinePointer || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="heart-sparkle select-none text-[#D99AA8]"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            fontSize: `${p.size}px`,
            transform: `rotate(${p.rotation}deg)`,
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
};
