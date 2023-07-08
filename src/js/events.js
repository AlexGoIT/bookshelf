import refs from './refs/refs';

// Catalog events
refs.allBooksListEl.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.nodeName === 'BUTTON') {
    const categoryItemEl = e.target.closest('.category-item');

    if (categoryItemEl) {
      console.log('CategoryId =>', categoryItemEl.dataset.category);
      // Render books by category
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
    console.log('e.target =>', e.target);
  }
});
