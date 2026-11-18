import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { PhotoMemory } from '../types';

interface LightboxProps {
  photo: PhotoMemory | null;
  photos: PhotoMemory[];
  onClose: () => void;
  onNavigate: (photo: PhotoMemory) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photo,
  photos,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [photo]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % photos.length;
    onNavigate(photos[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(photos[prevIdx]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Lightbox Modal Content */}
      <div
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 md:-right-2 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Polaroid Lightbox Frame */}
        <div className="bg-white p-3 md:p-5 pb-5 md:pb-7 rounded-lg shadow-2xl max-w-2xl w-full flex flex-col items-center animate-scale-up">
          <div className="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded bg-[#FFF8F0]">
            <img
              src={photo.src}
              alt={photo.caption}
              className="max-h-[68vh] w-auto max-w-full object-contain rounded select-none"
            />
          </div>

          {/* Polaroid Handwritten Caption */}
          <div className="mt-4 text-center px-4 w-full">
            <h3 className="font-handwriting text-2xl md:text-3xl text-[#783F50] flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 fill-[#D99AA8] text-[#783F50] inline" />
              {photo.caption}
              <Heart className="w-4 h-4 fill-[#D99AA8] text-[#783F50] inline" />
            </h3>
            {photo.note && (
              <p className="font-serif italic text-xs md:text-sm text-[#8D746B] mt-1.5 max-w-md mx-auto">
                "{photo.note}"
              </p>
            )}
            <span className="text-[11px] text-[#8D746B]/60 font-sans tracking-widest uppercase mt-2 block">
              Memory {currentIndex + 1} of {photos.length}
            </span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:-left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/30 hover:bg-white/60 text-white md:text-[#783F50] md:bg-white/90 shadow-lg transition-all"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 md:-right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/30 hover:bg-white/60 text-white md:text-[#783F50] md:bg-white/90 shadow-lg transition-all"
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
