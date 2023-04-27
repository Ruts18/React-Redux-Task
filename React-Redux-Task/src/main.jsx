import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Auth0Provider} from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-mvq6cx5m2erocy1i.us.auth0.com"
    clientId="czD2rGf6vpCPcCbdG5hZxb8rtSEhSZci"
    authorizationParams={{
      redirect_uri: window.location.origin 
    }}
  >

  <App />
  </Auth0Provider> 

)
