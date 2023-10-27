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

  if (order) {
    cardArr
      .sort((cardLi1, cardLi2) => {
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
              .innerText.split(' ')[2];
            const cardRating2 = +cardLi2
              .querySelector('h5')
              .innerText.split(' ')[2];

            return cardRating2 - cardRating1;

          // case SORTBY.YEAR:
          //   return;
          default:
            return;
        }
      })
      .forEach((element) => $movieList.append(element));
  }

  if (rating) {
    cardArr.forEach((card) => {
      if (card.classList.contains('no-results')) return;

      const average = +card.querySelector('h5').innerText.split(' ')[2];

      average >= rating
        ? card.classList.remove('not-found')
        : card.classList.add('not-found');
    });
  }
};
