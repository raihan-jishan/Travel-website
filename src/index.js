import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-wjfjec0d.us.auth0.com"
  clientId="thCym7Y6fl6eHY0v6WC3eVcHN3R39EH1"
  redirectUri={window.location.origin}
>
  <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Auth0Provider>
);

