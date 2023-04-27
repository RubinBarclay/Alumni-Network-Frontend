import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import CreateUserDTO from '../../types/CreateUserDTO'
import GetUserDTO from '../../types/GetUserDTO'

const initialState: GetUserDTO = {
  id: 0,
  name: ""
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<CreateUserDTO>) => {
      state.name = action.payload.name
    }
  },
})

// Create action creators for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer