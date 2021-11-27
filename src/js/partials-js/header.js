const header = document.querySelector('#head');
const homePage = document.querySelector('#home-page');
const libraryPage = document.querySelector('#library-page');
const headerNav = document.querySelector('.header-nav__list');
const homePageWrapper = document.querySelector('.search-film__wrap');
const libraryPageWrapper = document.querySelector('.my-library__wrap');

const changePage = e => {
  e.preventDefault();
  if (e.target === e.currentTarget) return;

  if (e.target === homePage) {
    libraryPageWrapper.classList.add('visually-hidden');
    homePageWrapper.classList.remove('visually-hidden');
    libraryPage.classList.remove('current');
    homePage.classList.add('current');
    header.classList.remove('header__main--library-bcg');
  }

  if (e.target === libraryPage) {
    homePageWrapper.classList.add('visually-hidden');
    libraryPageWrapper.classList.remove('visually-hidden');
    libraryPage.classList.add('current');
    homePage.classList.remove('current');
    header.classList.add('header__main--library-bcg');
  }
};

headerNav.addEventListener('click', changePage);
