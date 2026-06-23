import { Navigate } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import { Loader } from '@components/common/Loader';

interface AdminRouteProps {
  children: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  return user && user.role === 'admin' ? <>{children}</> : <Navigate to="/" replace />;
};

export default AdminRoute;
