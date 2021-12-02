import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { getSearchMovie, getTrendingMovies } from './api-services';
import { renderMovies } from '../partials-js/main-page';

const container = document.getElementById('tui-pagination-container');

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const onPagination = (totalItems = 1000, movieToSearch = '') => {
  const options = {
    totalItems,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
  };

  container.classList.remove('visually-hidden');

  if (totalItems <= 20) {
    container.classList.add('visually-hidden');
    return;
  }

  const pagination = new Pagination(container, options);

  pagination.on('afterMove', eventData => {
    const page = pagination.getCurrentPage();

    if (movieToSearch) {
      getSearchMovie(movieToSearch, page)
        .then(movies => renderMovies(movies))
        .catch(err => console.log(err));
      scrollToTop();
    } else {
      getTrendingMovies(page)
        .then(movies => renderMovies(movies))
        .catch(err => console.log(err));
      scrollToTop();
    }
  });
};

export { onPagination };
