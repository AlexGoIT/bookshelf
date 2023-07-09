import ShoppingList from './services/local-storage-api.js';
import refs from './refs/refs';

export function updateBookCounter() {
  const bookCount = ShoppingList.bookCount();

  if (bookCount.length > 0) {
    bookCounterEl.textContent = bookCount;
    bookCounterEl.style.display = 'flex';
  } else {
    bookCounterEl.style.display = 'none';
    bookCounterEl.textContent = '';
  }
}
