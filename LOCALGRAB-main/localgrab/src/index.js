// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { auth0Config } from './auth0/auth0-config';

ReactDOM.render(
  <Auth0Provider
    domain={auth0Config.domain}
    clientId={auth0Config.clientId}
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);
