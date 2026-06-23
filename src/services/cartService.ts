import { db } from '@config/firebase';
import { collection, addDoc, deleteDoc, doc, getDoc, getDocs, query, where, updateDoc } from 'firebase/firestore';
import { CartItem } from '@types/cart.types';

class CartService {
  async addToCart(userId: string, item: CartItem): Promise<void> {
    try {
      await addDoc(collection(db, `users/${userId}/cart`), item);
    } catch (error) {
      throw new Error(`Failed to add to cart: ${error}`);
    }
  }

  async removeFromCart(userId: string, itemId: string): Promise<void> {
    try {
      await deleteDoc(doc(db, `users/${userId}/cart/${itemId}`));
    } catch (error) {
      throw new Error(`Failed to remove from cart: ${error}`);
    }
  }

  async getCartItems(userId: string): Promise<CartItem[]> {
    try {
      const snapshot = await getDocs(collection(db, `users/${userId}/cart`));
      return snapshot.docs.map((doc) => ({
        ...doc.data(),
      } as CartItem));
    } catch (error) {
      throw new Error(`Failed to fetch cart items: ${error}`);
    }
  }

  async updateCartItem(userId: string, itemId: string, updates: Partial<CartItem>): Promise<void> {
    try {
      await updateDoc(doc(db, `users/${userId}/cart/${itemId}`), updates);
    } catch (error) {
      throw new Error(`Failed to update cart item: ${error}`);
    }
  }

  async clearCart(userId: string): Promise<void> {
    try {
      const items = await getDocs(collection(db, `users/${userId}/cart`));
      for (const item of items.docs) {
        await deleteDoc(item.ref);
      }
    } catch (error) {
      throw new Error(`Failed to clear cart: ${error}`);
    }
  }
}

export default new CartService();
