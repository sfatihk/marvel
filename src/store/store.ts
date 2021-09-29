import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import CharacterReducer from "./features/characterSlice";
export const store = configureStore({
  reducer: {
    character: CharacterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
