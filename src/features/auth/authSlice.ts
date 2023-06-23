import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ArgLoginType, ArgRegisterType, authApi } from "features/auth/authApi"
import { useAppDispatch } from "app/hooks"
import { appActions } from "app/appSlice"

const register = createAsyncThunk("auth/registerThunk", async (arg: ArgRegisterType, thunkAPI) => {

  const {dispatch, rejectWithValue} = thunkAPI

  // authApi.register(arg).then(res => {
  //   dispatch(authActions.setString({ q: "privettt" }))
  // })
  //   .catch(e => {
  //     dispatch(appActions.setIsLoading({isLoading: false}))
  //   })

  try {
    const res = await authApi.register(arg)
  } catch (e) {
    console.error('reg_error: ', e)
  }

})
const login = createAsyncThunk("auth/loginThunk", (arg: ArgLoginType, thunkAPI) => {
  const {dispatch} = thunkAPI
  // debugger
  authApi.login(arg).then(res => {
    // dispatch(authActions.setString({ q: "hello" }))
    // return {q: 'hey'}

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
    builder.addCase(login.fulfilled, (state, action) => {
      state.q = "good"
    })
    builder.addCase(register.rejected, (state, action) => {
      // debugger
    })

  }

})

export const authReducer = slice.reducer
export const authThunks = { register, login }
export const authActions = slice.actions