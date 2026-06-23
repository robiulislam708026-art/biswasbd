import { db } from '@config/firebase';
import { collection, addDoc, getDocs, query, where, updateDoc, doc, getDoc } from 'firebase/firestore';
import { BloodDonor, BloodRequest } from '@types/blood.types';

class BloodService {
  async registerDonor(donor: Omit<BloodDonor, 'id' | 'createdAt'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, 'blood_donors'), {
        ...donor,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return docRef.id;
    } catch (error) {
      throw new Error(`Failed to register donor: ${error}`);
    }
  }

  async getDonorsByBloodType(bloodType: string): Promise<BloodDonor[]> {
    try {
      const q = query(
        collection(db, 'blood_donors'),
        where('bloodType', '==', bloodType),
        where('isActive', '==', true)
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as BloodDonor));
    } catch (error) {
      throw new Error(`Failed to fetch donors: ${error}`);
    }
  }

  async getDonorsByLocation(district: string): Promise<BloodDonor[]> {
    try {
      const q = query(
        collection(db, 'blood_donors'),
        where('district', '==', district),
        where('isActive', '==', true)
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as BloodDonor));
    } catch (error) {
      throw new Error(`Failed to fetch donors: ${error}`);
    }
  }

  async createBloodRequest(request: Omit<BloodRequest, 'id' | 'createdAt'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, 'blood_requests'), {
        ...request,
        createdAt: new Date(),
        status: 'open',
      });
      return docRef.id;
    } catch (error) {
      throw new Error(`Failed to create blood request: ${error}`);
    }
  }

  async getActiveBloodRequests(): Promise<BloodRequest[]> {
    try {
      const q = query(collection(db, 'blood_requests'), where('status', '==', 'open'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as BloodRequest));
    } catch (error) {
      throw new Error(`Failed to fetch requests: ${error}`);
    }
  }
}

export default new BloodService();
