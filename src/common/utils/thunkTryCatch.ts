import { BaseThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk"
import { AppDispatch, RootState } from "app/store"
import { appActions } from "app/appSlice"
import { AxiosError, isAxiosError } from "axios"

// export const thunkTryCatch = async (thunkAPI: BaseThunkAPI<RootState, any, AppDispatch, null>, logic: Function) => {
//   const { dispatch, rejectWithValue } = thunkAPI;
//   try {
//     return await logic();
//   } catch (e: any) {
//     const error = e.response ? e.response.data.error : e.message;
//     dispatch(appActions.setAppError({ error }));
//     return rejectWithValue(null);
//   }
// };


export const thunkTryCatch = async (thunkAPI: BaseThunkAPI<RootState, any, AppDispatch, unknown>, logic: Function) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    return await logic();
  } catch (e) {
    debugger
    const err = e as Error | AxiosError<{ error: string }>;
    if (isAxiosError(err)) {
      const error = err.response ? err.response.data.error : err.message;
      dispatch(appActions.setAppError({ error }));
    } else {
      dispatch(appActions.setAppError({ error: `Native error ${err.message}` }));
    }
    return rejectWithValue(null);
  }
};