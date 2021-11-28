import { BASE_URL, API_KEY, page } from './variables-for-request';

const getSearchMovie = async movieToSearch => {
  const response = await fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${movieToSearch}`);
  const data = await response.json();
  return data;
};

//getSearchMovie('venom').then(movies => console.log(movies));
export { getSearchMovie };