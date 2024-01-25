import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import BaseLayout from '../components/BaseLayouts';

const DashboardPage = () => {
  const { isAuthenticated, user, logout, getAccessTokenSilently } = useAuth0();
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setApiData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <BaseLayout>
      <h1>Dashboard</h1>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.name}!</p>
          {apiData && (
            <div>
              <h2>User Data</h2>
              <pre>{JSON.stringify(apiData, null, 2)}</pre>
            </div>
          )}
          <button onClick={() => logout({ returnTo: 'http://localhost:3000' })}>Logout</button>
        </div>
      ) : (
        <p>Please log in to access the dashboard.</p>
      )}
    </BaseLayout>
  );
};

export default DashboardPage;
