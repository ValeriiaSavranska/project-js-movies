import { getGenres, getTrendingMovies } from '../services/api-services';
import createMarkup from '../markup/markup-gallery';

const galleryDiv = document.querySelector('.gallery');
const headerNavTitle = document.querySelector('.header-nav__logo');

const renderMovies = movies => {
  const markup = createMarkup(movies);
  galleryDiv.innerHTML = markup;
};
getGenres()
  .then(getTrendingMovies)
  .then(movies => renderMovies(movies));

//getTrendingMovies().then(movies => markupTrendin(movies));

headerNavTitle.addEventListener('click', e => {
  e.preventDefault();
  galleryDiv.innerHTML = '';
  getTrendingMovies().then(movies => renderMovies(movies));
});
