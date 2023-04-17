import Home from "./pages/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"

function App() {

  // useEffect(() => {
  //   if (!keycloak.authenticated) {
  //     keycloak.login()
  //   }
  // })

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
