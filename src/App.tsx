import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProtectedRoute from "./routes/ProtectedRoute"

function App() {

  return (
    <body>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/protected" element={<ProtectedRoute role={"USER"}><Register /></ProtectedRoute>} />
      </Routes>
    </body>
  )
}

export default App
