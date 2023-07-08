import refs from './refs/refs';

export default function toggleLoader() {
  if (refs.loaderBackdropEl.classList.contains('show')) {
    refs.loaderBackdropEl.classList.remove('show');
  } else {
    refs.loaderBackdropEl.classList.add('show');
  }
}
