import { useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { createNewUserRequest } from '../../api/requests/user'
import CreateUserDTO from '../../types/CreateUserDTO'
import keycloak from '../../keycloak'

function LoginNotification() {
  const mutation = useMutation({
    mutationFn: (body: CreateUserDTO) => createNewUserRequest(body)
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

  return mutation.isSuccess ? (
    <div className="toast">
      <div className="alert alert-success">
        <div>
          <span>Login successful!</span>
        </div>
      </div>
    </div>
  ) : mutation.isError ? (
    <div className="toast">
      <div className="alert alert-error">
        <div>
          <span>Something went wrong...</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="toast">
      <div className="alert alert-info">
        <div>
          <span>Logging in...</span>
        </div>
      </div>
    </div>
  )
}

export default LoginNotification