import createBookCardMarkup from './createBookCardMarkup';
import refs from '../refs/refs';

export default function renderCategoryBooks(category, books) {
  console.log('categoryBooks =>', books);

  refs.booksTitleEl.innerHTML = `${category}&nbsp;<span class="books-title-accent"><span>`;

  refs.booksListEl.innerHTML = createBookCardMarkup(books);
}
