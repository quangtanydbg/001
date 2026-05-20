export type CategoryType = 'TẤT CẢ' | 'TVC' | 'WEDDING FILM' | 'EVENT FILM' | 'YOUTUBE' | 'REEL - TIKTOK';

export interface WorkItem {
  id: number;
  title: string;
  category: CategoryType;
  thumbnail: string;
  videoUrl: string; // Dynamic video playback URL (YouTube embed or direct high quality placeholder video)
  duration: string;
  description: string;
  year: string;
  client?: string;
  credits?: string;
}

export interface ServiceItem {
  id: string; // e.g., "01"
  title: string;
  description: string;
  details: string[];
}
