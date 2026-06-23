import React, { useState } from 'react';
import { Menu, X } from 'react-icons/fa';

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded hover:bg-gray-100"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 p-4 z-40">
          {/* Mobile menu content */}
        </div>
      )}
    </div>
  );
};
