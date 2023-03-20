// import './sass/index.scss';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import getImages, { ImageApi } from './api/apiPixabay';
import { gallaryMarkup } from './markup/cardForm';
import SimpleLightbox from 'simplelightbox';
import { ImageApi } from './api/apiPixabay';

const inputForm = document.querySelector('#search-form');
const gallaryForm = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.load-more-btn');
let inputName;
// const imageApi = new ImageApi();
// const errors = false;
inputForm.addEventListener('submit', handleSearchImage);

async function handleSearchImage(ev) {
  ev.preventDefault();
  const inputName = ev.target.searchQuery.value.trim();
  if (!inputForm) {
    return;
  }
  const updateImage = await getImages(inputName);
  // console.log(updateImage.hits);
  // console.log(updateImage.hits.length);
  if (!updateImage.hits.length) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again'
    );
  }
  creatGallery(updateImage.hits);
}

function creatGallery(updateImage) {
  const createImageCards = updateImage.map(item => gallaryMarkup(item)).join();
  gallaryForm.insertAdjacentHTML('beforeend', createImageCards);
  // lightbox.refresh();
}
// function hideBtn() {
//   btnLoadMore.style.display = 'none';
// }

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
