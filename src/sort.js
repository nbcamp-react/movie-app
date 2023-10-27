import { SORTBY } from './constants.js';

const getSortOptions = () => {
  const sortOptions = {};
  const sortFilter = ['genre', 'rating', 'order'];
  const $sortContainer = document.querySelectorAll('#sort>div>select');

  for (let [idx, node] of $sortContainer.entries()) {
    if (node.value === 'default') {
      sortOptions[`${sortFilter[idx]}`] = undefined;
      continue;
    }

    if (sortFilter[idx] === 'rating') {
      sortOptions[sortFilter[idx]] = node.value.replace('+', '');
      continue;
    }

    sortOptions[sortFilter[idx]] = node.value;
  }
  return sortOptions;
};

export const filterAndSortMovieCards = () => {
  const $movieList = document.querySelector('#movie-list');
  const { genre, rating, order } = getSortOptions();
  if (!genre && !rating && !order) return;

  const $movieCards = document.querySelectorAll('.movie-card');
  let cardArr = [...$movieCards];

  const genreFilter = new Set();
  const ratingFilter = new Set();
  const searchFilter = new Set();

  $movieCards.forEach((card) => {
    if (card.classList.contains('no-results')) searchFilter.add(card.id);
  });

  if (order) {
    cardArr.sort((cardLi1, cardLi2) => {
      switch (order) {
        case SORTBY.TITLE:
          const cardTitle1 = cardLi1
            .querySelector('h2')
            .innerText.toUpperCase();
          const cardTitle2 = cardLi2
            .querySelector('h2')
            .innerText.toUpperCase();

          if (cardTitle1 < cardTitle2) return -1;
          if (cardTitle1 > cardTitle2) return 1;
          return 0;

        case SORTBY.RATING:
          const cardRating1 = +cardLi1
            .querySelector('h5')
            .innerText.split(' ')[1];
          const cardRating2 = +cardLi2
            .querySelector('h5')
            .innerText.split(' ')[1];

          return cardRating2 - cardRating1;

        default:
          return;
      }
    });
  }

  if (genre) {
    cardArr.forEach((card) => {
      if (card.classList.contains('no-results')) return;

      const movieGenres = card
        .querySelector('h4')
        .innerText.split(',')
        .map((v) => v.trim());
      movieGenres.includes(genre)
        ? genreFilter.delete(card.id)
        : genreFilter.add(card.id);
    });
  }

  if (rating) {
    cardArr.forEach((card) => {
      if (card.classList.contains('no-results')) return;

      const average = +card.querySelector('h5').innerText.split(' ')[1];
      average >= rating
        ? ratingFilter.delete(card.id)
        : ratingFilter.add(card.id);
    });
  }

  cardArr.forEach((element) => {
    console.log(searchFilter, genreFilter, ratingFilter);
    if (
      searchFilter.has(element.id) ||
      genreFilter.has(element.id) ||
      ratingFilter.has(element.id)
    ) {
      element.classList.add('not-found');
    } else {
      element.classList.remove('not-found');
    }

    $movieList.append(element);
  });
};
