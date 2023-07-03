const imgURL =
  'https://github.com/AlexGoIT/images/blob/b54b19358d2d9e95d2472b43b54376b1ef1dc3e9/support-icons/action-against-hunger.png';

export function createSupportMarkup(supports) {
  console.log(supports);
  return supports
    .map(({ title, url, img }) => {
      return `
      <ol class='support-item'>
        <a href='${url}' target='_blank' noreferrer nofollow>
          <img src='${img}' alt='${title}' height='32' />
        </a>
      </ol>
      `;
    })
    .join('');
}
