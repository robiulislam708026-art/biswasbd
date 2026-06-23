export interface Shop {
  id: string;
  sellerId: string;
  shopName: string;
  slug: string;
  description?: string;
  logo?: string;
  banner?: string;
  address?: string;
  city?: string;
  district?: string;
  division?: string;
  phoneNumber?: string;
  email?: string;
  website?: string;
  rating: number;
  reviewCount: number;
  followerCount: number;
  productCount: number;
  verificationStatus: 'verified' | 'pending' | 'rejected';
  businessLicense?: string;
  taxId?: string;
  establishmentYear?: number;
  isActive: boolean;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    tiktok?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface ShopReview {
  id: string;
  shopId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface ShopStats {
  shopId: string;
  totalSales: number;
  totalRevenue: number;
  totalOrders: number;
  averageRating: number;
  followers: number;
  products: number;
}