const API_KEY = process.env.REACT_APP_API_KEY;

export const baseURL = "https://api.themoviedb.org/3";
export const baseImgURL = "https://image.tmdb.org/t/p/original/";

export const requests = {
  netflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  actions: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};
