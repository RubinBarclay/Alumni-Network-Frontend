import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/pico.min.css'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { initializeKeycloak } from './keycloak'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// Display a loading screen when connecting to Keycloak
root.render(<p>Connecting to keycloak...</p>)

// Initialize Keycloak
initializeKeycloak()
  .then(() => {
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </BrowserRouter>
      </React.StrictMode>
    );
  })
  .catch(() => {
    root.render(
      <p>Could Not Connect To Keycloak.</p>
    );
  });
