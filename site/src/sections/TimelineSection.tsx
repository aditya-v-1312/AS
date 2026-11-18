import React from 'react';
import { Heart } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data/timeline';

interface TimelineSectionProps {
  onPhotoClick: (src: string) => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ onPhotoClick }) => {
  return (
    <section id="our-timeline" className="relative py-20 md:py-32 px-4 max-w-5xl mx-auto">

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
        <span className="text-xs uppercase tracking-widest text-[#8D746B] font-semibold mb-2 block">
          Our Journey
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#783F50] leading-tight">
          Every little moment brought us here.
        </h2>
        <p className="font-handwriting text-2xl md:text-3xl text-[#8D746B] mt-3">
          Seven milestones that shaped our world ♡
        </p>
        <div className="w-16 h-0.5 bg-[#D99AA8] mx-auto mt-4 rounded-full" />
      </div>

      {/* Timeline Central Thread */}
      <div className="relative">
        {/* Glowing Center Line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#D99AA8] via-[#783F50] to-[#D99AA8]" />

        <div className="space-y-12 md:space-y-20">
          {TIMELINE_MILESTONES.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={item.number}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node Indicator */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-[#FFF8F0] border-2 border-[#783F50] flex items-center justify-center shadow-md">
                  <span className="text-xs font-serif font-bold text-[#783F50]">
                    {item.number}
                  </span>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    isEven ? 'md:pl-12' : 'md:pr-12'
                  }`}
                >
                  <div className="bg-white border border-[#D99AA8]/30 rounded-2xl p-6 shadow-polaroid hover:shadow-polaroid-hover transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 rounded-full bg-[#F6DDE3] text-[#783F50] text-[11px] font-serif font-semibold tracking-wide">
                        {item.tag}
                      </span>
                      <Heart className="w-3.5 h-3.5 fill-[#D99AA8] text-[#783F50]" />
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#783F50] leading-tight mb-1">
                      {item.title}
                    </h3>
                    <h4 className="font-handwriting text-xl text-[#8D746B] mb-3">
                      {item.subtitle}
                    </h4>

                    <p className="font-sans text-sm text-[#783F50]/90 leading-relaxed">
                      {item.story}
                    </p>

                    {item.photoSrc && (
                      <div
                        onClick={() => onPhotoClick(item.photoSrc!)}
                        className="mt-4 pt-3 border-t border-[#F6DDE3] flex items-center gap-3 cursor-pointer group/photo"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#FFF8F0] border border-[#D99AA8]/40 shrink-0">
                          <img
                            src={item.photoSrc}
                            alt={item.photoCaption}
                            className="w-full h-full object-cover group-hover/photo:scale-110 transition-transform"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-handwriting text-lg text-[#783F50] group-hover/photo:text-[#944E63]">
                            {item.photoCaption} ♡
                          </span>
                          <span className="text-[10px] text-[#8D746B] uppercase tracking-wider">
                            Click to view memory
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
