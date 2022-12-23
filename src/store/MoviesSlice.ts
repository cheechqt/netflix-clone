import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  netflixOriginals: [],
  trending: [],
  topRated: [],
  action: [],
  comedy: [],
  horror: [],
  romance: [],
  documentary: []
};

export const MoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
});
