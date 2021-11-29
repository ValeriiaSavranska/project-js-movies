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
  const markup = `
    <div class="backdrop" data-action="${id}">

            <div class="modal">
                <button class="modal__btn-colse"  >
                    <div class="modal__icon-close"></div>
                </button>
                <img class="modal__img" src="https://image.tmdb.org/t/p/w300${poster_path}" alt="">

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

                    <button class="modal__btn modal__text--uppercase" type="button" data-btn="whatched">add to
                        Watched</button>
                    <button class="modal__btn modal__text--uppercase" type="button" data-btn="queue">add to
                        queue</button>
                </div>



            </div>

        </div>
    `;

  return markup;
}
