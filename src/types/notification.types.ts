export interface Notification {
  id: string;
  userId: string;
  type: 'order' | 'payment' | 'message' | 'promotion' | 'system';
  title: string;
  message: string;
  data?: Record<string, any>;
  read: boolean;
  readAt?: Date;
  createdAt: Date;
}

export interface NotificationPreference {
  userId: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
  smsNotifications: boolean;
  orderUpdates: boolean;
  promotions: boolean;
  newsletter: boolean;
}

export interface NotificationSettings {
  userId: string;
  channels: 'email' | 'push' | 'sms';
  preferences: Record<string, boolean>;
}