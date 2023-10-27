'use strict';
import { $searchInput } from './main.js';

export function performSearch(inputValue) {
  const searchText = inputValue.toLowerCase();
  const $movieCards = document.querySelectorAll('.movie-card');
  let noResults = true;

  $movieCards.forEach((card) => {
    const title = card.querySelector('h2').textContent.toLowerCase();
    if (title.includes(searchText)) {
      card.style.display = 'block';
      noResults = false;
    } else {
      card.style.display = 'none';
    }
  });

  if (noResults) {
    alert('검색 결과가 없습니다.');
    location.reload();
  } else if ($searchInput.value.trim() === '') {
    alert('앗! 제목을 입력해주세요.');
  }
}
