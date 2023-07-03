export default class BookApi {
  #BASE_URL = 'https://books-backend.p.goit.global';

  //https://books-backend.p.goit.global/books/category-list
  async getCategoryList() {
    const response = await fetch(`${this.#BASE_URL}/books/category-list`);
    return await response.json();
  }

  //https://books-backend.p.goit.global/books/top-books
  async getTopBook() {
    const response = await fetch(`${this.#BASE_URL}/books/top-books`);
    return await response.json();
  }

  //https://books-backend.p.goit.global/books/category?category=selectedCategory
  async getBooksByCategory(selectedCategory) {
    const response = await fetch(
      `${this.#BASE_URL}/books/category?category=${selectedCategory}`
    );
    return await response.json();
  }

  //https://books-backend.p.goit.global/books/bookId
  async getBookDetail(bookId) {
    const response = await fetch(`${this.#BASE_URL}/books/${bookId}`);
    return await response.json();
  }
}
