import { renderLiblary, showActiveBtn, checkStorage } from '../partials-js/my-library';
import createMarkup from '../markup/library-markup';
import { handleBySpin } from '../main';
import { marcup404, startAnimation } from '../markup/markup-404';

const gallery = document.querySelector('.gallery');
const header = document.querySelector('#head');
const homePage = document.querySelector('#home-page');
const libraryPage = document.querySelector('#library-page');
const homePageWrapper = document.querySelector('.search-film__wrap');
const libraryPageWrapper = document.querySelector('.my-library__wrap');
const navLogo = document.querySelector('#nav-logo');
const headerNavBtns = document.querySelector('.header-nav__list');
const container = document.getElementById('tui-pagination-container');

const changePage = e => {
  e.preventDefault();

  if (e.target === headerNavBtns) return;

  if (e.target === homePage || e.currentTarget === navLogo) {
    libraryPageWrapper.classList.add('visually-hidden');
    homePageWrapper.classList.remove('visually-hidden');
    libraryPage.classList.remove('current');
    homePage.classList.add('current');
    header.classList.remove('header__main--library-bcg');
    container.classList.remove('visually-hidden');
  }

  if (e.target === libraryPage) {
    handleBySpin(() => {
      libraryPageWrapper.classList.remove('visually-hidden');
      homePageWrapper.classList.add('visually-hidden');
      libraryPage.classList.add('current');
      homePage.classList.remove('current');
      header.classList.add('header__main--library-bcg');
      container.classList.add('visually-hidden');
    });
  }
};

libraryPage.addEventListener('click', e => {
  showActiveBtn();
  const storage = checkStorage();

  gallery.innerHTML = '';

  if (!localStorage.getItem('Watched') || storage.watchedFilms.length === 0) {
    gallery.innerHTML = marcup404('You not added movie yet');
    startAnimation();
    return;
  }

  renderLiblary(storage.watchedFilms);
});

headerNavBtns.addEventListener('click', changePage);
navLogo.addEventListener('click', changePage);
