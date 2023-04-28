import { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { createNewUserRequest } from '../api/requests/user'
import CreateUserDTO from '../types/CreateUserDTO'
import keycloak, { getUserProfile } from '../keycloak'
import { Navigate } from 'react-router-dom'
// import FetchError from '../types/FetchError'
import FetchError from '../errors/fetchError'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/slices/userSlice'

function Redirect() {
  const dispatch = useDispatch()
  const [errorOccured, setErrorOccured] = useState(false)


  const mutation = useMutation({
    mutationFn: (body: CreateUserDTO) => createNewUserRequest(body)
  })

  const createNewUser = async () => {

    const { username } = await getUserProfile()

    if (!username) return

    try {
      const response = await mutation.mutateAsync({ name: username })

      if (!response.ok) {
        throw new FetchError(response.statusText, response.status)
      }

      const user = await response.json()

      if (user) {
        dispatch(setUser(user))
      }

    } catch (error: unknown) {

      if (typeof error === 'string') {
        console.error(`Error: ${error}`)
      }

      else if (error instanceof FetchError) {
        console.error(`Error ${error.status}: ${error.message}`)
      }

      else {
        console.error(error)
      }
    
      setErrorOccured(true)
    }
  }

  useEffect(() => {
    if (!keycloak.authenticated) return
    createNewUser()
  }, [])

  if (errorOccured) {
    return <h1 className="prose">Error occured</h1>
  }

  return (
    <main className="container mx-auto h-screen flex justify-center items-center">
      {mutation.isLoading ? (
        <article className="prose max-w-xl flex-1 bg-base-200 rounded-xl p-10">
          <h2>Redirecting you to your feed</h2>
          <p className="text-lg">Please wait just a moment as we set things up for you.</p>
        </article>
      ) : (
        <>
          {mutation.isError ? (
            <article className="prose max-w-xl flex-1 bg-base-200 rounded-xl p-10">
              <h2>A unexpected error occured</h2>
              <div className="alert alert-error shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Please try again later or contact the website owner.</span>
                </div>
              </div>
            </article>
          ) : null}

          {mutation.isSuccess ? <Navigate to="/feed" /> : null}
        </>
      )}
    </main>
  )
}

export default Redirect