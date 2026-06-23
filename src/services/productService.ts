import { db } from '@config/firebase';
import { collection, getDocs, getDoc, doc, query, where, orderBy, limit, Query, QueryConstraint } from 'firebase/firestore';
import { Product, ProductFilter } from '@types/product.types';

class ProductService {
  async getProducts(filter?: ProductFilter): Promise<Product[]> {
    try {
      let constraints: QueryConstraint[] = [];

      if (filter?.category) {
        constraints.push(where('category', '==', filter.category));
      }

      if (filter?.minPrice) {
        constraints.push(where('price', '>=', filter.minPrice));
      }

      if (filter?.maxPrice) {
        constraints.push(where('price', '<=', filter.maxPrice));
      }

      constraints.push(orderBy('createdAt', 'desc'));
      constraints.push(limit(filter?.limit || 10));

      const q = query(collection(db, 'products'), ...constraints);
      const snapshot = await getDocs(q);

      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as Product));
    } catch (error) {
      throw new Error(`Failed to fetch products: ${error}`);
    }
  }

  async getProductById(id: string): Promise<Product> {
    try {
      const docSnap = await getDoc(doc(db, 'products', id));
      if (!docSnap.exists()) {
        throw new Error('Product not found');
      }
      return { id: docSnap.id, ...docSnap.data() } as Product;
    } catch (error) {
      throw new Error(`Failed to fetch product: ${error}`);
    }
  }

  async searchProducts(searchTerm: string): Promise<Product[]> {
    try {
      const q = query(
        collection(db, 'products'),
        where('title', '>=', searchTerm),
        where('title', '<=', searchTerm + '\uf8ff')
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as Product));
    } catch (error) {
      throw new Error(`Search failed: ${error}`);
    }
  }

  async getFeaturedProducts(): Promise<Product[]> {
    try {
      const q = query(
        collection(db, 'products'),
        where('isFeatured', '==', true),
        limit(8)
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as Product));
    } catch (error) {
      throw new Error(`Failed to fetch featured products: ${error}`);
    }
  }
}

export default new ProductService();
