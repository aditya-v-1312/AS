import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface StorySectionProps {
  onPhotoClick: (src: string) => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onPhotoClick }) => {
  return (
    <section id="our-story" className="relative py-20 md:py-32 px-4 max-w-6xl mx-auto">
      {/* Decorative Washi Tape atop Section */}
      <div className="flex justify-center mb-8">
        <div className="washi-tape-gold px-8 py-2 rotate-1 text-[#8D746B] font-handwriting text-xl shadow-sm rounded-sm">
          Chapter: How We Happened
        </div>
      </div>

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
        <span className="text-xs uppercase tracking-widest text-[#8D746B] font-semibold mb-2 block">
          Our Beginning
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#783F50] leading-tight">
          Funny how life works, na?
        </h2>
        <div className="w-16 h-0.5 bg-[#D99AA8] mx-auto mt-4 rounded-full" />
      </div>

      {/* Story Chapter 1: The Unexpected Meeting */}
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center mb-20 md:mb-28">
        <div className="md:col-span-7 space-y-6 text-[#783F50] text-base md:text-lg leading-relaxed">
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#783F50] font-sans">
            Sometimes you meet someone at a time when neither of you knows what life has planned.
          </p>
          <p className="font-sans text-[#783F50]/90">
            You start talking, you get closer, you become a part of each other's everyday lives, and before you even realise it, that person becomes someone you never want to lose.
          </p>
          <div className="p-4 bg-[#F6DDE3]/40 border-l-4 border-[#783F50] rounded-r-lg font-handwriting text-2xl text-[#783F50]">
            "That's how we happened."
          </div>
        </div>

        <div className="md:col-span-5 flex justify-center">
          <div
            onClick={() => onPhotoClick('/photos/IMG_0697.jpg')}
            className="group relative bg-white p-3.5 pb-6 rounded-lg shadow-polaroid hover:shadow-polaroid-hover transition-all duration-300 -rotate-2 hover:rotate-0 cursor-pointer max-w-xs w-full"
          >
            {/* Washi Tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-5 washi-tape rounded-sm" />
            
            <div className="overflow-hidden rounded bg-[#FFF8F0] aspect-[4/3]">
              <img
                src="/photos/IMG_0697.jpg"
                alt="Late night snack conversations"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="font-handwriting text-center text-xl text-[#783F50] mt-3">
              Where conversations went on for hours ♡
            </p>
          </div>
        </div>
      </div>

      {/* Story Chapter 2: The Best Turn of Events */}
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center mb-20 md:mb-28">
        <div className="md:col-span-5 flex justify-center order-2 md:order-1">
          <div
            onClick={() => onPhotoClick('/photos/IMG_0649.jpg')}
            className="group relative bg-white p-3.5 pb-6 rounded-lg shadow-polaroid hover:shadow-polaroid-hover transition-all duration-300 rotate-2 hover:rotate-0 cursor-pointer max-w-xs w-full"
          >
            {/* Washi Tape */}
            <div className="absolute -top-3 right-4 w-24 h-5 washi-tape-gold rounded-sm -rotate-3" />
            
            <div className="overflow-hidden rounded bg-[#FFF8F0] aspect-[4/3]">
              <img
                src="/photos/IMG_0649.jpg"
                alt="Sweetest morning smiles"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="font-handwriting text-center text-xl text-[#783F50] mt-3">
              Morning breezes & your sweetest smile
            </p>
          </div>
        </div>

        <div className="md:col-span-7 space-y-6 text-[#783F50] text-base md:text-lg leading-relaxed order-1 md:order-2">
          <p className="font-sans">
            What started as something so unexpected slowly became something I wouldn't trade for anything in the world.
          </p>
          <p className="font-sans text-[#783F50]/90">
            And today, looking back, I'm genuinely glad that life brought us to each other.
          </p>
          <p className="font-sans text-[#783F50]/90">
            Because somewhere between all those conversations, random moments, little fights, endless affection and countless memories, we found something that feels like home.
          </p>
        </div>
      </div>

      {/* Story Chapter 3: Choosing Us, Every Time */}
      <div className="relative bg-white/70 backdrop-blur-sm border border-[#D99AA8]/40 rounded-3xl p-8 md:p-12 shadow-letter max-w-4xl mx-auto text-center">
        {/* Subtle Stamp Decoration */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 border-2 border-dashed border-[#D99AA8] rounded-md px-3 py-1 font-serif text-[11px] uppercase tracking-widest text-[#8D746B] rotate-3">
          True Love • 2026
        </div>

        <Sparkles className="w-6 h-6 text-[#D99AA8] mx-auto mb-4" />

        <div className="space-y-4 max-w-2xl mx-auto font-serif text-xl sm:text-2xl md:text-3xl text-[#783F50] italic leading-relaxed">
          <p>"If I could go back and experience it all again, I'd still choose this story."</p>
          <p className="font-bold text-[#944E63]">"I'd still choose you."</p>
          <p className="not-italic font-handwriting text-3xl sm:text-4xl text-[#783F50]">
            "And I'd choose us, every single time."
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          <Heart className="w-5 h-5 fill-[#783F50] text-[#783F50]" />
          <span className="font-handwriting text-2xl text-[#8D746B]">Aditya & Shruti</span>
          <Heart className="w-5 h-5 fill-[#783F50] text-[#783F50]" />
        </div>
      </div>
    </section>
  );
};
