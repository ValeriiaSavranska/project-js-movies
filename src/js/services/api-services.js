import { handleBySpin } from '../main';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '61e2735d71b7e3847b723f570f360fd1';

let genres = [];

const getGenres = async () => {
  const response = await fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);
  const data = await response.json();
  genres = data.genres;
};

const getTrendingMovies = async (page = 1) => {
  return handleBySpin(async () => {
    const response = await fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=${page}`);

    return response.json();
  });
};

const getSearchMovie = async (movieToSearch, page = 1) => {
  return handleBySpin(async () => {
    const response = await fetch(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${movieToSearch}&page=${page}`,
    );

    return response.json();
  });
};

const getMovieById = async movieId => {
  const response = await fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

export { getGenres, genres, getTrendingMovies, getSearchMovie, getMovieById };
