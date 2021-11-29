import { getTrendingMovies } from '../services/get-trending-movies';
import { getGenres } from '../services/get-genres';
import createMarkup from '../markup/markup-gallery';

const galleryDiv = document.querySelector('.gallery');
const headerNavTitle = document.querySelector('.header-nav__logo');

const renderMovies = async movies => {
  const markup = await createMarkup(movies);
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
