import { generateMovieCards } from './movie.js';
import { performSearch } from './search.js';
import { filterAndSortMovieCards } from './sort.js';

generateMovieCards();

const $form = document.querySelector('#search');
const $searchInput = document.getElementById('search-input');

const $sortForm = document.querySelector('#sort-form');

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  performSearch($searchInput.value);
});

$sortForm.addEventListener('submit', (event) => {
  event.preventDefault();
  filterAndSortMovieCards();
});
