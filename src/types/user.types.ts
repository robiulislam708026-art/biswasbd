export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  phoneNumber?: string;
  role: 'user' | 'seller' | 'admin';
  createdAt: Date;
  updatedAt: Date;
  isVerified?: boolean;
  address?: string;
  city?: string;
  district?: string;
  division?: string;
  postalCode?: string;
}

export interface UserProfile extends User {
  bio?: string;
  avatar?: string;
  coverImage?: string;
  dateOfBirth?: Date;
  gender?: 'male' | 'female' | 'other';
  totalOrders?: number;
  totalSpent?: number;
  joinDate?: Date;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface SignUpData extends AuthCredentials {
  displayName: string;
  phoneNumber: string;
  role: 'user' | 'seller';
}

export interface PasswordResetRequest {
  email: string;
}

export interface PasswordReset {
  code: string;
  newPassword: string;
}