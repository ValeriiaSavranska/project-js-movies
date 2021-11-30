import { getMovieById } from '../services/api-services';

const myLibraryBtns = document.querySelector('.my-library__wrap');
const watchedBtn = document.querySelector('[data-button="watched"]');
const queueBtn = document.querySelector('[data-button="queue"]');

const changeLibraryPage = e => {
  if (e.target === e.currentTarget) return;

  if (watchedBtn.dataset.button === 'watched' && e.target === watchedBtn) {
    if (!localStorage.getItem('Watched')) return console.log('NO FILM ADDED YET');
    const watchedFilms = JSON.parse(localStorage.getItem('Watched'));

    queueBtn.classList.remove('my-library__button-active');
    watchedBtn.classList.add('my-library__button-active');

    watchedFilms.map(id => console.log(getMovieById(id).then(res => console.log(res))));
    //   ПОЛУЧЕНИЕ МАССИВА ПРОМИСОВ, ПОСЛЕ PROMISEALL + RENDER
  }

  if (queueBtn.dataset.button === 'queue' && e.target === queueBtn) {
    watchedBtn.classList.remove('my-library__button-active');
    queueBtn.classList.add('my-library__button-active');
  }
};

myLibraryBtns.addEventListener('click', changeLibraryPage);

// MODAL ADDING

// ИМИТАЦИЯ ДАННЫХ МОДАЛКИ блаблабла

const gallery = document.querySelector('.gallery');
const btns = document.querySelector('.btns-wrapper');

const modal = e => {
  e.preventDefault();

  if (e.target === e.currentTarget) return;
  const galleryCard = e.target.closest('li');
  const id = galleryCard.dataset.id;
  console.log(id);

  if (!localStorage.getItem('Watched')) localStorage.setItem('Watched', '[]');
  const watchedFilms = JSON.parse(localStorage.getItem('Watched'));

  const toWatchedBtn = document.querySelector('button[data-action="add-to-watched"]');
  const toQueueBtn = document.querySelector('button[data-action="add-to-queue"]');

  if (e.target === toWatchedBtn) {
    console.log(watchedFilms);
    if (watchedFilms.includes(id)) {
      return;
    } else {
      watchedFilms.splice(0, 0, id);
      localStorage.setItem('Watched', JSON.stringify(watchedFilms));
    }
  }

  if (galleryCard.lastElementChild === document.querySelector('.btns-wrapper')) {
    return;
  } else {
    galleryCard.insertAdjacentHTML(
      'beforeend',
      `
    <div class="btns-wrapper">
        <button type="button" data-action="add-to-watched">Add to watched</button>
        <button type="button" data-action="add-to-queue">Add to queue</button>
    </div> `,
    );
  }
};

gallery.addEventListener('click', modal);

// Добавить условие проверки localStorage, есть ли там какие либо данные.
// Если данные есть - сохранить их в переменную для дальнейших проверок.
// Если нет - создать пустой массив.
// Добавить условия отображения add / remove кнопок если уже есть / нету такого id в localStorage.
// Добавить возможность add/remove id в масив при помощи splice чтобы последний добавленный фильм всегда был первым.
// Удаление фильма происходит через indexOf + splice.
// Добавить отрисовку фильмов и library при помощи группы запросов getFilmById с ids взятыми с localStorage.
