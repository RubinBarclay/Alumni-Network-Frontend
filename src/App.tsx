import Home from "./pages/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import { useEffect } from "react"
import { userApi } from "./redux/api/userApi"
import keycloak from "./keycloak"

function App() {

  // const { data } = userApi.useGetUserByIdQuery('1')
  // console.log(data)

  const [createNewUser, result] = userApi.useCreateNewUserMutation()


  const createNewUserHandler = () => {

    if (!keycloak.authenticated) return

    let username = '';

    keycloak.loadUserProfile().then((profile) => {
      if (!profile.username) return
      username = profile.username
    }).then(() => {
      createNewUser({ name: username })
    })

  }

  useEffect(() => {
    console.log('result: ', result)
  }, [result])

  return (
    <>
      <Navbar />
        <Routes>
          {/* <Route path="/" element={<Redirect />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Navigate to="/feed" />} />
        </Routes>
        <button className="btn" onClick={createNewUserHandler}>Create user</button>
    </>
  )
}

export default App
