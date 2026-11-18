import React, { useState } from 'react';
import { Heart, Sparkles, Sun, Smile, Crown, Home, Infinity, MessageCircleHeart, HeartHandshake } from 'lucide-react';
import { LITTLE_THINGS } from '../data/littleThings';
import { LoveReason } from '../types';

interface LittleThingsSectionProps {
  onPhotoClick: (src: string) => void;
}

export const LittleThingsSection: React.FC<LittleThingsSectionProps> = ({ onPhotoClick }) => {
  const [revealedIds, setRevealedIds] = useState<number[]>([1, 2, 4]); // Start with a few peeked

  const toggleReveal = (id: number) => {
    setRevealedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#783F50]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#783F50]" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-[#783F50]" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-[#783F50]" />;
      case 'MessageCircleHeart':
        return <MessageCircleHeart className="w-5 h-5 text-[#783F50]" />;
      case 'Crown':
        return <Crown className="w-5 h-5 text-[#783F50]" />;
      case 'HandHeart':
      case 'Infinity':
        return <Infinity className="w-5 h-5 text-[#783F50]" />;
      case 'Home':
        return <Home className="w-5 h-5 text-[#783F50]" />;
      default:
        return <Heart className="w-5 h-5 text-[#783F50]" />;
    }
  };

  return (
    <section id="little-things" className="relative py-20 md:py-32 px-4 max-w-6xl mx-auto">
      {/* Decorative Washi Tape Header */}
      <div className="flex justify-center mb-6">
        <div className="washi-tape px-6 py-1.5 rotate-1 text-[#783F50] font-handwriting text-xl rounded-sm">
          9 Reasons My Heart Chose You
        </div>
      </div>

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-widest text-[#8D746B] font-semibold mb-2 block">
          Endless Affection
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#783F50] leading-tight">
          It's the little things, Shruti.
        </h2>
        <p className="font-handwriting text-2xl md:text-3xl text-[#8D746B] mt-3">
          (Tap each card to reveal what my heart whispers ♡)
        </p>
        <div className="w-16 h-0.5 bg-[#D99AA8] mx-auto mt-4 rounded-full" />
      </div>

      {/* Interactive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {LITTLE_THINGS.map((item: LoveReason) => {
          const isRevealed = revealedIds.includes(item.id);

          return (
            <div
              key={item.id}
              onClick={() => toggleReveal(item.id)}
              className={`group relative bg-white border border-[#D99AA8]/30 rounded-2xl p-6 shadow-polaroid hover:shadow-polaroid-hover transition-all duration-300 cursor-pointer transform ${item.rotation} hover:rotate-0 hover:-translate-y-1 select-none flex flex-col justify-between`}
            >
              {/* Card Tape on Top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-4 washi-tape rounded-sm" />

              <div>
                {/* Header with Icon & Counter */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#F6DDE3] flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-serif font-bold text-[#8D746B]/60">
                    #{item.id}
                  </span>
                </div>

                {/* Main Heading */}
                <h3 className="font-serif text-xl font-bold text-[#783F50] leading-snug mb-3">
                  {item.title}
                </h3>

                {/* Reveal Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isRevealed ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-sans text-sm text-[#783F50]/90 leading-relaxed pt-2 border-t border-[#F6DDE3]">
                    {item.description}
                  </p>
                  {item.photoSrc && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onPhotoClick(item.photoSrc!);
                      }}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#944E63] font-handwriting text-lg hover:underline"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#D99AA8]" />
                      See our memory for this ♡
                    </button>
                  )}
                </div>
              </div>

              {/* Reveal Prompt Button */}
              <div className="mt-4 pt-3 flex items-center justify-between text-xs text-[#8D746B]">
                <span className="font-handwriting text-lg text-[#944E63]">
                  {isRevealed ? 'Tap to fold' : 'Tap to uncover ♡'}
                </span>
                <Heart
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isRevealed
                      ? 'fill-[#783F50] text-[#783F50] scale-110'
                      : 'text-[#D99AA8] group-hover:scale-110'
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
