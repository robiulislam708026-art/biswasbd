import { Navigate } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import { Loader } from '@components/common/Loader';

interface SellerRouteProps {
  children: React.ReactNode;
}

const SellerRoute: React.FC<SellerRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  return user && (user.role === 'seller' || user.role === 'admin') ? (
    <>{children}</>
  ) : (
    <Navigate to="/" replace />
  );
};

export default SellerRoute;
