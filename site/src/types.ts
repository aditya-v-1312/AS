export interface PhotoMemory {
  id: string;
  src: string;
  title: string;
  caption: string;
  note?: string;
  rotation?: string; // e.g. '-rotate-2', 'rotate-1'
  tapePosition?: 'top' | 'top-left' | 'top-right' | 'both';
  aspect?: 'portrait' | 'landscape' | 'square';
  featured?: boolean;
  category?: 'candid' | 'festive' | 'dates' | 'cozy';
}

export interface LoveReason {
  id: number;
  title: string;
  description: string;
  icon: string;
  photoSrc?: string;
  rotation: string;
}
