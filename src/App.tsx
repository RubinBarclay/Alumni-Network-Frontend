import Home from "./pages/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import { useEffect } from "react"
import { useCreateNewUserMutation } from "./redux/api/userApi"
import keycloak from "./keycloak"
import Profile from "./pages/Profile"
import { RootState } from "./redux/store"
import { useSelector } from "react-redux"
import GetUserDTO from "./types/GetUserDTO"

function App() {
  const user = useSelector((state: RootState) => state.user)
  const [createNewUser] = useCreateNewUserMutation()

  // Create new user on initial login
  useEffect(() => {
    if (!keycloak.authenticated) return // TODO: Show error message

    if (user.id) return // User already exists in store (no need to create new user)

    const name = keycloak.tokenParsed?.name

    if (!name) return // TODO: Show error message

    createNewUser({ name })
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
