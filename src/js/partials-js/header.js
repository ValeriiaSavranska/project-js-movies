import { renderLiblary, showActiveBtn, checkStorage } from '../partials-js/my-library';
import { handleBySpin } from '../main';
import { marcup404, startAnimation } from '../markup/markup-404';

const gallery = document.querySelector('.gallery');
const header = document.querySelector('#head');
const homePage = document.querySelector('#home-page');
const libraryPage = document.querySelector('#library-page');
const myForm = document.querySelector('#form');
const homePageWrapper = document.querySelector('.search-film__wrap');
const libraryPageWrapper = document.querySelector('.my-library__wrap');
const navLogo = document.querySelector('#nav-logo');
const headerNavBtns = document.querySelector('.header-nav__list');
const container = document.getElementById('tui-pagination-container');
const divAnimation = document.querySelector('.wrapper');
const mainContainer = document.querySelector('.container-hidden');

const changePage = e => {
  e.preventDefault();
  myForm.reset();

  if (e.target === headerNavBtns) return;

  if (e.target === homePage || e.currentTarget === navLogo) {
    mainContainer.classList.remove('visually-hidden');
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
  myForm.reset();
  divAnimation.innerHTML = '';
  gallery.innerHTML = '';

  if (!localStorage.getItem('Watched') || storage.watchedFilms.length === 0) {
    mainContainer.classList.add('visually-hidden');
    divAnimation.innerHTML = marcup404(`You haven't added movies yet`);
    startAnimation();
    return;
  }
  mainContainer.classList.remove('visually-hidden');
  renderLiblary(storage.watchedFilms);
});

headerNavBtns.addEventListener('click', changePage);
navLogo.addEventListener('click', changePage);
