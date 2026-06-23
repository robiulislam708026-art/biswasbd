import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, User, Menu, X } from 'react-icons/fa';
import { useAuth } from '@hooks/useAuth';
import { useCart } from '@hooks/useCart';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          BISWASBD
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/products" className="text-gray-700 hover:text-blue-600">
            Products
          </Link>
          <Link to="/features" className="text-gray-700 hover:text-blue-600">
            Features
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative text-gray-700 hover:text-blue-600">
            <ShoppingCart size={24} />
            {cart.items && cart.items.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.items.length}
              </span>
            )}
          </Link>
          <Link to="/user/wishlist" className="text-gray-700 hover:text-blue-600">
            <Heart size={24} />
          </Link>
          {user ? (
            <div className="flex items-center gap-2">
              <Link to="/user/profile" className="text-gray-700 hover:text-blue-600">
                <User size={24} />
              </Link>
              <button
                onClick={logout}
                className="px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/auth/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <Link to="/products" className="text-gray-700 hover:text-blue-600">
              Products
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-blue-600">
              Features
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
