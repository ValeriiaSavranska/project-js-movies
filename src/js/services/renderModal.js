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

    const btnColseRef = document.querySelector(`button[data-action="${id}"]`);
    btnColseRef.addEventListener('click', e => {
      const backdrop = e.target.closest('.backdrop');
      backdrop.remove();
      bodyRef.style.overflow = 'auto';
    });
  });
});
