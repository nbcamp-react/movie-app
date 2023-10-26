import { generateMovieCards, removeMovieCards } from './movie.js';
import { performSearch } from './search.js';
import { POPULAR_URL } from './constants.js';

generateMovieCards();

const $form = document.querySelector('#search');
const $searchInput = document.getElementById('search-input');

const $sortContainer = document.querySelectorAll('#sort>div>select');
const $sortForm = document.querySelector('#sort-form');

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  performSearch($searchInput.value);
});

const sortObj = {
  0: 'genre',
  1: 'rating',
  2: 'order',
};

$sortForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const obj = {};
  for (let [idx, node] of $sortContainer.entries()) {
    if (node.value === 'default') break;
    obj[sortObj[idx]] = node.value;
  }

  removeMovieCards();
  generateMovieCards(POPULAR_URL, obj);
});
