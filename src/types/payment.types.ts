export interface PaymentMethod {
  id: string;
  type: 'card' | 'bkash' | 'nagad' | 'rocket' | 'cod';
  isDefault: boolean;
  details?: PaymentMethodDetails;
}

export interface PaymentMethodDetails {
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  phoneNumber?: string;
}

export interface PaymentTransaction {
  id: string;
  orderId: string;
  amount: number;
  currency: string;
  method: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  transactionId: string;
  createdAt: Date;
  completedAt?: Date;
  errorMessage?: string;
}

export interface SSLCommerzPayload {
  store_id: string;
  store_passwd: string;
  total_amount: number;
  currency: string;
  tran_id: string;
  success_url: string;
  fail_url: string;
  cancel_url: string;
  product_name: string;
  product_profile: string;
  cus_name: string;
  cus_email: string;
  cus_phone: string;
  ship_name: string;
  ship_add1: string;
  ship_city: string;
  ship_state: string;
  ship_postcode: string;
  ship_country: string;
}

export interface PaymentVerification {
  val_id: string;
  amount: string;
  card_type: string;
  store_amount: string;
  bank_tran_id: string;
  status: 'VALID' | 'INVALID';
}