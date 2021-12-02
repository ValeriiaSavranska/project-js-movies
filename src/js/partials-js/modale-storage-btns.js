import { id } from '../services/renderModal';
import { renderLiblary, checkStorage } from '../partials-js/my-library';
import { marcup404, startAnimation } from '../markup/markup-404';

const watchedBtn = document.querySelector('[data-button="watched"]');
const queueBtn = document.querySelector('[data-button="queue"]');

const checkLocalStorage = item => {
  if (!localStorage.getItem(item)) localStorage.setItem(item, '[]');
  return JSON.parse(localStorage.getItem(item));
};

const getDataForLibrary = id => {
  const btnsWrapper = document.querySelector('.modal__btn-wrapper');
  const addToWatchedBtn = document.querySelector('button[data-btn="add-to-whatched"]');
  const removeFromWatchedBtn = document.querySelector('button[data-btn="remove-from-whatched"]');
  const addToQueueBtn = document.querySelector('button[data-btn="add-to-queue"]');
  const removeFromQueueBtn = document.querySelector('button[data-btn="remove-from-queue"]');

  const gallery = document.querySelector('.gallery');
  const myLibraryBtns = document.querySelector('.my-library__wrap');
  const watchedFilms = checkLocalStorage('Watched');
  const queueFilms = checkLocalStorage('Queue');

  const renderBtns = (btnToAddClass, btnToRemoveClass) => {
    btnToAddClass.classList.add('visually-hidden');
    btnToRemoveClass.classList.remove('visually-hidden');
  };

  const showBtns = () => {
    if (!watchedFilms.includes(id)) {
      renderBtns(removeFromWatchedBtn, addToWatchedBtn);
    } else {
      renderBtns(addToWatchedBtn, removeFromWatchedBtn);
    }

    if (!queueFilms.includes(id)) {
      renderBtns(removeFromQueueBtn, addToQueueBtn);
    } else {
      renderBtns(addToQueueBtn, removeFromQueueBtn);
    }
  };
  showBtns();

  const addToLocalStorage = e => {
    if (e.target === e.currentTarget) {
      return;
    }

    if (e.target === addToWatchedBtn) {
      watchedFilms.splice(0, 0, id);
      localStorage.setItem('Watched', JSON.stringify(watchedFilms));
      showBtns();

      if (
        watchedBtn.classList.contains('my-library__button-active') &&
        !myLibraryBtns.classList.contains('visually-hidden')
      ) {
        const storage = checkStorage();
        gallery.innerHTML = '';
        renderLiblary(storage.watchedFilms);
      }
    }

    if (e.target === removeFromWatchedBtn) {
      const idxToRemove = watchedFilms.indexOf(id);
      watchedFilms.splice(idxToRemove, 1);
      localStorage.setItem('Watched', JSON.stringify(watchedFilms));
      showBtns();

      if (
        watchedBtn.classList.contains('my-library__button-active') &&
        !myLibraryBtns.classList.contains('visually-hidden')
      ) {
        const storage = checkStorage();
        gallery.innerHTML = '';

        if (!localStorage.getItem('Watched') || storage.watchedFilms.length === 0) {
          gallery.innerHTML = marcup404('You not added movie yet');
          startAnimation();
          return;
        }

        renderLiblary(storage.watchedFilms);
      }
    }

    if (e.target === addToQueueBtn) {
      queueFilms.splice(0, 0, id);
      localStorage.setItem('Queue', JSON.stringify(queueFilms));
      showBtns();

      if (
        queueBtn.classList.contains('my-library__button-active') &&
        !myLibraryBtns.classList.contains('visually-hidden')
      ) {
        const storage = checkStorage();
        gallery.innerHTML = '';
        renderLiblary(storage.queueFilms);
      }
    }

    if (e.target === removeFromQueueBtn) {
      const idxToRemove = queueFilms.indexOf(id);
      queueFilms.splice(idxToRemove, 1);
      localStorage.setItem('Queue', JSON.stringify(queueFilms));
      showBtns();

      if (
        queueBtn.classList.contains('my-library__button-active') &&
        !myLibraryBtns.classList.contains('visually-hidden')
      ) {
        const storage = checkStorage();
        gallery.innerHTML = '';

        if (!localStorage.getItem('Queue') || storage.queueFilms.length === 0) {
          gallery.innerHTML = marcup404('You not added movie yet');
          startAnimation();
          return;
        }

        renderLiblary(storage.queueFilms);
      }
    }
  };

  btnsWrapper.addEventListener('click', addToLocalStorage);
};

export default getDataForLibrary;
