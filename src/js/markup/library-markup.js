export default function createMarkup(movies) {
  const markup = movies.map(({ id, poster_path, backdrop_path, genres, release_date, title }) => {
    let arrGenre = genres.map(genre => genre.name);
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
        }" alt="${title}" loading="lazy" />
        <div class="card-info">
            <h2 class="card-info__title">${title}</h2>
            <ul class="card-info__text">
                <li class="link-genre">${arrGenre.join(', ')} | ${year.getFullYear()}</li>
            </ul>
        </div>
        </li>`;
  });
  return markup.join('');
}
