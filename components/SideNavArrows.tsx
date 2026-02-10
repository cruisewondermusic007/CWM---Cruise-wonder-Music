import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export const SideNavArrows: React.FC = () => {
  const scroll = (direction: 'up' | 'down') => {
    const scrollAmount = 300;
    window.scrollBy({
      top: direction === 'down' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4">
      <button
        onClick={() => scroll('up')}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white"
        aria-label="Scroll up"
      >
        <ChevronUp size={24} />
      </button>
      <button
        onClick={() => scroll('down')}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </button>
    </div>
  );
};
