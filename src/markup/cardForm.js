export const gallaryMarkup = ({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) => {
  return `<a href="${largeImageURL}" class="container">
      <div class="photo-card">
    <img class="card-img" src="${webformatURL}" alt="${tags}" loading="lazy" />
    <div class="card-info">
      <p class="card-item">
        <b>Likes</b>${likes}
      </p>
      <p class="card-item">
        <b>Views</b>${views}
      </p>
      <p class="card-item">
        <b>Comments</b>${comments}
      </p>
      <p class="card-item">
        <b>Downloads</b>${downloads}
      </p>
    </div>
  </div>`;
};
