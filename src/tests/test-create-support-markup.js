import { createSupportMarkup } from '../js/render/render-support';

import data from '../data/support_ukraine.json';

const supportListEl = document.querySelector('.support-list');

console.log(supportListEl);

const markup = createSupportMarkup(data);

console.log(markup);

supportListEl.innerHTML = markup;
