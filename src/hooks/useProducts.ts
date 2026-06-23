import { useState, useEffect } from 'react';
import { Product, ProductFilter } from '@types/product.types';
import { productService } from '@services/index';

export const useProducts = (filter?: ProductFilter) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadProducts();
  }, [filter]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await productService.getProducts(filter);
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err as string);
    } finally {
      setLoading(false);
    }
  };

  const searchProducts = async (searchTerm: string) => {
    try {
      setLoading(true);
      const data = await productService.searchProducts(searchTerm);
      setProducts(data);
    } catch (err) {
      setError(err as string);
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, searchProducts, refetch: loadProducts };
};
