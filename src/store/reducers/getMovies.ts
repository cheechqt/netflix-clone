import { createAsyncThunk } from "@reduxjs/toolkit";
import { requests, baseURL } from "utils/constants";

export async function fetchMovies(url: string) {
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
    }
  });
  // na chto pomenyat any?????????
  const results: any[] = await Promise.all(responses);
  console.log(results);
  return Object.fromEntries(results);
});
