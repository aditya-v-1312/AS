import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, X } from 'lucide-react';

export const EnvelopeSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    if (!isOpen) {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F6DDE3', '#D99AA8', '#783F50', '#FFF8F0'],
      });
    }
    setIsOpen(!isOpen);
  };

  return (
    <section id="envelope-surprise" className="relative py-20 md:py-32 px-4 max-w-4xl mx-auto text-center">
      {/* Decorative Washi Tape Header */}
      <div className="flex justify-center mb-6">
        <div className="washi-tape px-6 py-1.5 -rotate-1 text-[#783F50] font-handwriting text-xl rounded-sm">
          A Secret Keepsake Just For You
        </div>
      </div>

      {/* Section Header */}
      <div className="max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-widest text-[#8D746B] font-semibold mb-2 block">
          Whenever You Need Me
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#783F50] leading-tight">
          Something for whenever you miss me.
        </h2>
        <div className="w-16 h-0.5 bg-[#D99AA8] mx-auto mt-4 rounded-full" />
      </div>

      {/* Envelope Container */}
      <div className="relative max-w-lg mx-auto">
        {!isOpen ? (
          /* Closed Vintage Envelope */
          <div
            onClick={handleOpenEnvelope}
            className="group relative bg-[#FBF0F3] border-2 border-[#D99AA8] rounded-2xl p-8 sm:p-12 shadow-envelope hover:shadow-polaroid-hover transition-all duration-300 transform hover:-translate-y-1 cursor-pointer select-none"
          >
            {/* Top Washi Tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 washi-tape-gold rotate-1 rounded-sm" />

            {/* Vintage Postmark */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] text-[#8D746B] uppercase font-serif tracking-widest border border-dashed border-[#D99AA8] px-2 py-1 rounded">
              <Sparkles className="w-3 h-3 text-[#D99AA8]" />
              <span>To: Betudiii</span>
            </div>

            {/* Big Heart / Wax Seal Icon */}
            <div className="w-20 h-20 mx-auto rounded-full bg-[#783F50] flex items-center justify-center text-[#FFF8F0] shadow-md group-hover:scale-110 transition-transform mb-6">
              <Heart className="w-10 h-10 fill-[#D99AA8] text-[#783F50]" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#783F50] mb-2">
              For Shruti's Eyes Only ♡
            </h3>
            <p className="font-handwriting text-2xl text-[#8D746B] mb-6">
              A gentle embrace tucked inside paper and love.
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleOpenEnvelope();
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#783F50] text-[#FFF8F0] font-serif text-sm font-semibold tracking-wide hover:bg-[#613240] transition-colors shadow-sm"
            >
              <Heart className="w-4 h-4 fill-[#D99AA8]" />
              <span>Open this whenever you need a hug ♡</span>
            </button>
          </div>
        ) : (
          /* Opened Note Revealed */
          <div className="relative bg-[#FFFDF9] border border-[#D99AA8] rounded-3xl p-6 sm:p-10 shadow-2xl animate-fade-in text-left">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#F6DDE3] text-[#783F50] transition-colors"
              aria-label="Fold note back"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Tape Header */}
            <div className="absolute -top-3 left-10 w-28 h-5 washi-tape rounded-sm -rotate-2" />

            <div className="flex items-center gap-2 mb-4 text-[#8D746B]">
              <Sparkles className="w-4 h-4 text-[#D99AA8]" />
              <span className="font-serif italic text-xs uppercase tracking-widest">
                Whenever you miss me
              </span>
            </div>

            <div className="font-handwriting text-2xl sm:text-3xl text-[#783F50] leading-relaxed sm:leading-loose space-y-4">
              <p className="font-bold text-3xl text-[#783F50]">Hey babyyyy,</p>

              <p>
                Just in case you ever forget, there's someone out here who is ridiculously lucky to have you.
              </p>

              <p>
                Even on difficult days, even when things get messy, even when we annoy each other to death, I want you to know that you're loved, appreciated and important to me.
              </p>

              <p className="font-bold text-[#944E63]">
                I hope I always give you reasons to smile.
              </p>

              <p>
                And if I could be anywhere right now, I'd probably choose to be right next to you, annoying you and stealing all your hugs.
              </p>

              <p>I love you, my betudiii.</p>

              <p className="text-3xl font-bold text-[#783F50]">Mwahhhhh. ❤️</p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D99AA8]/30 flex items-center justify-between">
              <span className="font-serif italic text-sm text-[#8D746B]">
                Always in your pocket ♡
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs font-serif text-[#783F50] hover:underline"
              >
                Close & tuck away
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
