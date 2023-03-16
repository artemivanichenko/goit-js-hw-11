import { Notify } from 'notiflix/build/notiflix-notify-aio';
import getImages from './api/apiPixabay';
import { gallaryMarkup, gallaryForm } from './markup/cardForm';

const inputForm = document.querySelector('#search-form');

inputForm.addEventListener('submit', handleSearchImage);

function handleSearchImage(ev) {
  ev.preventDefault();
  const searchName = ev.target.searchQuery.value.trim();
  console.log(searchName);
  if (!inputForm) {
    return;
  }
  getImages(searchName);
}
