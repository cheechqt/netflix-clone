import { createSlice } from "@reduxjs/toolkit";
import { MoviesInitialState } from "types";
import { getMovies } from "./reducers/getMovies";

const initialState: MoviesInitialState = {
  netflixOriginals: [],
  trending: [],
  topRated: [],
  actions: [],
  comedy: [],
  horror: [],
  romance: [],
  documentary: []
};

export const MoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      for (let item in action.payload) {
        const name: keyof MoviesInitialState = item;
        state[name] = action.payload[name];
      }
    });
  }
});
