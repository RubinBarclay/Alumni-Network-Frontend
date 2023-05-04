import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import GetUserDTO from '../../types/GetUserDTO'
import CreateUserDTO from '../../types/CreateUserDTO'
import keycloak from '../../keycloak'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_API_URL}/api/v1/` }),
  endpoints: (builder) => ({
    getUserById: builder.query<GetUserDTO, string>({
      query: (id) => `users/${id}`,
    }),
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
  }),
})

export const { useGetUserByIdQuery, useCreateNewUserMutation } = userApi