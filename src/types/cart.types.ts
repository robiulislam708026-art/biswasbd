import { Product } from './product.types';

export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
  selectedVariant?: string;
  addedAt: Date;
}

export interface Cart {
  userId: string;
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  totalDiscount?: number;
  lastUpdated: Date;
}

export interface CartSummary {
  subtotal: number;
  discount: number;
  shippingCost: number;
  taxAmount: number;
  total: number;
}

export interface ApplyCouponRequest {
  cartId: string;
  couponCode: string;
}

export interface CouponDetails {
  code: string;
  discount: number;
  discountType: 'percentage' | 'fixed';
  maxDiscount?: number;
  minAmount?: number;
  expiryDate: Date;
}