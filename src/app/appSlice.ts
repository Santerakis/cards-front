import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosError, isAxiosError } from "axios"
import { toast } from "react-toastify"

const slice = createSlice({
  name: "app",
  initialState: {
    error: null as string | null,
    isLoading: false,
    isAppInitialized: false
  },
  reducers: {
    //так пока не асинхронцины
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading
    },
    setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
      debugger
      state.error = action.payload.error
    }
  },
  extraReducers: builder => {
    builder
      .addMatcher(
      (actionM) => {
        console.log('1: ', actionM)
        return (actionM.type.endsWith('/pending'))
      },
      (state, action) => {
        console.log('2: ', action)
        debugger
        state.isLoading = true
      }
    )
      .addMatcher(
        (actionM) => {
          console.log('1: ', actionM)
          return (actionM.type.endsWith('/fulfilled'))
        },
        (state, action) => {
          console.log('2: ', action)
          state.isLoading = false
        }
      )
      .addMatcher(
        (actionM) => {
          console.log('1: ', actionM)
          return (actionM.type.endsWith('/rejected'))
        },
        (state, action) => {
          console.log('2: ', action)
          debugger
          state.isLoading = false

          if (!action.payload.showGlobalError) return;
          const err = action.payload.e as Error | AxiosError<{ error: string }>;
          if (isAxiosError(err)) {
            toast.error(err.response ? err.response.data.error : err.message)
          } else {
            toast.error(`Native error ${err.message}`)
          }


        }
      )
  }

})

export const appReducer = slice.reducer //для подключения
// export const {setLoading} = slice.actions
export const appActions = slice.actions