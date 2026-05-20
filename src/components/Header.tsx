import { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'VI' | 'EN'>('VI');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'GIỚI THIỆU', href: '#gioi-thieu' },
    { label: 'DỊCH VỤ', href: '#dich-vu' },
    { label: 'NỔI BẬT', href: '#noi-bat' },
    { label: 'LIÊN HỆ', href: '#lien-he' },
  ];

  const toggleLanguage = () => {
    setLang(prev => (prev === 'VI' ? 'EN' : 'VI'));
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md py-4 border-b border-white/5 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          id="logo-link"
          className="font-serif text-xl md:text-2xl font-semibold tracking-widest text-white hover:opacity-80 transition-opacity"
        >
          TAN QUANG
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12" id="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xs font-semibold tracking-widest transition-colors duration-300 relative py-1 ${
                activeSection === item.href.slice(1)
                  ? 'text-white font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300" />
              )}
            </a>
          ))}
        </nav>

        {/* Action Items */}
        <div className="flex items-center space-x-6">
          <button
            onClick={toggleLanguage}
            id="lang-toggle"
            className="flex items-center space-x-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors py-1 cursor-pointer"
            title="Chuyển đổi ngôn ngữ / Switch Language"
          >
            <Globe className="w-4 h-4" />
            <span className="font-mono">{lang}</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            id="mobile-menu-trigger"
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden fixed inset-0 top-[60px] bg-black/98 backdrop-blur-lg z-45 flex flex-col items-center justify-center space-y-8 animate-fade-in"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-semibold tracking-widest text-zinc-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
