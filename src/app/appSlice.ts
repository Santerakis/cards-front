import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "app",
  initialState: {
    error: null as string | null,
    isLoading: true,
    isAppInitialized: false
  },
  reducers: {
    //так пока не асинхронцины
    setIsLoading: (state, action: PayloadAction<{isLoading: boolean}>) => {
      state.isLoading = action.payload.isLoading
    }
  }
})

export const appReducer = slice.reducer //для подключения
// export const {setLoading} = slice.actions
export const appActions = slice.actions