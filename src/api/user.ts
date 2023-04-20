import api from ".";
import keycloak from "../keycloak"
import CreateUserDTO from "../types/CreateUserDTO";
import GetUserDTO from "../types/GetUserDTO";

export const createNewUserRequest = async (body: CreateUserDTO): Promise<GetUserDTO | void> => {
  try {
  const user = await api.post<GetUserDTO>(`${import.meta.env.VITE_BASE_API_URL}/api/v1/users`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${keycloak.token}`
    },
    body: JSON.stringify(body)
  })
  return user;
  } catch (error: unknown) {
    if (typeof error === 'string') {
      console.error(error)
    } else if (error instanceof Error) {
      console.error(error.message)
    }
  }
};
