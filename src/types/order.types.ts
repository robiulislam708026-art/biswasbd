export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalPrice: number;
  discountAmount?: number;
  shippingCost: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
  paymentMethod: 'card' | 'bkash' | 'nagad' | 'rocket' | 'cod';
  shippingAddress: ShippingAddress;
  createdAt: Date;
  updatedAt: Date;
  deliveryDate?: Date;
  trackingNumber?: string;
  notes?: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  image: string;
  sellerId: string;
  sellerName: string;
}

export interface ShippingAddress {
  fullName: string;
  phoneNumber: string;
  email: string;
  street: string;
  city: string;
  district: string;
  division: string;
  postalCode: string;
  landmark?: string;
}

export interface OrderStatus {
  status: string;
  timestamp: Date;
  message: string;
}

export interface OrderTracking {
  orderId: string;
  currentStatus: string;
  estimatedDelivery: Date;
  timeline: OrderStatus[];
  location?: string;
}