export interface ZakatCalculation {
  id: string;
  userId: string;
  gold: number;
  silver: number;
  cash: number;
  businessAssets: number;
  agriculturalIncome: number;
  otherAssets: number;
  debts: number;
  zakatAmount: number;
  calculationDate: Date;
  notes?: string;
}

export interface ZakatDonation {
  id: string;
  userId: string;
  amount: number;
  recipientType: 'poor' | 'needy' | 'charity' | 'mosque' | 'education' | 'healthcare';
  recipientName?: string;
  recipientPhone?: string;
  reference?: string;
  transactionId?: string;
  donatedAt: Date;
  verified: boolean;
}

export interface ZakatHistory {
  userId: string;
  totalCalculated: number;
  totalDonated: number;
  donations: ZakatDonation[];
  calculations: ZakatCalculation[];
}

export interface ZakatRecipient {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address: string;
  type: 'poor' | 'needy' | 'charity' | 'mosque' | 'education' | 'healthcare';
  description: string;
  bankDetails?: {
    accountName: string;
    accountNumber: string;
    bankName: string;
  };
  verified: boolean;
}