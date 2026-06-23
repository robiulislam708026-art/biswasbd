import { useState, useEffect } from 'react';
import { Order } from '@types/order.types';
import { orderService } from '@services/index';
import { useAuth } from './useAuth';

export const useOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      loadOrders();
    }
  }, [user]);

  const loadOrders = async () => {
    if (!user) return;
    try {
      setLoading(true);
      const data = await orderService.getUserOrders(user.uid);
      setOrders(data);
      setError(null);
    } catch (err) {
      setError(err as string);
    } finally {
      setLoading(false);
    }
  };

  return { orders, loading, error, refetch: loadOrders };
};
