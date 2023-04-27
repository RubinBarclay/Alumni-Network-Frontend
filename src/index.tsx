import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { initializeKeycloak } from './keycloak'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import './index.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

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
            <ReactQueryDevtools initialIsOpen={false} />
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
