import { createAsyncThunk } from "@reduxjs/toolkit";
import { requests, baseURL } from "utils/constants";

async function fetchMovies(url: string) {
  const data = await fetch(baseURL + url).then((r) => r.json());
  return data.results;
}

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  const responses = Object.entries(requests).map(async ([key, value]) => {
    try {
      const response = await fetchMovies(value);
      return [key, response];
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
      }
      return [key, e];
    }
  });

  const results = await Promise.all(responses);
  return Object.fromEntries(results);
});
