import { genres } from '../services/api-services';

export default function createMarkup(movies) {
  const markup = movies.results.map(
    ({ poster_path, backdrop_pathL, genre_ids, release_date, title }) => {
      let arrGenre = genre_ids.map(id => genres.find(genre => genre.id === id)?.name);
      if (arrGenre.length > 3) {
        arrGenre.splice(2, arrGenre.length - 2, 'Other');
      }
      const yer = new Date(release_date);
      return `
        <li class="card">
        <img class="card-img" src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" loading="lazy" />
        <div class="card-info">
            <h2 class="card-info__title">${title}</h2>
            <ul class="card-info__text">
                <li class="link-genre">${arrGenre.join(', ')} | ${yer.getFullYear()}</li>
            </ul>
        </div>
        </li>`;
    },
  );
  return markup.join('');
}
