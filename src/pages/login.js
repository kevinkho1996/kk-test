import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import auth0 from '../utils/auth';

const LoginPage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated]);

  return <p>Redirecting to login...</p>;
};

export default LoginPage;