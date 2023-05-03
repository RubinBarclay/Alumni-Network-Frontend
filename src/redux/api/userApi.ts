import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import GetUserDTO from '../../types/GetUserDTO'
import CreateUserDTO from '../../types/CreateUserDTO'
import keycloak from '../../keycloak'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_API_URL}/api/v1` }),
  endpoints: (builder) => ({
    getUserById: builder.query<GetUserDTO, string>({
      query: (id) => `/users/${id}`,
    }),
    createNewUser: builder.mutation<GetUserDTO, Partial<CreateUserDTO>>({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${keycloak.token}`
        },
      }),
      transformResponse: (response: { data: GetUserDTO }) => response.data,
      transformErrorResponse: (response:  { status: string | number }) => response.status,
    }),
  }),
})

// This is a custom baseQuery example (https://redux-toolkit.js.org/rtk-query/usage-with-typescript#typing-a-basequery)
// const userBaseQuery: <BaseQueryFn
//   string, // Args
//   unknown, // Result
//   { reason: string }, // Error
//   { shout?: boolean }, // DefinitionExtraOptions
//   { timestamp: number } // Meta
// > = (arg, api, extraOptions) => {

//   const meta = { timestamp: Date.now() }

//   if (arg === 'forceFail') {
//     return {
//       error: {
//         reason: 'Intentionally requested to fail!',
//         meta,
//       },
//     }
//   }

//    if (extraOptions.shout) {
//     return { data: 'CONGRATULATIONS', meta }
//   }

//   return { data: 'congratulations', meta }
// } 

export const { useGetUserByIdQuery, useCreateNewUserMutation } = userApi