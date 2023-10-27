'use strict';
import { fetchMovies } from './apis.js';
import { POPULAR_URL } from './constants.js';
import { GENRE } from './constants.js';

const $movieList = document.querySelector('.movie-list');

export const generateMovieCards = async (apiUrl = POPULAR_URL) => {
  const { results: movies } = await fetchMovies(apiUrl);

  const genreName = function (number) {
    if (number === GENRE.id) {
      console.log('장르', GENRE.name);
    }
  };
  console.log(genreName);

  $movieList.innerHTML = movies
    .map((movie) => {
      return `
        <li class="movie-card" id=${movie.id}>
        <a href="UIdetail.html?id=${movie.id}">
        <img src=${'https://image.tmdb.org/t/p/w300' + movie['poster_path']}>
        <h5>${'⭐ ' + movie['vote_average']}</h5>
        <h2>${movie['title']}</h2>
        <h5>${movie['genre_ids']}</h5>
        <p>${movie['overview']}</p>
        </a>
        </li>
      `;
    })
    .join('');
};
