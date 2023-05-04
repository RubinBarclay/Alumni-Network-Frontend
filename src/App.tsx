import Home from "./pages/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import { useEffect } from "react"
import { useCreateNewUserMutation } from "./redux/api/userApi"
import keycloak from "./keycloak"

function App() {
  const [createNewUser] = useCreateNewUserMutation()

  // Create new user on initial login
  useEffect(() => {
    if (!keycloak.authenticated) return // TODO: Show error message

    const name = keycloak.tokenParsed?.name

    if (!name) return // TODO: Show error message

    createNewUser({ name })
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
