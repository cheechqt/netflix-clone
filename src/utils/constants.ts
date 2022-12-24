const API_KEY = process.env.REACT_APP_API_KEY;

export const baseURL = "https://api.themoviedb.org/3";

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

export const sections = [
  {
    title: "Netflix Originals",
    section: "netflixOriginals"
  },
  {
    title: "Trending",
    section: "trending"
  },
  {
    title: "Top Rated",
    section: "topRated"
  },
  {
    title: "Action",
    section: "actions"
  },
  {
    title: "Comedy",
    section: "comedy"
  },
  {
    title: "Horror",
    section: "horror"
  },
  {
    title: "Romance",
    section: "romance"
  },
  {
    title: "Documentary",
    section: "documentary"
  }
];
