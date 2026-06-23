import { db } from '@config/firebase';
import { collection, addDoc, getDocs, query, where, updateDoc, doc } from 'firebase/firestore';
import { ZakatCalculation, ZakatDonation } from '@types/zakat.types';

class ZakatService {
  async saveCalculation(calculation: Omit<ZakatCalculation, 'id'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, 'zakat_calculations'), {
        ...calculation,
        calculationDate: new Date(),
      });
      return docRef.id;
    } catch (error) {
      throw new Error(`Failed to save zakat calculation: ${error}`);
    }
  }

  async getUserCalculations(userId: string): Promise<ZakatCalculation[]> {
    try {
      const q = query(collection(db, 'zakat_calculations'), where('userId', '==', userId));
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as ZakatCalculation));
    } catch (error) {
      throw new Error(`Failed to fetch calculations: ${error}`);
    }
  }

  async recordDonation(donation: Omit<ZakatDonation, 'id'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, 'zakat_donations'), {
        ...donation,
        donatedAt: new Date(),
      });
      return docRef.id;
    } catch (error) {
      throw new Error(`Failed to record donation: ${error}`);
    }
  }

  async getUserDonations(userId: string): Promise<ZakatDonation[]> {
    try {
      const q = query(collection(db, 'zakat_donations'), where('userId', '==', userId));
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as ZakatDonation));
    } catch (error) {
      throw new Error(`Failed to fetch donations: ${error}`);
    }
  }
}

export default new ZakatService();
