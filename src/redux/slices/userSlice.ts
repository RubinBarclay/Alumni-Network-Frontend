import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import GetUserDTO from '../../types/GetUserDTO'

const initialState: GetUserDTO = {
  id: 0,
  name: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<GetUserDTO>) => {
      state = action.payload
    }
  },
})

// Create action creators for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer