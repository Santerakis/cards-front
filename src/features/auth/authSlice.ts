import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ArgRegisterType, authApi } from "features/auth/authApi"

const register = createAsyncThunk("auth/registerThunk", (arg: ArgRegisterType, thunkAPI) => {
  const { dispatch } = thunkAPI

  authApi.register(arg).then()
})

const slice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {}
})

export const authReducer = slice.reducer
export const authThunks = { register }