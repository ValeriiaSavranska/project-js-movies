import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { getSearchMovie, getTrendingMovies } from './api-services';
import { renderMovies } from '../partials-js/main-page';

const container = document.getElementById('tui-pagination-container');

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

  const pagination = new Pagination(container, options);

  pagination.on('afterMove', eventData => {
    const page = pagination.getCurrentPage();

    if (movieToSearch) {
      getSearchMovie(movieToSearch, page);
    } else {
      getTrendingMovies(page).then(movies => renderMovies(movies));
    }
  });
};

export { onPagination };
