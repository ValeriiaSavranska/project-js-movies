import { BASE_URL, API_KEY } from './variables-for-request';

const getSearchMovie = async movieId => {
  const response = await fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

getSearchMovie(850522).then(movie => console.log(movie));
