import { useState } from 'react';
import { SERVICES } from '../data';
import { ArrowUpRight, Check } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section
      id="dich-vu"
      className="py-24 md:py-36 bg-black border-t border-white/5 px-6 md:px-12 relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="space-y-4" id="services-header">
          <span className="text-xs font-semibold tracking-[0.25em] text-zinc-500 uppercase block">
            CORE SERVICES
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white italic">
            Tôi làm gì
          </h2>
          <p className="text-zinc-500 text-xs sm:text-sm font-sans tracking-wider lowercase">
            Let's create the unforgettable together
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid">
          {SERVICES.map((service) => {
            const isSelected = selectedService === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(isSelected ? null : service.id)}
                className={`relative bg-zinc-950 border transition-all duration-500 rounded-sm p-8 flex flex-col justify-between cursor-pointer group select-none min-h-[220px] ${
                  isSelected
                    ? 'border-white bg-[#0f1111]'
                    : 'border-white/10 hover:border-white/30 hover:bg-[#070808]'
                }`}
                title="Click để xem chi tiết hạng mục"
              >
                {/* Number Index */}
                <div className="absolute top-6 right-8 text-3xl font-serif text-zinc-800 group-hover:text-zinc-650 transition-colors">
                  {service.id}
                </div>

                {/* Title & Body */}
                <div className="space-y-4 max-w-[80%] pr-4 pt-4">
                  <h3 className="font-sans text-lg sm:text-xl font-medium text-white group-hover:text-zinc-300 transition-colors">
                    {service.id === "05" ? "Tiktok / Youtube" : service.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Bar: Action Indicator / Expandable contents list */}
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-[#888888]">
                    {isSelected ? "ĐANG MỞ CHI TIẾT" : "XEM CHI TIẾT"}
                  </span>
                  
                  <div className={`w-8 h-8 flex items-center justify-center border rounded-sm transition-all duration-300 ${
                    isSelected 
                      ? 'border-white bg-white text-black' 
                      : 'border-white/20 text-zinc-400 group-hover:border-white group-hover:text-white'
                  }`}>
                    <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isSelected ? 'rotate-90' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />
                  </div>
                </div>

                {/* Collapsible Details list if selected */}
                {isSelected && (
                  <div className="mt-6 pt-6 border-t border-white/10 space-y-3 animate-fade-in-up">
                    <p className="text-[11px] font-mono text-zinc-400 tracking-wider">HẠNG MỤC CUNG CẤP:</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
