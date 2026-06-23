import { useState } from 'react';
import { Toast } from '@components/common/Toast';

export const useNotification = () => {
  const [notifications, setNotifications] = useState<any[]>([]);

  const addNotification = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info') => {
    Toast[type](message);
    setNotifications((prev) => [
      ...prev,
      { id: Date.now(), message, type, timestamp: new Date() },
    ]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return { notifications, addNotification, removeNotification };
};
