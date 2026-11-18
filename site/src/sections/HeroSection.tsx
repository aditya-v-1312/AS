import React from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import { RelationshipCounter } from '../components/RelationshipCounter';

interface HeroSectionProps {
  onOpenSurprise: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSurprise }) => {
  const handleOpen = () => {
    // Delicate romantic confetti burst
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#F6DDE3', '#D99AA8', '#783F50', '#FFF8F0', '#E5B7C2'],
      disableForReducedMotion: true,
    });
    onOpenSurprise();
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between px-4 py-12 md:py-16 text-center overflow-hidden bg-[#FFF8F0]">
      {/* Decorative Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Radial Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-[#F6DDE3]/40 to-[#D99AA8]/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#F6DDE3]/30 blur-2xl" />
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#D99AA8]/15 blur-2xl" />

        {/* Floating Stars & Tiny Hearts */}
        <span className="absolute top-16 left-[12%] text-[#D99AA8]/50 animate-float text-xl">✨</span>
        <span className="absolute top-28 right-[15%] text-[#783F50]/40 animate-float-slow text-2xl">♡</span>
        <span className="absolute top-1/2 left-[8%] text-[#D99AA8]/60 animate-float-slow text-lg">♥</span>
        <span className="absolute top-3/4 right-[10%] text-[#783F50]/30 animate-float text-xl">✨</span>
        <span className="absolute bottom-20 left-[18%] text-[#D99AA8]/50 animate-float text-base">♡</span>
      </div>

      {/* Top Small Tag */}
      <div className="relative z-10 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-[#D99AA8]/40 shadow-sm text-xs uppercase tracking-widest text-[#8D746B] font-medium animate-fade-in">
        <Sparkles className="w-3.5 h-3.5 text-[#D99AA8]" />
        <span>Aditya & Shruti • 3-Month Anniversary</span>
        <Sparkles className="w-3.5 h-3.5 text-[#D99AA8]" />
      </div>

      {/* Central Emotional Hero Title */}
      <div className="relative z-10 max-w-3xl mx-auto my-auto py-8">
        <h2 className="font-serif italic text-2xl md:text-3xl text-[#8D746B] font-normal tracking-wide mb-3">
          It was never planned...
        </h2>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#783F50] tracking-tight leading-tight md:leading-tight mb-6">
          ...but it became <br className="hidden sm:inline" />
          <span className="relative inline-block text-[#944E63]">
            everything.
            <span className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-[#D99AA8] ml-2 inline-block animate-heartbeat">
              ♡
            </span>
            {/* Subtle underline curve */}
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#D99AA8]/50" viewBox="0 0 200 12" fill="none">
              <path d="M2 9C50 3 150 3 198 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="font-serif text-lg md:text-2xl text-[#783F50]/90 font-medium mb-3">
          Three months of you, me and everything in between.
        </p>

        <p className="font-handwriting text-2xl md:text-3xl text-[#8D746B] mb-8">
          A little something for my favourite girl.
        </p>

        {/* Live Relationship Counter */}
        <div className="my-6">
          <RelationshipCounter />
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <button
            onClick={handleOpen}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#783F50] hover:bg-[#613240] text-[#FFF8F0] shadow-polaroid hover:shadow-polaroid-hover transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            <Heart className="w-5 h-5 fill-[#D99AA8] text-[#FFF8F0] group-hover:scale-110 transition-transform" />
            <span className="font-serif text-base md:text-lg font-semibold tracking-wide">
              Open your surprise, babyyyy ♡
            </span>
            <Sparkles className="w-4 h-4 text-[#F6DDE3] animate-pulse" />
          </button>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div
        onClick={onOpenSurprise}
        className="relative z-10 flex flex-col items-center gap-1 text-[#8D746B]/70 hover:text-[#783F50] transition-colors cursor-pointer select-none pt-4"
      >
        <span className="font-handwriting text-lg">scroll down to our story</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
