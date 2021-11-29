import { getSearchMovie } from './get-movie-card';
import markupModal from '../markup/markup-modal';

const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', e => {
  if (e.target.closest('li').tagName !== 'LI') return false;
  const id = e.target.closest('li').getAttribute('id');

  getSearchMovie(id).then(movie => {
    const markup = markupModal(movie);
    galleryRef.insertAdjacentHTML('beforeend', markup);

    const bodyRef = document.querySelector('body');
    bodyRef.style.overflow = 'hidden';

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') backdropRef.remove();
    });

    const backdropRef = document.querySelector(`div[data-action="${id}"]`);

    backdropRef.addEventListener('click', e => {
      if (
        e.target.classList.contains('modal__btn-colse') ||
        e.target.classList.contains('modal__icon-close')
      ) {
        backdropRef.remove();
      }

      if (!e.target.classList.contains('backdrop')) {
        return;
      }
      backdropRef.remove();
      backdropRef.style.overflow = 'visible';
    });
  });
});
