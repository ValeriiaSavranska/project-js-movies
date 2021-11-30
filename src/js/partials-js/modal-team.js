// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const footerLinkRef = document.querySelector('.footer__icon');
const bodyRef = document.querySelector('body');
const modalTeam = document.querySelector('#myModal');
const close = document.querySelector('.close');
const vForModal = document.querySelector('.for-modal');
console.log(vForModal);

function createModalTeam() {
  const markup = `
   <div class="backdrop1">
    <div class="modal-content">
  <div class="modal-header">
    <span class="close">Х</span>
    <h2>Наша команда</h2>
  </div>

  <div class="modal-body">
  <a class="modal-body__item" href="./lera.jpg">
    <img src="../../images/team/aa.jpg" alt="фото3" width="400"/>
  </a>
  <a class="modal-body__item" href="../../images/team/vladyslav.jpg">
    <img src="../../images/team/vladyslav.jpg" alt="фото3" width="40"/>
  </a>  
  <a class="modal-body__item" href="../../images/team/bogdan.jpg">
    <img src="../../images/team/bogdan.jpg" alt="фото3" width="40"/>
  </a>  
  <a class="modal-body__item" href="../../images/team/dima.jpg">
    <img src="../../images/team/dima.jpg" alt="фото3" width="40"/>
  </a>  
  <a class="modal-body__item" href="../../images/team/ivan.jpg">
    <img src="../../images/team/ivan.jpg" alt="фото3" width="40"/>
  </a>  
  <a class="modal-body__item" href="../../images/team/Valentyn.jpg">
    <img src="../../images/team/Valentyn.jpg" alt="фото3" width="40"/>
  </a>  
  <a class="modal-body__item" href="../../images/team/vitalii.jpg">
    <img src="../../images/team/vitalii.jpg" alt="фото3" width="40"/>
  </a>  
  </div>
  </div>
</div>
`;
  modalTeam.innerHTML = markup;
  var lightbox = new SimpleLightbox('.modal-body a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

footerLinkRef.addEventListener('click', e => {
  e.preventDefault();
  createModalTeam();
  window.onscroll = true;
  //bodyRef.classList.add('dont-scroll');
  const close = document.querySelector('.close');
  const modalmodalContentTeam = document.querySelector('.modal-content');
  const backdrop = document.querySelector('.backdrop1');
  bodyRef.classList.add('dont-scroll');

  close.addEventListener('click', e => {
    modalmodalContentTeam.remove();
    window.onscroll = false;
    backdrop.remove();
    bodyRef.classList.remove('dont-scroll');
  });
});
