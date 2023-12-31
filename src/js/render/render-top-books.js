import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import createBookCardMarkup from './create-book-card-markup';
import refs from '../refs/refs';

export default function renderTopBooks(topBookList) {
  refs.booksTitleEl.innerHTML =
    'Best Sellers&nbsp;<span class="books-title-accent">Books<span>';

  refs.booksListEl.innerHTML = topBookList
    .map(category => createBookCategoryMarkup(category))
    .join('');
  refs.booksListEl.style.flexFlow = 'column';

  // swiper ===================================================================
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 24,

    modules: [Navigation],

    navigation: {
      prevEl: '.swiper-btn-prev',
      nextEl: '.swiper-btn-next',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
      },
      // when window width is >= 640px
      1440: {
        slidesPerView: 5,
      },
    },
  });
  // swiper ===================================================================
}

function createBookCategoryMarkup({ list_name, books }) {
  return `
    <li class="category-item swiper" data-category="${list_name}">
      <h2 class="category-title">${list_name}</h2>
      <ul class="category-book-list swiper-wrapper">
        ${createBookCardMarkup(books)}
      </ul>
      <div class="swiper-btn-prev"></div>
      <div class="swiper-btn-next"></div>
      <div class="see-more-wrapper">
        <button class="see-more__button" type="button">See more</button>
      </div>
    </li>
  `;
}
