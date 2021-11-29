import { BASE_URL, API_KEY, page } from './variables-for-request';
import { handleBySpin } from '../main';

const getTrendingMovies = async () => {
  //showSpinner();
  return handleBySpin(async () => {
    const response = await fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`);
    return response.json();
  });
  //hideSpinner();
};

//getTrendingMovies().then(movies => console.log(movies));
export { getTrendingMovies };
