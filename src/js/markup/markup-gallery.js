const markupGallery = `<li>
  <img src="${poster_path}" alt="${title}" loading="lazy" width="" height="" />

  <div class="info">
    <h2 class="photo-card__title">${title}</h2>
    <ul class="photo-card__text">
      <li class="link-genre">${genre}</li>

      <li class="link-year">${release_date}</li>
    </ul>
  </div>
</li>`;
