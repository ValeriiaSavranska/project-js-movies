const myLibraryBtns = document.querySelector('.my-library__wrap');
const watchedBtn = document.querySelector('[data-button="watched"]');
const queueBtn = document.querySelector('[data-button="queue"]');

const changeLibraryPage = e => {
  if (e.target === e.currentTarget) return;

  if (watchedBtn.dataset.button === 'watched' && e.target === watchedBtn) {
    queueBtn.classList.remove('my-library__button-active');
    watchedBtn.classList.add('my-library__button-active');
  }

  if (queueBtn.dataset.button === 'queue' && e.target === queueBtn) {
    watchedBtn.classList.remove('my-library__button-active');
    queueBtn.classList.add('my-library__button-active');
  }
};

myLibraryBtns.addEventListener('click', changeLibraryPage);
