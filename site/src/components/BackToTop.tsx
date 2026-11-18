import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-[#D99AA8]/40 shadow-polaroid hover:shadow-polaroid-hover hover:-translate-y-1 transition-all duration-300 text-[#783F50] group select-none active:scale-95"
      aria-label="Scroll back to top"
    >
      <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
      <span className="text-xs font-serif font-medium hidden sm:inline">Top</span>
      <Heart className="w-3.5 h-3.5 fill-[#D99AA8] text-[#783F50]" />
    </button>
  );
};
