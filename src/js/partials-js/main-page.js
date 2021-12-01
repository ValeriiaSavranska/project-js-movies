import Notiflix from 'notiflix';
import { getGenres, getTrendingMovies, getSearchMovie } from '../services/api-services';
import createMarkup from '../markup/markup-gallery';
import { onPagination } from '../services/pagination';

const galleryDiv = document.querySelector('.gallery');
const headerNavTitle = document.querySelector('.header-nav__logo');
const searchMovieForm = document.querySelector('#form');
const linkHome = document.querySelector('.header-nav__list-item-link');

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

linkHome.addEventListener('click', e => {
  e.preventDefault();
  galleryDiv.innerHTML = '';
  getTrendingMovies().then(movies => {
    onPagination(movies.total_pages);
    renderMovies(movies);
  });
});

searchMovieForm.addEventListener('submit', onSearchMovie);
function onSearchMovie(e) {
  e.preventDefault();
  galleryDiv.innerHTML = '';
  const inputText = e.target.search.value;
  if (!inputText) {
    getTrendingMovies().then(movies => {
      onPagination(movies.total_pages);
      renderMovies(movies);
    });
    return;
  }

  getSearchMovie(inputText)
    .then(movies => {
      if (movies.results.length === 0) {
        Notiflix.Notify.failure('Search result not successful. Enter the correct movie name and ');
      }
      onPagination(movies.total_pages, inputText);
      renderMovies(movies);
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
