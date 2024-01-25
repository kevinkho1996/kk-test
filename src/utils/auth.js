// auth.js
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0Config = {
  domain: 'dev-qix0htf2634f6vo2.us.auth0.com',
  clientId: 'jxXR5KOmP58ucOf4ZPITjs2eq4NuYrzS',
  redirectUri: window.location.origin,
};

const AuthProvider = ({ children }) => (
  <Auth0Provider
    domain={Auth0Config.domain}
    clientId={Auth0Config.clientId}
    authorizationParams={{
      redirect_uri: Auth0Config.redirectUri,
    }}
  >
    {children}
  </Auth0Provider>
);

export default AuthProvider;
