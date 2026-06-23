export interface BloodDonor {
  id: string;
  userId: string;
  name: string;
  phone: string;
  email: string;
  bloodType: 'O+' | 'O-' | 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-';
  age: number;
  gender: 'male' | 'female' | 'other';
  address: string;
  district: string;
  division: string;
  lastDonationDate?: Date;
  nextEligibleDate?: Date;
  isActive: boolean;
  totalDonations: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface BloodRequest {
  id: string;
  userId: string;
  patientName: string;
  bloodType: 'O+' | 'O-' | 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-';
  unitsNeeded: number;
  hospitalName: string;
  hospitalAddress: string;
  hospitalPhone: string;
  urgency: 'urgent' | 'normal';
  description?: string;
  contact: {
    name: string;
    phone: string;
    email?: string;
  };
  status: 'open' | 'fulfilled' | 'closed';
  createdAt: Date;
  expiresAt: Date;
}

export interface BloodDonation {
  id: string;
  donorId: string;
  requestId?: string;
  bloodType: string;
  units: number;
  donatedAt: Date;
  status: 'completed' | 'pending' | 'cancelled';
}

export interface BloodFilter {
  bloodType?: string;
  district?: string;
  division?: string;
  page?: number;
  limit?: number;
}