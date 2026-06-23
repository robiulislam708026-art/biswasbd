import { db } from '@config/firebase';
import { collection, addDoc, updateDoc, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { Order, OrderItem } from '@types/order.types';

class OrderService {
  async createOrder(order: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, 'orders'), {
        ...order,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return docRef.id;
    } catch (error) {
      throw new Error(`Failed to create order: ${error}`);
    }
  }

  async getOrderById(orderId: string): Promise<Order> {
    try {
      const docSnap = await getDoc(doc(db, 'orders', orderId));
      if (!docSnap.exists()) {
        throw new Error('Order not found');
      }
      return { id: docSnap.id, ...docSnap.data() } as Order;
    } catch (error) {
      throw new Error(`Failed to fetch order: ${error}`);
    }
  }

  async getUserOrders(userId: string): Promise<Order[]> {
    try {
      const q = query(collection(db, 'orders'), where('userId', '==', userId));
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as Order));
    } catch (error) {
      throw new Error(`Failed to fetch orders: ${error}`);
    }
  }

  async updateOrderStatus(orderId: string, status: string): Promise<void> {
    try {
      await updateDoc(doc(db, 'orders', orderId), {
        status,
        updatedAt: new Date(),
      });
    } catch (error) {
      throw new Error(`Failed to update order: ${error}`);
    }
  }

  async updatePaymentStatus(orderId: string, paymentStatus: string): Promise<void> {
    try {
      await updateDoc(doc(db, 'orders', orderId), {
        paymentStatus,
        updatedAt: new Date(),
      });
    } catch (error) {
      throw new Error(`Failed to update payment status: ${error}`);
    }
  }
}

export default new OrderService();
