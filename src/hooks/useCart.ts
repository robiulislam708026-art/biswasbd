import { useState, useEffect } from 'react';
import { Cart, CartItem } from '@types/cart.types';
import { cartService } from '@services/index';
import { useAuth } from './useAuth';

export const useCart = () => {
  const { user } = useAuth();
  const [cart, setCart] = useState<Cart>({
    userId: '',
    items: [],
    totalItems: 0,
    totalPrice: 0,
    lastUpdated: new Date(),
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      loadCart();
    }
  }, [user]);

  const loadCart = async () => {
    if (!user) return;
    try {
      setLoading(true);
      const items = await cartService.getCartItems(user.uid);
      setCart({
        userId: user.uid,
        items,
        totalItems: items.length,
        totalPrice: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
        lastUpdated: new Date(),
      });
    } catch (error) {
      console.error('Failed to load cart', error);
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (item: CartItem) => {
    if (!user) return;
    try {
      await cartService.addToCart(user.uid, item);
      await loadCart();
    } catch (error) {
      console.error('Failed to add item to cart', error);
    }
  };

  const removeItem = async (itemId: string) => {
    if (!user) return;
    try {
      await cartService.removeFromCart(user.uid, itemId);
      await loadCart();
    } catch (error) {
      console.error('Failed to remove item from cart', error);
    }
  };

  return { cart, loading, addItem, removeItem, loadCart };
};
