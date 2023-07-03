import refs from '../refs/refs';

export default function renderCategoryList(categoryList) {
  categoryList.unshift({
    list_name: 'All Categories',
  });

  refs.categoryListEl.innerHTML = categoryList
    .map(({ list_name }) => createCategoryMarkup(list_name))
    .join('');
}

function createCategoryMarkup(categoryName) {
  return `
    <li class="category-list__item" data-category="${categoryName}">
      <a href="#" class="category-list__link">${categoryName}</a>
    </li>
  `;
}
