import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface LoadingScreenProps {
  onLoaded: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoaded }) => {
  const [phase, setPhase] = useState<'approaching' | 'merged' | 'fading'>('approaching');

  useEffect(() => {
    // 1. Approach for 800ms
    const timer1 = setTimeout(() => {
      setPhase('merged');
    }, 900);

    // 2. Merge pulse for 700ms
    const timer2 = setTimeout(() => {
      setPhase('fading');
    }, 1800);

    // 3. Complete and notify parent
    const timer3 = setTimeout(() => {
      onLoaded();
    }, 2300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onLoaded]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FFF8F0] transition-opacity duration-700 ${
        phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex items-center justify-center w-48 h-32">
        {/* Left Heart (Aditya) */}
        <div
          className={`absolute transition-all duration-700 ease-out text-[#783F50] ${
            phase === 'approaching'
              ? '-translate-x-12 opacity-80 scale-90'
              : 'translate-x-0 opacity-100 scale-110'
          }`}
        >
          <Heart className="w-10 h-10 fill-[#783F50]" />
        </div>

        {/* Right Heart (Shruti) */}
        <div
          className={`absolute transition-all duration-700 ease-out text-[#D99AA8] ${
            phase === 'approaching'
              ? 'translate-x-12 opacity-80 scale-90'
              : 'translate-x-0 opacity-90 scale-125'
          }`}
        >
          <Heart className="w-10 h-10 fill-[#D99AA8]" />
        </div>

        {/* Central burst when merged */}
        {phase === 'merged' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 rounded-full bg-[#F6DDE3]/60 animate-ping" />
            <span className="absolute text-sm text-[#783F50] font-handwriting mt-16 animate-fade-in">
              Aditya & Shruti ♡
            </span>
          </div>
        )}
      </div>

      <p className="font-serif italic text-[#8D746B] text-sm md:text-base tracking-widest mt-6 animate-pulse">
        {phase === 'merged' ? 'It became everything...' : 'Bringing our moments together...'}
      </p>
    </div>
  );
};
