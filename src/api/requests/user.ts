import api from ".."
import keycloak from "../../keycloak"
import CreateUserDTO from "../../types/CreateUserDTO"
// import FetchError from "../types/FetchError";
import GetUserDTO from "../../types/GetUserDTO"
// import fetchErrorHandler from "./fetchErrorHandler";

// // export const createNewUserRequest = async (body: CreateUserDTO): Promise<GetUserDTO | FetchError> => {
// export const createNewUserRequest = async (body: CreateUserDTO): Promise<Response> => {
//   // try {

//     return api.post(`${import.meta.env.VITE_BASE_API_URL}/api/v1/users`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${keycloak.token}`
//       },
//       body: JSON.stringify(body)
//     })

// };

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

// // export const createNewUserRequest = async (body: CreateUserDTO): Promise<GetUserDTO | FetchError> => {
// export const createNewUserRequest = async (body: CreateUserDTO): Promise<GetUserDTO> => {
//   // try {

//     const user = await api.post<GetUserDTO>(`${import.meta.env.VITE_BASE_API_URL}/api/v1/users`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${keycloak.token}`
//       },
//       body: JSON.stringify(body)
//     })

//     return user

//   // } catch (error: unknown) {

//   //   return fetchErrorHandler(error)

//   // }
// };