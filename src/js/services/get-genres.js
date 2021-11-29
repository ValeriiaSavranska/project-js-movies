import { BASE_URL, API_KEY } from './variables-for-request';
import { handleBySpin } from '../main';
let genres = [];

const getGenres = async () => {
  const response = await fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);
  const data = await response.json();
  genres = data.genres;
};

//getGenres().then(genres => console.log(genres));
export { getGenres, genres };
