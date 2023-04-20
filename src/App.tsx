import Home from "./pages/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import { useEffect } from "react"
import { createNewUserRequest } from "./api/user"
import keycloak from "./keycloak"

function App() {

  useEffect(() => {
    console.log(keycloak.token)

    // If multiple request are sent right after each other, multiple records for the same user is created
    // Possible solution: make API endpoint non async (would this work?)
    if (keycloak.authenticated) {
      createNewUserRequest({ name: "sally" });
    }
  }, [])

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
