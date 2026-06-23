import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Header } from './Header';
import { Footer } from './Footer';
import { CategoryMenu } from './CategoryMenu';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CategoryMenu />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
