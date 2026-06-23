// API Endpoints
export const API_ENDPOINTS = {
  AUTH: '/api/auth',
  PRODUCTS: '/api/products',
  ORDERS: '/api/orders',
  USERS: '/api/users',
  CATEGORIES: '/api/categories',
  CART: '/api/cart',
  PAYMENT: '/api/payment',
  SHOPS: '/api/shops',
  VIDEOS: '/api/videos',
  ZAKAT: '/api/zakat',
  BLOOD: '/api/blood',
};

// Payment Methods
export const PAYMENT_METHODS = {
  CARD: 'card',
  BKASH: 'bkash',
  NAGAD: 'nagad',
  ROCKET: 'rocket',
  COD: 'cod',
};

// Blood Types
export const BLOOD_TYPES = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];

// Divisions
export const DIVISIONS = [
  'Dhaka',
  'Chittagong',
  'Khulna',
  'Rajshahi',
  'Barisal',
  'Sylhet',
  'Rangpur',
  'Mymensingh',
];

// Order Status
export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

// Payment Status
export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
  REFUNDED: 'refunded',
};

// User Roles
export const USER_ROLES = {
  USER: 'user',
  SELLER: 'seller',
  ADMIN: 'admin',
};

// Pagination
export const DEFAULT_PAGE_LIMIT = 10;
export const PRODUCTS_PER_PAGE = 12;

// File Upload
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
export const ALLOWED_VIDEO_TYPES = ['video/mp4', 'video/mpeg', 'video/quicktime'];

// Zakat
export const NISAB_GOLD_GRAMS = 87.48;
export const NISAB_SILVER_GRAMS = 612.36;
export const ZAKAT_RATE = 0.025; // 2.5%

// Caching
export const CACHE_DURATION = {
  SHORT: 5 * 60 * 1000, // 5 minutes
  MEDIUM: 30 * 60 * 1000, // 30 minutes
  LONG: 24 * 60 * 60 * 1000, // 24 hours
};