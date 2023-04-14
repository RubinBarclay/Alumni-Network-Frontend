import { useEffect } from "react"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProtectedRoute from "./routes/ProtectedRoute"
import { Route, Routes } from "react-router-dom"
import keycloak from "./keycloak"

function App() {

  useEffect(() => {
    console.log(keycloak.authenticated)
  })

  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Home />} role={"USER"} redirectTo="/login" />} />
        <Route index path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/protected" element={<ProtectedRoute element={<Register />} role={"USER"} redirectTo="/login" />} />
      </Routes>
    </>
  )
}

export default App
