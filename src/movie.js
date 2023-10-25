'use strict';
import { fetchMovies } from './apis.js';

const $movieList = document.querySelector('.movie-list');
const POPULAR_URL =
  'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

const handleClickCard = (event) => {
  if (event.target === $movieList) return;

  if (event.target.matches('.movie-card')) {
    alert(`영화 ID: ${event.target.id}`);
  } else {
    alert(`영화 ID: ${event.target.parentNode.id}`);
  }
};

export const generateMovieCards = async (apiUrl = POPULAR_URL) => {
  const { results: movies } = await fetchMovies(apiUrl);

  $movieList.innerHTML = movies
    .map((movie) => {
      return `<li class="movie-card" id=${movie.id}>
        <img src=${'https://image.tmdb.org/t/p/w300' + movie['poster_path']}>
        <h5>${'⭐ Rating: ' + movie['vote_average']}</h5>
        <h2>${movie['title']}</h2>
        <p>${movie['overview']}</p>
      </li>
      `;
    })
    .join('');

  $movieList.addEventListener('click', handleClickCard);
};
