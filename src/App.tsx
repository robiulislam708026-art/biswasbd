import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Layouts
import Layout from '@components/layout/Layout';

// Pages - Public
import HomePage from '@pages/public/HomePage';
import ProductsPage from '@pages/public/Products';
import ProductDetailsPage from '@pages/public/ProductDetails';
import AboutPage from '@pages/public/About';
import ContactPage from '@pages/public/Contact';

// Pages - Auth
import LoginPage from '@pages/auth/Login';
import RegisterPage from '@pages/auth/Register';
import ForgotPasswordPage from '@pages/auth/ForgotPassword';

// Pages - User
import UserDashboard from '@pages/user/Dashboard';
import UserProfile from '@pages/user/Profile';
import UserOrders from '@pages/user/Orders';
import UserWishlist from '@pages/user/Wishlist';

// Pages - Cart & Checkout
import CartPage from '@pages/cart/ShoppingCart';
import CheckoutPage from '@pages/checkout/Checkout';

// Routes
import PrivateRoute from '@router/PrivateRoute';
import PublicRoute from '@router/PublicRoute';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductDetailsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        {/* Auth Routes */}
        <Route element={<Layout />}>
          <Route
            path="auth/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="auth/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="auth/forgot-password"
            element={
              <PublicRoute>
                <ForgotPasswordPage />
              </PublicRoute>
            }
          />
        </Route>

        {/* Cart & Checkout Routes */}
        <Route element={<Layout />}>
          <Route path="cart" element={<CartPage />} />
          <Route
            path="checkout"
            element={
              <PrivateRoute>
                <CheckoutPage />
              </PrivateRoute>
            }
          />
        </Route>

        {/* User Routes */}
        <Route element={<Layout />}>
          <Route
            path="user/dashboard"
            element={
              <PrivateRoute>
                <UserDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="user/profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="user/orders"
            element={
              <PrivateRoute>
                <UserOrders />
              </PrivateRoute>
            }
          />
          <Route
            path="user/wishlist"
            element={
              <PrivateRoute>
                <UserWishlist />
              </PrivateRoute>
            }
          />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<h1 className="text-center text-3xl mt-20">Page Not Found</h1>} />
      </Routes>

      {/* Toast Notifications */}
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}

export default App;
