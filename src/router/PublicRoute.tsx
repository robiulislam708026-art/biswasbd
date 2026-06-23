import { Navigate } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { user } = useAuth();

  return !user ? <>{children}</> : <Navigate to="/user/dashboard" replace />;
};

export default PublicRoute;
