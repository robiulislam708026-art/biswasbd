import { Navigate } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import { Loader } from '@components/common/Loader';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  return user ? <>{children}</> : <Navigate to="/auth/login" replace />;
};

export default PrivateRoute;
