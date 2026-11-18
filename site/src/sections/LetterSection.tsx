import React from 'react';
import { Heart } from 'lucide-react';

interface LetterSectionProps {
  onPhotoClick: (src: string) => void;
}

export const LetterSection: React.FC<LetterSectionProps> = ({ onPhotoClick }) => {
  return (
    <section id="a-letter-for-you" className="relative py-20 md:py-32 px-4 max-w-4xl mx-auto">
      {/* Decorative Washi Tape atop Letter */}
      <div className="flex justify-center mb-6">
        <div className="washi-tape-gold px-8 py-2 -rotate-1 text-[#8D746B] font-handwriting text-xl shadow-sm rounded-sm">
          Handwritten with all my love ♡
        </div>
      </div>

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-widest text-[#8D746B] font-semibold mb-2 block">
          A Personal Note
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#783F50] leading-tight">
          To my favourite girl...
        </h2>
        <div className="w-16 h-0.5 bg-[#D99AA8] mx-auto mt-4 rounded-full" />
      </div>

      {/* Parchment / Letter Envelope Container */}
      <div className="relative bg-[#FFFDF9] border border-[#D99AA8]/40 rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-14 shadow-letter overflow-hidden">
        {/* Vintage Postmark & Stamp in corner */}
        <div className="absolute top-6 right-6 flex items-center gap-3">
          {/* Postmark stamp */}
          <div className="hidden sm:flex flex-col items-center justify-center w-16 h-16 rounded-full border border-dashed border-[#8D746B]/60 text-[#8D746B] p-1 text-[9px] uppercase tracking-tighter text-center rotate-6 select-none">
            <span>Special Delivery</span>
            <span className="font-bold">18 AUG - 18 NOV</span>
            <span>With Love</span>
          </div>
          {/* Postage Stamp */}
          <div className="w-12 h-14 bg-[#F6DDE3] border-2 border-dashed border-[#D99AA8] rounded flex flex-col items-center justify-center p-1 rotate-3 shadow-sm select-none">
            <Heart className="w-5 h-5 fill-[#783F50] text-[#783F50]" />
            <span className="text-[8px] font-serif font-bold text-[#783F50] mt-1">3 MONTHS</span>
          </div>
        </div>

        {/* Paper Tape */}
        <div className="absolute -top-3 left-10 w-28 h-6 washi-tape rounded-sm rotate-2" />

        {/* Pinned Polaroid inside the letter */}
        <div className="float-none sm:float-right sm:ml-8 mb-6 sm:mb-4 flex justify-center">
          <div
            onClick={() => onPhotoClick('/photos/IMG_3259.jpg')}
            className="group relative bg-white p-3 pb-5 rounded shadow-polaroid hover:shadow-polaroid-hover transition-all duration-300 rotate-2 hover:rotate-0 cursor-pointer w-52 max-w-full"
          >
            {/* Paper clip */}
            <div className="absolute -top-4 right-6 w-4 h-8 border-2 border-[#8D746B] rounded-full z-10 opacity-70" />
            <div className="overflow-hidden rounded aspect-square bg-[#FFF8F0]">
              <img
                src="/photos/IMG_3259.jpg"
                alt="Aditya and Shruti with flowers in hair"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="font-handwriting text-center text-lg text-[#783F50] mt-2">
              My favorite humans ♡
            </p>
          </div>
        </div>

        {/* Letter Body */}
        <div className="font-handwriting text-2xl sm:text-3xl text-[#783F50] leading-relaxed sm:leading-loose space-y-6">
          <p className="font-bold text-3xl sm:text-4xl text-[#783F50]">
            Happy three months, my love. ❤️
          </p>

          <p>
            Yaar, honestly, it's still crazy to think about how unexpectedly everything happened. Three months ago, I couldn't have imagined that we'd end up here, that the girl who randomly became such an important part of my life would eventually become my favourite person.
          </p>

          <p>
            From our random conversations to getting attached to each other, from our stupid fights and misunderstandings to all those cute little moments, we've already experienced so much together.
          </p>

          <p className="font-bold text-[#944E63]">
            And through everything, one thing I know for sure is that I love what we have.
          </p>

          <p>
            I love how you care for me, how you make me smile, how you put up with my nonsense and how you make even the most ordinary days feel special.
          </p>

          <p>
            I know we're not perfect, and I don't expect us to be. I just want us to keep understanding each other, growing together, making mistakes, fixing things and choosing each other every single day.
          </p>

          <p>
            You came into my life so unexpectedly, but now I genuinely can't imagine my days without you.
          </p>

          <p className="italic text-[#944E63]">
            If someone asked me what my favourite unexpected thing in life is, the answer would always be you.
          </p>

          <p>
            Three months down, and I hope this is just the beginning of a lifetime of memories.
          </p>

          <p>
            Happy three months to us, betudiii.
          </p>

          <p className="text-3xl sm:text-4xl font-bold text-[#783F50]">
            I love you theeeee mosttttt babyyyy.
          </p>

          <p className="text-2xl sm:text-3xl font-bold text-[#944E63]">
            Always and forever. ❤️
          </p>
        </div>

        {/* Letter Sign-off */}
        <div className="mt-10 pt-6 border-t border-[#D99AA8]/30 flex flex-col items-end">
          <div className="text-right">
            <span className="font-serif italic text-base text-[#8D746B] block">Forever yours,</span>
            <span className="font-handwriting text-3xl sm:text-4xl font-bold text-[#783F50] mt-1 block">
              Aditya ♡
            </span>
          </div>

          {/* Wax Seal Graphic */}
          <div className="mt-4 flex items-center justify-center w-12 h-12 rounded-full bg-[#783F50] text-[#FFF8F0] shadow-md border-2 border-[#D99AA8]/60">
            <span className="font-serif font-bold text-sm">A&S</span>
          </div>
        </div>
      </div>
    </section>
  );
};
