import React, { useState } from 'react';
import { Search } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600">
          <Search size={20} />
        </button>
      </div>
    </form>
  );
};
