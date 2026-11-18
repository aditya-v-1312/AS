import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

// =========================================================================
// ❤️ OFFICIAL RELATIONSHIP START DATE (Easily Editable)
// Format: YYYY-MM-DDTHH:MM:SS
// Default: Exactly 3 months ago (August 18, 2026)
// You can edit this single line anytime to fine-tune the exact second!
// =========================================================================
export const RELATIONSHIP_START_DATE = "2026-08-18T00:00:00+05:30";

interface TimeUnits {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const RelationshipCounter: React.FC = () => {
  const [timeUnits, setTimeUnits] = useState<TimeUnits>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(RELATIONSHIP_START_DATE).getTime();
      const now = new Date().getTime();
      const diff = Math.max(0, now - start);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeUnits({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const counterCards = [
    { label: 'Days', value: timeUnits.days },
    { label: 'Hours', value: timeUnits.hours },
    { label: 'Minutes', value: timeUnits.minutes },
    { label: 'Seconds', value: timeUnits.seconds },
  ];

  return (
    <div className="relative inline-block max-w-xl mx-auto w-full px-4">
      {/* Decorative Washi Tape atop counter */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 washi-tape rotate-1 z-10 rounded-sm" />

      <div className="bg-white/80 backdrop-blur-md border border-[#D99AA8]/40 rounded-2xl p-5 md:p-6 shadow-polaroid text-center">
        <div className="flex items-center justify-center gap-2 mb-3 text-[#783F50]">
          <Heart className="w-4 h-4 fill-[#D99AA8] text-[#783F50] animate-pulse" />
          <span className="font-handwriting text-2xl md:text-3xl text-[#783F50]">
            Loving you for
          </span>
          <Heart className="w-4 h-4 fill-[#D99AA8] text-[#783F50] animate-pulse" />
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-4 gap-2 md:gap-4 my-2">
          {counterCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#FFF8F0] border border-[#F6DDE3] rounded-xl p-2.5 md:p-3 flex flex-col items-center justify-center shadow-sm hover:border-[#D99AA8] transition-colors"
            >
              <span className="font-serif text-2xl md:text-4xl font-bold text-[#783F50] tabular-nums tracking-tight">
                {String(card.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-wider text-[#8D746B] font-medium mt-1">
                {card.label}
              </span>
            </div>
          ))}
        </div>

        <p className="font-handwriting text-lg md:text-xl text-[#8D746B] mt-3">
          ...and falling deeper with every single heartbeat ♡
        </p>
      </div>
    </div>
  );
};
