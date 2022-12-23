import { configureStore } from "@reduxjs/toolkit";
import { NetflixSlice } from "store/NetflixSlice";

export const store = configureStore({
  reducer: {
    netflixApp: NetflixSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
