export interface Address {
  id: string;
  userId: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  street: string;
  city: string;
  district: string;
  division: string;
  postalCode: string;
  landmark?: string;
  isDefault: boolean;
  addressType: 'home' | 'office' | 'other';
  createdAt: Date;
  updatedAt: Date;
}

export interface Division {
  id: string;
  name: string;
  districts: District[];
}

export interface District {
  id: string;
  name: string;
  thanas: Thana[];
}

export interface Thana {
  id: string;
  name: string;
}