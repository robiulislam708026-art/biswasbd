import { auth, db } from '@config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  User as FirebaseUser,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { User, SignUpData, AuthCredentials } from '@types/user.types';

class AuthService {
  async signup(data: SignUpData): Promise<User> {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const firebaseUser = userCredential.user;

      await updateProfile(firebaseUser, {
        displayName: data.displayName,
      });

      const user: User = {
        uid: firebaseUser.uid,
        email: firebaseUser.email || '',
        displayName: data.displayName,
        phoneNumber: data.phoneNumber,
        role: data.role,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await setDoc(doc(db, 'users', firebaseUser.uid), user);

      return user;
    } catch (error) {
      throw new Error(`Signup failed: ${error}`);
    }
  }

  async login(credentials: AuthCredentials): Promise<User> {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
      return userDoc.data() as User;
    } catch (error) {
      throw new Error(`Login failed: ${error}`);
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error) {
      throw new Error(`Logout failed: ${error}`);
    }
  }

  async sendPasswordReset(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      throw new Error(`Password reset failed: ${error}`);
    }
  }

  async updateUserProfile(userId: string, updates: Partial<User>): Promise<void> {
    try {
      await updateDoc(doc(db, 'users', userId), {
        ...updates,
        updatedAt: new Date(),
      });
    } catch (error) {
      throw new Error(`Profile update failed: ${error}`);
    }
  }

  onAuthStateChange(callback: (user: User | null) => void): () => void {
    return onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        callback(userDoc.data() as User);
      } else {
        callback(null);
      }
    });
  }
}

export default new AuthService();
