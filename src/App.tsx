import Home from "./pages/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Redirect from "./pages/Redirect"
import { useDispatch } from 'react-redux'
import { setUser } from './redux/slices/userSlice'
import { getUserProfile } from "./keycloak"
import { useEffect } from "react"



function App() {
  const dispatch = useDispatch()
    
  useEffect(() => {
    // Set the username from keycloak in the redux store
    const userDipatchHandler = async () => {
      const { username } = await getUserProfile()
      if (username) dispatch(setUser({ name: username }))
    }

    userDipatchHandler();
  })

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
