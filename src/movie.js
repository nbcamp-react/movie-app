'use strict';
import { fetchMovies } from './apis.js';
import { SORTBY, POPULAR_URL } from './constants.js';

const $movieList = document.querySelector('.movie-list');

export const generateMovieCards = async (apiUrl = POPULAR_URL, type) => {
  const { results: movies } = await fetchMovies(apiUrl);

  if (type) sortMovies(movies, type);

  $movieList.innerHTML = movies
    .map((movie) => {
      return `<li class="movie-card" id=${movie.id}>
        <a href="UIdetail.html?id=${movie.id}">
        <img src=${'https://image.tmdb.org/t/p/w300' + movie['poster_path']}>
        <h5>${'⭐ Rating: ' + movie['vote_average']}</h5>
        <h2>${movie['title']}</h2>
        <p>${movie['overview']}</p>
      </li>
      `;
    })
    .join('');
};

export const removeMovieCards = () => {
  $movieList.innerHTML = '';
};

const sortMovies = (movies, sortBy) => {
  const sortedMovies = movies.sort((movie1, movie2) => {
    switch (sortBy) {
      case SORTBY.TITLE:
        const movieTitleA = movie1.title.toUpperCase();
        const movieTitleB = movie2.title.toUpperCase();

        if (movieTitleA < movieTitleB) return -1;
        if (movieTitleA > movieTitleB) return 1;
        return 0;

      case SORTBY.RATING:
        const movieRatingA = movie1.vote_average;
        const movieRatingB = movie2.vote_average;

        return movieRatingA - movieRatingB;

      case SORTBY.YEAR:
        const regex = /-/g;
        const movieYearA = +movie1.release_date.replace(regex, '');
        const movieYearB = +movie2.release_date.replace(regex, '');

        return movieYearA - movieYearB;

      default:
        return;
    }
  });

  return sortedMovies;
};
