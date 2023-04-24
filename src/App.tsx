import Home from "./pages/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import { useEffect } from "react"
import { createNewUserRequest } from "./api/user"
import keycloak from "./keycloak"

function App() {

  useEffect(() => {
    if (!keycloak.authenticated) return;

    // console.log(keycloak.token)

    const createNewUser = async () => {
      const userProfile = await keycloak.loadUserProfile()

      if (!userProfile.username) {
        console.log('No username found')
        return;
      }

      const newUser = createNewUserRequest({ name: userProfile.username })

      console.log('New user:', newUser)
    }


    createNewUser()
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
