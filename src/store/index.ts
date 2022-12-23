import { configureStore } from "@reduxjs/toolkit";
import { MoviesSlice } from "store/MoviesSlice";

export const store = configureStore({
  reducer: {
    movies: MoviesSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
