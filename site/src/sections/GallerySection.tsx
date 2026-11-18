import React, { useState } from 'react';
import { Heart, Sparkles, Filter } from 'lucide-react';
import { PhotoMemory } from '../types';

interface GallerySectionProps {
  photos: PhotoMemory[];
  onPhotoClick: (photo: PhotoMemory) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ photos, onPhotoClick }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured' | 'festive' | 'cozy' | 'dates'>('all');

  const filteredPhotos = photos.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return p.featured;
    return p.category === activeFilter;
  });

  return (
    <section id="scrapbook-gallery" className="relative py-20 md:py-32 px-4 max-w-7xl mx-auto">
      {/* Decorative Washi Tape Header */}
      <div className="flex justify-center mb-6">
        <div className="washi-tape px-6 py-1.5 -rotate-1 text-[#783F50] font-handwriting text-xl rounded-sm">
          Scrapbook Volume 1 • Our First Quarter
        </div>
      </div>

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-widest text-[#8D746B] font-semibold mb-2 block">
          Photographic Memories
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#783F50] leading-tight">
          Three months. A million little memories.
        </h2>
        <p className="font-handwriting text-2xl md:text-3xl text-[#8D746B] mt-3">
          Every picture tells a piece of our story ♡
        </p>
        <div className="w-16 h-0.5 bg-[#D99AA8] mx-auto mt-4 rounded-full" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
        <div className="flex items-center gap-1.5 px-3 py-1 text-xs text-[#8D746B] font-medium mr-1 hidden sm:flex">
          <Filter className="w-3.5 h-3.5 text-[#D99AA8]" />
          <span>View:</span>
        </div>
        {[
          { key: 'all', label: `All Memories (${photos.length})` },
          { key: 'featured', label: 'Favourites ♡' },
          { key: 'festive', label: 'Festive & Traditional' },
          { key: 'cozy', label: 'Cozy Moments' },
          { key: 'dates', label: 'Dates & Cafes' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key as typeof activeFilter)}
            className={`px-4 py-2 rounded-full text-xs md:text-sm font-serif transition-all duration-300 select-none ${
              activeFilter === tab.key
                ? 'bg-[#783F50] text-[#FFF8F0] shadow-md scale-105'
                : 'bg-white/80 text-[#8D746B] hover:text-[#783F50] border border-[#F6DDE3]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Scrapbook Polaroid Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 items-start">
        {filteredPhotos.map((photo, index) => {
          // Dynamic slight rotation variation for realistic scrapbook look
          const rotationClasses = [
            '-rotate-2 hover:rotate-0',
            'rotate-1 hover:rotate-0',
            '-rotate-1 hover:rotate-0',
            'rotate-2 hover:rotate-0',
            '-rotate-3 hover:rotate-0',
          ];
          const rotClass = photo.rotation || rotationClasses[index % rotationClasses.length];

          return (
            <div
              key={photo.id}
              onClick={() => onPhotoClick(photo)}
              className={`group relative bg-white p-3.5 pb-6 rounded-lg shadow-polaroid hover:shadow-polaroid-hover transition-all duration-300 transform ${rotClass} hover:scale-105 hover:z-20 cursor-pointer flex flex-col justify-between`}
            >
              {/* Tape Accents */}
              {photo.tapePosition === 'top' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 washi-tape rounded-sm" />
              )}
              {photo.tapePosition === 'top-left' && (
                <div className="absolute -top-3 left-3 w-20 h-5 washi-tape-gold rounded-sm -rotate-6" />
              )}
              {photo.tapePosition === 'top-right' && (
                <div className="absolute -top-3 right-3 w-20 h-5 washi-tape rounded-sm rotate-6" />
              )}
              {photo.tapePosition === 'both' && (
                <>
                  <div className="absolute -top-3 left-2 w-16 h-5 washi-tape rounded-sm -rotate-12" />
                  <div className="absolute -top-3 right-2 w-16 h-5 washi-tape-gold rounded-sm rotate-12" />
                </>
              )}

              {/* Photo Frame */}
              <div className="relative overflow-hidden rounded bg-[#FFF8F0] aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Hover Overlay Hint */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1 rounded-full bg-white/90 text-[#783F50] text-xs font-serif shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#D99AA8]" />
                    View Memory
                  </span>
                </div>
              </div>

              {/* Handwritten Polaroid Caption */}
              <div className="mt-3.5 text-center px-1">
                <p className="font-handwriting text-xl md:text-2xl text-[#783F50] line-clamp-2 leading-tight">
                  {photo.caption}
                </p>
                {photo.featured && (
                  <div className="mt-1 flex items-center justify-center gap-1 text-[11px] text-[#D99AA8]">
                    <Heart className="w-3 h-3 fill-[#D99AA8]" />
                    <span className="font-serif italic">Favourite</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-14">
        <p className="font-handwriting text-2xl text-[#8D746B]">
          (Click any photograph to view the full polaroid and notes ♡)
        </p>
      </div>
    </section>
  );
};
