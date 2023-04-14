import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/pico.min.css'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { initializeKeycloak } from './keycloak'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// Display a loading screen when connecting to Keycloak
root.render(<p>Connecting to keycloak...</p>)

// Initialize Keycloak
initializeKeycloak()
  .then(() => {
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
  })
  .catch(() => {
    root.render(
      <React.StrictMode>
        <p>Could Not Connect To Keycloak.</p>
      </React.StrictMode>
    );
  });
