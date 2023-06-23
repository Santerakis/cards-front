import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ArgLoginType, ArgRegisterType, authApi } from "features/auth/authApi"
import { useAppDispatch } from "app/hooks"
import { appActions } from "app/appSlice"
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk"

const register = createAppAsyncThunk<any, ArgRegisterType>("auth/registerThunk", async (arg, thunkAPI) => {

  const { dispatch, rejectWithValue } = thunkAPI

  // return authApi.register(arg).then(res => {
  //   dispatch(authActions.setString({ q: "privettt" }))
  //   return 'www'
  // })
  //   .catch(e => {
  //     const err = e.response.data.error
  //     // dispatch(appActions.setIsLoading({isLoading: false}))
  //     debugger
  //     // dispatch(authActions.setString({q: err}))
  //     return rejectWithValue({ q: 'samurai' })
  //   })

  try {
    const res = await authApi.register(arg)
    return res
  } catch (e: any) {
    const err = e.response.data.error
    dispatch(appActions.setIsLoading({isLoading: false}))
    console.error('reg_error: ', e)
    return rejectWithValue({ q: 'samurai' })
  }

})
const login = createAsyncThunk("auth/loginThunk", (arg: ArgLoginType, thunkAPI) => {
  const { dispatch } = thunkAPI
  // debugger
authApi.login(arg).then(res => {
    dispatch(authActions.setString({ q: "hello" }))
    // return {q: 'hey111'}
  })
})

const slice = createSlice({
  name: "auth",
  initialState: {
    q: null as null | string
  },
  reducers: {
    setString: (state, action: PayloadAction<{ q: string }>) => {
      state.q = action.payload.q

    }
  },

  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
      // state.q = action.payload.q
      state.q = 'eee'
    })
      .addCase(register.rejected, (state, action) => {
      debugger
      // state.q = 'hello'
      state.q = action.payload.q
    })
      .addCase(register.fulfilled, (state, action) => {
      debugger
      state.q = 'hello_fulfilled'
    })

  }

})

export const authReducer = slice.reducer
export const authThunks = { register, login }
export const authActions = slice.actions