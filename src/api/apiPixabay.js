import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';

// const KEY = '34395011-b1cfd26af0022eb06f8fcba6f';
// // axios.defaults.baseURL = 'https://pixabay.com/api/';

// // axios.defaults.headers = {
// //   key: '34395011-b1cfd26af0022eb06f8fcba6f',
// //   q: '',
// //   image_type: photo,
// //   orientation: horizontal,
// //   safesearch: true,
// // };

export async function getImages(searchQuery) {
  const response = await axios.get(`${BASE_URL}?key=${KEY}`, {
    Headers: { KEY: '34395011-b1cfd26af0022eb06f8fcba6f' },
    params: {
      q: `${searchQuery}`,
      image_type: photo,
      orientation: horizontal,
      safesearch: true,
      page: 1,
      per_page: 20,
    },
  });
  return response;
}

//     .then(function (response) {
//       console.log(response);
//     })

//     .catch(function (error) {
//       console.log(error);
//     });
// }

// `https://pixabay.com/api/?key=34395011-b1cfd26af0022eb06f8fcba6f&q=yellow+flowers&image_type=photo`

// import axios from 'axios';

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '33993020-4283f84b424eee68d8095b48f';
// const DEFAULT_PARAMS =
//   '&image_type=photo&orientation=horizontal&safesearch=true';

// export default async function getImages(searchQuery, page, perPage) {
//   const { data } = await axios.get(
//     `${BASE_URL}?key=${API_KEY}&q=${searchQuery}${DEFAULT_PARAMS}&page=${page}&per_page=${perPage}`
//   );
//   return data;
// }
