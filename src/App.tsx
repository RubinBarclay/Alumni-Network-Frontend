import Home from "./pages/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import { useEffect } from "react"
import { userApi } from "./redux/api/userApi"

function App() {

  const { data } = userApi.useGetUserByIdQuery('1')

  useEffect(() => {
    console.log(data)
  })

  return (
    <>
      <Navbar />
        <Routes>
          {/* <Route path="/" element={<Redirect />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Navigate to="/feed" />} />
        </Routes>
    </>
  )
}

export default App
