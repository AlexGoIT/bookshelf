import topBookList from '../data/top_books.json';
import categoryList from '../data/category_list.json';

import BookApi from './services/book-api';

import renderTopBooks from './render/render-top-books';
import renderCategoryBooks from './render/render-category-books';
import renderCategoryList from './render/render-category-list';
import toggleLoader from './loader';

import refs from './refs/refs';

const bookApi = new BookApi();

function updateTopBooksUI() {
  toggleLoader();

  bookApi
    .getTopBook()
    .then(topBookList => renderTopBooks(topBookList))
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      toggleLoader();
    });

  bookApi
    .getCategoryList()
    .then(categories => {
      renderCategoryList(categories);
      refs.categoryListEl.firstElementChild
        .getElementsByTagName('a')[0]
        .classList.add('active');
    })
    .catch(error => {
      console.log(error);
    });

  // renderTopBooks(topBookList);
  // renderCategoryList(categoryList);
}

function updateCategoryBooksUI(category) {
  toggleLoader();

  bookApi
    .getBooksByCategory(category)
    .then(books => {
      renderCategoryBooks(category, books);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      toggleLoader();
    });
}

// EVENTS =====================================================================
// Catalog events
refs.booksListEl.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.nodeName === 'BUTTON') {
    const categoryItemEl = e.target.closest('.category-item');

    if (categoryItemEl) {
      console.log('CategoryId =>', categoryItemEl.dataset.category);

      // Render books by category
      updateCategoryBooksUI(categoryItemEl.dataset.category);
    }
  }

  const bookItemEl = e.target.closest('.category-book-item');

  if (bookItemEl) {
    console.log('BookId =>', bookItemEl.dataset.bookId);
    // Open modal with book details
  }
});

// Category List book events
refs.categoryListEl.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.nodeName === 'A') {
    const category = e.target.closest('.category-list__item').dataset.category;
    console.log('e.target =>', category);

    if (category === 'All Categories') {
      updateTopBooksUI();
    }

    updateCategoryBooksUI(category);
  }
});

window.onload = () => {
  updateTopBooksUI();
};
