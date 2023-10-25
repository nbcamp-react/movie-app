import { generateMovieCards, removeMovieCards } from './movie.js';
import { performSearch } from './search.js';
import { POPULAR_URL } from './constants.js';

generateMovieCards();

const $form = document.querySelector('#search');
const $searchInput = document.getElementById('search-input');

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  performSearch($searchInput.value);
});

const handleClick = (event) => {
  if (event.target.id === 'sort') return;

  removeMovieCards();
  generateMovieCards(POPULAR_URL, e.target.id);
};

const $sort = document.querySelector('#sort');
$sort.addEventListener('click', handleClick);
