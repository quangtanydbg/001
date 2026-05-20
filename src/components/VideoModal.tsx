import { useEffect, useRef, useState } from 'react';
import { WorkItem } from '../types';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw } from 'lucide-react';

interface VideoModalProps {
  item: WorkItem;
  onClose: () => void;
}

export default function VideoModal({ item, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Auto-play when opened
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Auto play was blocked, user needs to click play
          setIsPlaying(false);
        });
    }

    // Disable background page scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [item]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true));
      }
    }
  };

  const handleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      setCurrentTime(current);
      if (duration > 0) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleScrub = (value: number) => {
    if (videoRef.current && duration > 0) {
      const newTime = (value / 100) * duration;
      videoRef.current.currentTime = newTime;
      setProgress(value);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const formatTime = (timeInSecs: number) => {
    const mins = Math.floor(timeInSecs / 60);
    const secs = Math.floor(timeInSecs % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => setIsPlaying(true));
    }
  };

  return (
    <div
      id="video-player-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4 sm:p-6 md:p-10 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-zinc-950 border border-white/10 rounded-sm overflow-hidden shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          id="modal-close"
          className="absolute top-4 right-4 z-40 bg-black/80 hover:bg-white hover:text-black text-white p-2.5 rounded-sm transition-all duration-300 border border-white/15 cursor-pointer"
          title="Đóng trình phát [Esc]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Container */}
        <div className="relative aspect-video w-full bg-black group-player">
          <video
            ref={videoRef}
            src={item.videoUrl}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            className="w-full h-full object-contain cursor-pointer"
            onClick={handlePlayPause}
            onEnded={() => setIsPlaying(false)}
            playsInline
          />

          {/* Large central play/pause overlay when paused */}
          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none transition-opacity duration-300"
              onClick={handlePlayPause}
            >
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/25 transform scale-100 hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 fill-white translate-x-0.5" />
              </div>
            </div>
          )}

          {/* Custom minimal control bar */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 flex flex-col space-y-3 z-30">
            {/* Scrubber tool */}
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => handleScrub(parseFloat(e.target.value))}
                className="w-full h-1 bg-zinc-800 accent-white rounded-lg cursor-pointer transition-all hover:h-1.5 focus:outline-none"
              />
            </div>

            {/* Buttons row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handlePlayPause}
                  className="text-white hover:text-zinc-400 transition-colors"
                  title={isPlaying ? "Tạm dừng" : "Phát"}
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white" />}
                </button>

                <button
                  onClick={handleRestart}
                  className="text-white hover:text-zinc-400 transition-colors"
                  title="Xem lại từ đầu"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={handleMuteUnmute}
                  className="text-white hover:text-zinc-400 transition-colors pl-2"
                  title={isMuted ? "Bật âm thanh" : "Tắt tiếng"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <div className="text-[11px] font-mono text-zinc-400">
                  <span>{formatTime(currentTime)}</span>
                  <span className="mx-1">/</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-[10px] bg-white/10 text-white border border-white/10 px-2 py-0.5 rounded-sm font-mono uppercase tracking-widest hidden sm:inline-block">
                  {item.category}
                </span>
                
                <button
                  onClick={handleFullscreen}
                  className="text-white hover:text-zinc-400 transition-colors p-1"
                  title="Toàn màn hình"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video metadata overview */}
        <div className="p-6 md:p-8 space-y-6 bg-zinc-950">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                {item.title}
              </h3>
              {item.client && (
                <p className="font-sans text-xs sm:text-sm text-zinc-400">
                  Khách hàng / Nhãn hàng: <span className="text-white font-medium">{item.client}</span>
                </p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right sm:text-right hidden sm:block">
                <span className="text-[10px] text-zinc-500 block uppercase font-mono">DỰ ÁN HIỂN THỊ</span>
                <span className="text-xs text-white font-mono">{item.year}</span>
              </div>
              <div className="text-right border-l border-white/10 pl-3">
                <span className="text-[10px] text-zinc-500 block uppercase font-mono">THỜI LƯỢNG</span>
                <span className="text-xs text-white font-mono">{item.duration}</span>
              </div>
            </div>
          </div>

          <p className="font-sans text-sm text-zinc-300 leading-relaxed font-light">
            {item.description}
          </p>

          {item.credits && (
            <div className="p-4 bg-zinc-900 border border-white/5 rounded-sm">
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
                DỰ HẬU KỲ / HIỆN TRƯỜNG CREDITS:
              </p>
              <p className="text-xs text-zinc-300 font-mono leading-relaxed select-text">
                {item.credits}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
