import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getImages } from './api/apiPixabay';
import { gallaryMarkup } from './markup/cardForm';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

const inputForm = document.querySelector('#search-form');
const gallaryForm = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.load-more-btn');

let inputName;
let page = 1;
const per_page = 20;

inputForm.addEventListener('submit', handleSearchImage);
btnLoadMore.addEventListener('click', handleLoadMore);

async function handleSearchImage(ev) {
  ev.preventDefault();
  gallaryForm.innerHTML = '';
  inputName = ev.target.searchQuery.value.trim();
  if (!inputForm) {
    return;
  }
  const updateImage = await getImages(inputName, page);
  if (!updateImage.data.hits.length) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again'
    );
  }
  Notify.info(`Hooray! We found ${updateImage.data.totalHits} images.`);
  creatGallery(updateImage.data.hits);
}

function creatGallery(updateImage) {
  const createImageCards = updateImage
    .map(item => gallaryMarkup(item))
    .join('');
  gallaryForm.insertAdjacentHTML('beforeend', createImageCards);

  lightbox.refresh();
  btnLoadMore.style.display = 'block';
}

async function handleLoadMore() {
  page += 1;
  const loadMoreImageCards = await getImages(inputName, page);
  creatGallery(loadMoreImageCards.data.hits);
  const maxLoadMore = Math.ceil(loadMoreImageCards.data.totalHits / per_page);
  if (maxLoadMore === page) {
    btnLoadMore.style.display = 'none';
    Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
  }
}
