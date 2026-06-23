export interface Video {
  id: string;
  title: string;
  description: string;
  uploadedBy: string;
  uploaderName: string;
  uploaderAvatar?: string;
  videoUrl: string;
  thumbnail?: string;
  category: 'agriculture' | 'tutorial' | 'product' | 'other';
  tags?: string[];
  views: number;
  likes: number;
  dislikes: number;
  comments: number;
  duration: number;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface VideoComment {
  id: string;
  videoId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  text: string;
  likes: number;
  replies: VideoComment[];
  createdAt: Date;
}

export interface VideoFilter {
  category?: string;
  searchTerm?: string;
  sortBy?: 'newest' | 'popular' | 'trending';
  page?: number;
  limit?: number;
}