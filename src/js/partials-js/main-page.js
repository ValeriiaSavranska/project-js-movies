import { getTrendingMovies } from '../services/get-trending-movies'
import { getGenres } from '../services/get-genres';


const galleryDiv = document.querySelector('.gallery');
const headerNavTitle = document.querySelector('.header-nav__logo');


function markupTrendin(movies) {
  const markup = movies.results.map(
    ({ poster_path, backdrop_pathL, genre_ids, release_date, title }) => {
      let Other = [];
      const arrGenre = [];
      getGenres().then(data => {
        const arr = data.genres.map(item => {
          for (let i = 0; i < genre_ids.length; i++) {
            if (genre_ids[i] === item.id ) {
              let name = item.name;
              arrGenre.push(name);
            }
          }
        });
        if (arrGenre.length > 3) {
        Other.push(arrGenre[0]);
        Other.push(arrGenre[1]);
        Other.push('Other');
        } else {
        Other = [...arrGenre];
        }
        const yer = new Date(release_date);
        const markupTwo = `
        <li class="card"><img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" loading="lazy" width="" height="" />
        <div class="info">
            <h2 class="photo-card__title">${title}</h2>
            <ul class="photo-card__text">
                <li class="link-genre">${Other.join(', ')} | ${yer.getFullYear()}</li>
            </ul>
        </div>
        </li>`;
        galleryDiv.insertAdjacentHTML('beforeend', markupTwo);
      });
    },
  );
}
getTrendingMovies().then(movies => markupTrendin(movies));




headerNavTitle.addEventListener('click', (e) => {
  e.preventDefault();
  getTrendingMovies().then(movies => markupTrendin(movies));
})



