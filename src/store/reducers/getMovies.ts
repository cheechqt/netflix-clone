import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk(
  "netflixApp/getMovies",
  async (url: string) => {
    const data = await fetch(url).then((r) => r.json());
    console.log(data);
    return data;
  }
);
