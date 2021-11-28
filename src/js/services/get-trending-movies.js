import { BASE_URL, API_KEY, page } from './variables-for-request';

const getTrendingMovies = async () => {
  const response = await fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

//getTrendingMovies().then(movies => console.log(movies));
export { getTrendingMovies };