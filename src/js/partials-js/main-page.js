import Notiflix from 'notiflix';
import { getGenres, getTrendingMovies, getSearchMovie } from '../services/api-services';
import createMarkup from '../markup/markup-gallery';
import { onPagination } from '../services/pagination';

const galleryDiv = document.querySelector('.gallery');
const headerNavTitle = document.querySelector('.header-nav__logo');
const inputBtn = document.querySelector('.input__btn');
const searchMovieForm = document.querySelector('#form');
console.log('searchMovieForm', searchMovieForm);

const renderMovies = movies => {
  const markup = createMarkup(movies);
  galleryDiv.innerHTML = markup;
};
getGenres()
  .then(getTrendingMovies)
  .then(movies => {
    onPagination(movies.total_pages);
    renderMovies(movies);
  });

headerNavTitle.addEventListener('click', e => {
  e.preventDefault();
  galleryDiv.innerHTML = '';
  getTrendingMovies().then(movies => {
    onPagination(movies.total_pages);
    renderMovies(movies);
  });
});

searchMovieForm.addEventListener('submit', onSearchMovie);
// inputBtn.addEventListener('click', onSearchMovie);
function onSearchMovie(e) {
  e.preventDefault();
  galleryDiv.innerHTML = '';
  const inputText = e.target.search.value;
  console.log('inputText', inputText);
  if (!inputText) {
    getTrendingMovies().then(movies => renderMovies(movies));
    return;
  }

  getSearchMovie(inputText)
    .then(movies => {
      console.log('onSearchMovie ~ movies', movies);
      // if(movies)
      if (movies.results.length === 0) {
        Notiflix.Notify.failure('Search result not successful. Enter the correct movie name and ');
      }
      renderMovies(movies);
      console.log('onSearchMovie ~ movies', movies);
    })
    .catch(err => console.log(err.message));
}

Notiflix.Notify.init({
  width: '400px',
  distance: '140px',
  fontSize: '12px',
  useIcon: false,
  timeout: 2000,
  position: 'center-top',
  clickToClose: true,
});

export { renderMovies };
