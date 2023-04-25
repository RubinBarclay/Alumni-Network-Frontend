import Home from "./pages/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import { useEffect } from "react"
import { createNewUserRequest } from "./api/user"
import keycloak from "./keycloak"
import { useMutation } from "@tanstack/react-query"
import CreateUserDTO from "./types/CreateUserDTO"

function App() {
  const mutation = useMutation({ 
    mutationFn: (body: CreateUserDTO) => createNewUserRequest(body),
    onSuccess: (newUser) => console.log('New user: ', newUser),
    onError: (error) => console.log('Error: ', error)
  })

  const createNewUser = async () => {
    const userProfile = await keycloak.loadUserProfile()
    
    if (!userProfile.username) return

    mutation.mutate({ name: userProfile.username })
  }

  useEffect(() => {
    if (!keycloak.authenticated) return;
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
