import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';
const API_KEY = '34395011-b1cfd26af0022eb06f8fcba6f';
// axios.defaults.headers = {
//   key: '34395011-b1cfd26af0022eb06f8fcba6f',
// };
//   imageApi() {

export function getImages(searchQuery) {
  const config = {
    params: {
      key: API_KEY,
      image_type: photo,
      q: searchQuery,
      orientation: horizontal,
      safesearch: true,
      page: 1,
      per_page: 20,
    },
  };
  const response = axios.get(`${baseURL}`, config);

  return response;
}

// `https://pixabay.com/api/?key=34395011-b1cfd26af0022eb06f8fcba6f&q=yellow+flowers&image_type=photo`

// import axios from 'axios';

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '34395011-b1cfd26af0022eb06f8fcba6f';
// const DEFAULT_PARAMS =
//   '&image_type=photo&orientation=horizontal&safesearch=true';

// export default async function getImages(searchQuery, page, perPage) {
//   const { data } = await axios.get(
// `${BASE_URL}?key=${API_KEY}&q=${searchQuery}${DEFAULT_PARAMS}&page=${page}&per_page=${perPage}`
//   );
//   return data;
// }
