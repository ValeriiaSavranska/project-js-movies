import { BASE_URL, API_KEY } from './variables-for-request';

const getGenres = async () => {
  const response = await fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

getGenres().then(genres => console.log(genres));
