import topBookList from '../data/top_books.json';
import categoryList from '../data/category_list.json';

import BookApi from './services/book-api';

import renderTopBooks from './render/render-top-books';
import renderCategoryList from './render/render-category-list';

import refs from './refs/refs';

const bookApi = new BookApi();

function initUI() {
  // bookApi
  //   .getTopBook()
  //   .then(topBookList => renderTopBooks(topBookList))
  //   .catch(error => {
  //     console.log(error);
  //   });

  renderTopBooks(topBookList);
  renderCategoryList(categoryList);

  refs.categoryListEl.firstElementChild.classList.add('active');

  console.dir(refs.categoryListEl);
}

window.onload = () => {
  initUI();
};
