import * as basicLightbox from 'basiclightbox';
import { getMovieById } from './api-services';
import markupModal from '../markup/markup-modal';
import getDataForLibrary from '../partials-js/modale-storage-btns';
import playTrailer from '../partials-js/trailer';

const galleryRef = document.querySelector('.gallery');
const bodyRef = document.querySelector('body');
const divForModal = document.querySelector('.for-modal');

let id = null;

function getOpenModal(e) {
  if (e.target === e.currentTarget) return false;
  id = e.target.closest('li').dataset.id;

  getMovieById(id).then(movie => {
    const markup = markupModal(movie);
    divForModal.insertAdjacentHTML('beforeend', markup);

    const modalRef = document.querySelector('.modal');
    modalRef.classList.add('show-modal');

    const backdropRef = document.querySelector(`div[data-action="${id}"]`);

    getDataForLibrary(id);
    playTrailer(id);

    bodyRef.classList.add('dont-scroll');

    function removeBackdrop() {
      backdropRef.remove();
      bodyRef.classList.remove('dont-scroll');
      document.removeEventListener('keydown', getCloseModalByEscape);
    }

    function getCloseModalByEscape(e) {
      if (e.key === 'Escape') {
        removeBackdrop();
      }
    }

    function getCloseModal(e) {
      if (
        e.target.classList.contains('modal__btn-colse') ||
        e.target.classList.contains('modal__icon-close')
      ) {
        removeBackdrop();
      }

      if (!e.target.classList.contains('backdrop')) {
        return;
      }
      removeBackdrop();
    }

    backdropRef.addEventListener('click', getCloseModal);
    document.addEventListener('keydown', getCloseModalByEscape);
  });
}

galleryRef.addEventListener('click', getOpenModal);

export default id;
