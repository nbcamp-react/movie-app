import { options } from './apis.js';

const urlSearch = new URLSearchParams(location.search);
let id = urlSearch.get('id');

const response = await fetch(
  `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
  options,
);
const data = await response.json();
console.log(data);

const movieInfo = document.querySelector('.movei-detail-box');
movieInfo.innerHTML = `
<img src=${'https://image.tmdb.org/t/p/w500' + data['backdrop_path']}
<br><h1>${data['title']}</h1>
<h5>${'Release Date | ' + data['release_date']}</h5>
<h5>${'⭐ ' + data['vote_average']}</h5>
<p>${data['overview']}</p>`;
