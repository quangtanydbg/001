export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="app-footer"
      className="bg-black py-16 px-6 md:px-12 border-t border-white/5 relative z-10 text-center"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Large Branding Logo Type */}
        <div className="space-y-2">
          <a
            href="#home"
            className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.2em] text-white hover:text-zinc-200 transition-colors uppercase"
          >
            TANQUANG MEDIA
          </a>
        </div>

        {/* Links Column */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] font-mono uppercase tracking-widest text-zinc-500">
          <a href="#privacy-policy" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#terms-of-service" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Separator */}
        <div className="w-12 h-[1px] bg-white/10 mx-auto" />

        {/* Copyright claims */}
        <p className="text-[10px] font-mono tracking-widest text-zinc-600 block">
          © {currentYear} TANQUANG MEDIA. ALL RIGHTS RESERVED.
        </p>

      </div>
    </footer>
  );
}
