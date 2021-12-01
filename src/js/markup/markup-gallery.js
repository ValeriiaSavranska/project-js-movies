import { genres } from '../services/api-services';

export default function createMarkup(movies) {
  const markup = movies.results.map(
    ({ id, poster_path, backdrop_pathL, genre_ids, release_date, title, vote_average }) => {
      let arrGenre = genre_ids.map(id => genres.find(genre => genre.id === id).name);
      let img = `https://image.tmdb.org/t/p/w300${poster_path}`;
      if (arrGenre.length > 3) {
        arrGenre.splice(2, arrGenre.length - 2, 'Other');
      }
      const year = new Date(release_date);

      return `
        <li class="card" data-id="${id}">
        <img class="card-img" src="${
          !poster_path
            ? 'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470175715831-NUJOMI6VW13ZNT1MI0VB/image-asset.jpeg?format=750w'
            : img
        }" alt="${title} " loading="lazy" />
        <div class="card-info">
            <h2 class="card-info__title">${title}</h2>
            <ul class="card-info__text">
                <li class="link-genre">${arrGenre.join(', ')} | ${year.getFullYear()} </li>
                <li class="card-info__vote">${vote_average}</li>
            </ul>
        </div>
        </li>`;
    },
  );
  return markup.join('');
}
