export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice?: number;
  quantity: number;
  category: string;
  subcategory?: string;
  images: string[];
  thumbnail?: string;
  sellerId: string;
  sellerName: string;
  shopId: string;
  rating: number;
  reviewCount: number;
  tags?: string[];
  sku?: string;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  shipping?: {
    cost: number;
    freeShippingAbove?: number;
    estimatedDays?: number;
  };
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  viewCount?: number;
  favorites?: number;
}

export interface ProductFilter {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  searchTerm?: string;
  sortBy?: 'newest' | 'popular' | 'priceHigh' | 'priceLow' | 'rating';
  page?: number;
  limit?: number;
}

export interface ProductCart extends Product {
  quantity: number;
  selectedVariant?: string;
}

export interface ProductInventory {
  productId: string;
  quantity: number;
  reserved: number;
  available: number;
}