import { BASE_URL, API_KEY } from './variables-for-request';

const getSearchMovie = async movieId => {
  return handleBySpin(async () => {
    const response = await fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
    return response.json();
  });
};

//getSearchMovie(850522).then(movie => console.log(movie));
export { getSearchMovie };
