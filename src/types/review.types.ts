export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  comment: string;
  images?: string[];
  helpful: number;
  unhelpful: number;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductRating {
  productId: string;
  averageRating: number;
  totalReviews: number;
  ratingDistribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

export interface ReviewFilter {
  rating?: number;
  sortBy?: 'newest' | 'helpful' | 'rating';
  page?: number;
  limit?: number;
}