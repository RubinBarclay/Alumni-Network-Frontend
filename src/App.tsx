import Home from "./pages/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Redirect from "./pages/Redirect"

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Redirect />} />
          <Route path="/feed" element={<Home />} />
          <Route path="/*" element={<Navigate to="/feed" />} />
        </Routes>
    </>
  )
}

export default App
