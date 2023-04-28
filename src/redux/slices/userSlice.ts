import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import CreateUserDTO from '../../types/CreateUserDTO'
import GetUserDTO from '../../types/GetUserDTO'

const initialState = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<GetUserDTO | CreateUserDTO>) => action.payload,
    reset: () => initialState
  },
})

// Create action creators for each case reducer function
export const { setUser, reset } = userSlice.actions

export default userSlice.reducer