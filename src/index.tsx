import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { initializeKeycloak } from './keycloak'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// Display a loading screen when connecting to Keycloak
root.render(<p>Connecting to keycloak...</p>)

// Initialize Keycloak
initializeKeycloak()
  .then(() => {
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </React.StrictMode>
    )
  })
  .catch(() => {
    root.render(
      <p>Could Not Connect To Keycloak.</p>
    )
  })
