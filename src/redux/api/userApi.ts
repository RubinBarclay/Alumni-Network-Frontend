import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import GetUserDTO from '../../types/GetUserDTO'
import CreateUserDTO from '../../types/CreateUserDTO'
import keycloak from '../../keycloak'
import EditUserDTO from '../../types/EditUserDTO'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_API_URL}/api/v1/` }),
  endpoints: (builder) => ({
    // Get user by id
    getUserById: builder.query<GetUserDTO, string>({
      query: (id) => `users/${id}`,
    }),
    // Create new user (or retrieve existing user if already exists)
    createNewUser: builder.mutation<GetUserDTO, Partial<CreateUserDTO>>({
      query: (body) => ({
        url: 'users',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${keycloak.token}`
        },
      }),
      transformErrorResponse: (response:  { status: string | number }) => response.status,
    }),
    // Edit existing user
    editUser: builder.mutation<GetUserDTO, Partial<{ id: number, body: EditUserDTO }>>({
      query: ({ id, body }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${keycloak.token}`
        },
      }),
      transformErrorResponse: (response:  { status: string | number }) => response.status,
    }),
  }),
})

export const {
  useGetUserByIdQuery, 
  useCreateNewUserMutation, 
  useEditUserMutation 
} = userApi