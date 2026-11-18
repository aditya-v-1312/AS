import React from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Infinity } from 'lucide-react';

interface ForeverSectionProps {
  onPhotoClick: (src: string) => void;
}

export const ForeverSection: React.FC<ForeverSectionProps> = ({ onPhotoClick }) => {
  const triggerCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.8 },
      colors: ['#F6DDE3', '#D99AA8', '#783F50', '#FFF8F0', '#ECC0CC'],
    });
  };

  return (
    <section className="relative py-24 md:py-36 px-4 bg-gradient-to-b from-[#FFF8F0] via-[#F6DDE3]/40 to-[#FFF8F0] overflow-hidden text-center">
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full bg-[#D99AA8]/15 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Floating Infinity Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/80 border border-[#D99AA8]/50 text-[#783F50] shadow-sm mb-6">
          <Infinity className="w-7 h-7 text-[#783F50] animate-pulse" />
        </div>

        {/* Headings */}
        <h3 className="font-serif italic text-2xl md:text-3xl text-[#8D746B] mb-2">
          Three months down...
        </h3>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#783F50] tracking-tight leading-tight mb-6">
          ...a lifetime of memories to go.{' '}
          <span className="inline-block text-[#D99AA8]">♾️</span>
        </h2>

        <p className="font-handwriting text-2xl sm:text-3xl md:text-4xl text-[#944E63] max-w-2xl mx-auto mb-10 leading-relaxed">
          "Out of all the unexpected things life brought me, you are my favourite."
        </p>

        {/* Grand Polaroid Showcase */}
        <div className="my-10 flex justify-center">
          <div
            onClick={() => onPhotoClick('/photos/IMG_3950.jpg')}
            className="group relative bg-white p-4 sm:p-5 pb-8 sm:pb-10 rounded-2xl shadow-polaroid hover:shadow-polaroid-hover transition-all duration-300 max-w-md w-full cursor-pointer transform -rotate-1 hover:rotate-0"
          >
            {/* Washi Tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-36 h-6 washi-tape-gold rounded-sm rotate-1" />

            <div className="overflow-hidden rounded-xl bg-[#FFF8F0] aspect-[4/3] relative">
              <img
                src="/photos/IMG_3950.jpg"
                alt="Aditya and Shruti"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            <div className="mt-4 text-center">
              <p className="font-handwriting text-2xl sm:text-3xl text-[#783F50]">
                Happy 3 Months, My Love ♡
              </p>
              <p className="font-serif italic text-xs sm:text-sm text-[#8D746B] mt-1">
                November 18, 2026 • Aditya & Shruti
              </p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="space-y-4 max-w-xl mx-auto my-10 text-[#783F50]">
          <p className="font-serif text-xl sm:text-2xl font-medium leading-relaxed">
            Here's to us, to our little world, and to everything that's still waiting for us.
          </p>

          <div className="pt-6">
            <span className="font-serif italic text-base text-[#8D746B] block">Forever yours,</span>
            <span className="font-handwriting text-4xl sm:text-5xl font-bold text-[#783F50] mt-2 block">
              Your Aditya ❤️
            </span>
          </div>
        </div>

        {/* Interactive Celebrate Button */}
        <div className="mt-8">
          <button
            onClick={triggerCelebration}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/90 border border-[#D99AA8]/50 hover:bg-[#F6DDE3]/50 text-[#783F50] font-serif text-sm tracking-wide shadow-sm hover:shadow transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-[#D99AA8]" />
            <span>Send a burst of love ♡</span>
            <Heart className="w-4 h-4 fill-[#783F50] text-[#783F50]" />
          </button>
        </div>

        {/* Footer Copyright / Note */}
        <div className="mt-20 pt-8 border-t border-[#D99AA8]/30 text-xs text-[#8D746B] font-serif">
          Crafted with all my heart for Shruti • "It was never planned, but it became everything."
        </div>
      </div>
    </section>
  );
};
