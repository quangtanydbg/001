import { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data';
import { WorkItem, CategoryType } from '../types';
import { Play, ArrowRight, Eye } from 'lucide-react';

interface PortfolioProps {
  onSelectVideo: (item: WorkItem) => void;
}

export default function Portfolio({ onSelectVideo }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('TẤT CẢ');
  const [visibleCount, setVisibleCount] = useState(12); // Default to gorgeous 12, expand to 19

  const categories: CategoryType[] = [
    'TẤT CẢ',
    'TVC',
    'WEDDING FILM',
    'EVENT FILM',
    'YOUTUBE',
    'REEL - TIKTOK',
  ];

  // Filter items based on active category
  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (selectedCategory === 'TẤT CẢ') return true;
    return item.category === selectedCategory;
  });

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = filteredItems.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, filteredItems.length));
  };

  return (
    <section
      id="noi-bat"
      className="py-24 md:py-36 bg-black border-t border-white/5 px-6 md:px-12 relative"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title and Categories Navigation Row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-4 border-b border-white/5">
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-zinc-500 uppercase block">
              FEATURED CREATIONS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white uppercase tracking-tight">
              NỔI BẬT
            </h2>
          </div>

          {/* Scrolling category list */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-3 lg:pb-0 scrollbar-none scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(12); // Reset to 12 upon filter change
                }}
                className={`px-4 py-2 text-[10px] md:text-xs font-semibold tracking-widest uppercase rounded-full whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-black font-bold'
                    : 'bg-zinc-950 text-zinc-400 border border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grids */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4" id="portfolio-grid">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onSelectVideo(item)}
              id={`portfolio-item-${item.id}`}
              className="group relative aspect-[4/3] bg-zinc-900 rounded-sm overflow-hidden border border-white/5 cursor-pointer shadow-lg select-none hover:border-white/20 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {/* Media Image */}
              <img
                src={item.thumbnail}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Black Gradient Vignette Overlays for subtitles readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 opacity-80 group-hover:opacity-95 transition-opacity duration-500 z-10" />

              {/* Cinematic text overlays matching the look */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
                
                {/* Top header - hidden on default, visible on hover */}
                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-400 bg-black/40 px-2 py-0.5 rounded-sm">
                    {item.year}
                  </span>
                  <div className="w-7 h-7 bg-white text-black rounded-full flex items-center justify-center transform translate-y-[-5px] group-hover:translate-y-0 transition-transform duration-300">
                    <Play className="w-3.5 h-3.5 fill-black pl-0.5" />
                  </div>
                </div>

                {/* Bottom title - prominent text matching screens in image */}
                <div className="space-y-2 mt-auto">
                  <span className="text-[10px] sm:text-xs font-mono tracking-widest text-zinc-400 uppercase block">
                    {item.category}
                  </span>
                  
                  {/* Real visual block representing the title */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight line-clamp-1 group-hover:text-zinc-200 transition-colors">
                      {item.title}
                    </h3>
                    <span className="font-mono text-[11px] text-zinc-500 pl-2 shrink-0">
                      {item.duration}
                    </span>
                  </div>
                </div>

              </div>

              {/* Hover highlight halo line */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-sm pointer-events-none z-30 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Load More Button matching style */}
        {hasMore && (
          <div className="flex justify-center pt-10" id="portfolio-load-more">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-white uppercase py-3 px-8 bg-zinc-950 border border-white/10 rounded-sm hover:border-white/40 hover:bg-[#090b0c] transition-all duration-300 cursor-pointer group"
            >
              <span>XEM THÊM</span>
              <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
