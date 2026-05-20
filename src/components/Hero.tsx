import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden px-6"
    >
      {/* Cinematic ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,30,30,0.15)_0%,rgba(0,0,0,1)_80%)] z-0" />
      
      {/* Subtle background overlay grid lines */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] z-0" />

      {/* Hero Content */}
      <div className="text-center z-10 max-w-4xl mx-auto space-y-6 select-none animate-fade-in">
        <h1
          id="hero-name"
          className="font-serif text-5xl sm:text-7xl md:text-9xl font-bold tracking-[0.15em] text-white uppercase translate-y-2 select-text"
          style={{ letterSpacing: '0.12em' }}
        >
          TAN QUANG
        </h1>
        
        <p
          id="hero-subtitle"
          className="font-serif italic text-lg sm:text-2xl md:text-4xl text-zinc-300 font-light tracking-wide duration-700"
        >
          — Videographer - Video Editor —
        </p>
      </div>

      {/* Scroll to Explore indicator */}
      <div
        id="scroll-explorer"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-3 cursor-pointer select-none group focus:outline-none"
        onClick={() => {
          document.getElementById('gioi-thieu')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase font-semibold tracking-[0.3em] text-zinc-500 group-hover:text-white transition-colors duration-300">
          CUỘN ĐỂ KHÁM PHÁ
        </span>
        <ChevronDown className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-y-1 transition-all duration-300" />
      </div>
    </section>
  );
}
