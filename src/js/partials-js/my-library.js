// import { Notify } from 'notiflix';
import { getMovieById } from '../services/api-services';
import createMarkup from '../markup/library-markup';

const gallery = document.querySelector('.gallery');
const myLibraryBtns = document.querySelector('.my-library__wrap');
const watchedBtn = document.querySelector('[data-button="watched"]');
const queueBtn = document.querySelector('[data-button="queue"]');

const checkStorage = () => {
  return {
    watchedFilms: JSON.parse(localStorage.getItem('Watched')),
    queueFilms: JSON.parse(localStorage.getItem('Queue')),
  };
};

const showActiveBtn = (btnToRemoveClass = queueBtn, btnToAddClass = watchedBtn) => {
  btnToRemoveClass.classList.remove('my-library__button-active');
  btnToAddClass.classList.add('my-library__button-active');
};

const renderLiblary = movies => {
  getMovies(movies)
    .then(res => {
      const markup = createMarkup(res);
      gallery.innerHTML = markup;
    })
    .catch(err => console.log(err));
};

const getMovies = async ids => {
  let moviesArr = [];
  const res = await ids.map(id => getMovieById(JSON.parse(id)));
  const data = await Promise.all(res);
  data.map(movie => moviesArr.splice(0, 0, movie));
  return moviesArr;
};

const changeLibraryPage = e => {
  if (e.target === e.currentTarget) return;

  const storage = checkStorage();

  if (watchedBtn.dataset.button === 'watched' && e.target === watchedBtn) {
    showActiveBtn();
    const storage = checkStorage();
    gallery.innerHTML = '';
    renderLiblary(storage.watchedFilms);

    if (!localStorage.getItem('Watched') || storage.watchedFilms.length === 0) {
      return console.log('NO FILM ADDED YET');
    }

    renderLiblary(storage.watchedFilms);
  }

  if (queueBtn.dataset.button === 'queue' && e.target === queueBtn) {
    showActiveBtn(watchedBtn, queueBtn);
    const storage = checkStorage();
    gallery.innerHTML = '';
    renderLiblary(storage.queueFilms);

    if (!localStorage.getItem('Queue') || storage.queueFilms.length === 0) {
      return console.log('NO FILM ADDED YET');
    }

    renderLiblary(storage.queueFilms);
  }
};

myLibraryBtns.addEventListener('click', changeLibraryPage);

export { renderLiblary, showActiveBtn, checkStorage };
