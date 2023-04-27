import keycloak from "../../keycloak"
import CreateUserDTO from "../../types/CreateUserDTO"

export const createNewUserRequest = (body: CreateUserDTO): Promise<Response> => {
  return fetch(`${import.meta.env.VITE_BASE_API_URL}/api/v1/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${keycloak.token}`
    },
    body: JSON.stringify(body)
  })
}