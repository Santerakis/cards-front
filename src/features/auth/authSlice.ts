import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ArgLoginType, ArgRegisterType, authApi } from "features/auth/authApi"
import { useAppDispatch } from "common/hooks/hooks"
import { appActions } from "app/appSlice"
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk"
import { thunkTryCatch } from "common/utils/thunkTryCatch"

// const register = createAppAsyncThunk<any, ArgRegisterType>("auth/registerThunk", async (arg, thunkAPI) => {
//   const { dispatch, rejectWithValue } = thunkAPI
//   try {
//     debugger
//     const res = await authApi.register(arg)
//     return res
//   } catch (e: any) {
//     const error = e.response ? e.response.data.error : e.message
//     dispatch(appActions.setAppError({ error }))
//     return rejectWithValue(null)
//   }
// })

const register = createAppAsyncThunk<any, ArgRegisterType>("auth/registerThunk", async (arg, thunkAPI) => {
  thunkTryCatch(thunkAPI, async () => {
    const res = await authApi.register(arg)
    return res
  })
})

const login = createAppAsyncThunk<any, ArgLoginType>("auth/loginThunk", async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
  return await authApi.login(arg)
  })
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
        debugger
        state.q = "extra"
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