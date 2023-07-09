// Function Create Book Card Markup ==================
export default function createBookCardMarkup(books, swiper = true) {
  return books
    .map(
      ({ _id, title, author, book_image, description }) => `
  <li class="category-book-item ${
    swiper ? 'swiper-slide' : ''
  }" data-book-id="${_id}">
    <a href="#" class="book-link">
      <div class="book-image-wrapper">
        <img class="book-image" src="${book_image}" alt="${title}" loading="lazy"/>
        <div class="book-overlay">${
          description ? description : 'No description'
        }</div>
      </div>
      <h3 class="book-title">${title}</h3>
      <p class="book-author">${author}</p>
    </a>
  </li>
  `
    )
    .join('');
}
