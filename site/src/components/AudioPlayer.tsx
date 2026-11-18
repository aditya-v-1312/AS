import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Sparkles } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);
  const audioFileRef = useRef<HTMLAudioElement | null>(null);
  const [usingAudioFile, setUsingAudioFile] = useState(false);

  // Check if custom audio file exists
  useEffect(() => {
    const audio = new Audio('/audio/romantic-song.mp3');
    audio.loop = true;
    audio.preload = 'none';
    audio.addEventListener('canplaythrough', () => {
      audioFileRef.current = audio;
      setUsingAudioFile(true);
    });
    audio.addEventListener('error', () => {
      // Fallback seamlessly to Web Audio procedural soft romantic piano
      setUsingAudioFile(false);
    });

    return () => {
      if (audioFileRef.current) {
        audioFileRef.current.pause();
      }
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  // Web Audio Romantic Procedural Synthesizer (Warm acoustic/kalimba chords)
  const startProceduralRomanticMelody = () => {
    if (!audioContextRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioContextRef.current = new AudioCtx();
    }
    const ctx = audioContextRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // Romantic Chord progression in C Major / A Minor:
    // Cmaj7 -> Am9 -> Fmaj7 -> Gsus4 -> Em7 -> Fadd9
    const chords = [
      [261.63, 329.63, 392.00, 493.88], // Cmaj7: C4, E4, G4, B4
      [220.00, 261.63, 329.63, 392.00], // Am7: A3, C4, E4, G4
      [174.61, 261.63, 329.63, 349.23], // Fmaj7: F3, C4, E4, F4
      [196.00, 261.63, 293.66, 392.00], // Gsus4: G3, C4, D4, G4
      [164.81, 246.94, 329.63, 392.00], // Em7: E3, B3, E4, G4
      [174.61, 220.00, 261.63, 329.63], // Fadd9: F3, A3, C4, E4
    ];

    let chordIdx = 0;
    let noteIdx = 0;

    const playTone = (freq: number, duration: number, gainVal: number = 0.08) => {
      if (!ctx || isMuted) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Soft triangle + lowpass filter gives gentle music-box / acoustic tone
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, ctx.currentTime);
      filter.Q.setValueAtTime(1.5, ctx.currentTime);

      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(gainVal, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + duration);
    };

    // Arpeggiated fingerpicking pattern
    const tick = () => {
      const currentChord = chords[chordIdx];
      const freq = currentChord[noteIdx % currentChord.length];
      
      // Play root note on beat 0
      if (noteIdx === 0) {
        playTone(freq * 0.5, 2.4, 0.12);
      }
      playTone(freq, 1.8, 0.07);

      noteIdx++;
      if (noteIdx >= 8) {
        noteIdx = 0;
        chordIdx = (chordIdx + 1) % chords.length;
      }
    };

    tick();
    timerRef.current = window.setInterval(tick, 450);
  };

  const stopProceduralMelody = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (usingAudioFile && audioFileRef.current) {
        audioFileRef.current.pause();
      } else {
        stopProceduralMelody();
      }
      setIsPlaying(false);
    } else {
      if (usingAudioFile && audioFileRef.current) {
        audioFileRef.current.play().catch(() => {
          startProceduralRomanticMelody();
        });
      } else {
        startProceduralRomanticMelody();
      }
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (usingAudioFile && audioFileRef.current) {
      audioFileRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group">
      {/* Floating Pill */}
      <div 
        onClick={togglePlay}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-[#D99AA8]/40 shadow-polaroid hover:shadow-polaroid-hover transition-all duration-300 cursor-pointer select-none text-[#783F50] active:scale-95"
        role="button"
        aria-label={isPlaying ? 'Pause music' : 'Play romantic music'}
      >
        <div className="relative flex items-center justify-center">
          <div className={`w-8 h-8 rounded-full bg-[#F6DDE3] flex items-center justify-center text-[#783F50] transition-transform duration-700 ${isPlaying ? 'rotate-180 animate-spin' : ''}`}>
            <Music className="w-4 h-4" />
          </div>
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D99AA8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#783F50]"></span>
            </span>
          )}
        </div>

        <div className="flex flex-col text-left">
          <span className="text-xs font-serif font-semibold tracking-wide flex items-center gap-1">
            {isPlaying ? 'Our Melody ♡' : 'Play Music'}
            {isPlaying && <Sparkles className="w-3 h-3 text-[#D99AA8] animate-pulse" />}
          </span>
          <span className="text-[10px] text-[#8D746B] font-handwriting text-base leading-none">
            {isPlaying ? 'soft romantic chords' : 'tap to listen'}
          </span>
        </div>

        {/* Visualizer bars when playing */}
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-4 px-1">
            <span className="w-0.5 bg-[#783F50] h-3 animate-pulse" />
            <span className="w-0.5 bg-[#D99AA8] h-4 animate-bounce" />
            <span className="w-0.5 bg-[#783F50] h-2 animate-pulse" />
          </div>
        )}

        {/* Mute button */}
        {isPlaying && (
          <button 
            onClick={toggleMute} 
            className="p-1 hover:bg-[#F6DDE3]/50 rounded-full transition-colors ml-1 text-[#8D746B] hover:text-[#783F50]"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        )}
      </div>

      {/* Tooltip on hover */}
      {showTooltip && !isPlaying && (
        <div className="absolute bottom-full mb-2 right-0 bg-[#783F50] text-[#FFF8F0] text-xs px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap font-handwriting text-lg animate-fade-in pointer-events-none">
          Click to hear our song, Shruti ♡
        </div>
      )}
    </div>
  );
};
