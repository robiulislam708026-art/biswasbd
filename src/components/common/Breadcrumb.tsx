import React from 'react';
import { ChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="w-4 h-4" />}
          {item.href ? <Link to={item.href} className="hover:text-blue-600">{item.label}</Link> : <span>{item.label}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};
