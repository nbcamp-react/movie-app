import { generateMovieCards } from './movie.js';
import { performSearch } from './search.js';

generateMovieCards();

const $form = document.querySelector('#search');
const $searchInput = document.getElementById('search-input');

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  performSearch($searchInput.value);
});
