import { genres } from '../services/api-services';
import notFoundImg from '../../images/image-not-found.jpg';
export default function createMarkup(movies) {
  const markup = movies.results.map(
    ({ id, poster_path, backdrop_pathL, genre_ids, release_date, title }) => {
      let arrGenre = genre_ids.map(id => genres.find(genre => genre.id === id).name);
      let img = `https://image.tmdb.org/t/p/w300${poster_path}`;
      if (arrGenre.length > 3) {
        arrGenre.splice(2, arrGenre.length - 2, 'Other');
      }
      const year = new Date(release_date);

      return `
        <li class="card" data-id="${id}">
        <img class="card-img" src="${
          !poster_path ? notFoundImg : img
        }" alt="${title} " loading="lazy" />
        <div class="card-info">
            <h2 class="card-info__title">${title}</h2>
            <ul class="card-info__text">
                <li class="link-genre"><p>${arrGenre.join(', ')} | ${year.getFullYear()} </p></li>
            </ul>
        </div>
        </li>`;
    },
  );
  return markup.join('');
}
