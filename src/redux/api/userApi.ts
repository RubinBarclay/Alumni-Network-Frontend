import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import GetUserDTO from '../../types/GetUserDTO'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_API_URL}/api/v1` }),
  endpoints: (builder) => ({
    getUserById: builder.query<GetUserDTO, string>({
      query: (id) => `/users/${id}`,
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

export const { useGetUserByIdQuery } = userApi