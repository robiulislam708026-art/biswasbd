import React from 'react';
import { useAuth } from '@hooks/useAuth';

export const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Welcome to BISWASBD</h1>
            <p className="text-blue-100">Your trusted online marketplace</p>
          </div>
          {user && (
            <div className="text-right">
              <p className="text-sm">Welcome, {user.displayName}</p>
              <p className="text-xs text-blue-100">Role: {user.role}</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
