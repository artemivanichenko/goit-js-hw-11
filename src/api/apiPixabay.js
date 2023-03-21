import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';
const API_KEY = '34395011-b1cfd26af0022eb06f8fcba6f';
export function getImages(searchQuery, page) {
  const config = {
    params: {
      key: API_KEY,
      image_type: 'photo',
      q: searchQuery,
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 20,
    },
  };
  const response = axios.get(`${baseURL}`, config);
  return response;
}
