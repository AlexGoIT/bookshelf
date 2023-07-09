import createBookCardMarkup from './create-book-card-markup';
import refs from '../refs/refs';

export default function renderCategoryBooks(category, books) {
  console.log('categoryBooks =>', books);

  refs.booksTitleEl.innerHTML = `${category}&nbsp;<span class="books-title-accent"><span>`;

  refs.booksListEl.innerHTML = createBookCardMarkup(books, false);
  refs.booksListEl.style.flexFlow = 'row wrap';
}
