// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const paletteContainer = document.querySelector(`.gallery`);
const imgGallery = createImgGallery(galleryItems);

function createImgGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image"   loading="lazy" src="${preview}" alt="${description}" />
</a>
`;
    })
    .join('');
}

paletteContainer.insertAdjacentHTML(`beforeend`, imgGallery);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
