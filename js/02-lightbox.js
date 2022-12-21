import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
// console.log(gallery);

const makeGalleryItems = ({ preview, original, description }) => {
  return `
  
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
    `;
};


const galleryList = galleryItems.map(makeGalleryItems).join(" ");
// console.log(galleryList);
gallery.innerHTML = galleryList;

let galleryOpenModal = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
galleryOpenModal.on("show.simplelightbox", function () {});

galleryOpenModal.on("error.simplelightbox", function (e) {
  console.log(e); 
});