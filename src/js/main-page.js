//https://image.tmdb.org/t/p/w500/    70nxSw3mFBsGmtkvcs91PbjerwD.jpg

import { BASE_URL, API_KEY, page } from './services/variables-for-request';

const galleryDiv = document.querySelector('.gallery');
const a = [{id: 28, name: 'Action'},
{id: 12, name: 'Adventure'},
{id: 16, name: 'Animation'},
{id: 35, name: 'Comedy'},
{id: 80, name: 'Crime'},
{id: 99, name: 'Documentary'},
{id: 18, name: 'Drama'},
{id: 10751, name: 'Family'},
{id: 14, name: 'Fantasy'},
{id: 36, name: 'History'},
{id: 27, name: 'Horror'},
{id: 10402, name: 'Music'},
{id: 9648, name: 'Mystery'},
{id: 10749, name: 'Romance'},
{id: 878, name: 'Science Fiction'},
{id: 10770, name: 'TV Movie'},
{id: 53, name: 'Thriller'},
{id: 10752, name: 'War'},
    { id: 37, name: 'Western' }]

// const keys = Object.keys(a);
// let aID = ''
// let aName = '';
// for (const key of keys) {
//   // Ключ
//     aID = a[key].id;
//     aName = a[key].name;
//   // Значение свойства
//   console.log(a[key].id);
// }


const getTrendingMovies = async () => {
  const response = await fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};
// const getGenres = async () => {
//   const response = await fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);
//   const data = await response.json();
//   return data;
// };

// getGenres().then(genres => console.log(genres));

function markupList(movies) {
  const markup = movies.results
      .map(({ poster_path, backdrop_pathL, genre_ids, release_date, title }) => {
          const yer = new Date(release_date);
          let q = [];
          for (let i = 0; i < genre_ids.length; i++) {
              const keys = Object.keys(a);
              for (const key of keys) {
                //   console.log(genre_ids[i]);
                //   console.log(a[key].id);
                if (genre_ids[i] === a[key].id) {
                  q.push(a[key].name);
                }
              }


            
          }
          console.log(q)
      return `<div class="container">
    <ul class="gallery">
    
        <li><img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" loading="lazy" width="" height="" />
    
        <div class="info">
    
            <h2 class="photo-card__title">${title}</h2>
            <ul class="photo-card__text">
    
                <li class="link-genre">${q}</li>
    
                <li class="link-year">${yer.getFullYear()}</li>
    
            </ul>
   
        </div>
        </li>
    </ul>
</div>`;
    })
    .join('');
  galleryDiv.insertAdjacentHTML('beforeend', markup);
  
}
getTrendingMovies().then(movies => markupList(movies));

//galleryDiv.addEventListener('click', onbtnLoadMore);
