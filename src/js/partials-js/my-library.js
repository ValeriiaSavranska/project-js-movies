import { getMovieById } from '../services/api-services';
import createMarkup from '../markup/library-markup';
import { marcup404, startAnimation } from '../markup/markup-404';

const gallery = document.querySelector('.gallery');
const myLibraryBtns = document.querySelector('.my-library__wrap');
const watchedBtn = document.querySelector('[data-button="watched"]');
const queueBtn = document.querySelector('[data-button="queue"]');
const divAnimation = document.querySelector('.wrapper');
const mainContainer = document.querySelector('.container-hidden');

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
  const res = await ids.map(id => getMovieById(JSON.parse(id)));
  const data = await Promise.all(res);
  let moviesArr = data;
  return moviesArr;
};

const changeLibraryPage = e => {
  if (e.target === e.currentTarget) return;

  const storage = checkStorage();

  if (watchedBtn.dataset.button === 'watched' && e.target === watchedBtn) {
    divAnimation.innerHTML = '';
    gallery.innerHTML = '';
    showActiveBtn();
    const storage = checkStorage();

    if (!localStorage.getItem('Watched') || storage.watchedFilms.length === 0) {
      mainContainer.classList.add('visually-hidden');
      divAnimation.innerHTML = marcup404(`You haven't added movies yet`);
      startAnimation();
      return;
    }
    mainContainer.classList.remove('visually-hidden');
    renderLiblary(storage.watchedFilms);
  }

  if (queueBtn.dataset.button === 'queue' && e.target === queueBtn) {
    divAnimation.innerHTML = '';
    gallery.innerHTML = '';
    showActiveBtn(watchedBtn, queueBtn);
    const storage = checkStorage();

    if (!localStorage.getItem('Queue') || storage.queueFilms.length === 0) {
      mainContainer.classList.add('visually-hidden');
      divAnimation.innerHTML = marcup404(`You haven't added movies yet`);
      startAnimation();
      return;
    }
    mainContainer.classList.remove('visually-hidden');
    renderLiblary(storage.queueFilms);
  }
};

myLibraryBtns.addEventListener('click', changeLibraryPage);

export { renderLiblary, showActiveBtn, checkStorage };
