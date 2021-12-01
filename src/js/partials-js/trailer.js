import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import Notiflix from 'notiflix';
import { getTrailer } from '../services/api-services';

export default function playTrailer(id) {
  const trailerPlay = document.querySelector('button[data-btn="trailerdBtn"]');
  const play = e => {
    onShowTrailer(id);
  };
  trailerPlay.addEventListener('click', play);
}

async function onShowTrailer(id) {
  const result = await getTrailer(id);
  if (result.results.length === 0) {
    Notiflix.Notify.failure('Sorry, there is no trailer available');
    return;
  }
  const instance = basicLightbox.create(`
      <iframe src="https://www.youtube.com/embed/${result.results[0].key}?autoplay=1&origin" width="560" height="315" class="" frameborder="0"></iframe>
  `);
  instance.show();
}
Notiflix.Notify.init({
  zindex: 100,
  width: '400px',
  distance: '140px',
  fontSize: '12px',
  useIcon: false,
  timeout: 4000,
  position: 'center-top',
  clickToClose: true,
});
