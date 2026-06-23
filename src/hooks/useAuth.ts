import { useState, useEffect } from 'react';
import { User } from '@types/user.types';
import { authService } from '@services/index';
import { Toast } from '@components/common/Toast';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
      Toast.success('Logged out successfully');
    } catch (error) {
      setError(error as string);
      Toast.error('Logout failed');
    }
  };

  return { user, loading, error, logout };
};
