import { fetchMovies } from './apis.js';

const urlSearch = new URLSearchParams(location.search);
let id = urlSearch.get('id');

const detailUra = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
const movieDetail = await fetchMovies(detailUra);

const movieInfo = document.querySelector('.Movie-info-box');
movieInfo.innerHTML = `
<img src=${'https://image.tmdb.org/t/p/w780' + movieDetail['backdrop_path']}
<br><h1>${movieDetail['title']}</h1>
<h5>${'Release Date | ' + movieDetail['release_date']}</h5>
<h5>${'⭐ ' + movieDetail['vote_average']}</h5>
<p>${movieDetail['overview']}</p>`;
