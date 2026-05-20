import { Camera, Film, Award } from 'lucide-react';

export default function About() {
  return (
    <section
      id="gioi-thieu"
      className="py-24 md:py-36 bg-black border-t border-white/5 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Text Info */}
        <div className="lg:col-span-7 space-y-8" id="about-text-column">
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-zinc-500 uppercase block">
              PORTFOLIO PROFILE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
              GIỚI THIỆU
            </h2>
          </div>

          <div className="space-y-6">
            <h3 className="font-sans text-xl sm:text-2xl font-semibold leading-snug text-white tracking-tight">
              XIN CHÀO, TÔI LÀ QUANG TÂN <br />
              <span className="text-zinc-400">
                MỘT VIDEOGRAPHER VỚI HƠN 5 NĂM KINH NGHIỆM QUAY DỰNG VIDEO!
              </span>
            </h3>

            <p className="font-sans text-base md:text-lg text-zinc-300 leading-relaxed font-light">
              <strong>ĐAM MÊ CỦA TÔI LÀ BIẾN NHỮNG Ý TƯỞNG TÁO BẠO THÀNH NHỮNG CÂU CHUYỆN HÌNH ẢNH HẤP DẪN, KHÔNG CHỈ ĐẸP MẮT MÀ CÒN MANG LẠI CẢM GIÁC CHÂN THỰC.</strong>
            </p>

            <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed italic border-l-2 border-white/20 pl-4 py-1">
              "Mình làm đa dạng thể loại như commercial, TVC, wedding, TikTok/Reels và YouTube content. Phong cách mình theo đuổi là tối giản và tập trung vào cảm xúc, giúp mỗi video không chỉ đẹp mà còn có câu chuyện riêng."
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10" id="about-stats">
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-bold text-white block">5+</span>
              <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest block">YEARS EXP</span>
            </div>
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-bold text-white block">200+</span>
              <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest block">PROJECTS</span>
            </div>
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-bold text-white block">98%</span>
              <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest block">SATISFIED</span>
            </div>
          </div>
        </div>

        {/* Right Column: B&W Image Placeholder */}
        <div className="lg:col-span-5 relative group" id="about-image-column">
          <div className="absolute inset-x-0 -top-4 -left-4 w-full h-full border border-white/10 rounded-sm z-0 pointer-events-none transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
          
          <div className="relative z-10 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] bg-zinc-900 rounded-sm overflow-hidden border border-white/5">
            <img
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80"
              alt="Quang Tan Studio"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale contrast-115 brightness-95 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle light effect overlaid */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 z-20" />
            
            <div className="absolute bottom-4 left-4 z-30 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-sm">
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-300">
                QUINCY / HANOI STUDIO
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
