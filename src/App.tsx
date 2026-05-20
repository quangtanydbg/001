import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import VideoModal from './components/VideoModal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { WorkItem } from './types';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<WorkItem | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  // Interactive Scrollspy Intersection Observer
  useEffect(() => {
    const sections = ['home', 'gioi-thieu', 'dich-vu', 'noi-bat', 'lien-he'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger initially
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-zinc-100 min-h-screen font-sans selection:bg-white selection:text-black">
      {/* Top sticky Navigation */}
      <Header activeSection={activeSection} />

      {/* Hero Home Banner Screen */}
      <Hero />

      {/* About Section Screen */}
      <About />

      {/* Services Section Screen */}
      <Services />

      {/* Creative Portfolio Grid Screen */}
      <Portfolio onSelectVideo={(item) => setSelectedVideo(item)} />

      {/* Interactive Contact & Inbox Screen */}
      <Contact />

      {/* Footnote Row */}
      <Footer />

      {/* Absolute Overlays: Cinematic modal video player */}
      {selectedVideo && (
        <VideoModal
          item={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}
