import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      const response = await axios.get('http://localhost:5000/api/auth/status');
      setIsAuthenticated(response.data.isAuthenticated);
    };

    checkAuth();
  }, []);

  return isAuthenticated;
};

export default useAuth;
