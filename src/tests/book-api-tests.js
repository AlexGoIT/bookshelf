import BookApi from '../js/book-api.js';

const bookApi = new BookApi();

bookCategoryList();
topBookList();
booksByCategory('Hardcover Fiction');
bookDetail('643282b1e85766588626a080');

async function bookCategoryList() {
  try {
    const categoryList = await bookApi.getCategoryList();
    console.log('Category List:', categoryList);
  } catch (error) {
    console.log(error);
  }
}

async function topBookList() {
  try {
    const topBookList = await bookApi.getTopBook();
    console.log('Top Book List:', topBookList);

    topBookList.map(category => {
      console.log(category);

      category.books.map(book => {
        // console.log(book);
      });
    });
  } catch (error) {
    console.log(error);
  }
}

async function booksByCategory(selectedCategory) {
  try {
    const booksByCategory = await bookApi.getBooksByCategory(selectedCategory);
    console.log('Books By Category:', booksByCategory);
  } catch (error) {
    console.log(error);
  }
}

async function bookDetail(bookId) {
  try {
    const bookDetail = await bookApi.getBookDetail(bookId);
    console.log('Book Detail:', bookDetail);
  } catch (error) {
    console.log(error);
  }
}
