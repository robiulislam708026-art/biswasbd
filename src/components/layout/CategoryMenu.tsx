import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string;
}

export const CategoryMenu: React.FC = () => {
  const categories: Category[] = [
    { id: '1', name: 'Electronics', slug: 'electronics' },
    { id: '2', name: 'Fashion', slug: 'fashion' },
    { id: '3', name: 'Home & Garden', slug: 'home-garden' },
    { id: '4', name: 'Sports', slug: 'sports' },
    { id: '5', name: 'Agriculture', slug: 'agriculture' },
    { id: '6', name: 'Food & Beverage', slug: 'food-beverage' },
  ];

  return (
    <div className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto gap-4 pb-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.slug}`}
              className="whitespace-nowrap px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-white rounded transition"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
