import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About BISWASBD</h3>
            <p className="text-gray-400">Your trusted online marketplace for quality products and services in Bangladesh.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><Link to="/products" className="hover:text-white">Products</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Track Order</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2024 BISWASBD. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
