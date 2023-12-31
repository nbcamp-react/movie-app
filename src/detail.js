import { fetchMovies } from './apis.js';

const urlSearch = new URLSearchParams(location.search);
let id = urlSearch.get('id');

const detailUra = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
const movieDetail = await fetchMovies(detailUra);

const movieInfo = document.querySelector('.Movie-info-box');
const genreList = movieDetail['genres'].map((genre) => genre.name).join(' ');
movieInfo.innerHTML = `
<div class="movie-info-box">
<div>
  <img src="${
    'https://image.tmdb.org/t/p/w780' + movieDetail['backdrop_path']
  }" alt="Movie Poster">
  </div>
  <section class="movie-detailbox">
  <div class="movie-detail">
  <h1 class="title">${movieDetail['title']}</h1>
  <h4>${'⭐ ' + movieDetail['vote_average'].toFixed(1)}</h5>
  <h5 class="genre">${'Genres | ' + genreList}</h5>
  <h5>${'Release Date | ' + movieDetail['release_date']}</h5>
  </div>
  <div class="movie-overview">
  <p class="overview">${movieDetail['overview']}</p>
  </section>
  </div>`;
