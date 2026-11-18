import React, { useState } from 'react';
import { ALL_PHOTOS } from './data/memories';
import { PhotoMemory } from './types';
import { LoadingScreen } from './components/LoadingScreen';
import { HeartCursor } from './components/HeartCursor';
import { AudioPlayer } from './components/AudioPlayer';
import { BackToTop } from './components/BackToTop';
import { Lightbox } from './components/Lightbox';
import { HeroSection } from './sections/HeroSection';
import { StorySection } from './sections/StorySection';
import { GallerySection } from './sections/GallerySection';
import { LetterSection } from './sections/LetterSection';
import { LittleThingsSection } from './sections/LittleThingsSection';
import { EnvelopeSection } from './sections/EnvelopeSection';
import { ForeverSection } from './sections/ForeverSection';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activePhoto, setActivePhoto] = useState<PhotoMemory | null>(null);

  const handleOpenSurprise = () => {
    const storyElem = document.getElementById('our-story');
    if (storyElem) {
      storyElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePhotoSrcClick = (src: string) => {
    const found = ALL_PHOTOS.find((p) => p.src === src);
    if (found) {
      setActivePhoto(found);
    } else {
      // Create fallback PhotoMemory for lightbox
      setActivePhoto({
        id: 'lightbox-temp',
        src,
        title: 'Us ♡',
        caption: 'A precious moment of us',
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-paper font-sans selection:bg-[#F6DDE3] selection:text-[#783F50]">
      {/* 1. Loading Screen */}
      {isLoading && <LoadingScreen onLoaded={() => setIsLoading(false)} />}

      {/* 2. Delicate Heart Cursor on Desktop */}
      <HeartCursor />

      {/* 3. Floating Romantic Audio Player */}
      <AudioPlayer />

      {/* 4. Back To Top Button */}
      <BackToTop />

      {/* 5. Main Sections */}
      <main className="relative z-10">
        {/* Section 1: The First Impression */}
        <HeroSection onOpenSurprise={handleOpenSurprise} />

        {/* Section 2: Our Story */}
        <StorySection onPhotoClick={handlePhotoSrcClick} />

        {/* Section 3: Our First Three Months (Interactive Scrapbook Gallery) */}
        <GallerySection
          photos={ALL_PHOTOS}
          onPhotoClick={(photo) => setActivePhoto(photo)}
        />

        {/* Section 4: A Letter for My Girl */}
        <LetterSection onPhotoClick={handlePhotoSrcClick} />

        {/* Section 5: Little Things I Love About You */}
        <LittleThingsSection onPhotoClick={handlePhotoSrcClick} />

        {/* Section 6: The Little Envelope Surprise */}
        <EnvelopeSection />

        {/* Section 8: Our Little Forever */}
        <ForeverSection onPhotoClick={handlePhotoSrcClick} />
      </main>

      {/* 6. Interactive Lightbox Modal */}
      <Lightbox
        photo={activePhoto}
        photos={ALL_PHOTOS}
        onClose={() => setActivePhoto(null)}
        onNavigate={(photo) => setActivePhoto(photo)}
      />
    </div>
  );
};

export default App;
