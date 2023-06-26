import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ArgLoginType, ArgRegisterType, authApi } from "features/auth/authApi"
import { useAppDispatch } from "app/hooks"
import { appActions } from "app/appSlice"
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk"

const register = createAppAsyncThunk<any, ArgRegisterType>("auth/registerThunk", async (arg, thunkAPI) => {

  const { dispatch, rejectWithValue } = thunkAPI

  // return authApi.register(arg).then(res => {
  //   return { ee: "then" }
  // })
  //   .catch(e => {
  //     debugger
  //     const err = e.ww
  //     dispatch(authActions.setString({ q: "catch_then" }))
  //     return rejectWithValue({ qq: "catch_samurai" })
  //   })

  try {
    debugger
    const res = await authApi.register(arg)
    return res
  } catch (e: any) {
    const error = e.response ? e.response.data.error : e.message
    dispatch(appActions.setAppError({ error }))
    return rejectWithValue(null)
  }

})
const login = createAsyncThunk("auth/loginThunk", async (arg: ArgLoginType, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI
  // debugger
//   dispatch(authActions.setString({ q: "start" }))
  return authApi.login(arg).then(res => {
    dispatch(authActions.setString({ q: "hello" }))
    return { qw: "hey111" }
  }).catch(e => {
    return rejectWithValue({ qw: "hey111" })
  })

  // const res = await authApi.login(arg)
  // return { q: "hey111" }

})

const slice = createSlice({
  name: "auth",
  initialState: {
    q: null as null | string
  },
  reducers: {
    setString: (state, action: PayloadAction<{ q: string }>) => {
      debugger
      state.q = action.payload.q
    }
  },

  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.q = action.payload.qw
        debugger
        // state.q = "extra"
      })
      .addCase(login.rejected, (state, action) => {
        // state.q = action.payload.q
        debugger
        state.q = "extra"
      })
      .addCase(register.rejected, (state, action) => {
        debugger
        state.q = "extra_rejected"
        // state.q = action.payload.qq
      })
      .addCase(register.fulfilled, (state, action) => {
        debugger
        state.q = "extra_fulfilled"
      })

  }

})

export const authReducer = slice.reducer
export const authThunks = { register, login }
export const authActions = slice.actions