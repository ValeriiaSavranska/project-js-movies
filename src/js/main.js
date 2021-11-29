const loader = document.querySelector('.loader');

const handleBySpin = async cb => {
  showSpinner();
  const data = await cb();
  hideSpinner();
  return data;
};

const showSpinner = () => {
  loader.classList.remove('loader-hide');
  loader.classList.add('loader-show');
};

const hideSpinner = () => {
  loader.classList.remove('loader-show');
  loader.classList.add('loader-hide');
};

export { showSpinner, hideSpinner, handleBySpin };

// import { handleBySpin } from '../main';

// const getSearchMovie = async movieId => {
//   return handleBySpin(async () => {
//     const response = await fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
//     return response.json();
//   });
// };
