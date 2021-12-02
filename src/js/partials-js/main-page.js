import Notiflix from 'notiflix';
import { getGenres, getTrendingMovies, getSearchMovie } from '../services/api-services';
import createMarkup from '../markup/markup-gallery';
import { marcup404, startAnimation } from '../markup/markup-404';
import { onPagination } from '../services/pagination';

const galleryDiv = document.querySelector('.gallery');
const headerNavTitle = document.querySelector('.header-nav__logo');
const searchMovieForm = document.querySelector('#form');
const linkHome = document.querySelector('.header-nav__list-item-link');
const divAnimation = document.querySelector('.wrapper');
const mainContainer = document.querySelector('.container-hidden');

const renderMovies = movies => {
  divAnimation.innerHTML = '';
  mainContainer.classList.remove('visually-hidden');
  const markup = createMarkup(movies);
  galleryDiv.innerHTML = markup;
};

const renderTrendMovies = () => {
  getTrendingMovies()
    .then(movies => {
      onPagination(movies.total_results);
      renderMovies(movies);
    })
    .catch(err => console.log(err));
};

getGenres()
  .then(getTrendingMovies)
  .then(movies => {
    onPagination(movies.total_results);
    renderMovies(movies);
  })
  .catch(err => console.log(err));

function onClicByGallery(e) {
  e.preventDefault();
  galleryDiv.innerHTML = '';
  mainContainer.classList.remove('visually-hidden');
  renderTrendMovies();
}

function onSearchMovie(e) {
  e.preventDefault();
  galleryDiv.innerHTML = '';
  const inputText = e.target.search.value;
  if (!inputText) {
    renderTrendMovies();
    return;
  }

  getSearchMovie(inputText)
    .then(movies => {
      onPagination(movies.total_results, inputText);
      if (movies.results.length === 0) {
        mainContainer.classList.add('visually-hidden');
        divAnimation.innerHTML = marcup404('Movies not found');
        startAnimation();
        Notiflix.Notify.failure('Search result not successful. Enter the correct movie name and ');
        return;
      }
      renderMovies(movies);
    })
    .catch(err => console.log(err));
}

headerNavTitle.addEventListener('click', onClicByGallery);

linkHome.addEventListener('click', onClicByGallery);

searchMovieForm.addEventListener('submit', onSearchMovie);

Notiflix.Notify.init({
  width: '400px',
  distance: '140px',
  fontSize: '12px',
  useIcon: false,
  timeout: 2000,
  position: 'center-top',
  clickToClose: true,
});

export { renderMovies, galleryDiv };
