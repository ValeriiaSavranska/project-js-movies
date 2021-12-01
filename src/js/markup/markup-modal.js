import notFoundImg from '../../images/image-not-found.jpg';
import iconTrailer from '../../images/icons.svg';

export default function markupModal({
  poster_path,
  id,
  vote_average,
  vote_count,
  popularity,
  title,
  genres,
  overview,
}) {
  let img = `https://image.tmdb.org/t/p/w300${poster_path}`;
  const markup = `
    <div class="backdrop" data-action="${id}">

            <div class="modal">
                <button class="modal__btn-colse"  >
                    <span class="modal__icon-close"></span>
                </button>
                <img class="modal__img" src="${
                  !poster_path ? notFoundImg : img
                }" alt="${title} poster">

                <div class="modal__thumb-box">
                    <h2 class="modal__title">${title}</h2>
                    <div class="modal__text-wrapper">
                        <ul class="modal__title-box">
                            <li class="modal__text modal__text--title">
                                Vote / Votes
                            </li>
                            <li class="modal__text modal__text--title">
                                Popularity
                            </li>
                            <li class="modal__text modal__text--title">
                                Original Title
                            </li>
                            <li class="modal__text modal__text--title">
                                Genre
                            </li>
                        </ul>
                        <ul class="modal__text-box">
                            <li class="modal__text">
                                <span class="modal__votes">${vote_average}</span> / ${vote_count}
                            </li>
                            <li class="modal__text ">
                                ${popularity.toFixed(1)}
                            </li>
                            <li class="modal__text modal__text--uppercase">
                                ${title}
                            </li>
                            <li class="modal__text">
                                ${genres.map(genre => genre.name).join(', ')}
                            </li>
                        </ul>

                    </div>
                    <span class="modal__about-title modal__text--uppercase">about</span>
                    <p class="modal__about">                    
                        ${overview}
                    </p>
                    
                    <div class="modal__btn-wrapper">
                    <button class="modal__btn modal__text--uppercase" type="button" data-btn="add-to-whatched">add to
                        Watched</button>
                    <button class="modal__btn modal__text--uppercase visually-hidden modal__btn-active" type="button" data-btn="remove-from-whatched">remove from watched</button>
                    <button class="modal__btn modal__text--uppercase" type="button" data-btn="add-to-queue">add to
                        queue</button>
                    <button class="modal__btn modal__text--uppercase visually-hidden modal__btn-active" type="button" data-btn="remove-from-queue">remove from queue</button>
                    </div>
                    
                    
                    <button class="modal__text--uppercase btn-trailer" type="button" data-btn="trailerdBtn">
                    <svg><use href="${iconTrailer}#icon-trailer"></use></svg>
                    </button>
                </div>



            </div>

        </div>
    `;

  return markup;
}
