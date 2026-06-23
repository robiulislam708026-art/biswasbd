import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';

export const Sidebar: React.FC = () => {
  const { user } = useAuth();

  const menuItems = [
    { label: 'Dashboard', href: '/user/dashboard' },
    { label: 'Profile', href: '/user/profile' },
    { label: 'Orders', href: '/user/orders' },
    { label: 'Wishlist', href: '/user/wishlist' },
    { label: 'Addresses', href: '/user/addresses' },
    { label: 'Settings', href: '/user/settings' },
  ];

  if (!user) return null;

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 p-6">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900">Menu</h2>
      </div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="block px-4 py-2 rounded text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
