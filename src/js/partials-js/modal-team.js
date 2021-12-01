// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
import imgLera from '../../images/team/Lera.jpg'
import imgBogdan from '../../images/team/Bogdan.jpg';
import imgDima from '../../images/team/Dima.jpg';
import imgIvan from '../../images/team/Ivan.jpg';
import imgValentyn from '../../images/team/Valentyn.jpg';
import imgVitalii from '../../images/team/Vitalii.jpg';
import imgVladyslav from '../../images/team/Vladyslav.jpg';
import imglog from '../../images/team/log.jpg';
  
const footerLinkRef = document.querySelector('.footer__link');
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
    <h2 class = "our-team">Our team</h2>
  </div>

  <ul class="modal-body">
  <li class="modal-body__item team-leader">
  <a  href="${imgLera}">
    <img src="${imgLera}" class="img-team" alt="Team leader Valeria Savranska" width="150"/>
  </a>
  <p class="name-team">Valeria Savranska</p>
  <p class="pos-team">Team leader</p>
  </li>
  <li class="modal-body__item team-leader">
    <a class="modal-body__item" href="${imgVladyslav}">
    <img src="${imgVladyslav}"  class="img-team" alt="Scrum master Vladislav Humeniuk" width="150" height:"250"/>
  </a>
 <p class="name-team"> Vladislav Humeniuk</p>
  <p class="pos-team">Scrum master</p>
  </li>
  <li class="modal-body__item team-leader">
    <a class="modal-body__item" href="${imgBogdan}">
    <img src="${imgBogdan}"  class="img-team" alt="Bogdan Yatsyk" width="150"/>
  </a>
   <p class="name-team">Bogdan Yatsyk</p>
  <p class="pos-team">Developer</p>
  </li>
  <li class="modal-body__item team-leader">
  <a class="modal-body__item" href="${imgDima}">
    <img src="${imgDima}"  class="img-team" alt="Dmytro Chuyko" width="150"/>
  </a>
 <p class="name-team">Dmytro Chuyko</p>
  <p class="pos-team">Developer</p>
  </li>
  <li class="modal-body__item team-leader"> 
  <a class="modal-body__item" href="${imgIvan}">
    <img src="${imgIvan}"  class="img-team" alt="Ivan Kostenko" width="150" h/>
  </a>
 <p class="name-team">Ivan Kostenko</p>
  <p class="pos-team">Developer</p>
  </li>
  <li class="modal-body__item team-leader">
    <a class="modal-body__item" href="${imgVitalii}">
    <img src="${imgVitalii}"  class="img-team" alt="Vitalii Tymiv" width="150"/>
  </a>
 <p class="name-team">Vitalii Tymiv</p>
  <p class="pos-team">Developer</p>
  </li>
  <li class="modal-body__item team-leader">
  <a class="modal-body__item" href="${imgValentyn}">
    <img src="${imgValentyn}"  class="img-team" alt="Valentyn Onyshchenko" width="150"/>
  </a>  
 <p class="name-team">Valentyn Onyshchenko</p>
  <p class="pos-team">Developer</p>
  </li>
  
  </ul>
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
  const close = document.querySelector('.close');
  const modalmodalContentTeam = document.querySelector('.modal-content');
  const backdrop = document.querySelector('.backdrop1');
  bodyRef.classList.add('no-scroll');
  

  function CloseModalTeam() {
    modalmodalContentTeam.remove();
    window.onscroll = false;
    backdrop.remove();
    bodyRef.classList.remove('no-scroll');
  }
  close.addEventListener('click', e => {
    CloseModalTeam();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      CloseModalTeam();
    }
  });
  if (e.target.classList.contains('modal-body')) {
    CloseModalTeam();
  }

});
