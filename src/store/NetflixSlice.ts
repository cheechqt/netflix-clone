import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "types";
import { getMovies } from "./reducers/getMovies";

const initialState: InitialState = {
  movies: []
};

export const NetflixSlice = createSlice({
  name: "netflixApp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movies = action.payload.data;
    });
  }
});
