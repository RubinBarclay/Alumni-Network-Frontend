import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import GetUserDTO from '../../types/GetUserDTO'
import { userApi } from '../api/userApi'

const initialState = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<GetUserDTO>) => action.payload,
    reset: () => initialState
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.createNewUser.matchFulfilled,
      (state, action) => action.payload
    )
  },
})

// Create action creators for each case reducer function
export const { setUser, reset } = userSlice.actions

export default userSlice.reducer