// import { initializeKeycloak } from './keycloak'

import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {

  return (
    <body>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </body>
  )
}

export default App
